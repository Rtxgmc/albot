let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
SEBULAN
RP:30.000
https://wa.me/p/4466986056698694/6283182704827
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*TIRTA BOT*', 'status@broadcast')
}
handler.help = ['b']
handler.tags = ['bb']
handler.command = /^(b)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler