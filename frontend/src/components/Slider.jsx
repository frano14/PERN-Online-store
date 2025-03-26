import s1 from "../assets/s1.png"
import s2 from "../assets/s2.png"
import s3 from "../assets/s3.png"
import Carousel from "./Carousel"

const slides = [s1, s2, s3]

const Slider = () => {
    return (
        <Carousel>
            {slides.map((slide, index) => (
                    <img key={index} src={slide} className="rounded-xl"/>
                )
            )}
        </Carousel>
    )
}

export default Slider
