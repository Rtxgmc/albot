let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *PULSA TELKOMSEL:* [085240367954]
┣➥ *SAWERIA:* saweria.co/rtxgmc
┣➥ *SHOPEE:* 085397907992
┣➥ *GOPAY & DANA:* 085240367954
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6285397907992*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
