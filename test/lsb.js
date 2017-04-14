const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, '..', '.env')
});

const userId = process.env.USER_ID;
const pin = process.env.PIN;
const agreementNumber = process.env.AGREEMENT_NUMBER;
const userNumber = process.env.USER_NUMBER;

const lsbClient = require('..');

const lsb = lsbClient();

// Require the sdc test
require('sdc-client/test/sdc')(lsb, {
  userId,
  pin,
  agreementNumber,
  userNumber
});
