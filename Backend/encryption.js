const bcrypt = require("bcrypt");

async function encryptText(text) {
  const salt = await bcrypt.genSalt(10);
  const hiddenText = await bcrypt.hash(text, salt);
  return hiddenText;
}

async function decryptText(text1, text2) {
  const comparedValue = await bcrypt.compare(text1, text2);
  return comparedValue;
}

module.exports = { encryptText, decryptText };
