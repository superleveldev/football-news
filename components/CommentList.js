import Loading from './Loading'
import Error from './Error'
import { useEffect, useState } from 'react'
import { DateTime } from 'luxon'
import useTranslation from 'next-translate/useTranslation'

export default function CommentList({ contentId, RefreshList }) {
    const [loading, setLoading] = useState(true)
    const [comments, setComments] = useState([])
    const { lang } = useTranslation('common')

    const fetchComment = async () => {
        try {
            const response = await fetch(`/api/comment?contentId=${contentId}`, { method: 'GET' })
            const resp = await response.json()
            setComments(resp.data)
        }
        catch (e) { console.error(e.message) }
        setLoading(false)
    }

    useEffect(() => { fetchComment() }, [])
    useEffect(() => { fetchComment() }, [RefreshList]);

    try {
        return loading ? <Loading /> : <div style={{ marginTop: 40 }}>
            {
                comments.map((item, index) => <div key={index} className="comment">
                    <img className="comment-img" src={item.user.img} />
                    <div className="comment-info">
                        <div className="comment-title">
                            <span className="comment-username">{item.user.name}</span>
                            <span className="comment-time">{DateTime.fromMillis(item.createdDate).setLocale(lang).toRelative()}</span>
                        </div>
                        <span>{item.text}</span>
                    </div>
                </div>
                )}
        </div>
    }
    catch (e) {
        console.error(e.message);
        return <Error />
    }

}