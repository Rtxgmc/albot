let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─❏「 Mager Ah 」
│❏ .magernulis1 <teks> (Limit)
│❏ .magernulis2 <teks> (Limit)
│❏ .magernulis3 <teks> (Limit)
│❏ .magernulis4 <teks> (Limit)
│❏ .magernulis5 <teks> (Limit)
│❏ .magernulis6 <teks> (Limit)
│❏ .magernulis1 <teks> (Limit)
│❏ .magernulis2 <teks> (Limit)
│❏ .magernulis3 <teks> (Limit)
│❏ .magernulis4 <teks> (Limit)
│❏ .magernulis5 <teks> (Limit)
│❏ .magernulis6 <teks> (Limit)
│❏ .nulis <teks> (Limit)
│❏ .nulis3 <teks> (Limit)
│❏ .nulis4 <teks> (Limit)
│❏ .nulis5 <kanan/kiri|teks> (Limit)
│❏ .polio <kanan/kiri|teks> (Limit)
│❏ .quotemaker2 <teks | wm> (Limit)
│❏ .tahta2<teks>
╰────❏
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BAKA BOTZ BUG*', 'status@broadcast')
}
handler.help = ['magerm']
handler.tags = ['virus']
handler.command = /^(magermenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler