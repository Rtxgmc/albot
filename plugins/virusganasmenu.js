let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "virus ganas 2 Bree",
                        "description": "©Nsfw By Tirtabot",
                        "buttonText": "Menu disini Bree",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    { 
                                        "title": `bug hole`,
                                       "rowId": ".bughole"
                                    }, {
"title": `virtex`,
                                       "rowId": ".virtex"
                                    }, {
"title": `auto lag`,
                                       "rowId": ".autolag"
                                    }, {
"title": `viruslag`,
                                       "rowId": ".viruslag"
                                    }, {
"title": `perusak hp`,
                                       "rowId": ".perusakhp"
                                    }, {
"title": `virus ganas`,
                                       "rowId": ".virusganas"
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

handler.command = ['virusganasmenu']
module.exports = handler
handler.tags = ['virusganasmenu'] 
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null
handler.exp = 20

module.exports = handler