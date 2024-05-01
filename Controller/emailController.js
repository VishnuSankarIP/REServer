// const nodemailer = require('nodemailer');

// // Create a transporter object using the default SMTP transport
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'vishnupradeep18@gmail.com', // Your Gmail email address
//         pass: 'vwom vzgu kqyg vkbb'   // Your Gmail password
//     }
// });

// // Function to send email
// const sendEmail = (req, res) => {
//     const { email } = req.body;

//     // Email content
//     const mailOptions = {
//         from: 'vishnupradeep18@gmail.com', // Sender address
//         to: email,                     // Recipient address
//         subject: 'Serenity Estates',         // Subject line
//         text: 'Your slot book successfully' // Plain text body
//     };

//     // Send email
//     transporter.sendMail(mailOptions, function(error, info) {
//         if (error) {
//             console.error('Error sending email:', error);
//             res.status(500).json({ message: 'Failed to send email' });
//         } else {
//             console.log('Email sent:', info.response);
//             res.status(200).json({ message: 'Email sent successfully' });
//         }
//     });
// };

// module.exports = {
//     sendEmail
// };
