import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import market from "../assets/market.svg";
import flagRU from "../assets/flagRU.svg";
import flagUS from "../assets/flagUS.svg";
import phone from "../assets/Call.svg";

function Header() {
    const [selectedLang, setSelectedLang] = useState("ru");
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);
    const [totalCount, setTotalCount] = useState(localStorage.getItem("totalCount") || 0);
    const location = useLocation();

    const languages = {
        ru: { label: "RU", flag: flagRU },
        en: { label: "EN", flag: flagUS }
    };

    const pages = [
        { path: "/", name: "Главная" },
        { path: "/delivery", name: "Выдача товара" },
        { path: "/about", name: "Biz haqimizda" },
        { path: "/contact", name: "Aloqa" }
    ];

    useEffect(() => {
        const handleStorageChange = () => {
            setTotalCount(localStorage.getItem("totalCount") || 0);
        };

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("totalCountUpdated", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("totalCountUpdated", handleStorageChange);
        };
    }, []);

    return (
        <header className="bg-[#C8B196] py-2 relative">
            <div className="px-4 mx-auto flex justify-between items-center max-w-[1200px] gap-2 max-[720px]:flex-wrap">
                <div className="flex items-center gap-8">
                    <Link to="/" className="cursor-pointer">
                        <img className="w-[140px] h-[74px]" src={logo} alt="logo" />
                    </Link>
                    <div className="relative">
                        <button
                            className="bg-[#F0EBE7] px-0.5 py-0.5 rounded cursor-pointer"
                            onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                        >
                            <div className="flex items-center gap-2.5 p-3 border border-white rounded text-[21px]">
                                <div className="flex flex-col gap-1">
                                    <div className="bg-[#313131] h-[1px] w-[17px]"></div>
                                    <div className="bg-[#313131] h-[1px] w-[10px]"></div>
                                    <div className="bg-[#313131] h-[1px] w-[6px]"></div>
                                </div>
                                <span className="hidden md:block">каталог</span>
                            </div>
                        </button>
                        {isCatalogOpen && (
                            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48 z-10">
                                {pages.map((page) => (
                                    <Link
                                        key={page.path}
                                        to={page.path}
                                        className={`block px-4 py-2 text-[#714615] cursor-pointer ${
                                            location.pathname === page.path ? "bg-[#896D4D] text-white" : ""
                                        }`}
                                    >
                                        {page.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <p className="text-[#714615] text-[18px] font-park">
                        Одежда и постель <span>из натуральной шерсти</span>
                    </p>
                </div>

                <div className="flex justify-between w-[480px] gap-2 max-[1024px]:gap-4">
                    <div className="flex flex-col text-right max-[1024px]:hidden">
                        <a href="tel:+74955087645" className="text-white w-36 cursor-pointer">
                            +7 (495) 508-76-45
                        </a>
                        <p className="text-[#714615] text-[11px] cursor-pointer">заказать звонок</p>
                    </div>
                    <a href="tel:+74955087645" className="hidden max-[1024px]:block text-white text-2xl">
                        <img className="w-12 bg-[#F0EBE7] p-2 rounded-full cursor-pointer" src={phone} alt="phone" />
                    </a>
                    <button className="p-4 rounded-full bg-[#F0EBE7] w-12 h-12 cursor-pointer">
                        <img src={search} alt="search" />
                    </button>
                    <div className="relative">
                        <button className="p-4 rounded-full bg-[#F0EBE7] w-12 h-12 cursor-pointer">
                            <img className="w-5 h-5" src={market} alt="market" />
                        </button>
                        <span className="absolute -top-1 -right-1 bg-[#F0EBE7] text-[10px] px-2 rounded-full w-5 h-5 flex items-center justify-center border border-[#C8B196]">
                            {totalCount}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded">
                        <img src={languages[selectedLang].flag} alt="flag" className="w-5 h-5 max-[1014px]:hidden cursor-pointer" />
                        <select
                            className="bg-transparent outline-none cursor-pointer"
                            value={selectedLang}
                            onChange={(e) => setSelectedLang(e.target.value)}
                        >
                            <option value="ru">RU</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
