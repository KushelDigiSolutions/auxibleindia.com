const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  // Allow CORS
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
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        body = Object.fromEntries(new URLSearchParams(body));
      }
    }
    body = body || {};

    const message = body.message || 'No message content provided';
    const subject = body.subject || 'Contact Form Enquiry';
    const cemail = body.cemail || '';

    // GoDaddy Workspace / cPanel SMTP host
    const smtpHost = process.env.SMTP_HOST || 'smtpout.secureserver.net';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpUser = process.env.SMTP_USER || 'info@auxibleindia.com';
    const smtpPass = process.env.SMTP_PASS || 'QN!M?&bs@^mG';

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      connectionTimeout: 10000,
      greetingTimeout: 5000,
      socketTimeout: 10000,
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
    console.error('Email send error:', error.message);
    return res.status(500).json({
      error: true,
      message: error.message
    });
  }
};
