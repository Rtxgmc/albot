let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "disable menu Bree",
                        "description": "©Nsfw By Tirtabot",
                        "buttonText": "Menu disini Bree",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    { 
                                        "title": `restrict`,
                                       "rowId": ".disable restrict"
                                    }, {
"title": `nyimak`,
                                       "rowId": ".disable nyimak"
                                    }, {
"title": `detect`,
                                       "rowId": ".disable detect"
                                    }, {
"title": `ANTI TOXIX`,
                                       "rowId": ".disable antitoxic"
                                    }, {
"title": `AUTO LEVELUP`,
                                       "rowId": ".disable autolevelup"
                                    }, {
"title": `ANTI LINK`,
                                       "rowId": ".disable antilink"
                                    }, {
"title": `PUBLIC`,
                                       "rowId": ".disable public"
                                    }, {
"title": `DELETE`,
                                       "rowId": ".disable delete"
                                    }, {
"title": `WELCOME`,
                                       "rowId": ".disable welcome"
                                    }, {
"title": `ENABLE`,
                                       "rowId": ".enablemenu"
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

handler.command = ['tirta']
module.exports = handler
handler.tags = ['tirta'] 
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