require('dotenv').config();
const nextTranslate = require('next-translate');

module.exports = nextTranslate({
    env: {
        DATOCMS_API_TOKEN: process.env.DATOCMS_API_TOKEN,
        NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
        AUTH_CLIENTID: process.env.AUTH_CLIENTID,
        AUTH_DOMAIN: process.env.AUTH_DOMAIN,
        DB_CONN: process.env.DB_CONN
    },
})