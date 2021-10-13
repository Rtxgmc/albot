let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─❏「 Simsimi Menu 」
│❏ .simi2 <chat>
│❏ .s2 <chat>
╰────❏
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BAKA BOTZ BUG*', 'status@broadcast')
}
handler.help = ['menusimi']
handler.tags = ['virus']
handler.command = /^(simimenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler