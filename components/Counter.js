import { useState, useEffect } from "react";
import useTranslation from 'next-translate/useTranslation'

export default function Counter({ TargetDate }) {
    const { t, lang } = useTranslation('common')
    const [remainingTime, setRemainingTime] = useState({ days: 0, hours: 0, minutes: 0 });
    const Tick = () => {
        if (TargetDate) {
            const diffTime = TargetDate.getTime() - new Date().getTime();
            if (diffTime > 0) {
                let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                let diffMinutes = Math.floor((diffTime - (1000 * 60 * 60 * 24 * diffDays)) / (1000 * 60));
                let diffHours = Math.floor(diffMinutes / 60);
                diffMinutes = diffMinutes - (diffHours * 60);
                setRemainingTime({ days: diffDays, hours: diffHours, minutes: diffMinutes });
                setTimeout(() => { Tick(); }, 60000);
            }
        }
    }
    useEffect(() => { Tick() }, []);
    return (
        <a className="adDivRef" href="https://www.casio-intl.com/tr/tr/" target="blank">
            <div className="counter-ads-div">
                <div className="counter-ads-title">{t('kalanSure')}</div>
                <div className="counter-count">
                    <div className="counter-card">
                        <div className="counter-number">{remainingTime.days.toString().padStart(2, '0')}</div>
                        <div className="counter-seperator"></div>
                        <div className="counter-time-text">{t('gun')}</div>
                    </div>
                    <div className="counter-card">
                        <div className="counter-number">{remainingTime.hours.toString().padStart(2, '0')}</div>
                        <div className="counter-seperator"></div>
                        <div className="counter-time-text">{t('saat')}</div>
                    </div>
                    <div className="counter-card">
                        <div className="counter-number">{remainingTime.minutes.toString().padStart(2, '0')}</div>
                        <div className="counter-seperator"></div>
                        <div className="counter-time-text">{t('dakika')}</div>
                    </div>
                </div>
                <div className="counter-ads-image">
                    <img className="counter-ads-image-one" src="/assets/img/casiowatch.png" />
                    <img className="counter-ads-image-two" src="/assets/img/casiologo.png" />
                </div>
            </div>
        </a>
    )
}