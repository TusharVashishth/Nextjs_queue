import nodeMailer from "nodemailer";

const transporter = nodeMailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendEmail = async (to: string, body: string, subject: string) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: to,
      subject: subject,
      text: body,
    });
  } catch (error) {
    console.log("The smtp send email error", error);
  }
};
