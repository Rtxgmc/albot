let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─❏「 Islam Menu 」
│❏ .kisah|kisah nabi|nabi <nama nabi>
│❏ .ayatkursi
│❏ .doaharian
│❏ .jsholat <daerah>
│❏ .niatsholat
│❏ .rquran
│❏ .tahlil
│❏ .wirid
╰────❏
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*TIRTA BOT*', 'status@broadcast')
}
handler.help = ['islammenu']
handler.tags = ['virus']
handler.command = /^(islammenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler