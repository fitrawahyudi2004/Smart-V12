let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, args, usedPrefix }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''    

 if (!teks) throw `
*Pengunaan :*\n${prefix}${command} Nik|Provinsi|Kabupaten|Nama|TempatTanggalLahir|JenisKel|Alamat|RtRw|KelDesa|Kecamatan|Agama|Statu|Pekerjaan|Region|Berlaku|LinkGambar\n\n${prefix}${command} 35567778995|Provinsi Sumatera Utara|Kabupaten Deli Serdang|Muhib Jamaluddin|Medan|Laki-Laki|Tembung|02/05|Bandar Khalipah|Medan Kota|Islam|Jomblo|anakjebeh|Indonesia|2021-2080|https://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\n\n\n*[warning]*\nsetiap input query setelah garis tengah | di larang penggunaan spasi\n*「 INFO IMAGE 」*\nUntuk Gambar Profil KTP\nUpload Dari Web Berikut Ini\n\nhttps://i.waifu.pics\nhttps://c.top4top.io\n\nCONTOH HASIL NYA\nhttps://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\nhttps://k.top4top.io/p_2208264hn0.jpg    
    `

let get_args = args.join(" ").split("|")
nik = get_args[0]
if (!nik) return m.reply('nomor induk keluaga kak pastikan jangan mirip NIK yang asli ya, karena nanti bisa di salahgunakan')
prov = get_args[1]
if (!prov) return m.reply('provinsi mana kak')
kabu = get_args[2]
if (!kabu) return m.reply('kabupaten mana kak')
name = get_args[3]
if (!name) return m.reply('nama nya siapa kak')
ttl = get_args[4]
if (!ttl) return m.reply('tempat tanggal lahir nya kak')
jk = get_args[5]
if (!jk) return m.reply('jenis kelamin pria atau wanita kak')
jl = get_args[6]
if (!jl) return m.reply('alamat rumah nya mana kak')
rtrw = get_args[7]
if (!rtrw) return m.reply('RT / RW berapa kak')
lurah = get_args[8]
if (!lurah) return m.reply('kelurahan mana kak')
camat = get_args[9]
if (!camat) return m.reply('kecamatan mana kak')
agama = get_args[10]
if (!agama) return m.reply('agama nya apa kak')
nikah = get_args[11]
if (!nikah) return m.reply('status belum ada')
kerja = get_args[12]
if (!kerja) return m.reply('pekerjaan belum ada')
warga = get_args[13]
if (!warga) return m.reply('region belum ada')
until = get_args[14]
if (!until) return m.reply('waktu berlaku belum ada')
img = get_args[15]
if (!img) return m.reply('url image belum ada')



let buffer = await fetch(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${lolkey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`).then(res => res.buffer())
conn.sendFile(m.chat, buffer, 'hasil.jpg', "Nih kk KTP nya ", m)
}
handler.help = ['ktpmaker']
handler.command = ['ktpmaker']
handler.tags = ['internet']
handler.register = true
handler.limit = true
handler.premium = false
module.exports = handler
