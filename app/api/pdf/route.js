import puppeteer from 'puppeteer';
// import fs from 'fs';
import path from 'path';

export async function POST(req) {
  try {

    const { htmlContent } = await req.json();

    if (!htmlContent) {
      return new Response(JSON.stringify({ message: 'HTML content is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }


    // const cssPath = path.resolve("./public/global.css");
    // const cssPath = path.join(__dirname, "../../app/global.css"); 

    // const cssContent = fs.readFileSync(cssPath, "utf8");
    const htmlContent2 = `
    <html>
      <head>
            <link rel="stylesheet" href="../app/global.css">
                <link rel="stylesheet" href="http://localhost:3000/_next/static/css/app/layout.css?v=1740689325719">
                <link rel="stylesheet" href="http://localhost:3000/_next/static/css/app/products/%5B...slug%5D/page.css" >
      </head>
      <body>
        ${htmlContent}
      </body>
    </html>
    `;

    console.log(htmlContent2);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent2, { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
    await browser.close();

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=document.pdf',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
