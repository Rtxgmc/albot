let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─❏「 Apk Menu 」
│❏ .apk (kata kunci)
│❏ .apkdl (link apkpure)
╰────❏
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BAKA BOTZ BUG*', 'status@broadcast')
}
handler.help = ['apkm']
handler.tags = ['virus']
handler.command = /^(apkmenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler