import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import kitel from "../assets/kitel.svg";
import discount from "../assets/discount.svg";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrov-right.svg";
import karzina from "../assets/karzina.svg";

const data = [
    { id: 1, title: "Мужская курта (скандинавка бежовая) с капюшоном 1", price: "8 000 ₽", discount: "-10%", img: kitel },
    { id: 2, title: "Мужская курта (скандинавка бежовая) с капюшоном 2", price: "9 500 ₽", discount: "-15%", img: kitel },
    { id: 3, title: "Мужская курта (скандинавка бежовая) с капюшоном 3", price: "7 200 ₽", discount: "-5%", img: kitel },
    { id: 4, title: "Мужская курта (скандинавка бежовая) с капюшоном 4", price: "10 000 ₽", discount: "-20%", img: kitel },
    { id: 5, title: "Мужская курта (скандинавка бежовая) с капюшоном 5", price: "11 300 ₽", discount: "-8%", img: kitel }
];

function Slider() {
    const swiperRef = useRef(null);
    const navigate = useNavigate();
    const [counts, setCounts] = useState(Array(data.length).fill(0));
    const [showNotification, setShowNotification] = useState(false);

    const increment = (index) => {
        setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] += 1;
            return newCounts;
        });
    };

    const decrement = (index) => {
        setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.max(0, newCounts[index] - 1);
            return newCounts;
        });
    };

    const addToCart = (index) => {
        const quantity = counts[index];

        if (quantity > 0) {
            const product = data[index];
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            const existingIndex = cart.findIndex(item => item.id === product.id);

            if (existingIndex !== -1) {
                cart[existingIndex].quantity += quantity;
            } else {
                cart.push({ ...product, quantity });
            }

            const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

            localStorage.setItem("cart", JSON.stringify(cart));
            localStorage.setItem("totalCount", totalCount);

            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
                window.location.reload();
            }, 1000);

            setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = 0;
                return newCounts;
            });
        }
    };

    return (
        <div className="relative w-full py-10">
            {/* Bildirishnoma */}
            {showNotification && (
                <div className="absolute -top-48 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md transition-opacity duration-500">
                    Добавлено в корзину!
                </div>
            )}

            {/* Strelkalar */}
            <div className="absolute -top-12 right-4 flex gap-8 z-10">
                <button
                    className="bg-[#F0EBE7] rounded-full p-2 cursor-pointer"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <img className="w-8 h-8 relative left-4" src={arrowLeft} alt="arrowLeft" />
                </button>
                <button
                    className="bg-[#F0EBE7] rounded-full p-2 cursor-pointer"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <img className="w-8 h-8 relative right-4" src={arrowRight} alt="arrowRight" />
                </button>
            </div>

            {/* Swiper */}
            <Swiper
                spaceBetween={20}
                navigation={false}
                modules={[Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                className="mySwiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide
                        key={item.id}
                        className="items-center bg-gradient-to-b from-[#fbf9f5] via-[#FEFCF3] to-[#FEFCF3] shadow-gray-600 text-center flex rounded-[5px] cursor-pointer"
                        onClick={() => navigate(`/details/${item.id}`)}
                    >
                        <div className="flex flex-col items-center">
                            <img src={item.img} alt="kitel" className="max-w-[211px] mx-auto bg-white p-4 rounded-[5px]" />
                            <p className="text-[12px] max-w-32 mx-auto ">{item.title}</p>
                            <div className="flex items-center justify-center gap-2">
                                <img src={discount} alt="discount" />
                                <span className="text-[#313131] text-[10px] border px-1.5">{item.discount}</span>
                            </div>
                            <p className="text-[21px] ">{item.price}</p>

                            {/* Counter */}
                            <div className="flex justify-center items-center gap-2 ml-8 ">
                                <div className="flex items-center justify-between gap-4 text-2xl border border-gray-300 rounded-lg h-[38px] px-2">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); decrement(index); }}
                                        className="px-2 border-r border-gray-300 cursor-pointer"
                                    >
                                        -
                                    </button>

                                    <span className=""> {counts[index]} </span>

                                    <button
                                        onClick={(e) => { e.stopPropagation(); increment(index); }}
                                        className="px-2 border-l border-gray-300 cursor-pointer"
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    onClick={(e) => { e.stopPropagation(); addToCart(index); }}
                                    className="flex items-center cursor-pointer"
                                >
                                    <img src={karzina} alt="karzina" className="w-32 mt-6" />
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;
