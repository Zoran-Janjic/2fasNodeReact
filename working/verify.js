const speakeasy = require("speakeasy");

var userToken = "113139";

var base32secret = "FZ5EA5CQGRHDASJQLBADSU23JEZTEUBXGFTDKYZKHRJGIPSHK55A";

var verified = speakeasy.totp.verify({
  secret: base32secret,
  encoding: "base32",
  token: userToken,
});

console.log(verified);
