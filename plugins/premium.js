let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─「 BUY PREMIUM 」
│ 
│ > Keuntungan :
│• Limit Tidak Terbatas!
│• Fitur Premium Dapat Digunakan!
│• Dapat Menambahkan Bot Ke Grup!
│
│ > Bonus :
│• Diberi 5 Limit Setiap Hari
│
│ > Harga :
│• 10K / Bulan (4 Minguu)
│• 20K / Tahun (12 Bulan)
│• 30K / VIP (Permanen)
│
│ > Pembayaran :
│• TELKOMSEL : 085240367954
│• SHOPEE PAY : 085397907992
│• SAWERIA : saweria.co/rtxgmc
│• GOPAY : 085240367954
│• DANA : 085240367954
╰────
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
} 
handler.help = ['premium']
handler.tags = ['info']
handler.command = /^(premium)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler
