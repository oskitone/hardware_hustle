"use strict";

// TODO: merge with make_pdfs.sh

const puppeteer = require("puppeteer");

const makePdf = async (url, outputPath) => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle2",
  });

  await page.pdf({
    preferCSSPageSize: true,
    printBackground: true,
    path: outputPath,
  });

  await browser.close();
};

const [, , url, outputPath] = process.argv;

makePdf(url, outputPath);
