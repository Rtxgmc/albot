let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "enable menu Bree",
                        "description": "©Nsfw By Tirtabot",
                        "buttonText": "Menu disini Bree",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    { 
                                        "title": `aktifkan restrict`,
                                       "rowId": ".enable restrict"
                                    }, {
"title": `aktifkan nyimak`,
                                       "rowId": ".enable nyimak"
                                    }, {
"title": `aktikan detect`,
                                       "rowId": ".enable detect"
                                    }, {
"title": `ANTI TOXIX`,
                                       "rowId": ".enable antitoxic"
                                    }, {
"title": `AUTO LEVELUP`,
                                       "rowId": ".enable autolevelup"
                                    }, {
"title": `ANTI LINK`,
                                       "rowId": ".enable antilink"
                                    }, {
"title": `PUBLIC`,
                                       "rowId": ".enable public"
                                    }, {
"title": `DELETE`,
                                       "rowId": ".enable delete"
                                    }, {
"title": `WELCOME`,
                                       "rowId": ".enable welcome"
                                    }, {
"title": `DISABLE`,
                                       "rowId": ".tirta"
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

handler.command = ['enablemenu']
module.exports = handler
handler.tags = ['menuenable'] 
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