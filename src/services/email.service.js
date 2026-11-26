require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

// Verify the connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email server:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Function to send email
const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"bank-transaction-system" <${process.env.EMAIL_USER}>`, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html, // html body
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

async function sendRegistrationEmail(userEmail, name) {

    const subject = 'Welcome to bank-transaction-system – Registration Successful!';

    const text = `Hello ${name},

Welcome to bank-transaction-system!

Your registration has been completed successfully. We are delighted to have you as a customer.

You can now access your banking dashboard and explore our banking services.

Please remember to keep your login credentials confidential and never share your password or OTP with anyone.

Thank you for choosing bank-transaction-system.

Best regards,
bank-transaction-system Team`;

    const html = `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #2563eb;">Welcome to bank-transaction-system!</h2>

            <p>Hello <strong>${name}</strong>,</p>

            <p>
                Your registration has been completed successfully.
                We are delighted to have you as a customer.
            </p>

            <p>
                You can now access your banking dashboard
                and explore our banking services.
            </p>

            <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
                <strong>Security Reminder:</strong>
                <p>
                    Never share your password, OTP, or confidential
                    banking information with anyone.
                </p>
            </div>

            <p>Thank you for choosing bank-transaction-system!</p>

            <p>
                Best regards,<br>
                <strong>bank-transaction-system Team</strong>
            </p>
        </div>
    `;

    await sendEmail(userEmail, subject, text, html);
}


async function sendTransactionEmail(userEmail, name, amount, toAccount) {
    const subject = 'Transaction Successful - bank-transaction-system';

    const text = `Hello ${name},

Your transaction has been successfully completed!

Transaction Details:
Amount: ₹${amount}
Recipient Account: ${toAccount}
Status: Successful

Thank you for using bank-transaction-system.

For your security, never share your password, OTP, or banking credentials with anyone.

Best regards,
bank-transaction-system Team`;

    const html = `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #16a34a;">Transaction Successful!</h2>

            <p>Hello <strong>${name}</strong>,</p>

            <p>Your transaction has been successfully completed.</p>

            <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
                <h3>Transaction Details</h3>
                <p><strong>Amount:</strong> ₹${amount}</p>
                <p><strong>Recipient Account:</strong> ${toAccount}</p>
                <p><strong>Status:</strong> <span style="color: #16a34a;">Successful</span></p>
            </div>

            <p>Thank you for using bank-transaction-system.</p>

            <p>
                <strong>Security Reminder:</strong>
                Never share your password, OTP, or banking credentials with anyone.
            </p>

            <p>
                Best regards,<br>
                <strong>bank-transaction-system Team</strong>
            </p>
        </div>
    `;

    await sendEmail(userEmail, subject, text, html);
}



async function sendTransactionFailureEmail(userEmail, name, amount, toAccount) {
    const subject = 'Transaction Failed - bank-transaction-system';

    const text = `Hello ${name},

Unfortunately, your transaction could not be completed.

Transaction Details:
Amount: ₹${amount}
Recipient Account: ${toAccount}
Status: Failed

Please check your account details and available balance before trying again. If the amount has been debited from your account, please contact our support team.

Thank you for using bank-transaction-system.

Best regards,
bank-transaction-system Team`;

    const html = `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #dc2626;">Transaction Failed</h2>

            <p>Hello <strong>${name}</strong>,</p>

            <p>Unfortunately, your transaction could not be completed.</p>

            <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
                <h3>Transaction Details</h3>
                <p><strong>Amount:</strong> ₹${amount}</p>
                <p><strong>Recipient Account:</strong> ${toAccount}</p>
                <p><strong>Status:</strong> <span style="color: #dc2626;">Failed</span></p>
            </div>

            <p>
                Please check your account details and available balance
                before trying again.
            </p>

            <p>
                If the amount has been debited from your account,
                please contact our support team.
            </p>

            <p>Thank you for using bank-transaction-system.</p>

            <p>
                Best regards,<br>
                <strong>bank-transaction-system Team</strong>
            </p>
        </div>
    `;

    await sendEmail(userEmail, subject, text, html);
}


module.exports = sendEmail;
module.exports = { sendRegistrationEmail, sendTransactionFailureEmail, sendTransactionEmail }