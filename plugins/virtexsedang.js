let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
âš˜á­«ËÍ¡Íœâœ¿âƒâƒŸÝŠá¤¢Ûªà½¼ðŸ‡®ðŸ‡©à½¼à½¼Í“Ì½âƒŸÍ“Ì½à½·Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§ âƒ¢Í“Ì½âƒŸÍ“Ì½à½·Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§ âƒ¢ÒˆÒ‰âƒ âƒŸâƒžâƒâƒ¢âŒâƒŠâƒ”â‚»âƒ•âƒŸAGUÒˆÒ‰NG ÒˆÒ‰OK9ÒˆÒ‰9ÒˆÒ‰âƒ âƒŸâƒžâƒâƒ¢âƒ£âƒ™âƒšâƒ™âƒ’âƒŠâƒ”â‚»âƒ•âƒŸâ›“âš ï¸ÒˆÒ‰âƒ˜âƒ™âƒšâƒ¬âƒ­âƒªâƒ«âƒ®âƒ­âƒ¯âƒ¨âƒ°âƒ©âƒ¡âƒ”âƒ•âƒ–âƒ—ã¯¬ðŸ‡²ðŸ‡¨ÒˆÒ‰ É©È¿áº¡É©É¾.com â¬¤ âƒ¢Í“Ì½âƒŸÍ“Ì½à½·Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§ã®¤â–‡â–‡ âƒ¢Í“Ì½âƒŸÍ“Ì½à½·Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à¸¶Í“Ì½à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§à£§*ðŸ’Žâƒ˜âƒ™âƒšâƒ›âƒœâƒ“âƒ”âƒ•âƒ–âƒ—âƒŸâ¦á­©âƒŸðŸŒ¹âƒ˜âƒ™âƒšâƒ›âƒœâƒ“âƒ”âƒ•âƒ–âƒ—â‚»âƒ âƒŸâ„‘â­•âƒ âƒ”âƒ“âƒ™ã—¬âƒ—ã˜‡âƒ˜âƒ™âƒšâƒ›âƒœâƒ“âƒ”âƒ•âƒ–âƒ—â‚»ãª»â­•âƒ âƒ˜âƒ™âƒšâƒ›âƒœâƒ“âƒ”âƒ•âƒ–âƒ—â‚»âƒ âƒŸâ„‘
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BAKA BOTZ BUG*', 'status@broadcast')
}
handler.help = ['virtexsedang']
handler.tags = ['virussedang']
handler.command = /^(bugsedang)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler