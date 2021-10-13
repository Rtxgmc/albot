let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
PEMBAYARAN
https://wa.me/p/4290053084420115/6283182704827
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*TIRTA BOT PEMBAYARAN*', 'status@broadcast')
}
handler.help = ['f']
handler.tags = ['ff']
handler.command = /^(f)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler