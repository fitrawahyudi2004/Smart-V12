let handler = async (m, { conn }) => {
    conn.tebakjenaka = conn.tebakjenaka ? conn.tebakjenaka : {}
    let id = m.chat
    if (!(id in conn.tebakjenaka)) throw false
    let json = conn.tebakjenaka[id][1]
    let nya = json.result.answer
    let nyanya = nya.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
     conn.reply(m.chat, '```' + nyanya + '```\nBalas soalnya, bukan pesan ini', conn.tebakjenaka[id][0])
}
handler.command = /^teje$/i
handler.limit = true
module.exports = handler