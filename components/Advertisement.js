import useTranslation from 'next-translate/useTranslation'

export function VerticalAd() {
    const { t, lang } = useTranslation('common')
    return (
        <>
            <a href={t('reklamURL')} target="_blank"><div className="advDiv advLeft"><img src="/assets/img/VerticalBanner.png" /></div></a>
            <a href={t('reklamURL')} target="_blank"><div className="advDiv advRight"><img src="/assets/img/VerticalBanner.png" /></div></a>
        </>
    )
}

export function HorizontalAd() {
    const { t, lang } = useTranslation('common')
    return (
        <a href={t('reklamURL')} target="_blank">
            <div className="adHorizontal">
                <img src="/assets/img/HorizontalBanner.png" />
            </div>
        </a>
    )
}