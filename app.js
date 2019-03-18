var tim = require('tmi.js');

var quoteArray = [
"Skadoodle originally played with Matt through the Make-A-Wish foundation, Matt wasn't expected to live this long and Skadoodle is in to deep to tell him the truth",
"Matt secretly plays rap battles on other peoples streams using the alias PAINFULLYWHT because he wishes he was as cool as Lynch",
"Matt actually uses an aimbot, his is just so bad that not even the bot can compnsate for it 100% of the time",
"Matt always whiffs",
"Soba killed Matt's baby just a couple hours after he birthed it",
"the one with the lactating nipples",
"Doctors were unable to tell Matts gender when he was born, currently they are still unsure because Matt occasionally lactates when he gets excited.",
"Matt uses water as syrup on his pannycakes.",
"Matt pays someone to lower his FPS counter when he’s about to die, so he can always have an excuse",
"Matt holds a baby pig and other members of Chat hostage in his basement. When enraged, Matt takes the baby pigs blankets away.",
"Matt holds @Synryc in basement for 3 weeks now without letting him out",
"Matt used to be best friends with R. Kelly, but due to recent events, they have become business partners.",
"Matt enjoys studying space because one day he hopes to find an alien, just like as a kid when he hoped to find a friend",
"Matt has never cut the fingernails on his left hand to allow him to reach more of his keyboard easier.",
"Matt can show you the world, shining, shimmering splendor.",
"Matt deleted the polls",
"Pepega is Matt",
"Matt has so much game that he doesn't have to flirt with the babes. His chat does it for him.",
"Matt is so self obsessed that he watches past vods of his own game play.",
"Matt can slam a revolving door"
];

var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "mattsbabiesghost",
        password: "oauth:"
    },
    channels: ["ouroboricform"]
};

var client = new tim.client(options);
client.connect();

var randomItem = quoteArray[Math.floor(Math.random() * quoteArray.length) | 0];

client.on('chat', function(channel, user, message, self){
    if(message === "!mattfacts") {
        client.say("ouroboricform", randomItem)
    }
});

client.on('connected', function(address, port){
    client.say("ouroboricform", "Hello I'm Matt's dead baby, and you are a scrub.");
});