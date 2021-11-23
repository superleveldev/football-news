import Script from 'next/script'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

export default function NavBar() {
    const { t, lang } = useTranslation('common')
    const ChangeLang = () => {
        lang == "tr" ? setLanguage('en') : setLanguage('tr')
    }
    return (
        <>
            <div className="top-social-media-div">
                <div className="content-width navbar-social-icons">
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                    </ul>

                    <div className="dropdown">
                        <div className="dropbtn">
                            <img src={`assets/img/flags/lang/${t('bayrak')}.png`} />
                        </div>
                        <div className="dropdown-content">
                            <a onClick={() => ChangeLang()}><div className="dropbtn"><img src={`assets/img/flags/lang/${lang == "tr" ? "england" : "turkish"}.png`} /></div> {lang == "tr" ? "English" : "Türkçe"}</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-nav-div">
                <div className="content-width">
                    <div className="top-nav-brand-image">
                        <div className="brand-image">
                            <img src="assets/img/qatar2022.png" />
                        </div>
                        <div className="div-navlink">
                            <div className="navlink">
                                <ul>
                                    <li><a href="#haberler">{t('haberler')}</a></li>
                                    <li><a href="#maclar">{t('maclar')}</a></li>
                                    <li><a href="#puandurumu">{t('puanDurumu')}</a></li>
                                    <li><a href="#oyuncular">{t('takimlar')}</a></li>
                                    <li><a href={`/${lang}/organizasyon`}>{t('organizasyon')}</a></li>
                                </ul>
                            </div>
                            <i id="mobileMenu" className="fa fa-bars fa-2x mobileNav"></i>
                        </div>
                    </div>
                </div>
            </div>


            <div className="navlinksMobile">
                <ul>
                    <li><a href="#haberler">{t('haberler')}</a></li>
                    <li><a href="#maclar">{t('maclar')}</a></li>
                    <li><a href="#puandurumu">{t('puanDurumu')}</a></li>
                    <li><a href="#oyuncular">{t('takimlar')}</a></li>
                    <li><a href={`/${lang}/organizasyon`}>{t('organizasyon')}</a></li>
                </ul>
            </div>
            <Script src="/assets/navbar.js" strategy="afterInteractive" />
        </>
    )
}