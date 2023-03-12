import express from 'express'
const router = express.Router()

router.post('/', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const mail = {
    from: name,
    to: 'jrciop@gmail.com',
    subject: 'Contact Form Submission',
    html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
  }
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: 'ERROR' })
    } else {
      res.json({ status: 'Message Sent' })
    }
  })
})

export default router
