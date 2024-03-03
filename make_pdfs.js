"use strict";

const util = require("util");
const exec = util.promisify(require("child_process").exec);
const puppeteer = require("puppeteer");

const naiveExec = async (command) => (await exec(command)).stdout.trim();

const getTimestamp = async () =>
  naiveExec(`git log -n1 --date=unix --format="%ad"`);
const getCommitHash = async () => naiveExec(`git log -n1 --format="%h"`);

const help = (dir) => {
  console.log(`\
Makes PDFs

Usage:
./make_pdfs.sh
./make_pdfs.sh -h                 Show this message and quit
./make_pdfs.sh -e                 Echo output directory and quit
./make_pdfs.sh -d                 Set output directory
                                  Dynamic default, currently \"${dir}\"
`);
};

const confirmUrl = async (url) => {
  try {
    await exec(`wget -q --spider "${url}"`);
  } catch (error) {
    console.log(`${url} is not available`);
    console.log(`Try 'npm run dev'`);
    process.exit;
  }
};

const getPageAndBrowser = async (url) => {
  const browser = await puppeteer.launch({ headless: "new" });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  return { page, browser };
};

const exportPdf = async (url, outputPath) => {
  console.log(`Exporting ${outputPath}`);

  const { page, browser } = await getPageAndBrowser(url);

  await page.pdf({
    preferCSSPageSize: true,
    printBackground: true,
    path: outputPath,
  });

  await browser.close();
};

const makeScreenshot = async (url, outputPath) => {
  console.log(`Exporting ${outputPath}`);

  const { page, browser } = await getPageAndBrowser(url);

  // TODO: smart dimensions. looks like 96 dpi
  await page.setViewport({
    width: 768,
    height: 576,
    deviceScaleFactor: 2,
  });

  await page.screenshot({ path: outputPath });

  await browser.close();
};

const run = async (url) => {
  await confirmUrl(url);

  const timestamp = await getTimestamp();
  const commitHash = await getCommitHash();
  const stub = `hardware_hustle-${commitHash}`;
  let dir = `output/${timestamp}-${commitHash}`;

  if (process.argv[2] == "-h") {
    help(dir);
    process.exit();
  }

  if (process.argv[2] == "-e") {
    console.log(dir);
    process.exit();
  }

  if (process.argv[2] == "-d") {
    dir = process.argv[3];
  }

  await naiveExec(`mkdir -pv "${dir}"`);
  console.log(`Output directory: ${dir}`);
  console.log();

  // Yes, all PDFs are made simultaneously.
  exportPdf(`${url}/single`, `${dir}/${stub}-single.pdf`);
  exportPdf(`${url}/letter`, `${dir}/${stub}-letter.pdf`);
  exportPdf(`${url}/legal`, `${dir}/${stub}-legal.pdf`);
  exportPdf(`${url}/rules`, `${dir}/${stub}-rules.pdf`);
  exportPdf(`${url}/zine`, `${dir}/${stub}-zine.pdf`);

  console.log();

  makeScreenshot(`${url}/single`, `${dir}/${stub}-single.png`);
};

run("http://localhost:3000");
