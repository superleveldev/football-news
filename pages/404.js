import Header from "../components/Header"
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export default function NotFound() {
    const { t, lang } = useTranslation('common')
    return <>
        <Header />
        <div className="notFound">
            <div className="modal">
                <Link href="/"><img src="/assets/img/qatar2022.png" /></Link>
                <div className="title">404</div>
                <div className="description">{t('sayfaBulunamadi')}</div>
            </div>
        </div>
    </>
}
