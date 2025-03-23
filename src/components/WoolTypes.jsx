import React from 'react';
import ArrowRight from "../assets/arrow-right.svg";
import меринос from "../assets/меринос.svg";
import лама from "../assets/лама.svg";
import кашемир from "../assets/кашемир.svg";
import верблюд from "../assets/верблюд.svg";

function WoolTypes() {
    const woolTypes = [
        { title: "Шерсть мериноса", image: меринос },
        { title: "Шерсть ламы", image: лама },
        { title: "Кашемир", image: кашемир },
        { title: "Верблюжья шерсть", image: верблюд },
    ];

    return (
        <div className="mx-auto container max-w-[1200px] p-6">
            <h2 className="text-[#313131] text-[41px] mb-6">Виды шерсти</h2>
            <div className="flex justify-center flex-wrap gap-6">
                {woolTypes.map((wool, index) => (
                    <div key={index} className="bg-[#F0EBE780] p-1 rounded-[5px] mb-5 min-w-[270px] sm:w-full md:w-[48%] lg:w-[23%] aspect-[4/3]" >
                        <div className="relative flex flex-col justify-between bg-[#F0EBE780] border-2 border-white rounded-[5px] p-6 h-full">
                            <div className="flex flex-col gap-12 z-10">
                                <p>{wool.title}</p>
                                <img className='w-9' src={ArrowRight} alt="ArrowRight" />
                            </div>
                            <img className="absolute bottom-4 right-4 w-[40%] h-auto max-w-[135px] max-h-[144px]" src={wool.image} alt={wool.title} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WoolTypes;
