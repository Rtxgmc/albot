let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─❏「 cretor 」
│❏ .coffe
│❏ .crismes <text> (Limit)
│❏ .helloween <text> (Limit)
│❏ .tahta <teks> (Limit)
│❏ .memecreator <teks>|<teks> (Limit)
╰────❏
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Tirta BOT*', 'status@broadcast')
}
handler.help = ['cretor']
handler.tags = ['virus']
handler.command = /^(cretormenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler