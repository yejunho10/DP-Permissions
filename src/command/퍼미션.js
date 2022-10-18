import { SlashCommandBuilder } from 'discord.js';

const 퍼미션command = new SlashCommandBuilder()
    .setName("퍼미션")
    .setDescription("플러그인의 퍼미션을 조회합니다.")
    .addSubcommand((subcommand) =>
        subcommand
            .setName("에픽")
            .setDescription("에픽 플러그인 퍼미션을 조회합니다.")
            .addStringOption((option) =>
                option
                    .setName("플러그인")
                    .setDescription("퍼미션을 조회할 플러그인을 입력합니다.")
                    .setRequired(true)
                    .setChoices(
                            { name: "DP-BackPack", value: "DBP"},
                            { name: "DP-BroadcastStream", value: "DBS" },
                            { name: "DP-BubbleChat", value: "DBC" },
                            { name: "DP-ChatChannel", value: "DCC" },
                            { name: "DP-EquipmentAttribution", value: "DSE" },
                            { name: "DP-GiftBox", value: "DGB" },
                            { name: "DP-HotTime", value: "DHT" },
                            { name: "DP-ItemCommand", value: "DIC" },
                            { name: "DP-ItemEditor", value: "DIE" },
                            { name: "DP-Lotto", value: "DLT" },
                            { name: "DP-Menu", value: "DPM" },
                            { name: "DP-MultiCommand", value: "DMC" },
                            { name: "DP-MultiWorld", value: "DMW" },
                            { name: "DP-OreGen", value: "DOG" },
                            { name: "DP-RandomBox", value: "DRB" },
                            { name: "DP-RPG", value: "DPR" }
                        )))
    .addSubcommand((subcommand) =>
        subcommand
            .setName("심플")
            .setDescription("심플 플러그인 퍼미션을 조회합니다.")
            .addStringOption((option) =>
                option
                    .setName("플러그인")
                    .setDescription("퍼미션을 조회할 플러그인을 입력합니다.")
                    .setRequired(true)
                    .setChoices(
                            { name: "DP-SimpleAnnouncement", value: "DSA" },
                            { name: "DP-SimpleMenu", value: "DSM" },
                            { name: "DP-SimplePrefix", value: "DSP" },
                            { name: "DP-SimpleShop", value: "DSS" }
                    )))
.addSubcommand((subcommand) =>
    subcommand
        .setName("이지")
        .setDescription("이지 플러그인 퍼미션을 조회합니다.")
        .addStringOption((option) =>
            option
                .setName("플러그인")
                .setDescription("퍼미션을 조회할 플러그인을 입력합니다.")
                .setRequired(true)
                .setChoices(
                        { name: "DP-EasyEntitySpawn", value: "DEES" },
                        { name: "DP-EasyMessages", value: "DEM" },
                        { name: "DP-EasyWarning", value: "DEW" },
                        { name: "DP-EasyWarp", value: "DEWP" }
                )))
.addSubcommand((subcommand) =>
    subcommand
        .setName("레전더리")
        .setDescription("레전더리 플러그인 퍼미션을 조회합니다.")
        .addStringOption((option) =>
            option
                .setName("플러그인")
                .setDescription("퍼미션을 조회할 플러그인을 입력합니다.")
                .setRequired(true)
                .setChoices(
                        { name: "DP-LegendaryCash", value: "DLC" },
                        { name: "DP-LegendaryEnderChest", value: "DLEC" },
                        { name: "DP-LegendaryGun", value: "DLG" },
                        { name: "DP-LegendaryLogger", value: "DLL" },
                        { name: "DP-LegendaryRPG", value: "DLR" },
                        { name: "DP-LegendaryStorage", value: "DLS" }
                )))
.addSubcommand((subcommand) =>
    subcommand
        .setName("코어")
        .setDescription("코어 플러그인 퍼미션을 조회합니다.")
        .addStringOption((option) =>
            option
                .setName("플러그인")
                .setDescription("퍼미션을 조회할 플러그인을 입력합니다.")
                .setRequired(true)
                .setChoices(
                        { name: "DPP-Core", value: "DPPC" }
                )))

export default 퍼미션command.toJSON();