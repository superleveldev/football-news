import useTranslation from 'next-translate/useTranslation'

export default function Error() {
    const { t } = useTranslation('common')
    return (
        <div className="errorDiv">
            <img className="errorIcon" src="/assets/img/errorface.png" />
            <div className="errorSepartor"></div>
            <div className="errorText">{t('hataOlustu')}</div>
        </div>
    )
}