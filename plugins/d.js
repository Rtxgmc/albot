let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
BUTTON 10
RP:5.000
https://wa.me/p/4602026079816675/6283182704827
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*TIRTA BOT*', 'status@broadcast')
}
handler.help = ['d']
handler.tags = ['dd']
handler.command = /^(d)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler