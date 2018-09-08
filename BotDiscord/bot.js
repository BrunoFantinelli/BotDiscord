var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // !Jao
            case 'Jao':
              bot.sendMessage({
                  to: channelID,
                  message: 'É um frutinha.'
              });
            break;
            case 'Fael':
              bot.sendMessage({
                to: channelID,
                file: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/15871726_707949022708416_2068754450370901942_n.jpg?oh=0119c777bca9d11dff851b58bd989f0e&oe=5AD460DE", // Or replace with FileOptions object
                message: file
            });
            break;
         }
     }
});
