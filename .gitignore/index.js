const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function()  {
bot.user.setGame("Bynarxox <3, n!help");
console.log("Le bot à bien été connécté");
});

bot.login("MzY1MTQxMjg5NjIyMzA2ODE4.DQG4NQ.tuKqkRFdEP9BP8fHJtYheBf1Ysg");
