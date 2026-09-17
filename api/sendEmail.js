const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  // Allow CORS if requested
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const body = req.body || {};
    const message = body.message || 'No message content provided';
    const subject = body.subject || 'Contact Form Enquiry';
    const cemail = body.cemail || '';

    const smtpHost = process.env.SMTP_HOST || 'auxibleindia.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpUser = process.env.SMTP_USER || 'info@auxibleindia.com';
    const smtpPass = process.env.SMTP_PASS || 'QN!M?&bs@^mG';

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"Auxible India" <${smtpUser}>`,
      to: 'info@auxibleindia.com',
      replyTo: cemail || smtpUser,
      subject: subject,
      html: `<div>${message}</div>`,
    };

    if (cemail) {
      mailOptions.cc = cemail;
    }

    await transporter.sendMail(mailOptions);

    return res.status(200).send('Message has been sent');
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).send(`Message could not be sent. Mailer Error: ${error.message}`);
  }
};
