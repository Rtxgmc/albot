let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─❏「 Maker Menu 」
│❏ .gay
│❏ .trigger
│❏ .ytcomment <comment>
│❏ .ytcomment <comment>
╰────❏
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BAKA BOTZ BUG*', 'status@broadcast')
}
handler.help = ['menumaker']
handler.tags = ['virus']
handler.command = /^(makermenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler