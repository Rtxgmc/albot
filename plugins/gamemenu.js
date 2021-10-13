let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─❏「 Fun Menu 」
│❏ .angka <0-9>
│❏ .asahotak
│❏ .caklontong
│❏ .cantikcek (Limit)
│❏ .cari <query>
│❏ .casino <jumlah>
│❏ .dadu
│❏ .dadu2
│❏ .dare
│❏ .family100
│❏ .gantengcek (Limit)
│❏ .gaycek (Limit)
│❏ .iqtest
│❏ .kuis
│❏ .math <mode>
│❏ .math2
│❏ .slot <angka>
│❏ .siapakahaku
│❏ .slot  (Limit)
│❏ .suit
│❏ .susunkata
│❏ .tebakanime
│❏ .tebakbendera
│❏ .tebakgambar
│❏ .tebakkata
│❏ .tebakkimia
│❏ .tebaklagu (Limit)
│❏ .tebaktebakan
│❏ .tekateki
│❏ .tololcek (Limit)
│❏ .truth
│❏ .twister
╰────❏
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BAKA BOTZ BUG*', 'status@broadcast')
}
handler.help = ['menugame']
handler.tags = ['virus']
handler.command = /^(gamemenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler