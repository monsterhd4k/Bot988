// Script by Kriz Bots
// Si editas deja creditos
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReclientectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const { virtex, vipi } = require("./lib/virtex.js"); 
const { Toxic } = require('./lib/Toxic.js')
const hx = require("hxz-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const FormData = require("form-data");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const crypto = require('crypto')
const yts = require("yt-search");
const ms = require("parse-ms");
const os = require('os');
const toMs = require("ms");
const { error } = require("qrcode-terminal");
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const { color, bgcolor } = require("./lib/color");
const { virtex90 } = require('./virtex/virtex90')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const { herodetails } = require('./lib/herodetail.js')
const { herolist } = require('./lib/herolist.js')
const { fetchJson, getBase64, kyun, createExif } = require("./lib/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./lib/ytdl");
const { webp2mp4File } = require("./lib/webp2mp4");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const afk = JSON.parse(fs.readFileSync("./lib/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { cmdadd } = require("./lib/totalcmd.js");
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage');
const { addVote, delVote } = require("./lib/vote");
const reminder = require("./lib/reminder");
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
//IMAGENES //
const iye = fs.readFileSync('./stik/thumb.jpeg')
const asw1 = 'https://i.ibb.co/QJRWXb9/IMG-20211107-WA0044.jpg'
const sip = fs.readFileSync('./stik/oksip.jpeg')
const bgg = fs.readFileSync('./stik/fake.jpeg')
//// IMAGEN ///
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Buenas Noches";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Buenas Noches🌞";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Buenas Tardes🌄";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Buenas Tardes☀️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Buenos Días🌅";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Buenas Tardes🌄";
    }
 // BATAS \\
menusimpel = false
banChats = false;
offline = false;
antidel = false;
welcom = false;
antical = true
readGc = true; 
readPc = false;
autovn = false;
multi = true
harga = 0
matauang = 'USD'
nopref = false
numbernye = '0'
autoketik = false;
prefixStatus = true;
targetpc = "595985770265"; 
owner = "595985770265"; 
fakeyoi = "Kriz Edits"; 
HunterApi = "Ikyy69", 
xchillds = 'XChillDs' 
hardi = 'hardianto', 
valkey = "rivalgans", 
zeksapi = "vallganz5",
dapapi = "anakasu",
lolh = "HIRO",
ApiZeks = "https://api.zeks.xyz",
zeksApikey = "Alphabott",
nomorowner1 = "@595985770265"; 
fake = `𝗖𝗿𝗲𝗮𝗱𝗼𝗿 : ${fakeyoi}\n︎𝗣𝗿𝗲𝗳𝗶𝘅 :「 ${prefixStatus ? "Multi Prefix" : "No Prefix"} 」`;
thumb = fs.readFileSync("./stik/thumb.jpeg"); 
numbernye = "0"; 
waktu = "-";
alasan = "-"; 
autojoin = false;
cmhit = []
hit_today = [];
//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));

// 𝗙𝘂𝗻𝗰𝗶𝗼𝗻 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗖𝗼𝗺𝗺𝗮𝗻𝗱︎
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};
const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
function monospace(string) {
return '```' + string + '```'
}   
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundo") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
module.exports = cnf = async (cnf, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
const typei = Object.keys(mek.message)[0]
const type = Object.keys(mek.message)[0]
let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
const isImage = (type === 'imageMessage')
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      contactsArray,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
    const q = args.join(" ");
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
    const botNumber = cnf.user.jid;
    
    const botNumberss = cnf.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");

    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
    const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
    const isNsfw = isGroup ? nsfww.includes(from) : false
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;
// 𝗟𝗲𝗰𝘁𝘂𝗿𝗮 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰𝗮 𝗲𝗻 𝙂𝗿𝘂𝗽𝗼𝘀
var ampun = await cnf.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await cnf.chatRead(jid)
})
// 𝗟𝗲𝗰𝘁𝘂𝗿𝗮 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰𝗮 𝗲𝗻 𝗣𝘃
var chatss = await cnf.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await cnf.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝗩𝗡
if (autovn) {
	if (autovn === false) return
await cnf.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await cnf.updatePresence(from, Presence.composing)
}
const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
    const sender = mek.key.fromMe
      ? cnf.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? cnf.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
    const totalchat = await cnf.chats.all();
    const ownerNumber = [`994408103470@s.whatsapp.net`]
	const senderNumber = sender.split("@")[0] 
    const m = simple.smsg(cnf, mek);
    const groupMetadata = isGroup ? await cnf.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const itsMe = mek.key.fromMe ? true : false
    const isRegistered = checkRegisteredUser(sender)
   const isRegister = register.includes(sender)
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const isOwner = ownerNumber.includes(sender)
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const hour_now = moment().format('HH:mm:ss')
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isBanchat = isGroup ? bancht.includes(from) : false
    const isVote = isGroup ? voting.includes(from) : false;
    const conts = mek.key.fromMe
      ? cnf.user.jid
      : cnf.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? cnf.user.name
      : conts.notify || conts.vname || conts.name || "-";
    const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (prefix && command) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./lib/totalcmd.json"))[0]
      .totalcmd;
const daftar1 = `Hola ${pushname} ${ucapanWaktu}\n\nAntes de usar el bot, verifiquese primero`
       const daftar2 = '```Si no ves el botón escribe #verify```'
       const daftar3 = [
          {
            buttonId: `verify`,
            buttonText: {
              displayText: `Verify`,
            },
            type: 1,
          },]
var hayuk0 = '[NO VERIFICADO]'
			if (isRegistered) {
			hayuk0 = '[√ VERIFICADO]'
			}
    //Y
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let locale = "id";
    let d = new Date();
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
cmhit.push(command)
    //MESS
    mess = {
      wait: "𝗣𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗲𝘀𝗽𝗲𝗿𝗲  𝘂𝗻 𝗺𝗶𝗻𝘂𝘁𝗼︎",
      success: "𝗟𝗶𝘀𝘁𝗼 𝘅𝗱︎",
      wrongFormat: "Formato incorrecto, inténtalo de nuevo en el menú",
      error: {
        stick: "no es un sticker :v",
        apiz: "error!, tal vez porque la apikey ha caducado",
        Iv: "Link inválido :v",
      },
      only: {
        group: "𝗦𝗼𝗹𝗼 𝗽𝘂𝗲𝗱𝗲 𝘀𝗲𝗿 𝘂𝘁𝗶𝗹𝗶𝘇𝗮𝗱𝗼 𝗲𝗻 𝗴𝗿𝘂𝗽𝗼𝘀.",
      },
    };

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };
  /*const reply = (teks) => {
      cnf.sendMessage(from, teks, text, { quoted: mek });
    };*/
    const textImg = (teks) => {
           return ikyy.sendMessage(from, teks, text, {quoted: freply, thumbnail: fs.readFileSync('./cnf.jpg')})
        }
const math = (teks) => {
           return Math.floor(teks)
       }
/*const reply = (teks) => {
			cnf.sendMessage(from, teks, text, { thumbnail: iye, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jam} - ${week} ${weton} - ${date}`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/51923568749?text=ola%20UwU`}}})
		}*/
    const sendMess = (hehe, teks) => {
      cnf.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? cnf.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : cnf.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };
// Fake Reply:)
    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "6289523258649-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 10,
          status: 200,
          thumbnail: iye,
          surface: 200,
          message: iye,
          orderTitle: "Bot",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./cnf.jpg')
        }}}
const freply7 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '1595603042@s.whatsapp.net' } : {}) }, message: { "productMessage":{"product": {"productImage": {"mimetype":'image/jpeg',"jpegThumbnail": iye, "title": `${ucapanWaktu} ${pushname}`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
}
 const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`,
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: iye, 
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const ftroli2 = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`,
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: fake,
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${ucapanWaktu} ${pushname}`,
			"groupName": `${ucapanWaktu} ${pushname}`, 
            "caption": `${ucapanWaktu} ${pushname}`, 
            'jpegThumbnail': fake
		}
	}
}
    const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: fake, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `51923568749@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 999999,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf",
		"pngThumbnail": iye,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "0418",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "Pendiente"
  }
// STICKER

    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `51923568749@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
                       }
	                  }
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${ucapanWaktu} ${pushname}`,
                 "title": `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
	                  } 
                     }
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: fake, jpegThumbnail: thumb } },
    };
    const fakestatus = (teks) => {
      cnf.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakethumb = (teks, yes) => {
      cnf.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./stik/fake.jpeg"),
        quoted: mek,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
      cnf.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
cnf.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel+'%')
	})
	global.batrei = global.batrei ? global.batrei : []
		cnf.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
		}) 
download(url, "./stik" + names + ".png", async function () {
        console.log("done");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            cnf.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
if (budy.toLowerCase() === `8473`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/user/registered.json', JSON.stringify(register))
		    teks = `Verificacion completada\n\nPorfavor Escribe *#menu* para ver mi menu`
		    cnf.sendMessage(from, teks, text, {quoted: fkontak })
}          /*if (!mek.key.fromMe && banChats === false) return*/
	              
           
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }
        
   
//******************* 》banchat《 ********************\\
if (isBanchat){
if (!itsMe && !isOwner)return 
}
    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./stik/thumb.jpeg`),
            },
            title: "Bot WhatsApp",
            description: "Bot24/7",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "By Kriz Edits",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
 const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": iye 
					},
					"title": `${ucapanWaktu} ${pushname}`,
					"description": `${ucapanWaktu} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${ucapanWaktu} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        cnf.sendMessage(to, media, type, {
          quoted: mek,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
///Boton de Texto

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
cnf.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Boton con Imagen
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await cnf.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
cnf.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Boton con Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await cnf.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
cnf.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Boton de Localización
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await cnf.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
cnf.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        cnf.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      cnf.groupAdd(from, orangnya);
    };
        const grupinv = (teks) => {
        	grup = cnf.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/Dgt6', "groupName": `Kriz Bot Inc.`, "footerText": "*_Bot 24/7_*", "jpegThumbnail": iye, "caption": teks}}, {quoted:mek})
            cnf.relayWAMessage(grup)
        }
const fakeitem = (teks) => {
            cnf.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./stik/thumb.jpeg`),"itemCount":10,"status":"CONSULTA","surface":"CATALOG","message":`Kriz Edits`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
// Catalogo
const reply = (teks) => {
             res = cnf.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 111119999, "message": teks, "footerText": "*Kriz Edits*", "thumbnail": bgg, "surface": 'CATALOG' }}, {quoted:ftrol})
             cnf.relayWAMessage(res)
        }
const fakewa = (teks) => {        
cnf.sendMessage(from, teks, text, { thumbnail: fake, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Kriz Edits`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/994408103470?text=hola%20Kriz`}}})
		}
const replyfakelink = (teks) => {
cnf.sendMessage(from, teks, text,{contextInfo :{text: 'Hola',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Kriz Edits\n•Youtube (Kriz Edits)`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/QJRWXb9/IMG-20211107-WA0044.jpg",
                "thumbnail": fake,
                "sourceUrl": 'https://youtube.com/channel/UCUVLZPvYER99xTf2Op_TdHA'
},mentionedJid:[sender]}, quoted : fgif})
};
const replywa = (teks) => {
cnf.sendMessage(from, teks, text,{contextInfo :{text: 'Hola',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `WhatsApp`,
                "body": `wa.me/994408103470`,
                "mediaType": "10",
                "mediaUrl": `wa.me/994408103470`,
                "thumbnailUrl": "https://i.ibb.co/QJRWXb9/IMG-20211107-WA0044.jpg",
                "thumbnail": iye,
                "sourceUrl": `wa.me/994408103470`,
},mentionedJid:[sender]}, quoted : mek})
};
const fakeyt = (teks) => {
cnf.sendMessage(from, teks, text,{contextInfo :{text: 'Hola',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `Hola ${pushname}` ,
"body": `${ucapanWaktu}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/QJRWXb9/IMG-20211107-WA0044.jpg",
"mediaUrl": "https://youtube.com/c/KrizEdits",
"thumbnail": fs.readFileSync('./stik/thumb.jpeg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : fgif})
};
// Support
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await cnf.relayWAMessage(
        cnf.prepareMessageFromContent(
          target,
          cnf.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      cnf.sendMessage(target, teks, "conversation");
    };

    //FUNCION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

    cekafk(afk);
    if (!mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (isAfk(mek.key.remoteJid)) return;
        addafk(mek.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        cnf.sendMessage(
          mek.key.remoteJid,
          `@${owner} Actualmente fuera de linea!\n\n*Razón :* ${alasan}\n*Desde:* ${heheh.hours} Horas, ${heheh.minutes} Minutos, ${heheh.seconds} Segundos\n\nIntentelo mas tarde`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${owner}@s.whatsapp.net`],
              stanzaId: "B826873620DD5947E683E3ABE663F263",
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                imageMessage: {
                  caption: "*OFFLINE*",
                  jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                },
              },
            },
          }
        );
      }
    }
    if (mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (
              mek.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of mek.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return;
                  addafk(mek.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  cnf.sendMessage(
                    mek.key.remoteJid,
                    `@${owner} Esta Offline!\n\n *Razon :* ${alasan}\n *Desde :* ${heheh.hours} Hora, ${heheh.minutes} Minutos, ${heheh.seconds} Segundos\n\nVuelva a intentar mas tarde`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }

    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");

/*if (listbut) console.log("[",color("command","lime"),"]",time2,color(listbut,"lime"),"from",color(sender.split("@")[0],"cyan"))*/
//list command

async function sendFileFromUrl(from, url, caption, msg, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return cnf.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
    if (!isGroup && prefix && command)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      cnf.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
    
    if (isGroup && isAntilink && !mek.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return
        reply("ANTILINK!! LO SENTIMOS NO SE PERMITEN ENLACES HDPTA :V");
        cnf.groupRemove(from, [sender]);
      }
    }

    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 500000) {
        if (isGroupAdmins) return
        reply("ANTIVIRTEX DETECTADO!! LO SENTIMOS SERÁS ELIMINADO :V");
        cnf.groupRemove(from, sender);
      }
    }
    if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("Listo", "white")
        );
        cnf.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    // Runtime🥀\\
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await cnf.setStatus(`Bot activado desde ${uptime}`).catch((_) => _);
      settingstatus = new Date() * 1;
    }
    if (!mek.key.fromMe && banChats === true) return;
switch (command) {
case 'verify':              
if (isRegistered) return reply('Tu cuenta está verificada')
const serialUser = createSerial(18)
	         try {
								ppimg = await cnf.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const anuu = `「 *REGISTRO DE USUARIO* 」
*Gracias por Registrarse en la Base de Datos*

*🌾︎ Nombre :* ${pushname}
*🌾︎ API :* +${sender.split('@')[0]}
*🌾︎ Serial:* ${serialUser}
*🌾 ︎Total:* ${_registered.length} User

*「 𝗕𝗼𝘁 」*`
         haitod = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${ppimg}`)
             buttons = [{buttonId: `menu`,buttonText:{displayText: `MENU🌾`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(haitod, "imageMessage", { thumbnail: haitod, })).imageMessage
              buttonsMessage = {footerText:'Kriz Edits', imageMessage: imageMsg,
              contentText:`${anuu}`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
              cnf.relayWAMessage(prep)
	         console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'en', color(sender || groupName))
	    // console.log(e)
            setTimeout( () => {
			cnf.updatePresence(from, Presence.composing)
			reply(`*Gracias por registrarse*`)
		}, 2000)
        break
     
case 'help':
case 'menu':
	 groups = cnf.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = cnf.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await cnf.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
        ptod = "994405470940@s.whatsapp.net"
        dtod = '994405470940'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await cnf.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu =`
 ⬣ 𝙊𝙬𝙣𝙚𝙧
✗ ${prefix}off
✗ ${prefix}isbaileys
✗ ${prefix}banchat
✗ ${prefix}unbanchat
✗ ${prefix}listbc
✗ ${prefix}setcmd
✗ ${prefix}delcmd
✗ ${prefix}listcmd
✗ ${prefix}restart
✗ ${prefix}antidelete on/off
✗ ${prefix}autotype on/off
✗ ${prefix}autoread
✗ ${prefix}autovn on/off
✗ ${prefix}anticall on/off
✗ ${prefix}getcaption
✗ ${prefix}bugcatalog
✗ ${prefix}buggc id grupo
✗ ${prefix}okvirtex
✗ ${prefix}on
✗ ${prefix}status
✗ ${prefix}setthumb
✗ ${prefix}settarget
✗ ${prefix}setfakeimg
✗ ${prefix}setreply
✗ ${prefix}modo
✗ ${prefix}robar author|packname
✗ ${prefix}hacked ( no usar)

 ⬣ 𝙂𝙧𝙪𝙥𝙤
✗ ${prefix}grupo
✗ ${prefix}promote 
✗ ${prefix}demote 
✗ ${prefix}kick 
✗ ${prefix}add 
✗ ${prefix}getbio
✗ ${prefix}getname 
✗ ${prefix}alarma
✗ ${prefix}listonline
✗ ${prefix}antilink on/off
✗ ${prefix}tod
✗ ${prefix}autojoin on/off

 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 💫
✗ ${prefix}sticker
✗ ${prefix}attp text
✗ ${prefix}emoji
✗ ${prefix}waifu
✗ ${prefix}wallml
✗ ${prefix}loli
✗ ${prefix}cosplay
✗ ${prefix}milf

✗ ${prefix}husbu 
✗ ${prefix}uniform

✗ ${prefix}sfwneko
✗ ${prefix}cuckold

✗ ${prefix}wpnsfwmobile
✗ ${prefix}zettairyouiki
✗ ${prefix}sao
✗ ${prefix}hsdxd
✗ ${prefix}lovelive

𝗖𝗼𝗺𝗽𝗮𝗿𝘁𝗲 𝗽𝗲𝗿𝗳𝗶𝗹 🤫💫
✗ ${prefix}perfiles

 𝗠𝗲𝗻𝘂 𝗗𝗲 𝗹𝗼𝗴𝗼𝘀 💫
✗ ${prefix}tfire text
✗ ${prefix}blackpink
✗ ${prefix}gura
✗ ${prefix}girlneko
✗ ${prefix}sadboy
✗ ${prefix}neon_light
✗ ${prefix}gaming
✗ ${prefix}watercolor
✗ ${prefix}phcomment text|text
✗ ${prefix}wolf text
✗ ${prefix}ytgol text
✗ ${prefix}ytsilver text
✗ ${prefix}t3d text
✗ ${prefix}logoa text|text
✗ ${prefix}marvel text|text
✗ ${prefix}leavest text
✗ ${prefix}neon2 text
✗ ${prefix}wall text
✗ ${prefix}notewrite text
✗ ${prefix}avatar 
✗ ${prefix}summertext
✗ ${prefix}remlogo
✗ ${prefix}sandwrite
✗ ${prefix}silverplaybutton
✗ ${prefix}text3d2
✗ ${prefix}logofree
✗ ${prefix}dropwater
✗ ${prefix}lolilogo
✗ ${prefix}text3d
✗ ${prefix}lihttext
✗ ${prefix}goldplaybutton
✗ ${prefix}leavest
✗ ${prefix}kanekilogo
✗ ${prefix}lavatext
✗ ${prefix}sadlogo
✗ ${prefix}wolflogo 
✗ ${prefix}waifulogo
✗ ${prefix}puta
✗ ${prefix}lesbi
✗ ${prefix}verdad
✗ ${prefix}abrazo
✗ ${prefix}patear
✗ ${prefix}besar
✗ ${prefix}palmaditas
✗ ${prefix}cuaderno
✗ ${prefix}wolfmetal
✗ ${prefix}tfire
✗ ${prefix}ytsilver

 ⬣ 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍
✗ ${prefix}tomp3
✗ ${prefix}tomp4
✗ ${prefix}toimg
✗ ${prefix}slow
✗ ${prefix}fast
✗ ${prefix}reverse
✗ ${prefix}tourl
✗ ${prefix}ytmp3

✗ ${prefix}ytmp4

✗ ${prefix}tiktok

 ⬣ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎
✗ ${prefix}play envia solo audio
✗ ${prefix}instagram link
✗ ${prefix}twitter link
✗ ${prefix}ytmp4 link

 ⬣ 𝙏𝘼𝙂

✗ ${prefix}hidetag
✗ ${prefix}contag
✗ ${prefix}sticktag
✗ ${prefix}totag

 ⬣ 𝙉𝙎𝙁𝙒
✗ ${prefix}hentai
✗ ${prefix}stickpussy
✗ ${prefix}stickneko
✗ ${prefix}stickfeetg
✗ ${prefix}kitsune
✗ ${prefix}blowjob
✗ ${prefix}stickcum

𝗡𝗼𝘁𝗮 : Cada Dia Kriz Agregara Comandos.۪`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`command`,buttonText:{displayText:'LIST MENU'},type:1},{buttonId:`script`,buttonText:{displayText:'SCRIPT'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
case 'creditos':
   dtod = '994408103470'
   var yez = `
   [ 𝐶𝑟𝑒𝑑𝑖𝑡𝑜𝑠 ] :
   
 🌾 : wa.me/${dtod.split('@')[0]}
 `
     credit = cnf.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 1000, "message": `${yez}`, "footerText": "By Kriz", "thumbnail": iye, "surface": 'CATALOG'}}, {quoted: mek})
            cnf.relayWAMessage(credit)
        break
case 'blackpink':
case 'neon_light':
case 'gaming':
case 'watercolor':
if (args.length ==0)return reply('Texto?')
bo = args.join(" ")
jojo = await getBuffer(`https://docs-jojo.herokuapp.com/api/${command}?text=${bo}`)
cnf.sendMessage(from, jojo, image, { quoted: freply, thumbnail: fs.readFileSync('./fake.jpg')})
break
case 'girlneko':
case 'sadboy':
if (args.length ==0)return reply(`Texto?`)
txt1 = args[0]
txt2 = args[1]
bf = await getBuffer(`https://ziy.herokuapp.com/api/${command}?text1=${txt1}&text2=${txt2}&apikey=xZiyy`)
cnf.sendMessage(from, bf, image, { quoted: freply, caption: 'Logo By Kriz Edits' })
break
        case 'perfiles':
             anu = await fetchJson(`https://ziy.herokuapp.com/api/ppcouple?apikey=xZiyy`)
             cewe = await getBuffer(anu.result.female)
              cowo = await getBuffer(anu.result.male)
              cnf.sendMessage(from, cowo, image, {quoted: freply, caption: '' })
              cnf.sendMessage(from, cewe, image, {quoted: freply, caption: 'listo ;D' })
              break
case 'sao':
				cnf.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                 cnf.sendMessage(from, swordartonline, image, {quoted: freply, caption: 'Kriz Edits En Youtube 💫'})
				 break
				case 'hsdxd':			
				 cnf.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 cnf.sendMessage(from, highschooldxd, image, {quoted: freply, caption: '>w<'})
				break
				 case 'lovelive':
				 cnf.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 cnf.sendMessage(from, lovelive, image, {quoted: freply, caption: '>w<'})
				break
 case 'uniform':
					case 'sfwneko':
					case 'cuckold':
					case 'wpnsfwmobile':
					case 'zettairyouiki':
					qute6 = await getBuffer(`https://api.xteam.xyz/randomimage/${command}?APIKEY=7415bc4287ad5ca8`)
					cnf.sendMessage(from, qute6, image, { quoted: freply, caption: '^w^' })
					break
case  'blowjob':
if (!isGroup) return reply(mess.only.group)
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek})
break
   case 'tiktok':
if (!c) return reply('Link?')
var { TiktokDownloader } = require('./lib/tiktokdl')
res = await TiktokDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
break

 
case 'stickcum':
case 'scum':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/cum')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})	
          break
        
			case 'gura':
if (args.length ==0)return reply(`texto?`)
bo = args.join(" ")
bf = await getBuffer(`https://ziy.herokuapp.com/api/Gura?nama=${bo}&apikey=xZiyy`)
cnf.sendMessage(from, bf, image, { quoted: freply, caption: 'Logo By Kriz Edits' })
break
case 'kitsune':
if (!isGroup) return fakegroup('esta funcion es solo para grupos')

hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kitsune&apikey=${hardi}`)
buttons = [{buttonId: `kitsune`,buttonText:{displayText: `siguiente`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'Kriz Edits', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              cnf.relayWAMessage(prep)
break

case 'wallpaper':
if (!isGroup) return fakegroup('esta funcion es solo para grupos')

hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=wallpaper&apikey=${hardi}`)
buttons = [{buttonId: `wallpaper`,buttonText:{displayText: `siguiente`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'Kriz Edits', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              cnf.relayWAMessage(prep)
break

case 'stickfeetg':
case 'sfeetg':
case 'stickfeet':
case 'feetg':
reply(mess.wait)
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feetg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
	       } catch {
			 reply('Lo siento no pude realizar su pedido')
			 }
			break
		
   case 'play': //@KRIZ EDITS
    reply(mess.wait)
   hay = body.slice(6) 
  anu = await fetchJson(`https://supraz.herokuapp.com/api/playaudio2?quero=${hay}&apikey=supraz`)
 buffer = await getBuffer(`https://supra-api.herokuapp.com/api/canvas/spotify?titulo=${anu.titulo}&text=LhannaBot&capa=${anu.imagem}&apikey=supraz`)  
 Iagu = await getBuffer(anu.baixar)
 fdsz = `MUSICA ENCONTRADA*

🌴 *Autor* : ${anu.canal}
🌴 *Tamaño* : ${anu.tamanho}
🌴 *Visualizaciones* : ${anu.views}
🌴 *Likes* : ${anu.likes}
🌴 *Deslike* : ${anu.deslike}
🌴 *Publicado* : ${anu.postado}
`
 cnf.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "ðŸŽ† Supra-key", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')} } }, caption: fdsz })

cnf.sendMessage(from, Iagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${anu.titulo}ï¸`, 'jpegThumbnail': await getBuffer(anu.imagem)}}}})
   break

case 'ytmp4':
if (args.length ==0)return reply('Link?')
ini_link = args.join(" ")
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/download/ytmp4?url=${ini_link}`)
anu = ini.result
ini_txt =`*Tituolo* : ${anu.title}\n*Autor* : ${anu.channel}\n*Publicado* : ${anu.published}\n*Vistas* : ${anu.views}`
yt4 = fs.readFileSync('./cnf.jpg')
cnf.sendMessage(from, yt4, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(anu.url)
cnf.sendMessage(from, res, video)
break

case 'ytmp3':
if (args.length ==0)return reply('Link?')
ini_link = args.join(" ")
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/download/ytmp3?url=${ini_link}`)
get = ini.result
ini_txt =`*Titulo* : ${get.title}\n*Autor* : ${get.channel}\n*Públicacion* : ${get.published}\n*Visualizaciones* : ${get.views}`
yt3 = fs.readFileSync('./cnf.jpg')
cnf.sendMessage(from, yt3, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url)
cnf.sendMessage(from, res, audio)
break

case 'stickbj':
case 'stickblowbjob':
case 'sbj':
reply(mess.wait)
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/bj')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			} catch {
			 reply('Lo siento no pude realizar su pedido')
			 }
			break
case 'stickpussy':
case 'spussy':
case 'pussysticker':
case 'stickerpussy':
reply(mess.wait)
try {
       ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			 } catch {
			 reply('Lo siento no pude realizar su pedido')
			 }			
			break

case 'stickneko':
case 'sneko':
case 'nekostick':
reply(mess.wait)
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			} catch {
			 reply('Lo siento no pude realizar su pedido')
			 }

			break
			
case  'loli':

reply (mess.wait)
const ui =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69']
    const xfjjs = ui[Math.floor(Math.random() * ui.length)]
uwu = fs.readFileSync(`./loli/${xfjjs}.jpg`);
cnf.sendMessage(from, uwu, image, {quote: mek})
break
case 'pack':

reply (mess.wait)
const uiu =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19']
    const xfjjjjjs = uiu[Math.floor(Math.random() * uiu.length)]
uwu = fs.readFileSync(`./muslos/${xfjjjjjs}.jpg`);
cnf.sendMessage(from, uwu, image, {quote: mek, caption: '7w7'})
break	

        case 'piropos':   	  
				cnf.updatePresence(from, Presence.composing) 				
				const mary =['Algunos quieren ser ricos a traves del dinero, otros del poder, pero lo que no saben, es que la unica riqueza es tu amor verdadero.','So�ando contigo he tenido una revelacion, ahora necesito que me hagas un hueco en tu corazon.','Aunque por tu corazon han pasado muchas personas, me gustaria que me hicieses un huequecito eterno, por peque�o que sea, por si pasa algo, para que no me olvides jamas.','Lo que siento por ti es tan inmenso que, para guardarlo, me haria falta otro universo.','me he convertido en un capitan pirata para asaltar tu corazon y robarle el amor.','Me preguntaste por que te amaba y no pude responderte. Hoy entiendo que el amor verdadero es indescriptible, solo se puede sentir.','Ojala fuese papel para poder envolverte, bombon.','Ansio besarte, abrazarte y no soltarte','A lo mejor mi hogar no es un palacio, pero me gustaria que tu fueses mi princesa.','Te amo demasiado, lo deseo todo contigo, por eso me vuelvo loc@, cuando tu no estas conmigo.','�De casualidad tienes un mapa contigo? Porque tengo el inter�s de navegar por esa linda mirada','Desde que te he visto me he convertido un/a astronauta porque no he bajado de las galaxias','A pesar de que el cielo est� lleno de estrellas, t� eres la m�s importante para mi','Si ser guapo fuera pcado, ya estar�as haciendo penitencia','Los que dicen que Disneyland es el lugar m�s feliz del mundo no han estado junto a ti','Si ser guapo matara, ser�as la bomba at�mica','Si fuera gato, pasar�a mis nueve vidas contigo','�Y si nos comemos unos tacos y yo te a-taco a besos?']
				const js = mary[Math.floor(Math.random() * mary.length)]
			    wew = fs.readFileSync(`./cnf.jpg`)
				cnf.sendMessage(from, wew, image, { caption: '*Piropos*\n\n'+ js, quoted: mek })
              addFilter(from)
          break
    case 'frases': 			  
				cnf.updatePresence(from, Presence.composing) 
				const fra =['El amor inmaduro dice: "te amo porque te necesito". El amor maduro dice: "te necesito porque te amo" (Erich Fromm)','La vida empieza cada cinco minutos (Andreu Buenafuente)','Donde las palabras fallan la m�sica habla (Hans Christian Andersen)','Un buen viajante no tiene planes (Kriz Edits)','Una vez aceptamos nuestros l�mites, vamos m�s all� de ello (Albert Einstein)','Lo que no nos mata nos hace m�s fuertes (Friedrich Nietzsche)','Si caminas solo, ir�s m�s r�pido. Si caminas acompa�ado, llegar�s m�s lejos.','Una vida llena de errores no solo es m�s honorable, sino que es m�s sabia que una vida gastada sin hacer nada','Es sencillo hacer que las cosas sean complicadas, pero dif�cil hacer que sean sencillas. F. Nietzsche','No pierdas nunca el sentido del humor y aprende a re�rte de tus propios defectos','La preocupaci�n es como una mecedora, te mantiene ocupado pero no te lleva a ninguna parte',' El hombre que m�s ha vivido no es aquel que m�s a�os ha cumplido, sino aquel que m�s ha experimentado la vida','Si lo puedes so�ar, lo puedes hacer','Lo imposible es el fantasma de los t�midos y el refugio de los cobardes','El camino que nos toca recorrer est� lleno de sorpresas. Nunca vas a estar preparado para las que te toquen a ti, sean dichosas o sombr�as, pues eso es parte de adquirir experiencia. Y descubrir cu�n gratas o desafortunadas son las que te esperan, es algo nunca podr�s evadir','La felicidad no es algo que pospones para el futuro, es algo que dise�as para el presente','El amigo ha de ser como el dinero, que antes de necesitarle, se sabe el valor que tiene','Tus acciones ser�n el reflejo de la manera que tienes de ver la vida y las que te van definir ante los dem�s. No las malgastes en cosas y actitudes que no valen la pena, solo t� puedes decidir la forma en la que quieres que te recuerden, porque no estar�s en este mundo para siempre','El amor es lo que mueve al mundo aunque a veces parezca lo contrario. A las personas no nos har�a mal recordar esto de vez en cuando','Nunca terminas de conocer a la gente. Tus amigos, tu familia y hasta t� mismo, pueden ocultar sorpresas que en la vida te podr�as haber imaginado, tanto buenas como malas','Todos tenemos el mismo destino, en esencia no hay manera de diferenciarnos si nacemos para llorar y re�r. Recu�rdalo, todos tenemos los d�as contados, vive cada uno de tus d�as como si fueran el regalo m�s grande, porque nadie puede asegurarte el ma�ana','Mientras vivas vas a encontrarte con todo tipo de personas, tanto buenas como malas. Es imposible adivinar las intenciones que oculta alguien detr�s de su comportamiento, pero descubrirlo es la tarea m�s interesante y peligrosa con la que te puedes llegar a topar','Los tiempos felices en la humanidad son las p�ginas vac�as de la historia','La decepci�n despu�s de un amor fallido, puede llegar a oprimir tu coraz�n hasta el punto de no dejarte respirar. Pero nadie se ha muerto de amor','No llores por la gente que se ha ido, enf�cate en quienes se encuentran a tu lado en el presente y qu�date con los buenas recuerdos de los que se marcharon','No debes enfocarte en el dolor que puedes sentir si alguien te ha falla. Si no eres capaz de perdonar una equivocaci�n, enti�rrala y sigue adelante','Amar es la aventura m�s grande en la que te puedes embarcar. Porque te puede hacer volar m�s alto de lo que jam�s imaginarte y tambi�n ponerte los pies de la tierra']
 				const jys = fra[Math.floor(Math.random() * fra.length)]
			    ses = fs.readFileSync(`./cnf.jpg`)
				cnf.sendMessage(from, ses, image, { caption: '*Frases*\n\n'+ jys, quoted: mek })
              addFilter(from)
          break
          
case  'awoo':
if (!isGroup) return fakegroup('esta funcion es solo para grupos')

anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./cnf.jpg')})
break
case  'blowjob':
if (!isGroup) return fakegroup('esta funcion es solo para grupos')

anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./cnf.jpg')})
break
case  'hentai': 
if (!isGroup) return fakegroup('esta funcion es solo para grupos')

anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./cnf.jpg')})
break
case  'megumin':
if (!isGroup) return fakegroup('esta funcion es solo para grupos')

anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./cnf.jpg')})
break
case  'neko':
if (!isGroup) return fakegroup('esta funcion es solo para grupos')

anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./cnf.jpg')})
break
case  'trapnime':
if (!isGroup) return reply(mess.only.group)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek})
break
        case 'avatar':		  
			anu = await axios.get('https://nekos.life/api/v2/img/avatar')
				avatars = await getBuffer(anu.data.url)
				cnf.sendMessage(from, avatars, image, {quoted: mek, caption: 'Linda foto no?' })
			addFilter(from)
          break
            
         case 'tfire':  
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(7)
                   
                   anu = await getBuffer(`${ApiZeks}/api/tfire?text=${F}&apikey=${zeksApikey}`)                   
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break             
       case 'ytgol':  
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(8)
                   
                   anu = await getBuffer(`${ApiZeks}/api/gplaybutton?text=${F}&apikey=${zeksApikey}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 'ytsilver':
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(10)
                   
                   anu = await getBuffer(`${ApiZeks}/api/splaybutton?text=${F}&apikey=${zeksApikey}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 't3d':
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(5)
                   
                   anu = await getBuffer(`${ApiZeks}/api/text3dbox?apikey=${zeksApikey}&text=${F}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 'logoa':
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz|xd*`)
                   var F = body.slice(7)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   
                   anu = await getBuffer(`${ApiZeks}/api/logoaveng?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break          
case 'cuaderno': 
if (args.length < 1) return reply('*y el texto?*') 
catat = args.join(" ")
catat = await getBuffer(`https://api.zeks.me/api/nulis?text=${catat}&apikey=apivinz`)
cnf.sendMessage(from, catat, image, { quoted:mek,caption:'listo' })
break
          case 'abrazar':
case 'abrazo':
case 'abraza':       		
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) return reply('etiqueta')  
const abra = ['ab1','ab2','ab3','ab4','ab5','ab6','ab7','ab8','ab9','ab10']
	const abras = abra[Math.floor(Math.random() * abra.length)]				
				result = fs.readFileSync(`./sticker/reac/abra/${abras}.mp4`)
cnf.sendMessage(from, result, video, { quoted: freply, caption: `${pushname} esta abrazando a @${mentioned[0].split('@')[0]}`})
				addFilter(from)
          break
case 'patear':
case 'patea':
case 'pat':		
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) return reply('etiqueta')  
const pat = ['pat1','pat2','pat3','pat4','pat5']
	const pate = pat[Math.floor(Math.random() * pat.length)]				
				result = fs.readFileSync(`./sticker/reac/patad/${pate}.mp4`)
cnf.sendMessage(from, result, video, { quoted: freply, caption: `${pushname} a pateado a @${mentioned[0].split('@')[0]}`})
				addFilter(from)
          break
case 'palmaditas':
case 'palmada':
case 'palmadas':
case 'palmadita':		
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) return reply('etiqueta')  
const palm = ['pal1','pal2','pal3','pal4','pal5','pal6','pal7']
	const palma = palm[Math.floor(Math.random() * palm.length)]				
				result = fs.readFileSync(`./sticker/reac/palm/${palma}.mp4`)
cnf.sendMessage(from, result, video, { quoted: freply, caption: `${pushname} le esta dando unas palmaditas a @${mentioned[0].split('@')[0]}`})
				addFilter(from)
          break
case 'besar':
case 'beso':
case 'besa':		
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) return reply('etiqueta')  
const bes = ['bes1','bes2','bes3','bes4','bes5','bes6','bes7']
	const beso = bes[Math.floor(Math.random() * bes.length)]				
				result = fs.readFileSync(`./sticker/reac/beso/${beso}.mp4`)
cnf.sendMessage(from, result, video, { quoted: freply, caption: `${pushname} esta besando a @${mentioned[0].split('@')[0]}`})
				addFilter(from)
          break
case 'remlogo':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx5?apikey=hardianto&text=${txt}`)
                    cnf.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'butterflytext':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.olabdev.my.id/api/oxy/butterfly?text=${txt}&apikey=hH2IYthq`)
                    cnf.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
                    case 'hacked':
              if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins) return reply(`Solo adm`)
              if (!isBotGroupAdmins) return reply(`Solo adm `)
              if (args.length < 1) return reply('Texto?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   cnf.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                cnf.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                cnf.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                cnf.sendMessage(from, 'exito Hacked', text, {quoted: mek})
					break
  case 'glitch':
					var gh = body.slice(8)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`Ejemplo: ${prefix + command} Kriz`)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.me/api/gtext?apikey=ApiBotIndo&text1=${gli}&text2=${tch}`)
					cnf.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break
case 'puta':			 
					const puuta =['Eres 0% puta' , 'Eres 1% puta' , 'Eres 88% puta' , 'Eres 89% puta' , 'Eres 90% puta' , 'Eres 91% puta' , 'Eres 92% puta' , 'Eres 93% puta' , 'Eres 94% puta' , 'Eres 95% puta' , 'Eres 96% puta' , 'Eres 97% puta' , 'Eres 98% puta' , 'Eres 99% puta' , 'Eres 100% puta','Eres infinitamente puta!']									
					const gaii = puuta[Math.floor(Math.random() * puuta.length)]
					wiw = fs.readFileSync(`./cnf.jpg`)
					cnf.sendMessage(from, wiw, image, { quoted: mek, caption: '*Que tan puta eres*\n\n'+ gaii })					
                    break

                    case 'lesbi':		
                    const cuu =['Eres 0% Lesbi' , 'Eres 1% Lesbi' , 'Eres 2% Lesbi' , 'Eres 3% Lesbi' , 'Eres 4% Lesbi' , 'Eres 5% Lesbi' , 'Eres 6% Lesbi' , 'Eres 7% Lesbi' , 'Eres 8% Lesbi' , 'Eres 9% Lesbi' , 'Eres 10% Lesbi' , 'Eres 11% Lesbi' , 'Eres 12% Lesbi' , 'Eres 13% Lesbi' , 'Eres 14% Lesbi' , 'Eres 15% Lesbi' , 'Eres 16% Lesbi' , 'Eres 17% Lesbi' , 'Eres 18% Lesbi' , 'Eres 19% Lesbi' , 'Eres 20% Lesbi' , 'Eres 21% Lesbi' , 'Eres 22% Lesbi' , 'Eres 23% Lesbi' , 'Eres 24% Lesbi' , 'Eres 25% Lesbi' , 'Eres 26% Lesbi' , 'Eres 27% Lesbi' , 'Eres 28% Lesbi' , 'Eres 29% Lesbi' , 'Eres 30% Lesbi' , 'Eres 31% Lesbi' , 'Eres 32% Lesbi' , 'Eres 33% Lesbi' , 'Eres 34% Lesbi' , 'Eres 35% Lesbi' , 'Eres 36% Lesbi' , 'Eres 37% Lesbi' , 'Eres 38% Lesbi' , 'Eres 39% Lesbi' , 'Eres 40% Lesbi' , 'Eres 41% Lesbi' , 'Eres 42% Lesbi' , 'Eres 43% Lesbi' , 'Eres 44% Lesbi' , 'Eres 45% Lesbi' , 'Eres 46% Lesbi' , 'Eres 47% Lesbi' , 'Eres 48% Lesbi' , 'Eres 49% Lesbi' , 'Eres 50% Lesbi' , 'Eres 51% Lesbi' , 'Eres 52% Lesbi' , 'Eres 53% Lesbi' , 'Eres 54% Lesbi' , 'Eres 55% Lesbi' , 'Eres 56% Lesbi' , 'Eres 57% Lesbi' , 'Eres 58% Lesbi' , 'Eres 59% Lesbi' , 'Eres 60% Lesbi' , 'Eres 61% Lesbi' , 'Eres 62% Lesbi' , 'Eres 63% Lesbi' , 'Eres 64% Lesbi' , 'Eres 65% Lesbi' , 'Eres 66% Lesbi' , 'Eres 67% Lesbi' , 'Eres 68% Lesbi' , 'Eres 69% Lesbi' , 'Eres 70% Lesbi' , 'Eres 71% Lesbi' , 'Eres 72% Lesbi' , 'Eres 73% Lesbi' , 'Eres 74% Lesbi' , 'Eres 75% Lesbi' , 'Eres 76% Lesbi' , 'Eres 77% Lesbi' , 'Eres 78% Lesbi' , 'Eres 79% Lesbi' , 'Eres 80% Lesbi' , 'Eres 81% Lesbi' , 'Eres 82% Lesbi' , 'Eres 83% Lesbi' , 'Eres 84% Lesbi' , 'Eres 85% Lesbi' , 'Eres 86% Lesbi' , 'Eres 87% Lesbi' , 'Eres 88% Lesbi' , 'Eres 89% Lesbi' , 'Eres 90% Lesbi' , 'Eres 91% Lesbi' , 'Eres 92% Lesbi' , 'Eres 93% Lesbi' , 'Eres 94% Lesbi' , 'Eres 95% Lesbi' , 'Eres 96% Lesbi' , 'Eres 97% Lesbi' , 'Eres 98% Lesbi' , 'Eres 99% Lesbi' , 'Eres 100% Lesbi']														
                	const rii = cuu[Math.floor(Math.random() * cuu.length)]
					wnw = fs.readFileSync(`./cnf.jpg`)						
					cnf.sendMessage(from, wnw, image, { caption: '*Que tan lesbi eres*\n\n'+ rii, quoted: mek })					
                    break                                      
	
                    									
   					case 'verdad':
					const trrut =['Con quien de los que estan aqui en el grupo te besarias? (etiqueta)','🌾Alguna vez te ha gustado alguien? 🥺Cuanto tiempo?','Alunga vez te llego a gustar el/la herman@ de tu mejor amig@?','Cuantos años tienes?','Cuanto tiempo ah pasado desde que diste tu ultimo beso?','Te gustan los chicos o las chicas o ambos?','Que opinas sobre BTS','Que opinas sobre l@s administradores','Tienes novi@?','Cuantas veces te as sentido ignorad@ por tu pareja o insuficiente para el/ella?','Que opinas de la nueva pol�tica de Whatsapp?','Que opinas sobre Telegram?','Tienes canal de Youtube?','Que opinas sobre Este bot?','Que opinas sobre el grupo?','Que tal te parece esta funci�n de verdad o reto?']
					const ttrrth = trrut[Math.floor(Math.random() * trrut.length)]
					wuw = fs.readFileSync(`./cnf.jpg`)
                   break
         
case 'sandwrite':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/sandw?apikey=ApiBotIndo&text=${txt}`)
                    cnf.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'silverplaybutton':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                  buffer = await getBuffer(`https://api.zeks.me/api/splaybutton?apikey=ApiBotIndo&text=${txt}`)
                    cnf.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'text3d2':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/text3d?apikey=ApiBotIndo&text=${txt}`)
                    cnf.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
   case 'logofree':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/epep?apikey=ApiBotIndo&text=${txt}`)
                    cnf.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'dropwater':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/dropwater?apikey=ApiBotIndo&text=${txt}`)
                    cnf.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
 case 'lolilogo':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx2?apikey=hardianto&nama=${txt}`)
                    cnf.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'text3d':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/text3dbox?apikey=ApiBotIndo&text=${txt}`)
                    cnf.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'lihttext':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/lithgtext?apikey=ApiBotIndo&text=${txt}`)
                    cnf.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'goldplaybutton':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/gplaybutton?apikey=ApiBotIndo&text=${txt}`)
                    cnf.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'woodtext':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.olabdev.my.id/api/oxy/wood?text=${txt}&apikey=hH2IYthq`)
                    cnf.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'leavest':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/leavest?apikey=ApiBotIndo&text=${txt}`)
                    cnf.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'kanekilogo':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx1?apikey=hardianto&nama=${txt}`)
                    cnf.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'lavatext':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.dapuhy.ga/api/textpro/lava?text=${txt}&apikey=wf2tghNhfU`)
                    cnf.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'sadlogo':
					var gh = body.slice(9)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`Ejemplo: ${prefix + command} Kriz`)
					reply(mess.wait)
					buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx3?apikey=hardianto&text1=${gli}&text2=${tch}`)
					cnf.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break
case 'wolflogo':
					var gh = body.slice(10)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`Ejemplo: ${prefix + command} Kriz`)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.me/api/wolflogo?apikey=ApiBotIndo&text1=${gli}&text2=${tch}`)
					cnf.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break
case 'waifulogo':
					var gh = body.slice(11)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`Ejemplo: ${prefix + command} Kriz`)
					reply(mess.wait)
					buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx4?apikey=hardianto&text1=${gli}&text2=${tch}`)
					cnf.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break
case  'rankgay':
          if (!isGroup) return reply(mess.only.group)
          tuh = fs.readFileSync(`./stik/gay.jpg`)
          jds = []
          const Z11 = groupMembers
          const U11 = groupMembers
          const T11 = groupMembers
          const F11 = Z11[Math.floor(Math.random() * Z11.length)]           
          const G22 = U11[Math.floor(Math.random() * U11.length)]
          const H33 = T11[Math.floor(Math.random() * T11.length)]
          D11 = `LISTA GAY\nTop de los mas gays del grupo ??🙃\n@${F11.jid.split('@')[0]} \n\n@${G22.jid.split('@')[0]}\n\n@${H33.jid.split('@')[0]}\nELLOS SON GAYS`                  
          jds.push(F11.jid)
          jds.push(G22.jid)
          jds.push(H33.jid)
          cnf.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${D11}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        addFilter(from)
          break
case 'restart':
             if (!isOwner) return reply('Solo mi creador puede utilizar este comando')
             reply(mess.wait)
             exec(`node main`)
             reply('_Bot reiniciado con éxito_')
break       

case 'isbaileys': 
case 'bail': 
case 'baileys':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!mek.key.fromMe) return;
reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!mek.key.fromMe) return;
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'facebook':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
  reply('https://www.facebook.com/Kriz.Bl.787')
break
   
case 'owner':
           case 'creator':
           case 'creador':
           case 'kriz':             
               sendKontak(from, `${owner}`, `${fakeyoi}`, 'Creador Del Bot')
               await sleep(1000)
               haibg =`Hola ${pushname}\nEse es mi dueño, ¡NO SPAM!`
               buttons = [{buttonId: `menu`,buttonText:{displayText: 'Menu 🌾'},type:1},]
               buttonsMessage = { contentText: `${haibg}`, footerText: `Creado por ${fakeyoi} 🌾`, buttons: buttons, headerType: 1 }
               prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{})
               cnf.relayWAMessage(prep)
               break     
case 'lock':
 ikymemek = {
  "key": {
    "fromMe": false,
    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
  },
  "message": {
    "viewOnceMessage": {
      "message": {
        "imageMessage": {
          "url": "https://mmg.whatsapp.net/d/f/AjD3dQIM5hW3UkDfnnkice-eMcsMJJALEcgD9HnDGZEp.enc",
          "mimetype": "image/jpeg",
          "fileSha256": "aR3vWUsV9VZUiR+agYok8oM4UHiuhqEShMpQ6SgY9WM=",
          "fileLength": "675",
          "height": 41,
          "width": 52,
          "mediaKey": "6RDG8T+jOb0RfleWzLTclsaVn0EGRA/v78dnS+Y4S+o=",
          "fileEncSha256": "idNxqNtCaHRxuN+AX0uakPrBuiyvx84IksPUYMYgs7Y=",
          "directPath": "/v/t62.7118-24/13810909_985978368802545_7608967834334288292_n.enc?ccb=11-4&oh=359274a24041d97e91597ad1fb40e784&oe=61595B99",
          "mediaKeyTimestamp": "1630826390",
          "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACkANAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgAAAAAAAAAAAf/EABQQAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQEAAT8AK//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQIBAT8AT//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQMBAT8AT//Z",
          "viewOnce": true
        }
      }
    }
  },
  "messageTimestamp": "1630826389",
  "status": "SERVER_ACK",
  "mediaData": {
    "localPath": "/data/user/0/com.gbwhatsapp/files/ViewOnce/IMG-20210905-WA0047.jpg"
  }
}
cnf.sendMessage(from, { "degreesLatitude": '', "degreesLongitude": '', "jpegThumbnail": iye}, MessageType.location, {quoted: ikymemek})
           break
case 'mengyoi':
if (!mek.key.fromMe) return;
sendBug(from)
break
case 'buggc':
if (!mek.key.fromMe) return;
if (!q) return reply('Falta la ID de el grupo')
sendBug(args[0])
break
case 'okvirtex':
if (!isOwner && !mek.key.fromMe) return reply('Solo el propietario puede usar esta función')
katalog(`${ngazap(prefix)}`)
katalog(`${emoji2(prefix)}`)
katalog(`${virtex90(prefix)}`)
katalog(`${virtex2(prefix)}`)
katalog(`${virtex3(prefix)}`)
katalog(`${virtex4(prefix)}`)
katalog(`${virtex5(prefix)}`)
katalog(`${virtex6(prefix)}`)
katalog(`${virtex7(prefix)}`)
katalog(`${virtex8(prefix)}`)
katalog(`${virtex9(prefix)}`)
katalog(`${virtag(prefix)}`)
break
case 'buglink':
                if (!isOwner && !mek.key.fromMe) return reply('Solo el propietario puede usar esta función')
                 cnf.toggleDisappearingMessages(from, 0)
               cnf.sendMessage(from, virtex3(prefix), text, { quoted:ftrol, contextInfo :{text: 'Kriz Edits',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${virtex2(prefix)}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/QJRWXb9/IMG-20211107-WA0044.jpg",
                "thumbnail": fs.readFileSync(`./cnf.jpg`),
                "sourceUrl": "https://youtube.com/channel/UCUVLZPvYER99xTf2Op_TdHA"}}})
                break
        case 'bugbutton':
        if (!isOwner && !mek.key.fromMe) return reply('Solo el propietario puede usar esta función')
        cnf.toggleDisappearingMessages(from, 0)
        sendButLocation(from, `${ngazap(prefix)}`, `${virtag(prefix)}`, {jpegThumbnail:iye}, [{buttonId:`bbaij72njnwjibdo16830nslm1782`,buttonText:{displayText:'Kriz Jaker'},type:1}])
        cnf.toggleDisappearingMessages(from, 0)
break
case 'bugrow':
if (!isOwner && !mek.key.fromMe) return reply('Solo el propietario puede usar esta función')
cnf.toggleDisappearingMessages(from, 0)
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: `${emoji2(prefix)}`,
 description: `${virtex6(prefix)}`,
 sections: [
                     {
                      "title": "CieDick",
 rows: [
                          {
                              "title": "CieBug",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
cnf.sendMessage(from, listMsg, MessageType.listMessage, {quoted:ftrol})
cnf.toggleDisappearingMessages(from, 0)
break

case 'bugcatalog':
if (!isOwner && !mek.key.fromMe) return reply('Solo el propietario puede usar esta función')
cnf.toggleDisappearingMessages(from, 0)
 babi = (teks) => {
             res = cnf.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 9999999, "message": teks, "footerText": `${emoji2(prefix)}`, "thumbnail": iye, "surface": 'CATALOG' }}, {quoted: {
  key: {
   participant: '0@s.whatsapp.net' 
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${virtex6(prefix)}`,
    orderTitle: `${emoji2(prefix)}`,
    sellerJid: '0@s.whatsapp.net' 
   }
  }
 }
})
             cnf.relayWAMessage(res)
        }
        babi(`${ngazap(prefix)}`)
        babi(`${virtag(prefix)}`)
        babi(`${virtex6(prefix)}`)
        babi(`${emoji2(prefix)}`)
        break
       
              case 'dado':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			cnf.sendMessage(from, damdu, sticker, {quoted: mek})
			break
case 'command':
 listMsg = {
 buttonText: '𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨',
 footerText: '𝘉𝘰𝘵 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 🌾',
 description: `Hola @${sender.split('@')[0]}, Seleccione el menú aquí`,
 sections: [
                     {
                      "title": `Bot WhatsApp`,
 rows: [
                           {
                              "title": "Speed",
                              "rowId": ""
                           },
                           {
                              "title": "Status",
                              "rowId": ""
                           },
                           {
                              "title": "Creator",
                              "rowId": ""
                           },
                           {
                              "title": "serbot",
                              "rowId": ""
                           },
                           {
                              "title": "Runtime",
                              "rowId": ""
                           },
                           {
                              "title": "OwnerMenu",
                              "rowId": ""
                           },
                           {
                              "title": "MakerMenu",
                              "rowId": ""
                           },
                           {
                              "title": "GroupMenu",
                              "rowId": ""
                           },
                           {
                              "title": "OtherMenu",
                              "rowId": ""
                           },
                           {
                              "title": "DownloadMenu",
                              "rowId": "d"
                           },
                        ]
                     }],
 listType: 1
}
cnf.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:ftrol})
break
case 'downloadmenu':
menu = `🌿𝘔𝘦𝘯𝘶 𝘥𝘦 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘴🌿
🌾${prefix}play texto

🌾${prefix}play2 texto

🌾${prefix}instagram <link>

🌾${prefix}twitter <link>
`
sendButMessage(from, menu, `Bot Whatsappp`, [
          {
            buttonId: `command`,
            buttonText: {
              displayText: `⬡ VOLVER AL MENU ︎`,
            },
            type: 1,
          },]);
break
case 'groupmenu':
menu = `🌿𝘎𝘳𝘶𝘱𝘰 𝘔𝘦𝘯𝘶︎🌿
🌾${prefix}grupo

🌾${prefix}promote @tag

🌾${prefix}demote @tagAdmin

🌾${prefix}nsfw 1/0

🌾${prefix}kick @tag

🌾${prefix}add numero

🌾${prefix}getbio

🌾${prefix}getname

🌾${prefix}alarma

🌾${prefix}listonline

🌾${prefix}antilink

🌾${prefix}tod 

🌾${prefix}autojoin
`
sendButMessage(from, menu, `𝘉𝘰𝘵 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 🌾`, [
          {
            buttonId: `command`,
            buttonText: {
              displayText: `⬡ VOLVER AL MENU `,
            },
            type: 1,
          },]);
break
case 'ownermenu':
menu = `シ︎𝘊𝘳𝘦𝘢𝘥𝘰𝘳 𝘔𝘦𝘯𝘶シ︎
🌾${prefix}off

🌾${prefix}isbaileys

🌾${prefix}banchat

🌾${prefix}unbanchat

🌾${prefix}listbc

🌾${prefix}antidelete on/off

🌾${prefix}autotype on/off

🌾${prefix}autoread

🌾${prefix}autovn on/off

🌾${prefix}anticall on/off

🌾${prefix}getcaption

🌾${prefix}bugcatalog

🌾${prefix}on

🌾${prefix}status

🌾${prefix}setthumb

🌾${prefix}settarget

🌾${prefix}setfakeimg

🌾${prefix}setreply

🌾${prefix}setprefix

🌾${prefix}modo

🌾${prefix}term <code>

🌾${prefix}eval <code>
`
sendButMessage(from, menu, `𝘉𝘰𝘵 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 🌾`, [
          {
            buttonId: `command`,
            buttonText: {
              displayText: `⬡ VOLVER AL MENU `,
            },
            type: 1,
          },]);
break
case 'othermenu':
menu = `🌿𝘔𝘦𝘯𝘶 𝘷𝘢𝘳𝘪𝘢𝘥𝘰🌿
🌾${prefix}ping

🌾${prefix}inspect

🌾${prefix}join

🌾${prefix}quote

🌾${prefix}writeleft text

🌾${prefix}folioleft text

🌾${prefix}folioright text

🌾${prefix}songlyrics <texto>

🌾${prefix}loli 

🌾${prefix}debug

🌾${prefix}chat 598|texto

🌾${prefix}get url

🌾${prefix}ytsearch <texto>

🌾${prefix}play <texto>

🌾${prefix}video <texto>

🌾${prefix}igstory <nombre de usuario>

🌾${prefix}twitter <link>

🌾${prefix}image <texto>

🌾${prefix}anime <random>

🌾${prefix}pinterest <texto>

🌾${prefix}lyrics <texto>

🌾${prefix}playstore <texto>
`
sendButMessage(from, menu, `𝘉𝘰𝘵 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 🌾`, [
          {
            buttonId: `command`,
            buttonText: {
              displayText: `⬡ VOLVER AL MENU `,
            },
            type: 1,
          },]);
break
case 'makermenu':
menu = `🌿Creador Menu🌿
🌾${prefix}𝙨𝙩𝙞𝙘𝙠𝙚𝙧

🌾${prefix}𝙧𝙤𝙗𝙖𝙧 <𝙖𝙪𝙩𝙝𝙤𝙧|𝙥𝙖𝙘𝙠𝙣𝙖𝙢𝙚>

🌾${prefix}attp text

🌾${prefix}emoji

🌾${prefix}glow text

🌾${prefix}summer text

🌾${prefix}coffeecup2 text


🌾${prefix}write text

🌾${prefix}waifu
`
sendButMessage(from, menu, `𝘉𝘰𝘵 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 🌾`, [
          {
            buttonId: `command`,
            buttonText: {
              displayText: `⬡ VOLVER AL MENU `,
            },
            type: 1,
          },]);
break

      //------------------< Sticker Cmd >-------------------
      case "addcmd":
      case "setcmd":
        if (isQuotedSticker) {
          if (!q)
            return reply(`Use : ${command}comando`);
          var kodenya =
            mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          fakestatus("Listo!");
        } else {
          reply("Etiqueta un sticker");
        }
        break;

      case "delcmd":
        if (!isQuotedSticker)
          return reply(`Usar : ${command} etiqueta un sticker`);
        var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        fakestatus("Listo!");
        break;
      case "listcmd":
        teksnyee = `\`\`\`「 LISTA De CMD STICKER 」\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
        // banchat
case 'banchat':
if (!isGroup) return reply('esta función es solo para grupos')
if (!itsMe && !isOwner && !isGroupAdmins)return mentions(`*Esta función es especialmente para el propietario. @${ownerN}!*`, [`${ownerN}@s.whatsapp.net`], true)
//if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isBanchat) return reply(`Ya Baneado`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Ban exitoso en este grupo`)
break

case 'unbanchat':
if (!itsMe && !isOwner)return reply('Solo el propietario puede usar esta función')
if (!isBanchat) return reply(`Ya habia sido desbaneado`)
let ubc = bancht.indexOf(from)
bancht.splice(ubc, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`El bot ha sido Desbaneado aca`)
break

case 'listbanchat': case 'listbc':
 teks = `*Lista de Chats baneados!*\n_Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await cnf.groupMetadata(i)
teks += 'Id : ' + i + '\n'
teks += 'Nombre : ' + met.subject + '\n\n'
}
reply(teks)
break

					case 'tagall':
					if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
					if (!isGroup) return reply('esta función es solo para grupos')
					if (!isGroupAdmins) return reply('solo el administrador puede usar esta función')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `🦄 @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					//by Kriz
					          case 'phcomment':
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz|xd*`)
                   var F = body.slice(10)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/phub?apikey=${zeksApikey}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                  cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo`, quoted: mek})
                   break
                           case 'wolf':
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(6)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/wolflogo?apikey=${zeksApikey}&text1=zeeoneofc&text2=${F}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo`, quoted: mek})
                   break
         case 'tfire':  
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/tfire?text=${F}&apikey=${zeksApikey}`)                   
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break             
       case 'ytsilver':
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(10)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/splaybutton?text=${F}&apikey=${zeksApikey}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 'leavest':  
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(9)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/leavest?text=${F}&apikey=${zeksApikey}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break                     
                                  
      case "antilink":
        if (!isGroup) return reply("Solo puede ser utilizado en Grupos");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Solo puede ser utilizado por un administrador");
        if (args[0] == "on") {
          if (isAntilink) return reply("Activado!!");
          antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("¡Activar con éxito el antienlace!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("¡Desactive con éxito el antienlace!");
        } else if (!q) {
          sendButMessage(from, `MODO ANTILINK`, `Por favor elige uno`, [
            {
              buttonId: `antilink on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `antilink off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
       case 'autotype':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply('on/off')
if (args[0] === "on") {
if (autoketik === true) return
autoketik = true
reply(`Activar autotype con éxito`)
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(`Exitó al apagar el autotype`)
} else {
reply(`on/off`)
}
break
case 'autovn':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply('on/off')
if (args[0] === "on") {
if (autovn === true) return
autovn = true
reply(`autovn ah sido activado con exito`)
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(`autovn ah sido desactivado con exitó`)
} else {
reply(`on/off`)
}
break
case 'anticall':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('on/off')
if (args[0] === "on") {
if(antical)return reply('Ha sido activado antes!')
antical = true
reply(`Anti llamadas activado con éxito`)
} else if (args[0] === "off") {
if(!antical)return reply('Ha sido desactivado antes!')
antical = false
reply(`Apagado con éxito la función anti llamadas`)
} else {
reply(`on/off`)
}
break

      case "autojoin":
        if (!isGroup) return reply("Solo puede ser utilizado en grupos");
        if (!mek.key.fromMe) return reply("Esta función es solo para el propietario.");
        if (args[0] == "on") {
          if (autojoin == true) return reply("Activada!!");
          autojoin = true;
          reply("Unión automática activada con éxito!");
        } else if (args[0] == "off") {
          autojoin = false;
          reply("Se desactivó la unión automática con éxito!");
        } else if (!q) {
          sendButMessage(from, `MODO DE ENTRADA A GRUPOS AUTOMÁTICA`, `Por favor elige uno`, [
            {
              buttonId: `autojoin on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `autojoin off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;

      //------------------< Fitur Grup >-------------------
      case 'listonline': 
if (!isGroup) return reply(`*Solo puede ser utilizado en grupos*`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(cnf.chats.get(ido).presences), cnf.user.jid]
             cnf.sendMessage(from, '*Lista de activos:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case "q":
        if (!m.quoted) return reply("Etiqueta un mensaje!");
        let qse = cnf.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("el mensaje que respondió no contiene una respuesta!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
      case "kick":
        if (!isGroup) return reply('esta función es solo para grupos');
        if (!isGroupAdmins && !mek.key.fromMe) return reply('Solo puede ser utilizado por un administrador can use this feature');
        if (!isBotGroupAdmins) return reply("No soy administrador");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Etiqueta el objetivo que quieres eliminar!");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          cnf.groupRemove(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          cnf.groupRemove(from, [anu]);
          reply(mess.success);
        } else {
          cnf.groupRemove(from, mentioned);
          reply(mess.success);
        }
        break;
      case "add":
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
			if (!isGroup) return reply('esta función es solo para grupos')
			if (!isGroupAdmins) return reply('Solo un administrador de el grupo puede usarlo')
			if (!isBotGroupAdmins) return reply('No sou admin')
			if (args.length < 1) return reply('Falta el número')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						cnf.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('No se pudo agregar, tal vez porque es privado🤔')
					}
					break;
case 'igstory': 
            if(!q) return reply('Donde esta el nombre de usuario??')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    cnf.sendMessage(from,link,video,{quoted: mek,caption: `Tipo : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    cnf.sendMessage(from,link,image,{quoted: mek,caption: `Tipo : ${i.type}`})                  
                }
            }
            });
            break
case 'linkwa':
            if(!q) return reply('¿Qué grupo estás buscando?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nombre*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
      case "getbio":
        var yy = mek.message.extendedTextMessage.contextInfo.participant;
        var p = await cnf.getStatus(`${yy}`, MessageType.text);
        reply(p.status);
        if (p.status == 401) {
          reply("Perfil de estado no encontrado");
        }
        break;
        //get grup desc
        case 'getdeskgc':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
				if (!isGroup) return reply('esta función es solo para grupos')
					anu = from
			   metadete = await cnf.groupMetadata(anu)
				cnf.sendMessage(from, metadete.desc, text, {quoted:mek})
				  break
      // Get Name
      case "getname":
        var ambl = mek.message.extendedTextMessage.contextInfo.participant;
        const sname =
          cnf.contacts[ambl] != undefined
            ? cnf.contacts[ambl].sname || cnf.contacts[ambl].notify
            : undefined;
        reply(sname);
        break;

      // Info
      case "infogrupo":
        if (!isGroup) return;
        ppUrl = await cnf.getProfilePicture(from); 
        buffergbl = await getBuffer(ppUrl);
        cnf.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `\`\`\`「 INFO 」\`\`\`\n*•> Nombre* : ${groupName}\n*•> Miembros* : ${groupMembers.length}\n*•> Admins* : ${groupAdmins.length}\n*•> Descripción* : \n\n${groupDesc}`,
        });
        break;
      // Demote Admins
      case "demote":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Solo administrador de el grupo puede usarlo");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("No soy administrador");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Etiqueta a un admin");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        cnf.groupDemoteAdmin(from, [mentionede]);
        teks = `@${mentionede.split("@")[0]} ya no es administrador`;
        cnf.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      
      case "promote":
        if (!isGroupAdmins) return reply("Solo administrador de el grupo puede usarlo");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("No soy administrador");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Etiqueta");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        cnf.groupMakeAdmin(from, [mentionede]);
        teks = `@${mentionede.split("@")[0]} Ahora es administrador `;
        cnf.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      case "closegc":
        if (!isGroupAdmins) return reply("Solo puede ser utilizado por un administrador");
        if (!isBotGroupAdmins) return reply("No soy administrador");
        if (!isGroup) return;
        reply(`*GRUPO CERRADO*`);
        cnf.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;
      case "anular":
        if (!isGroupAdmins) return reply("Solo puede ser utilizado por un administrador");
        if (!isBotGroupAdmins) return reply("No soy admin");
        if (!isGroup) return;
        cnf.revokeInvite(from);
        reply("```El link de el grupo ah sido renovado```");
        break;
      case "opengc":
        if (!isGroupAdmins) return reply("Solo puede ser utilizado por un administrador");
        if (!isBotGroupAdmins) return reply("Bot no es administrador");
        if (!isGroup) return;
        reply(`*GRUPO ABIERTO*`);
        cnf.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
      case "alarma":
        if (!q)
          return reply(
            `Use :\n${prefix}reminder text/2s\n\nNOTA: \n*s* - segundos\n*m* - minutos\n*h* - horas\n*d* - dias`
          );
        teks = body.slice(8);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Texto";
        if (isQuotedImage) typeRemind = "Imagen";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Texto";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await cnf.sendMessage(
            from,
            `── 「 RECORDATORIO 」 ──
    
Recordatorio activado con éxito!
➸ Mensaje: ${messRemind}
➸ Tipo: Texto
➸ Duracion: ${parsedTime.hours} Horas ${parsedTime.minutes} Minutos ${
              parsedTime.seconds
            } Segundos
➸ De: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              cnf.sendMessage(
                from,
                `── 「 RECORDATORIO 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Mensaje: ${messRemind}
➸ Tipo: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await cnf.downloadAndSaveMediaMessage(encmedia);
          await cnf.sendMessage(
            from,
            `── 「 RECORDATORIO 」 ──
    
¡Recordatorio activado con éxito!
➸ Mensaje: ${messRemind}
➸ Tipo: Sticker
➸ Duracion: ${parsedTime.hours} Horas ${parsedTime.minutes} Minutos ${
              parsedTime.seconds
            } Segundos
➸ De: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              cnf.sendMessage(
                from,
                `── 「 RECORDATORIO 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Mensaje: ${messRemind}
➸ Tipo: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              cnf.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await cnf.downloadAndSaveMediaMessage(encmedia);
          await cnf.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
¡Recordatorio activado con éxito!
➸ Mensaje: ${messRemind}
➸ Tipo: Imagen
➸ Duracion: ${parsedTime.hours} Horas ${parsedTime.minutes} Minutos ${
              parsedTime.seconds
            } Segundos
➸ De: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 RECORDATORIO 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Mensaje: ${messRemind}
➸ Tipo: ${reminder.getReminderType(sender, _reminder)}`;
              cnf.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await cnf.downloadAndSaveMediaMessage(encmedia);
          await cnf.sendMessage(
            from,
            `── 「 RECORDATORIO 」 ──
    
¡Recordatorio activado con éxito!
➸ Mensaje: ${messRemind}
➸ Tipo: Audio
➸ Duración: ${parsedTime.hours} Horas ${parsedTime.minutes} Minutos ${
              parsedTime.seconds
            } Segundos
➸ De: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              cnf.sendMessage(
                from,
                `── 「 RECORDATORIO 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Mensaje: ${messRemind}
➸ Tipo: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              cnf.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
case 'size':
if (args.length < 1) return reply('Ingrese los números')
filsize = args[0]
costick = await cnf.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:fgif})
cnf.relayWAMessage(costick)
break

case 'sizeimg':
if (args.length < 1) return reply('Ingrese los números')
filsizei = args[0]
costick3 = await cnf.prepareMessageFromContent(from,{
"imageMessage": {
	"url": m.quoted.url,
	"mimetype": m.quoted.mimetype,
	"caption": m.quoted.caption,
	"fileSha256": m.quoted.fileSha256.toString('base64'),
	"fileLength": filsizei,
	"height": m.quoted.height,
	"width": m.quoted.width,
	"mediaKey": m.quoted.mediaKey.low,
	"jpegThumbnail": m.quoted.jpegThumbnail
}
}, {quoted:ftroli})
cnf.relayWAMessage(costick3)
break
      case "rentbot":
        if (mek.key.fromMe) return reply("No puede ser un bot el alquiler en un bot");
        jadibot(reply, cnf, from);
        break;
      case "stoprentbot":
        if (!mek.key.fromMe)
          return reply("no puedo dejar de ser bot excepto que el dueño me ordene");
        stopjadibot(reply);
        break;
      case "listbot":
        let tekss = "「 *LISTA USUARIO RENT* 」\n";
        for (let i of listjadibot) {
          tekss += `*Numero* : ${i.jid.split("@")[0]}
*Nombre* : ${i.name}
*Dispositivo* : ${i.phone.device_manufacturer}
*Modelo* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;

      //------------------< Funciones que usan botones >-------------------
      
	case 'chat':
			if (args.length < 1) return reply(`Usar ${prefix}chat 598#### | text`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            cnf.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Enviar chat con éxito:\n${org},@${nomor}`)
            break
case 'viewonce':
res = await cnf.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": iye,
"viewOnce": true
}
}
}
}, {}) 
cnf.relayWAMessage(res)
break
case 'hbd': 
case 'zodiak': 
case 'zodiac': 
case 'signo':
let textus = args.join(" ")
if (!q) return reply(`Ejemplo : ${prefix + command} 1999 04 23`)
const zodiak = [
    ["Capricornio",   new Date(1970, 0, 1)],
    ["Acuario",    new Date(1970, 0, 20)],
    ["Piscis",      new Date(1970, 1, 19)],
    ["Aries",       new Date(1970, 2, 21)],
    ["Tauro",      new Date(1970, 3, 21)],
    ["Géminis",      new Date(1970, 4, 21)],
    ["Cancer",      new Date(1970, 5, 22)],
    ["Leo",         new Date(1970, 6, 23)],
    ["Virgo",       new Date(1970, 7, 23)],
    ["Libra",       new Date(1970, 8, 23)],
    ["Scorpio",     new Date(1970, 9, 23)],
    ["Sagitario", new Date(1970, 10, 22)],
    ["Capricornio",   new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
const okbg = new Date(textus)
if (okbg == 'Datos inválidos') throw date
const d = new Date()
const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
const birth = [okbg.getFullYear(), okbg.getMonth() + 1, okbg.getDate()]
    
const zodiac = getZodiac(birth[1], birth[2])
const ageD = new Date(d - date)
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Feliz cumpleaños🥳🎉` : age

const teksh = `
Nacimiento : ${birth.join('-')}
Próximo cumpleaños: ${birthday.join('-')}
Edad : ${cekusia}
Signo : ${zodiac}
`.trim()
reply(monospace(teksh))
break
// debug
case 'debug':
   res = await cnf.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": "",
          "url": ""
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `Hola ${pushname} 👋,\n\n${jam} - ${week} ${weton} - ${date}`,
    "hydratedFooterText": `${fakeyoi}`,
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": `Script ${fakeyoi}`,
          "url": "https://github.com/KrizBots"
        },
        "index": 0
      }
    ]
  }
}
}, {})
cnf.relayWAMessage(res)
break
			
              
                 break
			      case "modo":
        if (!owner) return;
        sendButMessage(from, `MODO PRIVADO/PUBLICO`, `Por favor elige uno`, [
          {
            buttonId: `self`,
            buttonText: {
              displayText: `MODO-PRIVADO`,
            },
            type: 1,
          },
          {
            buttonId: `public`,
            buttonText: {
              displayText: `MODO-PUBLICO`,
            },
            type: 1,
          },
        ]);
        break;

      case "grupo":
        if (!isGroupAdmins) return reply('solo el administrador puede usar esta función')
        sendButMessage(from, `AJUSTES DE GRUPO`, `Por favor elige uno`, [
          {
            buttonId: `opengc`,
            buttonText: {
              displayText: `Abrir Grupo`,
            },
            type: 1,
          },
          {
            buttonId: `closegc`,
            buttonText: {
              displayText: `Cerrar Grupo`,
            },
            type: 1,
          },
          {
            buttonId: `revoke`,
            buttonText: {
              displayText: `Anular Link`,
            },
            type: 1,
          },
        ]);
        break;
      //Fin
      //------------------< Descargas >-------------------
      case "tiktok":
        if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${args[0]}`
        );
        var b = bv.result.author_metadata;
        var tamnel = await getBuffer(
          bv.result.media_resources.image.contentUrl
        );
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `⚜️ *Nombre de usuario*: ${b.username}\n❤️ *Like*: ${a.stats.diggCount}\n💬 *Comentarios*: ${a.stats.commentCount}\n🔁 *Compartir*: ${a.stats.shareCount}\n🎞️ *Vistas*: ${a.stats.playCount}`,
          `Elija el formato que desea descargar`,
          tamnel,
          [
            {
              buttonId: `tiktokdl ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `tiktokdl ${args[0]}|audio`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
        break;

           
      case "twitter":
        if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Donde esta el link?");
        ten = args[0];
        var res = await hx.twitter(`${ten}`);
        ren = `${g.HD}`;
        sendMediaURL(from, ren, "Listo");
        break;
      case "facebook":
        if (!q) return reply("Donde está el link?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "instagram":
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Donde esta el link?");
        reply(mess.wait);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              cnf.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Tipo : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              cnf.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Tipo : ${i.type}`,
              });
            }
          }
        });
        break;
      case "tiktokdl":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${link}`
        );
        if (tipe == "audio") {
          sendMediaURL(from, bv.result.media_resources.music.playUrl, "");
        }
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.video.videoUrl, "");
        }
        break;
case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return reply('Solo el propietario puede usar esta función')
       if (args.length < 1) return reply(`Opciones :\n=> multi\n=> nopref`)
           if (c === 'multi'){
              multi = true
                    reply(`Prefix cambiado exitosamente a ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Prefix cambiado exitosamente a ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    reply(`Prefix cambiado exitosamente a ${c}`)
                }
                break
      
      case "delvote":
        if (!mek.key.remoteJid) return;
        if (isVote) return reply("Sin sesión de votación");
        delVote(from);
        reply("Eliminación exitosa de la sesión de votación en este grupo");
        break;
      case "voting":
       if (!isGroupAdmins) return reply('solo el administrador puede usar esta función')
        if (!isGroup) return reply('esta función es solo para grupos');
        if (isVote) return reply("Sesión de votación en curso en este grupo");
        if (!q)
          return reply(
            "*Votacion*\n\n" +
              prefix +
              "Votando @tag | razón | 1 (1 = 1 minuto)"
          );
        if (
          mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          mek.message.extendedTextMessage.contextInfo == null
        ) {
          let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = args.join(" ").replace("@", "").split("|");
          if (!Number(split[2]))
            return reply(
              "ingrese el número en la fila 3 \nEjemplo: 1-9999 \n1 = 1 Min"
            );
          await mentions(
            "Vote " +
              "@" +
              id.split("@")[0] +
              " On Start" +
              "\n\n" +
              `Voto = ✅\nNo votar = ❌\n\nRazon: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
        }
        break;
      case "linkwa":
        if (!q) return reply("que grupo estas buscando??");
        hx.linkwa(q).then((result) => {
          let res = "*「 _LINK WA_ 」*\n\n";
          for (let i of result) {
            res += `*Nombre*: *${i.nama}\n*Link*: ${i.link}\n\n`;
          }
          reply(res);
        });
        break;
   
  case 'writebook':            
            reply(mess.wait)
            teks = args.join(" ")
            ini_buf = await getBuffer(`https://xeon.herokuapp.com/api/maker/nulis?apikey=${valkey}&text=${teks}`)  
cnf.sendMessage(from, ini_buf, image, { quoted: mek, thumbnail: fs.readFileSync('./cnf.jpg')})
            break
            
   case 'bc':
      case 'broadcast':       
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('Donde esta el texto?')
             anu = await cnf.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await cnf.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             cnf.sendMessage(_.jid, bc, image, {quoted:fkontak,caption: `*「 DIFUSIÓN 」*\n\n${body.slice(4)}`})
}
             reply('Listo')
             } else {
             for (let _ of anu) {
cnf.sendMessage(_.jid, 
			{"contentText": `*「 DIFUSIÓN 」*\n\n${body.slice(4)}`,
			"footerText": 'Bot WhatsApp',
			"buttons": [
			{"buttonId": `${prefix}allmenu`,
			"buttonText": {"displayText": "CLICK PARA VER EL MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             reply('Difusion completada')
}
             break

///listo
case 'writeleft':
if (!c) return reply('Donde esta el texto??')
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/nuliskiri?text=${c}&apikey=${hardi}`)
cnf.sendMessage(from, kon, image, {quoted: mek, thumbnail: fs.readFileSync('./cnf.jpg')})
break
case 'writedown':
if (!c) return reply('Donde esta el texto?')
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${c}&apikey=${hardi}`)
cnf.sendMessage(from, kon, image, {quoted: mek, thumbnail: fs.readFileSync('./cnf.jpg')})     
break
case 'folioright':
if (!c) return reply('Donde esta el texto??')
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokanan?text=${c}&apikey=${hardi}`)
cnf.sendMessage(from, kon, image, {quoted: mek, thumbnail: fs.readFileSync('./cnf.jpg')})
break
case 'xs':
if (!c) return reply('¿Buscando qué?')
pepex = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=${c}&apikey=${HunterApi}`)
reply(mess.wait)
pepex = pepex.result
ini_txt = ""
for (var x of pepex) {
ini_txt += `Titulo : ${x.title}\n`
ini_txt += `Info : ${x.info}\n`
ini_txt += `Link : ${x.link}\n\n\n`
}
anu = `${ini_txt}───────────────\n\n┌ ◪ *DESCARGA*
└ ${prefix}xvideo [link xvid]`
cnf.sendMessage(from, anu, text, {quoted: mek})
break
case 'xvideo':
case 'xv': 
if (!c) return reply('the link?')
x = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${c}&apikey=${HunterApi}`)
reply(mess.wait)
vid = await getBuffer(x.result.files.low)
cnf.sendMessage(from, vid, video, {quoted: mek})
break
case 'writelist':
  reply(`Ejemplos :
  🌿 ${prefix}write Bot activo 24/7
  🌿 ${prefix}folioright Kriz
  🌿 ${prefix}folioleft Bot by Kriz
  🌿 ${prefix}writedown Kriz
  🌿 ${prefix}writeleft Kriz`)
  break
case 'folioleft':
if (!c) return reply('Donde esta el texto??')
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokiri?text=${c}&apikey=${hardi}`)
cnf.sendMessage(from, kon, image, {quoted: mek, thumbnail: fs.readFileSync('./cnf.jpg')})
break
case 'nsfw':
	        if (!isGroup) return reply('esta función es solo para grupos')
			if (!isGroupAdmins) return reply('solo el administrador puede usar esta función')
					if (args.length < 1) return reply(`to activate type : ${prefix}nsfw 1`)
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Ya activado')
						nsfww.push(from)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Activado con éxito la función nsfw')
						cnf.sendMessage(from, `Ya pueden pedir Hentai`, text)
					} else if (Number(args[0]) === 0) {
						if (!isNsfw) return reply('Está apagado')
						var ini = nsfww.indexOf(from)
						nsfww.splice(ini, 1)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Desactive con éxito la función nsfw')
					} else {
						reply('1/0')
					}
					break

			case 'maker3d': 
					makell = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./cnf.jpg')})
					break
			case 'maker3d2': 
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./cnf.jpg')})
					break
			case 'maker3d3':        
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./cnf.jpg')})
					break
			case 'maker3d4': 
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./cnf.jpg')})
					break
	
			case 'quote': 
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./cnf.jpg')})
					break
case 'vnsecond':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await cnf.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						cnf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:fvn})
						fs.unlinkSync(mediam)
				break
				case 'vidsecond':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await cnf.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						cnf.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: fvid})
						fs.unlinkSync(median)
				break
      case "colongsw": //arif
        if (!mek.key.fromMe) return;
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await cnf.downloadAndSaveMediaMessage(ger);
          cnf.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Listo");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await cnf.downloadAndSaveMediaMessage(ger);
          cnf.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Listo");
          fs.unlinkSync(owgi);
        } else {
          reply("Responde a una foto / video");
        }
        break;

      case "lyrics":
        if (!q) return reply("Que cancion es?");
        let song = await hx.lirik(q);
        sendMediaURL(from, song.thumb, song.lirik);
        break;
      case 'pinterest':
        if (!q) return reply("Que buscas?");
        reply(mess.wait)
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
buttons = [{buttonId: `pinterest ${q}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(di, "imageMessage", { thumbnail: di, })).imageMessage
              buttonsMessage = {footerText:'Bot WhatsApp(', imageMessage: imageMsg,
              contentText:`Nota : no agan spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
        break;
      case "playstore":
        if (!q) return reply("qué estás buscando?");
        let play = await hx.playstore(q);
        let store = "❉─────────────────────❉\n";
        for (let i of play) {
          store += `\n*「 _PLAY STORE_ 」*\n
- *Nombre* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`;
        }
        reply(store);
        break;
      case "on":
        if (!mek.key.fromMe) return;
        offline = false;
        fakestatus(" ```ONLINE``` ");
        break;
      case "status":
        fakestatus(
          `*Estado*\n${offline ? "> OFFLINE" : "> ONLINE"}\n${
            banChats ? "> MODO-PRIVADO" : "> MODO-PUBLICO"
          }\n${prefixStatus ? "> MULTI-PREFIX" : "> NO-PREFIX"}`
        );
        break;
      case "off":
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        fakestatus(" ```OFFLINE``` ");
        break;
      case "get":
        if (!q) return reply("Donde esta el link?");
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            fakestatus(bu);
          });
        break;
      case "contag":
        pe = args.join("");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Numero de teléfono inválido");
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        cnf.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }
        );
        break;
      case "sticktag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else {
          reply(`*Etiqueta un sticker*`);
        }
        break;
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `Etiqueta : sticker/audio/video/imagen con ${prefix}totag`
          );
        }
        break;
      case "slander":
        if (args.length < 1)
          return reply(
            `Usar :\n${prefix}slander [@tag | mensaje1 | mensaje2]\n\nEjemplo : \n${prefix}slander @tag|hola|Hola como estás`
          );
        var gh = args.join("");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        cnf.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
        break;
      case "settarget":
        if (!q) return reply(`${prefix}settarget 598xxxxx`);
        targetpc = args[0];
        fakegroup(`Éxito Cambiando el objetivo de slanderpc : ${targetpc}`);
        break;
      case "slanderpc":
        if (!q) return reply(`${prefix}slanderpc texto|texto`);
        jids = `${targetpc}@s.whatsapp.net`; 
        var split = args.join(" ").replace(/@|\d/gi, "").split("|");
        var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        var options = {
          contextInfo: {
            quotedMessage: { extendedTextMessage: { text: split[0] } },
          },
        };
        const responye = await cnf.sendMessage(
          jids,
          `${split[1]}`,
          MessageType.text,
          options
        );
        await cnf.deleteMessage(jids, {
          id: responye.messageID,
          remoteJid: jids,
          fromMe: true,
        });
        break;
      case "tomp3":
        if (!isQuotedVideo) return fakegroup("Etiqueta un video!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await cnf.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Error: ${err}`);
          buffer453 = fs.readFileSync(ran);
          cnf.sendMessage(from, buffer453, audio, {
            mimetype: "audio/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
      case "fast":
        if (!isQuotedVideo) return fakegroup("Etiqueta un video");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await cnf.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Error : ${err}`);
            buffer453 = fs.readFileSync(ran);
            cnf.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "slow":
        if (!isQuotedVideo) return fakegroup("Etiqueta un video");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await cnf.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Error: ${err}`);
            buffer453 = fs.readFileSync(ran);
            cnf.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "reverse":
        if (!isQuotedVideo) return fakegroup("Etiqueta un video!");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await cnf.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Error: ${err}`);
          buffer453 = fs.readFileSync(ran);
          cnf.sendMessage(from, buffer453, video, {
            mimetype: "video/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;

      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                cnf.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "Aca esta",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;

  	case 'artinama':	
  	  reply(mess.wait)
  rival = await fetchJson(`https://bx-hunter.herokuapp.com/api/artinama?nama=${args[0]}&apikey=${HunterApi}`, {method:'get'})
  slur = rival.result
   reply(slur)
   break
case 'waifu':
             case 'loli':
            case 'husbu':
            case 'milf':
            case 'cosplay':
            case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${command}`,buttonText:{displayText: `𝐒𝐢𝐠𝐮𝐢𝐞𝐧𝐭𝐞 💫`},type:1},{buttonId:`creador`,buttonText:{displayText:'𝐂𝐫𝐞𝐚𝐝𝐨𝐫 💫'},type:1}]
              imageMsg = ( await cnf.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'𝘒𝘳𝘪𝘻 𝘌𝘥𝘪𝘵𝘴 - 𝘉𝘰𝘵 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱', imageMessage: imageMsg,
              contentText:`*𝐓𝐞 𝐠𝐮𝐬𝐭𝐚 𝐥𝐨 𝐪𝐮𝐞 𝐯𝐞𝐳 ^^?* 💫`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              cnf.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
              
   case'songlyrics':
     reply(mess.wait)
  apa3 = await fetchJson(`https://bx-hunter.herokuapp.com/api/music/liriklagu?query=${args[0]}&apikey=${HunterApi}`,{method:'get'})
  apa2 = apa3.result
  reply(apa2)
  break
case "attp":
              if (args.length == 0) return reply(`Ejemplo ${prefix + command} Kriz`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              cnf.sendMessage(from, buffer, sticker, { quoted: freply })
              break 
      case "contact":
        pe = args.join(" ");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Número de teléfono inválido");
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        cnf.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact
        );
        break;
case 'antidelete':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('on/off')
if (args[0] === "on") {
if(antidel)return reply('Ha sido activado antes!')
antidel = true
reply(`Anti-eliminación activado con éxito`)
} else if (args[0] === "off") {
if(!antidel)return reply('Ha sido desactivado antes!')
antidel = false
reply(`Desactivado con éxito antieliminar`)
} else {
reply(`on/off`)
}
break
      case 'welcome':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('on/off')
if (args[0] === "on") {
if(welcom)return reply('Ha sido activado antes!')
welcom = true
reply(`Bienvenida activada con éxito`)
} else if (args[0] === "off") {
if(!welcom)return reply('Ha sido desactivado antes!')
welcom = false
reply(`Bienvenida desactivada con éxito`)
} else {
reply(`on/off`)
}
break          
      case "=":
      case "take":
        if (!isQuotedSticker) return reply("Y el sticker?");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await cnf.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(" ").split("|");
        satu = anu[0] !== "" ? anu[0] : `Kriz`;
        dua = typeof anu[1] !== "undefined" ? anu[1] : `Bot`;
        require("./lib/fetcher.js").createExif(satu, dua);
        require("./lib/fetcher.js").modStick(media, cnf, mek, from);
        break;


      case "public":
        if (!isOwner) return reply("Esta función es solo para el propietario..");
        if (banChats === false) return;
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        fakeyt(`「 *MODO-PUBLICO* 」`);
        break;
      case "self":
        if (!isOwner) return reply("Esta función es solo para el propietario.");
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        fakeyt(`「 *MODO-PRIVADO* 」`);
        break
;
      case "hidetag":
        if (!isGroup) return reply('esta función es solo para grupos');
        var value = args.join(" ");
        var group = await cnf.groupMetadata(from);
        var member = group["participants"];
        var mem = [];
        member.map(async (adm) => {
          mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
        });
        var optionshidetag = {
          text: value,
          contextInfo: { mentionedJid: mem },
          quoted: mek,
        };
        cnf.sendMessage(from, optionshidetag, text);
        break;
    
      case "sticker":
      case "stiker":
      case "sg":
      case "s":
      case "stickergif":
      case "sgif":
      case "stickgif":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await cnf.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Iniciando : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Listo");
              cnf.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await cnf.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Iniciando : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Falló, en el momento de la conversión ${tipe} a stiker`);
            })
            .on("end", function () {
              console.log("Listo");
              cnf.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Envia una imagen oh video con la etiqueta ${prefix}sticker\nDuración de el vídeo máximo 1-9 Segundos`
          );
        }
        break;
      case "toimg":
        if (!isQuotedSticker) return reply("Envia h etiqueta un sticker !");
        reply(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await cnf.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return reply("Bueno, falló, inténtalo de nuevo ^^");
          buffer = fs.readFileSync(ran);
          fakethumb(buffer, `Listo ${pushname}`);
          fs.unlinkSync(ran);
        });
        break;
      case "ytsearch":
        if (args.length < 1) return reply("Que deseas buscar?");
        var srch = args.join("");
        try {
          var aramas = await yts(srch);
        } catch {
          return await cnf.sendMessage(
            from,
            "Error!",
            MessageType.text,
            dload
          );
        }
        aramat = aramas.all;
        var tbuff = await getBuffer(aramat[0].image);
        var ytresult = "";
        ytresult += "「 *YOUTUBE SEARCH* 」";
        ytresult += "\n________________________\n\n";
        aramas.all.map((video) => {
          ytresult += "❏ Titulo: " + video.title + "\n";
          ytresult += "❏ Link: " + video.url + "\n";
          ytresult += "❏ Duracion: " + video.timestamp + "\n";
          ytresult +=
            "❏ Subido: " + video.ago + "\n________________________\n\n";
        });
        ytresult += "◩ *BOT WHATSAPP*";
        await fakethumb(tbuff, ytresult);
        break;
       
      case "setreply":
      
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        fakegroup(`El éxito cambia la conversación falsa : ${q}`);
        break;
      case "setfakeimg":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await cnf.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/fake.jpeg`, delb);
          reply("Listo");
        } else {
          reply(`Envia una imagen con la etiqueta ${prefix}setfakeimg`);
        }
        break;
      case "setthumb":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await cnf.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          reply("Listo");
        } else {
          reply(`Envia una imagen con la etiqueta ${prefix}sethumb`);
        }
        break;
       case "emoji":
        if (!q) return fakegroup("y el emoji?");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;
      case "image":
      case "imagen":
      case "gimage":
      case "googleimage":
        if (args.length < 1) return reply("¿Qué quieres buscar??");
        reply(mess.wait);
        teks = args.join(" ");
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return reply(
              "_[ ! ] Error, no encontrado"
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        break;

      case "igstalk":
        if (!q) return fakegroup("Cual es el nombre de usuario?");
        ig.fetchUser(`${args.join(" ")}`).then((Y) => {
          console.log(`${args.join(" ")}`);
          ten = `${Y.profile_pic_url_hd}`;
          teks = `*ID* : ${Y.profile_id}\n*Nombre de usuario* : ${args.join(
            ""
          )}\n*Nombre completo* : ${Y.full_name}\n*Bio* : ${
            Y.biography
          }\n*Seguidores* : ${Y.followers}\n*Siguiendo* : ${
            Y.following
          }\n*Privado* : ${Y.is_private}\n*Verificado* : ${
            Y.is_verified
          }\n\n*Link* : https://instagram.com/${args.join("")}`;
          sendMediaURL(from, ten, teks);
        });
        break;
      case "fb":
        if (!q) return reply("Donde esta el link?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
        
      case "term":
      if (!mek.key.fromMe) return;
        if (!q) return fakegroup(mess.wrongFormat);
        exec(q, (err, stdout) => {
          if (err) return fakegroup(`Solo mi creador puede:~ ${err}`);
          if (stdout) {
            fakegroup(stdout);
          }
        });
        break;
      case "join":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          hen = args[0];
          if (!q) return reply("Donde esta el link");
          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return fakegroup("asegúrese de que el enlace sea correcto!");
          var response = await cnf.acceptInvite(codeInvite);
          grupinv("LISTO");
        } catch {
          fakegroup("LINK INVÁLIDO!");
        }
        break;
      case "runtime":
      case "test":
        run = process.uptime();
        teks = `${kyun(run)}`;
        reply(teks);
        break;
      case "speed":
      case "ping":
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `*${ssd}Velocidad: ${latensi.toFixed(4)} Segundos*`;
          reply(pingnya);
        });
        break;
    
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `Envia una imagen/sticker/audio/video con la etiqueta ${prefix}totag`
          );
        }
        break;
      case "tomp4":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          ger = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await cnf.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
            sendMediaURL(from, res.result, "Listo");
          });
        } else {
          reply("Envia un sticker");
        }
        fs.unlinkSync(owgi);
        break;
      case "tourl":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          owgi = await cnf.downloadMediaMessage(boij);
          res = await upload(owgi);
          reply(res);
        } else {
          reply("Envia Foto/Video");
        }
        break;
      case "inspect":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          if (!q) return reply("Falta el link de un grupo");
          cos = args[0];
          var net = cos.split("https://chat.whatsapp.com/")[1];
          if (!net) return reply("asegúrese de que sea un enlace https://whatsapp.com/");
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,
          } = await cnf.query({
            json: ["query", "invite", net],
            expect200: true,
          });
          let par = `*Id* : ${id}
${owner ? `*Creador* : @${owner.split("@")[0]}` : "*Creador* : -"}
*Nombre de el grupo* : ${subject}
*Fecha de creación de el grupo : ${formatDate(creation * 1000)}
*Número de miembros* : ${size}
${desc ? `*Desc* : ${desc}` : "*Desc *: no hay"}
*Id desc* : ${descId}
${
  descOwner
    ? `*Desc modificado por* : @${descOwner.split("@")[0]}`
    : "*Descripción modificada by* : -"
}\n*Datos* : ${
            descTime ? `${formatDate(descTime * 1000)}` : "-"
          }\n\n*Saved contacts*\n`;
          for (let y of participants) {
            par += `> @${y.id.split("@")[0]}\n*Admin* : ${
              y.isAdmin ? "Yes" : "No"
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                : "-"
            }`
          );
          cnf.sendMessage(from, par, text, {
            quoted: mek,
            contextInfo: { mentionedJid: jids },
          });
        } catch {
          reply("Link inválido");
        }
        break;
      case "eval":
        if (!mek.key.fromMe) return;
        cnf.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, "\t"),
          text,
          { quoted: mek }
        );
        break;
if (!mek.key.fromMe) return;
if (_chats.startsWith('$')){
if (!isOwner)return
if (!q)return 
var itsme = `${sender}`
var split = `*Bot WhatsApp*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(q, (err, stdout) => {
if (err) return cnf.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
cnf.sendMessage(from, stdout, text, term)
}
})
}

      default:

     if (!mek.key.fromMe) return;
        if (_chats.startsWith(">")) {
          try {
            return cnf.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: mek }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
    }

    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("[]Bot Whatsapp[]", "red"),
        "Bot WhatsApp",
        color(sender.split("@")[0])
      );
    }
   } catch (e) {
    e = String(e); 
    if (!e.includes("this.isZero") && !e.includes("jid") && !e.includes("Cannot read property 'fromMe' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined") && !e.includes("Cannot read property 'key' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined")) {
      console.log("Message : %s", color(e, "yellow"));
    }
    // console.log(e)
  }
};
