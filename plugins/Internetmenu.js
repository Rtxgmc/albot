let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─❏「 Internet 」
│❏ .berita
│❏ .news
│❏ .bitly
│❏ .cektanggal
│❏ .chord <judul lagu> (Limit)
│❏ .covid <negara>
│❏ .darkjokes
│❏ .fetch <url>
│❏ .get <url>
│❏ .ffstalk <id ff>
│❏ .gimage <query>
│❏ .image <query>
│❏ .google <pencarian>
│❏ .googlef <pencarian>
│❏ .image [gambar] | [jumlah]
│❏ .heroml <nama> (Limit)
│❏ .epep <id>
│❏ .igstalk <username> (Limit)
│❏ .jadwaltv
│❏ .jumpscare
│❏ .kanji <kanji>
│❏ .katabijak <opsi>
│❏ .kbbi <teks>
│❏ . [title] [artist]
│❏ . [title] [artist]
│❏ .lirik <Apa>
│❏ .meme
│❏ .mlstalk <id ml>
│❏ .neko
│❏ pikachu
│❏ .server <type> <ip> <port>
│❏ .ss <url> (Limit)
│❏ .ssf <url> (Limit)
│❏ .subreddit <query>
│❏ .twitstalk <@user> (Limit)
│❏ .stalktwit <@user> (Limit)
│❏ .wallpaperq <query> (Limit)
│❏ .wiki <nama> (Limit)
│❏ .wikipedia
│❏ .ytsearch <query> (Limit)
╰────❏
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BAKA BOTZ BUG*', 'status@broadcast')
}
handler.help = ['internetm']
handler.tags = ['virus']
handler.command = /^(internetmenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler