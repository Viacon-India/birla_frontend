export async function POST(request) {
  const { captcha } = await request.json();

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
    { method: "POST" }
  );
  const data = await response.json();

  if (!data.success) {
    return Response.json({ error: "CAPTCHA verification failed" }, { status: 400 });
  }
  return Response.json({ success: true }, { status: 200 });
}