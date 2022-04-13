const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Alpin;;;'
                    + 'FN:Alpin\n' // full name
                    + 'ORG:Alpin;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6282287750102:+6282287750102\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'The.sad.boy01', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
