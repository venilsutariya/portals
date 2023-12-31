// /api/sendmail.ts
import { NextApiResponse } from "next";
import nodemailer from "nodemailer";

export async function POST(req: any, res: NextApiResponse) {
  // @ts-ignore
  const { name, email, message } = await req.json();
  try {
    // Create a transporter using your email configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Define the email options
    const mailOptions = {
      from: email,
      to: process.env.SMTP_MAIL,
      subject: "Website Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
