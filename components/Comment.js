import { useRef, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import useTranslation from 'next-translate/useTranslation'
import LoginButton from './LoginButton';
import Loading from './Loading';

export default function Comment({ contentId, onSuccess }) {
    const inputEl = useRef(null);
    const { t } = useTranslation('common')
    const [loading, setLoading] = useState(false);
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();

    const SendComment = async (e) => {
        e.preventDefault();
        const userToken = await getAccessTokenSilently();
        const text = inputEl.current.value;
        if (text && text.length > 0) {
            setLoading(true);
            const response = await fetch('/api/comment', {
                method: 'POST',
                body: JSON.stringify({ userToken, contentId, text }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setLoading(false);
            onSuccess();
        }
    }

    return loading ? <Loading /> : <div>
        {isAuthenticated ? <>
            <div className="commentInput">
                <textarea ref={inputEl} rows="3" maxLength="120"></textarea>
                <div className="commentButtons">
                    <button className="btn-default" onClick={(e) => SendComment(e)}>{t('gonder')}</button>
                    <LoginButton />
                </div>
            </div>

        </> : <>{t('yorumGiris')} <LoginButton /></>}

    </div>
}