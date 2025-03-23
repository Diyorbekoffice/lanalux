import React, { useState, useEffect } from "react";
import close from "../assets/close.svg";
import kuryer from "../assets/kuryer.svg";
import kuryerno from "../assets/kuryerno.svg";
import online from "../assets/online.svg";
import pay from "../assets/pay.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Orders() {
    const [cartItems, setCartItems] = useState([]);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);

        // LocalStorage-dan totalCount-ni olish
        const storedTotalCount = localStorage.getItem("totalCount");
        if (storedTotalCount) {
            setTotalCount(parseInt(storedTotalCount, 10));
        } else {
            // Agar totalCount yo‘q bo‘lsa, umumiy mahsulotlar sonini hisoblash
            const count = storedCart.reduce((sum, item) => sum + item.quantity, 0);
            setTotalCount(count);
        }
    }, []);

    // Umumiy summani hisoblash
    const totalSum = cartItems.reduce((sum, item) => {
        const priceNumber = parseFloat(item.price.replace(/\s/g, "").replace("₽", ""));
        return sum + priceNumber * item.quantity;
    }, 0);

    // ❌ Mahsulotni o‘chirish funksiyasi
    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id); // O‘chiriladigan mahsulotni filtrlash
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        // Yangi totalCount va totalSum hisoblash
        const newTotalCount = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
        setTotalCount(newTotalCount);
        localStorage.setItem("totalCount", newTotalCount);

        // Agar savat bo‘sh bo‘lsa, totalCount-ni 0 qilamiz
        if (updatedCart.length === 0) {
            localStorage.removeItem("totalCount");
        }
    };

    return (
        <div className="bg-[#F9F7F4] ">
            <Header />
            <div className="mx-auto max-w-[1200px] p-6">
                <h2 className="text-[24px] text-[#313131] mt-5">Ваша корзина</h2>
                {cartItems.length === 0 ? (<p className="text-[#313131] mt-3 ">Корзина пуста</p>) : (<>
                    <div className="mt-5 flex flex-col ">
                        {cartItems.map((item) => {
                            const priceNumber = parseFloat(item.price.replace(/\s/g, "").replace("₽", ""));
                            const totalPrice = priceNumber * item.quantity;
                            return (
                                <div key={item.id} className="flex md:items-end items-start  gap-9 p-4 " >
                                    <img src={item.img} alt={item.title} className="w-24 h-24 bg-white " />
                                    <div className="border-b border-b-[#E4E4E2] flex justify-between w-full flex-col md:flex-row ">
                                        <div>
                                            <h3 className="text-[15px] text-[#313131] max-w-[320px]">
                                                {item.title}
                                            </h3>
                                            <p className="flex gap-6 text-[#AFAFAF] text-[14px] pb-7 flex-col sm:flex-row"><span>Размер:XXXL(54)</span> <span>Рост:170</span></p>
                                        </div>
                                        <p className="text-lg font-semibold text-[#313131]">
                                            {item.price}
                                        </p>
                                        <div className="flex justify-center  gap-2 text-[#313131]">
                                            <div className="flex items-center justify-between gap-4 text-2xl border border-gray-300 rounded-lg h-[38px] px-2">
                                                <button className="px-2 border-r border-gray-300 cursor-pointer">
                                                    -
                                                </button>
                                                <span className=""> {item.quantity} </span>
                                                <button className="px-2 border-l border-gray-300 cursor-pointer">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <p className="text-lg text-[#000000] flex flex-col">
                                            <span className="text-[10px] text-[#000000]">Cумма</span> {totalPrice.toLocaleString()} ₽
                                        </p>
                                        <button className="mb-10 cursor-pointer" onClick={() => removeItem(item.id)} >
                                            <img src={close} alt="close" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex  justify-end gap-10 text-[#313131]">
                        <p className="flex flex-col"><span>Общее кол-во:</span> {totalCount}</p>
                        <p className="flex flex-col"><span>Итого:</span> {totalSum.toLocaleString()} ₽</p>
                    </div>
                </>
                )}

                <div className="flex justify-between flex-wrap">
                    <div className="text-[#313131] w-[98%] sm:w-[49%] md:w-[24%]"><span>Имя*</span>
                        <div className="bg-white focus:border-[#CDB79C] focus:border px-2.5 py-4">Сергей |<input className="border-none focus:outline-none pl-3" type="text" name="" id="" /></div>
                    </div>
                    <div className="text-[#313131] w-[98%] sm:w-[49%] md:w-[24%]"><span>Отчество*</span>
                        <div className="bg-white focus:border-[#CDB79C] focus:border px-2.5 py-4"><input className="border-none focus:outline-none pl-3" type="text" name="" id="" /></div>
                    </div>
                    <div className="text-[#313131] w-[98%] sm:w-[49%] md:w-[24%]"><span>Фамилия*</span>
                        <div className="bg-white focus:border-[#CDB79C] focus:border px-2.5 py-4"><input className="border-none focus:outline-none pl-3" type="text" name="" id="" /></div>
                    </div>
                    <div className="text-[#313131] w-[98%] sm:w-[49%] md:w-[24%]"><span>Телефон</span>
                        <div className="bg-white focus:border-[#CDB79C] focus:border px-2.5 py-4"><input className="border-none focus:outline-none pl-3" type="text" placeholder="+ 7 (_ _ _)  _ _ _ - _ _ - _ _" name="" id="" /></div>
                    </div>
                </div>
                <div className=" flex justify-between mt-8 flex-col md:flex-row">
                    <div>
                        <h4 className="text-[12px] ">Способ получения</h4>
                        <div className=" flex flex-col ">
                            <div className="flex gap-[74px] flex-col sm:flex-row items-start ">
                                <img className="w-[146px]" src={kuryerno} alt="" />
                                <img className="w-[146px]" src={kuryer} alt="" />
                            </div>
                            <div className="flex sm:items-end gap-[74px] mt-5 flex-col sm:flex-row items-start ">
                                <img className="w-[146px]" src={pay} alt="" />
                                <img className="w-[146px]" src={online} alt="" />
                            </div>
                        </div>
                    </div>
                    <textarea className="bg-white resize-none md:w-[50%] mt-10 md:mt-0 w-full " rows={5} />
                </div>
            </div >
            <div className="mx-auto max-w-[1200px] flex justify-center mb-20">
                <button className=" px-24 py-4 mt-5 bg-gradient-to-r from-[#CDB79C] to-[#896D4D] text-white rounded-[5px] cursor-pointer">Оформить заказ</button>
            </div>
            <Footer />
        </div>
    );
}

export default Orders;
