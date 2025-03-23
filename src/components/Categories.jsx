import React from 'react';
import детей from "../assets/детей.svg";
import подушки from "../assets/подушки.svg";
import декоративные from "../assets/декоративные.svg";
import головные from "../assets/головные.svg";
import аксесуары from "../assets/аксесуары.svg";
import постельное from "../assets/постельное.svg";
import домашняя from "../assets/домашняя.svg";
import одежда from "../assets/одежда.svg";

function Categories() {
    const categories = [
        { title: "Постельное бельё", image: постельное },
        { title: "Домашняя одежда", image: домашняя },
        { title: "Одежда", image: одежда },
        { title: "Для детей", image: детей },
        { title: "Подушки для сна", image: подушки },
        { title: "Декоративные подушки", image: декоративные },
        { title: "Головные уборы и шарфы", image: головные },
        { title: "Аксессуары и прочее", image: аксесуары },
    ];

    return (
        <div className="w-full mx-auto px-4">
            <div className="max-w-[1200px] mx-auto flex flex-wrap gap-5 justify-center lg:justify-start">
                {categories.map((category, index) => (
                    <div key={index} className="bg-[#F0EBE780] p-1 rounded-[5px] mb-5 h-[250px]  sm:w-full md:w-[48%] lg:w-[32%]">
                        <div className="py-[30px] bg-[#F0EBE780] p-6 border-2 border-white rounded-[5px] h-full flex justify-between">
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <h2 className="text-[18px] text-[#313131] mb-10">{category.title}</h2>
                                    <p className="text-[10px] text-[#CCC7C1] mt-1">633 товара</p>
                                </div>
                                <p className="text-[10px] text-[#000]">показать подразделы</p>
                            </div>
                            <img className="w-[180px]" src={category.image} alt={category.title} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;
