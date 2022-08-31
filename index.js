const http = require('http');
const express = require('express');
require('dotenv').config();

const app = express();
const port = 3000;
const server = http.createServer(app);
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_TWILIO_AUTH_TOKEN;
const phoneNumber = process.env.PHONE_NUMBER;
const client = require('twilio')(accountSid, authToken, {
    lazyLoading: true
});

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${port}!`)
});

function sendTextMessage(){
    client.messages.create({
        body: 'Hello, just trying twilio',
        to: `${phoneNumber}`,
        from: '+18148853349'
     }).then(message => console.log(message))
       // here you can implement your fallback code
       .catch(error => console.log(error))
}

sendTextMessage();