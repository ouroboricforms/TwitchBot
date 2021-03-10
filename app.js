var tim = require("tmi.js");
var quote = require("./quoteArray")
//dotenv to manage your EVN variables in NodeJS
require('dotenv').config();
let password = process.env.OAUTH_KEY;
let username = process.env.USERNAME;
var options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: username,
    password: password,
  },
  channels: ["ouroboricform"]
};

var client = new tim.client(options);
client.connect();

client.on("chat", function(channel, user, message, self) {
  var randomItem =
    quote.quoteArray[Math.floor(Math.random() * quote.quoteArray.length) | 0];
  if (message === "!mattfacts") {
    client.say("ouroboricform", randomItem);
  }
});

client.on("connected", function(address, port) {
  client.say(
    "ouroboricform",
    `Reinforcements have arrived.`
  );
});

client.on("chat", function(channel, userstate, message, self) {
  if (message === "!hello") {
    if (userstate["display-name"]) {
      client.say("ouroboricform", `${userstate.username}, whats up bro?`);
    }
  }
});

client.on("whisper", (from, userstate, message, self) => {
  if (self) {
    return;
  } else if (message === "!yes") {
    client.say(
      "ouroboricform",
      `${
        userstate.username
      } has voted yes! FeelsGoodMan `
    );
  } else if (message === "!no") {
    client.say(
      "ouroboricform",
      `${
        userstate.username
      } has voted no! FeelsBadMan `
    );
  }
});

client.on("whisper", (from, userstate, message, self) => {
  if (self) {
    return;
  } else if (message === "!terrible") {
    client.say(
      "ouroboricform",
      `${
        userstate.username
      } has said you're a terrible gamer! FeelsGoodMan `
    );
  } else if (message === "!awful") {
    client.say(
      "ouroboricform",
      `${
        userstate.username
      } has voted you're an awful streamer! FeelsBadMan `
    );
  }
});
