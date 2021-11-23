import useTranslation from 'next-translate/useTranslation'

export default function Footer() {
    const { t, lang } = useTranslation('common')
    return (
        <>
            <div className="bottom-social-media-div">
                <div className="content-width">
                    <div className="content">
                        <a href="https://github.com/bk52" target="_blank" className="footerLink">
                            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}>
                                <img style={{ width: '30px', height: '30px', marginRight: '8px' }} src="/assets/img/BK.png" alt="BK" />© 2021 Football News - {t('copyright')}
                            </span>
                        </a>
                        <div className="navbar-social-icons footer-nav-icons">
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer"></div>
        </>
    )
}