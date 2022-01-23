import useWindowSize from "../../hooks/useWindowSize";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';



//recibe the size of the window
function numOfPages(size) {
    if (size >= 1000) {
        return 6;
    } else if (size > 500 && size < 1000) {
        return 4;
    } else {
        return 2;
    }
}

const Slider = ({ techs }) => {
    const size = useWindowSize();
    return (
        <div className="slider">
            <div className="slider__slide-track">
                {
                    techs.map((techs, i ) => {
                        return(
                            <div key={i} className="slider__slide">
                                <img src={techs} />
                            </div>
                        )
                    })
                }
                {/**Same slides */}
                {
                    techs.map((techs, i ) => {
                        return(
                            <div key={i} className="slider__slide">
                                <img src={techs} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Slider;
