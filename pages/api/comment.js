import { nanoid } from 'nanoid';
import Redis from 'ioredis';

export default async function handler(req, res) {

    if (req.method === "POST") {
        const { userToken, contentId, text } = req.body;
        const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
        if (userToken && contentId && text) {
            try {
                const userInfo = await fetch(`https://${process.env.AUTH_DOMAIN}/userinfo`, {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                        'Content-Type': 'application/json'
                    }
                })
                const user = await userInfo.json()
                const comment = {
                    id: nanoid(),
                    user: {
                        name: user.name,
                        img: user.picture,
                        mail: user.email
                    },
                    ip,
                    text,
                    createdDate: Date.now()
                }

                let redis = new Redis(process.env.DB_CONN)
                redis.lpush(contentId, JSON.stringify(comment))
                redis.quit();

                res.status(200).json({ message: 'Saved' })
            }
            catch (e) {
                res.status(500).json({ message: 'Internal Server Error' })
            }
        }
        else {
            res.status(400).json({ message: 'Bad Request' })
        }
    }
    else if (req.method === "GET") {
        try {
            const { contentId } = req.query;
            if (contentId) {
                let redis = new Redis(process.env.DB_CONN)
                const comments = await redis.lrange(contentId, 0, 5)
                redis.quit()
                const data = comments.map(item => {
                    const parseItem = JSON.parse(item);
                    parseItem.user.mail = "";
                    return parseItem;
                })
                res.status(200).json({ data })
            }
            else {
                res.status(400).json({ message: 'Bad Request' })
            }
        }
        catch (e) {
            res.status(500).json({ message: 'Internal Server Error' })
        }
    }
    // res.status(200).json({ name: 'BK' })
}