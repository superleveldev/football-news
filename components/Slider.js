import Link from 'next/link'
import { useState } from 'react'
import ErrorComponent from './Error'
import slug from 'slug'


export default function Slider({ Data }) {
    const [slideIndex, setSlideIndex] = useState(0);
    const ChangeSlider = (val) => {
        let nextSlide = slideIndex + val;
        if (nextSlide < 0) nextSlide = Data.length - 1;
        else if (nextSlide > Data.length - 1) nextSlide = 0;
        setSlideIndex(nextSlide);
    }
    const SelectSlide = (val) => { setSlideIndex(val); }
    try {
        return (
            <>
                <div className="imageslider-display-container">
                    {
                        Data && Data.map((item, index) => {
                            return <Link key={`L${item.id}`} href="/post/[slug]" as={`/post/${slug(item.title)}-${item.id}`}><img key={item.id} className={`mySlides ${slideIndex == index ? "active" : ""}`} src={item.imageurl}></img></Link>
                        })
                    }
                    <button className="imageslider-button imageslider-black imageslider-display-left" onClick={() => ChangeSlider(-1)}>&#10094;</button>
                    <button className="imageslider-button imageslider-black imageslider-display-right" onClick={() => ChangeSlider(1)}>&#10095;</button>
                    <div className="slider-details">
                        <Link href="/post/[slug]" as={`/post/${slug(Data[slideIndex].title ? Data[slideIndex].title : '')}-${Data[slideIndex].id}`}>
                            <div className="slider-title">
                                {Data && Data[slideIndex].title}
                            </div>
                        </Link>
                        <div className="slider-subtext">{Data && Data[slideIndex].description}</div>
                        <div className="slider-buttons-div">
                            <div className="slider-buttons">
                                {
                                    Data && Data.map((item, index) => {
                                        return <div key={index} className={`slider-button ${slideIndex == index ? "active" : ""}`} onClick={() => SelectSlide(index)}></div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="/post/[slug]" as={`/post/${slug(Data[slideIndex].title ? Data[slideIndex].title : '')}-${Data[slideIndex].id}`}>
                    <div className="mobileNewsTitle">
                        {Data && Data[slideIndex].title}
                    </div>
                </Link>
                <div className="mobileNewsDescription">{Data && Data[slideIndex].description}</div>
            </>
        )
    }
    catch (e) {
        return <ErrorComponent />
    }

}