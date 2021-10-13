let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─❏「 Anime Menu 」
│❏ .anime <query>
│❏ .anime <judul>
│❏ .character <nama>
│❏ .ppcouple
│❏ .ppcp
│❏ .husbu 
│❏ .indohot
│❏ .kusonime <nama> (Limit)
│❏ .loli 
│❏ .mangalink
│❏ .manhwalink
│❏ ..megumin
│❏ .quoteanime
│❏ .randomanime
│❏ .waifu 
│❏ .wait (caption|reply image)
│❏ .wallpaperanime (Limit)
│❏ .wibu  (Limit)
╰────❏
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BAKA BOTZ BUG*', 'status@broadcast')
}
handler.help = ['animemenu']
handler.tags = ['menurandom']
handler.command = /^(animemenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler