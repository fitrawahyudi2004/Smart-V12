let instagramGetUrl = require('instagram-url-direct')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`
    const results = (await instagramGetUrl(args[0])).url_list[0]

    conn.sendFile(m.chat, results, 'ig.mp4', `*Instagram Downloader*`, m)
}
handler.help = ['igdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.register = true
handler.premium = true
handler.command = /^(igdl)$/i
handler.limit = true

module.exports = handler