import Link from 'next/link'

export default function BlogHeader() {
    return <>
        <div className="blog-nav-div">
            <Link href="/">
                <div className="top-nav-brand-image center">
                    <div className="brand-image">
                        <img src="../../assets/img/qatar2022.png" />
                    </div>
                </div>
            </Link>
        </div>
    </>
}