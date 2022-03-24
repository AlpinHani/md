const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;The.sad.boy01;;;'
                    + 'FN:The.sad.boy01\n' // full name
                    + 'ORG:The.sad.boy01;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=62895336282144:+62895336282144\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'The.sad.boy01', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler