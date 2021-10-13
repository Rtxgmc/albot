let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─❏「 Adventure Menu 」
│❏ .berburu
│❏ .mancing
│❏ .judi <jumlah>
│❏ .adventure
│❏ .petualang
│❏ .berpetualang
│❏ .mulung
│❏ .work
│❏ .claim
│❏ .feed [pet type]
│❏ .gaji
│❏ .gajian
│❏ .hunt
│❏ .inv
│❏ .nebang
│❏ .nyampah
│❏ .open <crate>
│❏ .gacha <crate>
│❏ .shop <sell|buy> <args>
│❏ .toko <sell|buy> <args>
│❏ .shop <sell|buy> <args>
│❏ .toko <sell|buy> <args>
│❏ .slots
│❏ .jackpot
│❏ .slots
│❏ .jackpot
│❏ .menanam
│❏ .transfer <Args>
│❏ .tukarcoin <Jumlah>
│❏ .tukarcoin <jumlah>
│❏ .tukarall
│❏ .tukarxp <Jumlah>
│❏ .tukarxp <jumlah>
│❏ .tukarsemua
│❏ .tukarmoney <Jumlah>
│❏ .tukarmoney <jumlah>
│❏ .tukarall
│❏ .use <item> <jumlah>
│❏ .heal
╰────❏
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BAKA BOTZ BUG*', 'status@broadcast')
}
handler.help = ['advmenu']
handler.tags = ['menurandom']
handler.command = /^(advanturemenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler