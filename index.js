const Discord = require("discord.js");
// Conexão com a livraria do discord
const Config = require("./config.json");
// Configurações do bot
const app = new Discord.Client();
// Client do bot
app.on("ready", () => {
    console.log("bot ligado");
});

require("./events/start.js");
// inicar o bot

require("app.json");
// App do bot

require("function/cmd.js")
// comandos do bot

app.login(process.env.TOKEN);
