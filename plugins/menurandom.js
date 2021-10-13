let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "MENU RANDOM Bree",
                        "description": "©Nsfw By TIRTABOT",
                        "buttonText": "Menu disini Bree",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    { 
                                        "title": `SIMI MENU`,
                                       "rowId": ".simimenu"
                                    }, {
"title": `INTERNET MENU`,
                                       "rowId": ".internetmenu"
                                    }, {
"title": `MAGER MENU`,                                       "rowId": ".magermenu"
                                    }, {
"title": `APK MENU`,
                                       "rowId": ".apkmenu"
                                    }, {
"title": `VIRUS GANAS`,
                                       "rowId": ".virusganasmenu"
                                    }, {
"title": `ABOUT INFO`,
                                       "rowId": ".aboutmenu"
                                    }, {
"title": `GAME MENU`,
                                       "rowId": ".gamemenu"
                                    }, {
"title": `FUN MENU`,
                                       "rowId": ".funmenu"
                                    }, {
"title": `MAKER MENU`,
                                       "rowId": ".makermenu"
                                    }, {
"title": `CONVERT MENU`,
                                       "rowId": ".convertermenu"
                                    }, {
"title": `QURAN MENU`,
                                       "rowId": ".quranmenu"
                                    }, {
"title": `ISLAM MENU`,
                                       "rowId": ".islammenu"
                                    }, {
"title": `EXPRIS`,
                                       "rowId": ".expris"
                                    }, {
"title": `ADVENTURE MENU`,
                                       "rowId": ".advanturemenu"
                                    }, {
"title": `ANIME MENU`,
                                       "rowId": ".animemenu"
                                    }, {
"title": `WIBU MENU`,
                                       "rowId": ".wibumenu"
                                    }, {
"title": `PRANK MENU`,
                                       "rowId": ".prankmenu"
                                    }, {
"title": `CRETOR MENU`,
                                       "rowId": ".cretormenu"
                                    }, {
                                        "title": `DONASI`,
                                        "rowId": ".donasi"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = ['menurandom']
module.exports = handler
handler.tags = ['menurandom'] 
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null
handler.exp = 20

module.exports = handler