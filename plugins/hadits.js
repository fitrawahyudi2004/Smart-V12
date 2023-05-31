let fetch = require('node-fetch')
let handler = async (m, { usedPrefix, command, args }) => {
    if (!args[0]) throw `contoh:
${usedPrefix}${command} bukhari 1
${usedPrefix}${command} abu-daud 1

Pilihan tersedia:
Abu Daud
1 - 4419
Ahmad
1 - 4305
Bukhari
1 - 6638
Darimi
1 - 2949
Ibu-majah
1 - 4285
Nasai
1 - 5364
Malik
1 - 1587
Muslim
1 - 4930
Tirmidzi
1 - 3625`
    if (!args[1]) throw `Hadist yang ke berapa?
Contoh: ${usedPrefix + command} ${args[0]} 1`
    try {
        let res = await fetch(`https://hadis-api-id.vercel.app/hadith/${args[0]}/${args[1]}`)
        let json = await res.json()
        await m.reply(wait)
        m.reply(`
No. ${json.number}
${json.name}

${json.arab}

${json.id}
`.trim())
    } catch (e) {
        throw `_*Error!*_`
    }
}
handler.help = ['hadist']
handler.tags = ['islam']
handler.command = /^(hadist?)$/i
module.exports = handler
