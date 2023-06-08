let handler = async (m, { conn }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (!(id in conn.tebakgambar)) throw false
    let json = conn.tebakgambar[id][1]
    let nya = json.jawaban
    let nyanya = nya.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + nyanya + '```\nBalas soalnya, bukan pesan ini', conn.tebakgambar[id][0])
}
handler.command = /^tegam$/i
handler.limit = true
module.exports = handler