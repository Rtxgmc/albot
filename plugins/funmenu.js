let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─❏「 Fun Menu 」
│❏ .jodoh <nama>|<nama doi> (Limit)
│❏ .jumpscare
│❏ .paling <teks>
│❏ .simi <teks>
│❏ .simsimi <teks>
│❏ .simih <teks>
│❏ .tod
╰────❏
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BAKA BOTZ BUG*', 'status@broadcast')
}
handler.help = ['menufun']
handler.tags = ['virus']
handler.command = /^(funmenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler