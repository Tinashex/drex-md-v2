//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "drexmose@gmail.com";
global.location = "Nairobi, Africa.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Afica/Nairobi";
global.github = process.env.GITHUB || "https://github.com/drexmose/drex-md-v2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/LqYfmGAmfbnHhtSWSsXP1v";
global.website = process.env.GURL || "https://chat.whatsapp.com/LqYfmGAmfbnHhtSWSsXP1v";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ab66aa7e74fbdbfe471a1.jpg";
global.devs = "254102074064";
global.sudo = process.env.SUDO || "263781330745";
global.owner = process.env.OWNER_NUMBER || "263781330745";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://drexmdpairing-59fb1c1e9ab2.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0p0cHllQUE5QzY1bzZMWHNaWVJwSWtsdGx0SVhDcXhCMnBUcEJnQ05HYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzUrb0U0eVdKZnluT2g2cUhGRTYzOUcwSkVJSldyelNYOUhzYW54SytHWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRVJSVjN1dk50SFYwdVVoajJidWgvT3NYOCtlOGRuS1NpaFdVUzJjMzBvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTaFdWdGxNSC9IVU1ic1BDM3h3K3VNZTNFN2h3NzhSOWxsaDVBbm94SHpVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFFN2JNQmloVHkrWTFWdnZROGZROU95NTFoY3pRblVrTG5sQjIzMjNJbUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNBaDh6NGZhaEp1V3hzZWpjcmNhVlZQUVNLS014aWJCeHRTZ3BmdUxkRk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMENrK2Z2RkZac0l1ZndKamp2RXRiUHVCc2Y3UFpKTE83QUg0dWhwNFhHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDFBWHMzUlB3WEhvODhzcExScmpyUTZQeVlGUmFKRWxyNnNHblcwazlsVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImN1cWN0cVVpa2pNMmJWLzhONzhmckl3aVdOUXB1clFMNjhQMUo1MTZzckVvMTcraEhtUThOTno1WVFERUVuME45V0JVZU43VHllY2tsZEFIRFdCeGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc5LCJhZHZTZWNyZXRLZXkiOiJCUGwrWmM5MVNwaWFJdXJKcUUrSjRmZGtNTHg3SWJPRHFHWVZSc1pGY3VRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxQWRFaGZmTFNEcWZmYmRZMEdJSWJRIiwicGhvbmVJZCI6IjVlNzcxNjVmLTM1OTEtNGEyMy05NTBlLWI2ZjMzMWNlMjc1MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTldjempIVGZmM1FGbVJCWmhmeW5aTjNxNW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHJwQUIycXUrNXlMczRvSTFZSnZOOWFJd2hvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJERkdENURKIiwibWUiOnsiaWQiOiIyNjM3ODEzMzA3NDU6ODdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2ZkvCdnpPwnZmP8J2ZjvCdnpfwnZ6cIPCdnqbwnZi/8J+ToSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTytwOE5ZRkVJL0FvN0lHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOUdTVUNGMlZLZzVFay95VHd4Q0ZwUTZFYW9EeEZueHNXQzdyZmtQU1dHaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidGE0ZnFETHJRbWYrODhHdnhGcDBPMUVYWTFud3hxcit1MWpBVms0czR4SzZQOWJWbk53UzMxVG54WmZ4NTBZWjIxbjJ6Mm5FY0dsVTVJS0V0MlVnQXc9PSIsImRldmljZVNpZ25hdHVyZSI6ImhGaEFxSnh2a21ESENSbVJaQWU2RENYbk4xaTZhSk1PN0xUcnBBTTdCaHlJdmVrdG04eEMrWGFwVmJUNkZuV3R3cUJpbWlFd3k4eng2T0NKRVRiU2lRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzgxMzMwNzQ1Ojg3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZSa2xBaGRsU29PUkpQOGs4TVFoYVVPaEdxQThSWjhiRmd1NjM1RDBsaHAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTYwNTE5OTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRU1BIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐁𝐘 𝐎𝐑𝐃𝐄𝐑 𝐎𝐅 𝙒𝞓𝙏𝙎𝞗𝞜 𝞦𝘿",
  author: process.env.PACK_AUTHER || "𝐘𝐎𝐔𝐑 𝐏𝐀𝐏𝐀 ⟠ 𝙒𝞓𝙏𝙎𝞗𝞜 𝞦𝘿 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々\n\n+263 781330745",
  packname: process.env.PACK_NAME || "𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐁𝐘",
  botname: process.env.BOT_NAME || "𝙒𝞓𝙏𝙎𝞗𝞜 𝞦𝘿",
  ownername: process.env.OWNER_NAME || "⟠ 𝙒𝞓𝙏𝙎𝞗𝞜 𝞦𝘿 ⿻々",
  errorChat: process.env.ERROR_CHAT || "263781330745",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
