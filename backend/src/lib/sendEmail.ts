import nodemailer from 'nodemailer';

const host = process.env.SMTP_HOST || 'smtp.mailtrap.io';
const port = process.env.SMTP_PORT || 2525;
const user = process.env.SMTP_USER || 'fd8d5c14100827';
const pass = process.env.SMTP_PASSWORD || '35b6b7a8bbb8fd';

interface Options {
    email: string;
    subject: string;
    message: string;
}

const sendEmail = async (options: Options) => {
    const transporter = nodemailer.createTransport({
        host,
        port: Number(port),
        auth: {
            user,
            pass,
        },
    });

    const message = {
        from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    await transporter.sendMail(message);
};

export default sendEmail;
