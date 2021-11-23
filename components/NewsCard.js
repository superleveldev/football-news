import useTranslation from 'next-translate/useTranslation'
import ErrorComponent from "./Error"
import Link from 'next/link'
import slug from 'slug'

export default function NewsCard({ Data }) {
    const { t, lang } = useTranslation('common')
    try {
        return (
            <>
                <div id="haberler" className="section-header">
                    <div>{t('kupadanHaberler')}</div>
                    <div className="all">{t('tumu')}</div>
                </div>

                <div className="news-container">
                    {
                        Data && Data.slice(0, 4).map((item, index) => {
                            return <Link key={`C${item.id}`} href="/post/[slug]" as={`/post/${slug(item.title ? item.title : '')}-${item.id}`}>
                                <div key={index} className="news-box">
                                    <img src={item.imageurl} className="news-box-image" />
                                    <div className="news-box-text">
                                        <div className="box-text">{item.title}</div>
                                    </div>
                                </div>
                            </Link>
                        })
                    }
                </div>
            </>
        )
    }
    catch (e) {
        return <ErrorComponent />
    }
}

