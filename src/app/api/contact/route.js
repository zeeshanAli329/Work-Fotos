import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body || {};

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_MAIL,
        pass: process.env.USER_PASS,
      },
    });

    await transporter.verify();

    const ownerMailOptions = {
      from: `"WorkFotos" <${process.env.USER_MAIL}>`,
      to: process.env.USER_MAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          color: #333;
          background-color: #f8f8f8;
          margin: 0;
          padding: 20px;
        }

        h2 {
          font-size: 24px;
          color: #2c3e50;
          text-align: center;
          margin-bottom: 20px;
        }

        .container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .content p {
          font-size: 16px;
          line-height: 1.6;
          margin: 12px 0;
        }

        .content strong {
          color: #34495e;
          font-weight: bold;
        }

        .content p.message {
          background-color: #f1f1f1;
          border-left: 4px solid #3498db;
          padding: 15px;
          font-style: italic;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>New Contact Form Submission</h2>
        <div class="content">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${body.phone || "N/A"}</p>
          <p><strong>Company:</strong> ${body.company || "N/A"}</p>
          <p><strong>Inquiry Type:</strong> ${body.inquiry || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p class="message">${message.replace(/\n/g, "<br/>")}</p>
        </div>
      </div>
    </body>
    </html>
`,
    };

const autoReplyOptions = {
  from: `"Support" <${process.env.USER_MAIL}>`,
  to: email,
  subject: `Thanks for contacting us, ${name}!`,
  html: `
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          color: #333;
          background-color: #f8f8f8;
          margin: 0;
          padding: 20px;
        }

        .container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .logo {
          display: block;
          margin: 0 auto 20px;
          width: 150px; /* adjust as needed */
        }

        h2 {
          font-size: 24px;
          color: #2c3e50;
          text-align: center;
          margin-bottom: 20px;
        }

        .content p {
          font-size: 16px;
          line-height: 1.6;
          margin: 12px 0;
        }

        .content strong {
          color: #34495e;
          font-weight: bold;
        }

        .content p.message {
          background-color: #f1f1f1;
          border-left: 4px solid #3498db;
          padding: 15px;
          font-style: italic;
          white-space: pre-wrap;
          word-wrap: break-word;
        }

        .footer {
          text-align: center;
          font-size: 14px;
          color: #7f8c8d;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Logo -->
        <img src="https://workfotos.com/_next/image/?url=%2Fblack-logo.png&w=640&q=75" alt="WorkFotos Logo" class="logo">
        
        <h2>Thanks for contacting us, ${name}!</h2>
        
        <p>Hi ${name},</p>
        
        <p>We received your message and will get back to you soon.</p>
        
        <p><strong>Your message:</strong></p>
        <p class="message">${message.replace(/\n/g, "<br/>")}</p>
        
        <div class="footer">
          <p>Thank you for reaching out to WorkFotos! We appreciate your time.</p>
        </div>
      </div>
    </body>
    </html>
  `,
};

    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(autoReplyOptions),
    ]);

    return new Response(
      JSON.stringify({ message: "Emails sent successfully" }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Mail error:", err);
    return new Response(
      JSON.stringify({ message: "Failed to send email", error: String(err) }),
      { status: 500 }
    );
  }
}
