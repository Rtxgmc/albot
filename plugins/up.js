let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
MOHON KIRIM BUKTI TRANSFER KE NOMOR https://wa.me/message/Y47YBBTW3EGKG1 AGAR PESANAN KAMU BISA SEGERA DI PROSES :)
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥RTXGMC  SHOP TERPERCAYA🔥*', 'status@broadcast')
}
handler.customPrefix = /^(UP)$/i
handler.command = new RegExp

module.exports = handler
 
