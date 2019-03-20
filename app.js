var tim = require('tmi.js');

var quoteArray = [
" #1 Skadoodle originally played with Matt through the Make-A-Wish foundation, Matt wasn't expected to live this long and Skadoodle is in to deep to tell him the truth",
" #2 Matt secretly plays rap battles on other peoples streams using the alias PAINFULLYWHT because he wishes he was as cool as Lynch",
" #3 Matt actually uses an aimbot, his is just so bad that not even the bot can compnsate for it 100% of the time",
" #4 Matt always whiffs",
" #5 Soba killed Matt's baby just a couple hours after he birthed it",
" #6 the one with the lactating nipples",
" #7 Doctors were unable to tell Matts gender when he was born, currently they are still unsure because Matt occasionally lactates when he gets excited.",
" #8 Matt uses water as syrup on his pannycakes.",
" #9 Matt pays someone to lower his FPS counter when he’s about to die, so he can always have an excuse",
" #10 Matt holds a baby pig and other members of Chat hostage in his basement. When enraged, Matt takes the baby pigs blankets away.",
" #11 Matt holds @Synryc in basement for 3 weeks now without letting him out",
" #12 Matt used to be best friends with R. Kelly, but due to recent events, they have become business partners. ",
" #13 Matt enjoys studying space because one day he hopes to find an alien, just like as a kid when he hoped to find a friend",
" #14 Matt has never cut the fingernails on his left hand to allow him to reach more of his keyboard easier.",
" #15 Matt can show you the world, shining, shimmering splendor.",
" #16 Matt deleted the polls",
" #17 Pepega is Matt",
" #18 Matt has so much game that he doesn't have to flirt with the babes. His chat does it for him.",
" #19 Matt is so self obsessed that he watches past vods of his own game play.",
" #20 Matt can slam a revolving door"
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
        username: "",
        password: "oauth:"
    },
    channels: ["its_wiked"]
};

var client = new tim.client(options);
client.connect();


client.on('chat', function(channel, user, message, self){
    var randomItem = quoteArray[Math.floor(Math.random() * quoteArray.length) | 0];
    if(message === "!mattfacts") {
        client.say("its_wiked", randomItem)
    }
});

client.on('connected', function(address, port){
    client.say("its_wiked", "Hello I'm Matt's dead baby. please type !mattfacts to know more about what this monster has done.");
});