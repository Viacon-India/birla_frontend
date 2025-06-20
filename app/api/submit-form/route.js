export default async function handler(req, res) {
  const { captcha } = req.body;
  
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
    { method: "POST" }
  );
  const data = await response.json();

  if (!data.success) {
    return res.status(400).json({ error: "CAPTCHA verification failed" });
  }
  res.status(200).json({ success: true });
}