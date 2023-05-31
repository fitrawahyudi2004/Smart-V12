let fetch = require('node-fetch')
let handler = async (m, { conn, command, args,usedPrefix }) => {


let res = await fetch(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lolkey}`)
let json = await res.json()
await m.reply(wait)
let anu = (` 
─────〔 *Jadwal Tv Now* 〕─────

*Indosiar :* ${json.result.indosiar}

*Mnctv :* ${json.result.mnctv}

*Trans tv :* ${json.result.transtv}

*Antv :* ${json.result.antv}

*Gtv :* ${json.result.gtv}

*Rcti :* ${json.result.rcti}

*Sctv :* ${json.result.sctv}

*Tvone :* ${json.result.tvone}

*Metro Tv :* ${json.result.metrotv}

*Trans7 :* ${json.result.trans7}

*Net Tv :* ${json.result.nettv}

*Tvri :* ${json.result.tvri}

*Kompas Tv :* ${json.result.kompastv}

*Rtv :* ${json.result.rtv}

*Inews Tv :* ${json.result.inewstv}

`.trim())

m.reply(anu)
}
handler.help = ['jadwaltvnow']
handler.tags = ['internet']
handler.command = /^jadwaltvnow$/i

handler.register = true
handler.split = true


module.exports = handler