//IMPORT
import { config } from "dotenv";
import { Client, GatewayIntentBits, SlashCommandBuilder, Routes } from "discord.js";
import { REST } from "@discordjs/rest";

import PermissionCommand from "./command/퍼미션.js";

config({ multiline: "line-breaks" });

//VARIABLES
const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

//SETUP
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});
const rest = new REST({ version: "10" }).setToken(TOKEN);

//LISTENERS
client.on("ready", () => { console.log(`Logged in as ${client.user.tag}`); });
client.on("interactionCreate", (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    let pluginName = interaction.options.getString("플러그인");
    interaction.reply(`[ **${pluginName} 퍼미션** | Made with :heart: by ${process.env.DEVELOPER_TAG} ]\n\n${getDescription(pluginName)}`);
});

//LOGIN
client.login(TOKEN);

//FUNCTIONS
async function main() {
    const commands = [
        PermissionCommand
    ];

    try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
            body: commands
        });
    } catch(err) {
        console.log(err);
    }
}

function getDescription(pluginName) {
    switch(pluginName) {
        case "DBP":
            return process.env.DBP; break;
        case "DBS":
            return process.env.DBS; break;
        case "DBC":
            return process.env.DBC; break;
        case "DCC":
            return process.env.DCC; break;
        case "DEES":
            return process.env.DEES; break;
        case "DEM":
            return process.env.DEM; break;
        case "DEW":
            return process.env.DEW; break;
        case "DEWP":
            return process.env.DEWP; break;
        case "DSE":
            return process.env.DSE; break;
        case "DGB":
            return process.env.DGB; break;
        case "DHT":
            return process.env.DHT; break;
        case "DIC":
            return process.env.DIC; break;
        case "DIE":
            return process.env.DIE; break;
        case "DLC":
            return process.env.DLC; break;
        case "DLEC":
            return process.env.DLEC; break;
        case "DLG":
            return process.env.DLG; break;
        case "DLL":
            return process.env.DLL; break;
        case "DLR":
            return process.env.DLR; break;
        case "DLS":
            return process.env.DLS; break;
        case "DLT":
            return process.env.DLT; break;
        case "DPM":
            return process.env.DPM; break;
        case "DMC":
            return process.env.DMC; break;
        case "DMW":
            return process.env.DMW; break;
        case "DOG":
            return process.env.DOG; break;
        case "DRB":
            return process.env.DRB; break;
        case "DPR":
            return process.env.DPR; break;
        case "DSA":
            return process.env.DSA; break;
        case "DSM":
            return process.env.DSM; break;
        case "DSP":
            return process.env.DSP; break;
        case "DSS":
            return process.env.DSS; break;
        case "DPPC":
            return process.env.DPPC; break;
        default:
            return "알 수 없는 플러그인입니다."; break;
    }
}

main();