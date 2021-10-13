let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─❏「 Prank Menu 」
│❏ .jodohin
│❏ .jodoh <nama>|<nama doi>
│❏ .pesankosong (Limit)
╰────❏
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BAKA BOTZ BUG*', 'status@broadcast')
}
handler.help = ['prankmenu']
handler.tags = ['virus']
handler.command = /^(prankmenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler