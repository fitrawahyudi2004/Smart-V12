let handler = async (m, { conn }) => {
    conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
    let id = m.chat
    if (!(id in conn.tebakanime)) throw false
    let json = conn.tebakanime[id][1]
    let nya = json.result.name
    let nyanya = nya.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + nyanya + '```\nBalas soalnya, bukan pesan ini', conn.tebakanime[id][0])
}
handler.command = /^tean$/i
handler.limit = true
module.exports = handler