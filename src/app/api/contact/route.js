import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, error: "All fields are required" }), { status: 400 });
    }

    // Environment variables for security
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || EMAIL_USER;
    const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || "916303496188";

    if (!EMAIL_USER || !EMAIL_PASS) {
      return new Response(JSON.stringify({ success: false, error: "Email credentials not configured" }), { status: 500 });
    }

    // WhatsApp link prefilled
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Hello ${name}, thank you for reaching out. Please share your queries here so we can assist you.`
    )}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    // Send email to admin
    await transporter.sendMail({
      from: EMAIL_USER,
      to: ADMIN_EMAIL,
      subject: `📌 New Contact Message – ${name}`,
      html: `
        <h2>New Message Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send thank-you email to user
    await transporter.sendMail({
      from: EMAIL_USER,
      to: email,
      subject: "Thank you for reaching out!",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for contacting me. I have received your message:</p>
        <blockquote>${message}</blockquote>
        <p>Please reply to this email or click the WhatsApp link below to share more details:</p>
        <p style="text-align:center; margin:20px 0;">
          <a href="${whatsappLink}" target="_blank" style="background-color:#25D366; color:white; padding:10px 20px; border-radius:5px; text-decoration:none; display:inline-block;">
            💬 Chat on WhatsApp
          </a>
        </p>
        <p>I will get back to you as soon as possible.</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ success: false, error: "Failed to send email" }), { status: 500 });
  }
}
