let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Akun gratis Bree",
                        "description": "©Nsfw By Tirtabot",
                        "buttonText": "Menu disini Bree",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": `PUGB`,
                                        "rowId": ".pb"
                                    }, {
                                       "title": `MINECRAFT`,
                                       "rowId": ".mt"
                                    }, {
                                       "title": `FREE FIRE`,
                                        "rowId": ".ff"
                                    }, {
                                        "title": `MOBILE LEGEND`,
                                        "rowId": ".ml"                               
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

handler.command = ['akungratis1']
module.exports = handler
handler.tags = ['akun'] 
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