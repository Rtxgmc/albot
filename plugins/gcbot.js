let handler = async m => m.reply(`
*⚠GRUP BOT⚠*

1. https://chat.whatsapp.com/BwBZe4ugXvOEDepe8SbMHZ
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
