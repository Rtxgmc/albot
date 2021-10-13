let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Akun gratis Bree",
                        "description": "©Nsfw By Fernazer",
                        "buttonText": "Menu disini Bree",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    { 
                                        "title": `CRY`,
                                       "rowId": ".cry"
                                    }, {
"title": `KITSUNE`,
                                       "rowId": ".kitsune"
                                    }, {
"title": `NYAN`,
                                       "rowId": ".nyan"
                                    }, {
"title": `PUNCH`,
                                       "rowId": ".punch"
                                    }, {
"title": `SLAP`,
                                       "rowId": ".slap"
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

handler.command = ['expris']
module.exports = handler
handler.tags = ['expris'] 
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