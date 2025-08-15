// src/app/api/contact/route.js
import nodemailer from "nodemailer";

const EMAIL_USER = "bheemaraju.abhiram03@gmail.com";
const EMAIL_PASS = "zzhv bfca ixio gqna";

const SERVICE_PRICES = {
  networking: 200,
  understanding_cryptography: 150,
  crypto_algorithms: 100,
  vulnerability_assessment: 180,
  penetration_testing: 220,
  malware_analysis: 120,
  web_dev_training: 300,
  mern_web_design: 500,
  vul_web_app_dev: 120,
  splunk_training: 150,
  kali_linux: 150,
  tools_demo_for_penetration_testing: 500,
};

export async function POST(req) {
  try {
    const { name, email, service, message } = await req.json();

    // Validate
    if (!name || !email || !message || !SERVICE_PRICES[service]) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid form submission" }),
        { status: 400 }
      );
    }

    const priceUSD = SERVICE_PRICES[service];
    const baseUrl = "https://wa.me/916303496188";
    const serviceName = service.replace(/_/g, " ");
    const whatsappLink = `${baseUrl}?text=${encodeURIComponent(
      `Hello, I want to proceed with the payment for ${serviceName} - $${priceUSD}`
    )}`;

    // Setup mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    // Email to Admin
    const adminMail = {
      from: EMAIL_USER,
      to: EMAIL_USER,
      subject: `📌 New ${serviceName} Request – ${name}`,
      html: `
        <h2>New Service Request</h2>
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
          <tr><th>Name</th><td>${name}</td></tr>
          <tr><th>Email</th><td>${email}</td></tr>
          <tr><th>Service</th><td>${serviceName}</td></tr>
          <tr><th>Message</th><td>${message}</td></tr>
          <tr><th>Price</th><td>$${priceUSD} USD</td></tr>
        </table>
      `,
    };

    // Email to Customer
    const customerMail = {
      from: EMAIL_USER,
      to: email,
      subject: `💳 Payment Instructions for ${serviceName}`,
      html: `
        <h2>Secure Payment Instructions</h2>
        <p>Dear ${name},</p>
        <p>Thank you for requesting <strong>${serviceName}</strong>.</p>
        <p>The service fee is <strong>$${priceUSD} USD</strong>.</p>
        <p>Click the button below to complete your payment securely via WhatsApp:</p>
        <p style="text-align:center; margin:20px 0;">
          <a href="${whatsappLink}"
            target="_blank"
            style="background-color:green; color:white; padding:10px 20px; border-radius:5px; text-decoration:none; display:inline-block;"
          >
            💬 Pay Now on WhatsApp
          </a>
        </p>
        <p>Once payment is confirmed, your service will be delivered within 24 hours.</p>
        <hr>
        <p style="font-size:0.9em;color:#555;">If you have already paid, please ignore this email.</p>
      `,
    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(customerMail);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email send error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }),
      { status: 500 }
    );
  }
}
