import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import kitel from "../assets/kitel.svg"; // Dummy rasm
import arrowRight from "../assets/arrov-right.svg";
import arrowLeft from "../assets/arrow-left.svg";
import karzina from "../assets/korzi.svg";
import onCheck from '../assets/onCheck.svg'
import noCheck from '../assets/noCheck.svg'
import Rectangle1 from '../assets/Rectangle1.svg'
import Rectangle2 from '../assets/Rectangle2.svg'
import Rectangle3 from '../assets/Rectangle3.svg'
import Rectangle4 from '../assets/Rectangle4.svg'
import Header from "../components/Header";

const data = [
    { id: 1, title: "Мужская курта (скандинавка бежовая) с капюшоном 1", price: "8 000 ₽", discount: "-10%", img: kitel },
    { id: 2, title: "Мужская курта (скандинавка бежовая) с капюшоном 2", price: "9 500 ₽", discount: "-15%", img: kitel },
    { id: 3, title: "Мужская курта (скандинавка бежовая) с капюшоном 3", price: "7 200 ₽", discount: "-5%", img: kitel },
    { id: 4, title: "Мужская курта (скандинавка бежовая) с капюшоном 4", price: "10 000 ₽", discount: "-20%", img: kitel },
    { id: 5, title: "Мужская курта (скандинавка бежовая) с капюшоном 5", price: "11 300 ₽", discount: "-8%", img: kitel }
];

function Details() {
    const { id } = useParams();
    const product = data.find((item) => item.id === parseInt(id));
    const [count, setCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const sizes = ["М(46)", "L(48)", "XL(50)", "XXL(52)", "XXXL(54)"];
    const heights = ["170", "176", "182", "188"];
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedHeight, setSelectedHeight] = useState(null);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProduct = cartItems.find(item => item.id === parseInt(id));

        if (existingProduct) {
            setCount(existingProduct.quantity);
        }

        const storedTotal = JSON.parse(localStorage.getItem("totalCount")) || 0;
        setTotalCount(storedTotal);
    }, [id]);

    const updateTotalCount = (cartItems) => {
        const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        setTotalCount(total);
        localStorage.setItem("totalCount", JSON.stringify(total)); // LocalStorage'ga yozish
    };

    const handleIncrease = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrease = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };

    const handleAddToCart = () => {
        let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = cartItems.findIndex(item => item.id === parseInt(id));

        if (existingProductIndex !== -1) {
            cartItems[existingProductIndex].quantity = count;
        } else {
            cartItems.push({ id: parseInt(id), title: product.title, price: product.price, quantity: count });
        }

        localStorage.setItem("cart", JSON.stringify(cartItems));
        updateTotalCount(cartItems);

        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
            window.location.reload();
        }, 1000);


    };

    if (!product) {
        return <p className="text-center text-xl">Mahsulot topilmadi!</p>;
    }

    return (

        <div>
            {showNotification && (
                <div
                    className={`absolute left-1/2 top-10 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md transition-opacity duration-500 z-50 ${showNotification ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                >
                    Добавлено в корзину!
                </div>
            )}

            <Header />

            <div className="bg-[#F9F7F4] p-6 ">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-[#313131] text-[25px] mb-[30px]">{product.title}</h2>
                    <div className="flex gap-4 flex-wrap">
                        <div className=" flex gap-3 flex-col md:flex-row">
                            <img src={product.img} alt={product.title} className="w-[460px] h-[400px] bg-[#fff]" />
                            <div className="flex md:flex-col   justify-between">
                                <img src={product.img} alt="small" className=" w-[100px] h-[130px] bg-[#fff]" />
                                <img src={product.img} alt="small" className=" w-[100px] h-[130px] bg-[#fff]" />
                                <img src={product.img} alt="small" className=" w-[100px] h-[130px] bg-[#fff]" />
                            </div>
                            <div className="flex justify-between  md:flex-col">
                                <button className="bg-[#F0EBE7] rounded-full p-2 cursor-pointer md:rotate-90 w-12 h-12">
                                    <img className="w-8 h-8  relative left-4 " src={arrowLeft} alt="arrowLeft " />
                                </button>
                                <button className="bg-[#F0EBE7] rounded-full p-2 cursor-pointer md:rotate-90 w-12 h-12">
                                    <img className="w-8 h-8 relative -left-4" src={arrowRight} alt="arrowRight" />
                                </button>
                            </div>
                        </div>

                        <div className="text-[#AFAFAF] flex flex-col justify-between">
                            <h3 className="text-[20px] text-[#313131]">Размеры:</h3>
                            <div className="flex gap-5 flex-wrap">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`text-[10px] rounded-[5px] gap-3 items-center py-2 px-3 border-[1px] border-[#AFAFAF] flex ${selectedSize === size ? "text-[#313131]" : "text-[#AFAFAF]"
                                            }`}
                                    >
                                        <img className="w-4" src={selectedSize === size ? onCheck : noCheck} alt="check" />
                                        {size}
                                    </button>
                                ))}
                            </div>

                            <h3 className="text-[20px] mt-4 text-[#313131]">Рост:</h3>
                            <div className="flex gap-5 flex-wrap">
                                {heights.map((height) => (
                                    <button
                                        key={height}
                                        onClick={() => setSelectedHeight(height)}
                                        className={`text-[10px] gap-3 items-center rounded-[5px] py-2 px-3 border-[1px]  border-[#AFAFAF] flex ${selectedHeight === height ? "text-[#313131]" : "text-[#AFAFAF]"
                                            }`}
                                    >
                                        <img className="w-4" src={selectedHeight === height ? onCheck : noCheck} alt="check" />
                                        {height}
                                    </button>
                                ))}
                            </div>
                            <div className="flex flex-col gap-3">
                                <div>
                                    <h3 className="text-[20px] text-[#313131]">Материал:</h3>
                                    <p>Снаружи ворсовая ткань «Скандинавка бежевая», <br /> внутри натуральная шерсть мериноса</p>
                                </div>
                                <h3 className="text-[20px] text-[#313131]">Расцветки:</h3>
                                <div className="flex gap-7">
                                    <img className="w-12 h-11" src={Rectangle1} alt="Rectangle1" />
                                    <img className="w-12 h-11" src={Rectangle2} alt="Rectangle2" />
                                    <img className="w-12 h-11" src={Rectangle3} alt="Rectangle3" />
                                    <img className="w-12 h-11" src={Rectangle4} alt="Rectangle4" />
                                </div>
                            </div>
                            <div className="flex items-center mt-3">
                                <div className="flex justify-center items-start md:gap-24 gap-4  text-[#313131]">
                                    <h2 className="text-[#313131] md:text-[25px] sm:text-[20px] text-[17px]">{product.price}</h2>
                                    <div className="flex justify-center md:items-end gap-8">
                                        <div className="flex items-center justify-between gap-4 text-2xl border border-gray-300 rounded-lg md:h-[50px] px-2">
                                            <button className="px-2 border-r border-gray-300 cursor-pointer" onClick={handleDecrease}>-</button>
                                            <span>{count}</span>
                                            <button className="px-2 border-l border-gray-300 cursor-pointer" onClick={handleIncrease}>+</button>
                                        </div>

                                        <button className=" items-end cursor-pointer md:px-6 md:py-3.5  px-3 py-1.5   bg-gradient-to-r from-[#CDB79C] to-[#896D4D] rounded-[5px]" onClick={handleAddToCart}>
                                            <img src={karzina} alt="karzina" className="   " />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
