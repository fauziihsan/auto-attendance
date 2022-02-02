require("dotenv").config();

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const WEBHOOK_URL = process.env.WEBHOOK_URL;

const FORM_WRAPPER = process.env.FORM_WRAPPER || "body";
const INPUT_USERNAME = process.env.INPUT_USERNAME || 'input[type="text"]';
const INPUT_PASSWORD = process.env.INPUT_PASSWORD || 'input[type="password"]';
const BUTTON_SUBMIT = process.env.BUTTON_SUBMIT || 'button[type="submit"]';

const SUCCESS_INDICATOR_ELEMENTS = process.env.SUCCESS_INDICATOR_ELEMENTS.split(
  ","
).map((el) => el.trim()) || ["body"];

if (!USERNAME || !PASSWORD || !WEBHOOK_URL)
  throw new Error("Seluruh environment variable dibutuhkan!");

module.exports = {
  // Authentication
  USERNAME,
  PASSWORD,

  // Discord webhook url
  WEBHOOK_URL,

  // Login elements
  FORM_WRAPPER,
  INPUT_USERNAME,
  INPUT_PASSWORD,
  BUTTON_SUBMIT,

  // Success Indicator
  SUCCESS_INDICATOR_ELEMENTS,
};
