let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
FILE BOT
RP:50.000
https://wa.me/p/4645420712169882/6283182704827
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*TIRTA BOT*', 'status@broadcast')
}
handler.help = ['c']
handler.tags = ['cc']
handler.command = /^(c)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler