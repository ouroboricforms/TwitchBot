var tim = require('tmi.js');

var quoteArray = [
"I suck at video games",
"toebeans are cool",
"people only talk to me when shroud is offline"
];

var randomItem = quoteArray[Math.floor(Math.random()*quoteArray.length)];

var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "user",
        password: "ouath:"
    },
    channels: ["its_wiked"]
};

var client = new tim.client(options);
client.connect();

client.on('chat', function(channel, user, message, self){
    if(message === "!mattfacts"){
        client.action("its_wiked", randomItem)
    }
});

client.on('connected', function(address, port){
    client.action("its_wiked", "Hell I'm matts dead baby, and you are a scrub. Mod me Matt");
});
