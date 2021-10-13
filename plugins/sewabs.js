let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "SEWA BOY BUTTON",
                        "description": "©SEWA BOT By TIRTABOT",
                        "buttonText": "Menu disini Bree",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    { 
                                        "title": `SEWA SEMINGGU`,
                                       "rowId": ".a"
                                    }, {
"title": `SEWA SEBULAN`,
                                       "rowId": ".b"
                                    }, {
"title": `FILE BOT`,
                                       "rowId": ".c"
                                    }, {
"title": `FILE MURAH`,
                                       "rowId": ".d"
                                    }, {
"title": `PEMBAYARAN`,
                                       "rowId": ".f"
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

handler.command = ['sewabs']
module.exports = handler
handler.tags = ['sewabs'] 
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