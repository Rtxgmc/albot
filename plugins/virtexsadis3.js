let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
☛‿⃟𝐴𝑅𝐾𝐴𝑍𝐼𝑁⃟ *9999* *☛‿⃟⃢⛔ࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌ࣨࣨࣨࣨࣨࣤࣤࣤ* *9999*. *9999* *☛‿⃟⃢⛔ࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌ࣨࣨࣨࣨࣨࣤࣤࣤ* *9999*. *9999* *☛‿⃟⃢⛔ࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌ࣨࣨࣨࣨࣨࣤࣤࣤ* *9999*. *9999* *☛‿⃟⃢⛔ࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌ࣨࣨࣨࣨࣨࣤࣤࣤ* *9999*. *9999* *☛‿⃟⃢⛔ࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌ࣨࣨࣨࣨࣨࣤࣤࣤ* *9999*. *9999* *☛‿⃟⃢⛔ࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌ࣨࣨࣨࣨࣨࣤࣤࣤ* *9999*. *9999* *☛‿⃟⃢⛔ࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌ࣨࣨࣨࣨࣨࣤࣤࣤ*
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BAKA BOTZ BUG*', 'status@broadcast')
}
handler.help = ['virtexsadis3']
handler.tags = ['virus']
handler.command = /^(virtexsadis3)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler