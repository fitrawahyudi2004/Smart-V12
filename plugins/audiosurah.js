let fetch = require('node-fetch')
let handler = async (m, { conn, command, args,usedPrefix,text }) => {

if (!text) throw `
Masukkan No surah

Contoh : ${usedPrefix + command} 114 114

List Surah :

        1: Al-Fatihah,
        2: Al-Baqarah,
        3: Ali 'Imran,
        4: An-Nisa',
        5: Al-Ma'idah,
        6: Al-An'am,
        7: Al-A’raf,
        8: Al-Anfal,
        9: At-Taubah,
        10: Yunus,
        11: Hud,
        12: Yusuf,
        13: Ar-Ra’d,
        14: Ibrahim,
        15: Al-Hijr,
        16: An-Nahl,
        17: Al-Isra',
        18: Al-Kahf,
        19: Maryam,
        20: Ta Ha,
        21: Al-Anbiya,
        22: Al-Hajj,
        23: Al-Mu’minun,
        24: An-Nur,
        25: Al-Furqan,
        26: Asy-Syu'ara',
        27: An-Naml,
        28: Al-Qasas,
        29: Al-'Ankabut,
        30: Ar-Rum,
        31: Luqman,
        32: As-Sajdah,
        33: Al-Ahzab,
        34: Saba’,
        35: Fatir,
        36: Ya Sin,
        37: As-Saffat,
        38: Sad,
        39: Az-Zumar,
        40: Ghafir,
        41: Fussilat,
        42: Asy-Syura,
        43: Az-Zukhruf,
        44: Ad-Dukhan,
        45: Al-Jasiyah,
        46: Al-Ahqaf,
        47: Muhammad,
        48: Al-Fath,
        49: Al-Hujurat,
        50: Qaf,
        51: Az-Zariyat,
        52: At-Tur,
        53: An-Najm,
        54: Al-Qamar,
        55: Ar-Rahman,
        56: Al-Waqi’ah,
        57: Al-Hadid,
        58: Al-Mujadilah,
        59: Al-Hasyr,
        60: Al-Mumtahanah,
        61: As-Saff,
        62: Al-Jumu’ah,
        63: Al-Munafiqun,
        64: At-Tagabun,
        65: At-Talaq,
        66: At-Tahrim,
        67: Al-Mulk,
        68: Al-Qalam,
        69: Al-Haqqah,
        70: Al-Ma’arij,
        71: Nuh,
        72: Al-Jinn,
        73: Al-Muzzammil,
        74: Al-Muddassir,
        75: Al-Qiyamah,
        76: Al-Insan,
        77: Al-Mursalat,
        78: An-Naba’,
        79: An-Nazi’at,
        80: 'Abasa,
        81: At-Takwir,
        82: Al-Infitar,
        83: Al-Mutaffifin,
        84: Al-Insyiqaq,
        85: Al-Buruj,
        86: At-Tariq,
        87: Al-A’la,
        88: Al-Gasyiyah,
        89: Al-Fajr,
        90: Al-Balad,
        91: Asy-Syams,
        92: Al-Lail,
        93: Ad-Duha,
        94: Al-Insyirah,
        95: At-Tin,
        96: Al-'Alaq,
        97: Al-Qadr,
        98: Al-Bayyinah,
        99: Az-Zalzalah,
        100: Al-'Adiyat,
        101: Al-Qari'ah,
        102: At-Takasur,
        103: Al-'Asr,
        104: Al-Humazah,
        105: Al-Fil,
        106: Quraisy,
        107: Al-Ma’un,
        108: Al-Kausar,
        109: Al-Kafirun,
        110: An-Nasr,
        111: Al-Lahab,
        112: Al-Ikhlas,
        113: Al-Falaq,
        114: An-Nas

`


let res = await (await fetch(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${text}.json`)).json()

let anu = (`
─────〔 *Audio Surah* 〕─────

*Surah ${res.name}*
*Surah ke ${res.number_of_surah}*
*Termasuk surah ${res.type}*
*Audio ${res.recitations[1].name}*

${wm}
        `.trim())
let flas = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=${res.name}`
conn.sendFile(m.chat, flas, "nih.jpg", anu, m)
//let buffer = await fetch(`https://api.lolhuman.xyz/api/quran/audio/${text}?apikey=${lolkey}`).then(res => res.buffer())
conn.sendFile(m.chat, res.recitations[1].audio_url, "audio.mp3", m)
}
handler.help = ['audiosurah <no surah>']
handler.tags = ['islam']
handler.command = /^audiosurah$/i
handler.limit = true

handler.split = true


module.exports = handler