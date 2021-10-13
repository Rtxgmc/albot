let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─❏「 Quran 」
│❏ .alquran *114 1*
│❏ .asmaulhusna
│❏ .hadis
│❏ .salat <daerah>
╰────❏
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BAKA BOTZ BUG*', 'status@broadcast')
}
handler.help = ['menuquran']
handler.tags = ['virus']
handler.command = /^(quranmenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler