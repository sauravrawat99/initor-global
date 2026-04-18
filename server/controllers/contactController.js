const transporter = require('../config/mailer')

exports.submitContact = async (req, res, next) => {
  try {
    const { name, email, company, phone, source, message } = req.body
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `New Enquiry from ${name} — Initor Global`,
      html: `<h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company || 'N/A'}</p>
        <p><b>Phone:</b> ${phone || 'N/A'}</p>
        <p><b>Source:</b> ${source || 'N/A'}</p>
        <p><b>Message:</b><br>${message}</p>`,
    })
    res.status(200).json({ success: true, message: 'Email sent successfully' })
  } catch (err) { next(err) }
}