let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
SEMINGGU
RP:15.000
https://wa.me/p/4550417408356211/6283182704827
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*TIRTA BOT *', 'status@broadcast')
}
handler.help = ['a']
handler.tags = ['ffff']
handler.command = /^(a)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler