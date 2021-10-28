const nodeMailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const transporter = nodeMailer.createTransport({
    host : 'localhost',
    port : 587,
    secure: false,
    auth: {
        user : 'acmnhc@gmail.com',
        pass : 'Zero0zero0'
    }
})

const html = fs.readFile(path.join(__dirname,'register-code.html'));

const main = async function(){
    const info = await transporter.sendMail({
        from: '"LtChat Team" <acmnhc@gmail.com>',
        to: 'jusepheor',
        html: html
    });

    console.log(info.messageId);
    
}