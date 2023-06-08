let handler = async (m, { conn }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (!(id in conn.siapakahaku)) throw false
    let json = conn.siapakahaku[id][1]
    let nya = json.result.jawaban
    let nyanya = nya.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
     conn.reply(m.chat, '```' + nyanya + '```\nBalas soalnya, bukan pesan ini', conn.siapakahaku[id][0])
}
handler.command = /^tesi$/i
handler.limit = true
module.exports = handler