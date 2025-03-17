// import puppeteer from 'puppeteer';
// import fs from 'fs';
import path from 'path';
import puppeteer from "puppeteer-core";
// import chromium from "@sparticuz/chromium"; // For Vercel & AWS Lambda

export async function POST(req) {
  console.log('Entered');
  
  try {

    const { htmlContent } = await req.json();

    if (!htmlContent) {
      return new Response(JSON.stringify({ message: 'HTML content is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }


    // const cssPath = path.resolve("./public/global.css");
    // const cssPath = path.join(__dirname, "../../../public/css/layout.css"); 

    // const cssContent = fs.readFileSync(cssPath, "utf8");
    // var a = 'http://localhost:3000/css/layout.css';
    const htmlContent2 = `
    <html>
      <head>            
            <link rel="stylesheet" href="http://birlatyre.viaconprojects.com:3000/css/global.css">
            <link rel="stylesheet" href="http://birlatyre.viaconprojects.com:3000/css/layout.css">
            
            <link rel="stylesheet" href="http://birlatyre.viaconprojects.com:3000/_next/static/css/app/page.css?v=1740721215072">
            <link rel="stylesheet" href="http://birlatyre.viaconprojects.com:3000/css/page.css" >

            <style>
              .product-slider .swiper-slide:not(.swiper-slide-active) { display: none; }
              .product-detail-table th, td {
                  min-width: 68px !important;
                  padding: 2px !important;
                  font-size: 10px;
              }
            </style>
      </head>
      <body>
        ${htmlContent}
      </body>
    </html>
    `;

    // console.log(cssPath);
    // return 'Okay';

    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({
      executablePath: "/usr/bin/chromium-browser", // or your Chromium path
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
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
