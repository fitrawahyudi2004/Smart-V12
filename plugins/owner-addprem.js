// let handler = async (m, { conn, text }) => {

//     let who
//     if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
//     else who = m.chat
//     if (!who) throw `tag orangnya!`
//     if (global.prems.includes(who.split`@`[0])) throw 'dia udah premium!'
//     global.prems.push(`${who.split`@`[0]}`)
//     conn.reply(m.chat, `@${who.split`@`[0]} sekarang premium!`, m, {
//         contextInfo: {
//             mentionedJid: [who]
//         }
//     })

// }
// handler.help = ['addprem [@user]']
// handler.tags = ['owner']
// handler.command = /^(add|tambah|\+)prem$/i

// handler.rowner = true

// module.exports = handler
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = db.data.users[who]
    if (!who) return m.reply(`Tag/Mention!\n\nContoh:\n${usedPrefix + command} @0 1\n\nAngka 1 menunjukan total hari`)
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw `Angkanya mana?\n\nContoh:\n${usedPrefix + command} @0 1`
    if (isNaN(txt)) return m.reply(`Hanya angka!\n\nContoh:\n${usedPrefix + command} @0 1`)
    var jumlahHari = 86400000 * txt
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += jumlahHari
    else user.premiumTime = now + jumlahHari
    user.premium = true
    m.reply(`
    ✔️  Success
    📛  *Name* : ${user.name} 
    📆  *Days* :${txt} Days 
    📉  *Countdown*: ${conn.msToDate(user.premiumTime - now)}
    
    `)
}
handler.help = ['addprem [@user] <angka>']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)p(rem)?$/i

handler.rowner = true
handler.group = true

module.exports = handler