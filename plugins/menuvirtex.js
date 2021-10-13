let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "VIRTEX MENU ????",
                        "description": "©Nsfw By Tirtabot",
                        "buttonText": "Menu disini Bree",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    { 
                                        "title": `VIRTEX SEDANG`,
                                       "rowId": ".bugsedang"
                                    }, {
"title": `VIRTEX RINGAN`,
                                       "rowId": ".bugringan"
                                    }, {
"title": `VIRTEX GANAS`,
                                       "rowId": ".bugganas"
                                    }, {
"title": `VIRTEX ARAB`,
                                       "rowId": ".bugarab"
                                    }, {
"title": `VIRTEX`,
                                       "rowId": ".virtex"
                                    }, {
"title": `BUG HOLE`,
                                       "rowId": ".bughole"
                                    }, {
                                        "title": `VIRTEX 1`,
                                       "rowId": ".virtexsadis1"
                                    }, {
"title": `VIRTEX 2`,
                                       "rowId": ".virtexsadis2"
                                    }, {
"title": `VIRTEX 3`,
                                       "rowId": ".virtexsadis3"
                                    }, {
"title": `VIRTEX 4`,
                                       "rowId": ".virtexsadis4"
                                    }, {
"title": `VIRTEX 5`,
                                       "rowId": ".virtexsadis5"
                                    }, {
"title": `VIRTEX 6`,
                                       "rowId": ".virtex"
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

handler.command = ['menuvirtex']
module.exports = handler
handler.tags = ['menuvirtex'] 
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