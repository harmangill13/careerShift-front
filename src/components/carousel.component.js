import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Carousel({ slides }) {
    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    return (
        <div className="carousel-container">
            <div
                className="carousel-inner"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((s, index) => (
                    <img
                        key={index}
                        src={s}
                        alt={`Slide ${index}`}
                        className="carousel-slide"
                    />
                ))}
            </div>
            <button onClick={previousSlide} className="carousel-button carousel-button-left">
                <FaArrowLeft />
            </button>
            <button onClick={nextSlide} className="carousel-button carousel-button-right">
                <FaArrowRight />
            </button>
        </div>
    );
}