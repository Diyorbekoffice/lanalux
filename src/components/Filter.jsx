import React, { useState } from 'react'
import down from '../assets/down-alt-solid.svg'
import downs from '../assets/down-solid.svg'
import onCheck from '../assets/onCheck.svg'
import noCheck from '../assets/noCheck.svg'

function Filter() {
    const numbers = [9, 24, 36];
    const [selected, setSelected] = useState(numbers[0]); // Default: 9
    const sizes = ["М(46)", "L(48)", "XL(50)", "XXL(52)", "XXXL(54)"];
    const heights = ["170", "176", "182", "188"];
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedHeight, setSelectedHeight] = useState(null);


    return (
        <div>
            <div className='p-6'>
                <div className='flex flex-col justify-between md:flex-row'>
                    <h2>фильтр по параметрам</h2>

                    <div className='flex md:items-center text-[14px] gap-4 md:flex-row flex-col items-start'>
                        <div className='flex items-center'>
                            <span>Показать:</span>
                            <div className="flex gap-4">
                                {numbers.map((num, index) => (
                                    <div key={num} className="flex items-center">
                                        <button
                                            onClick={() => setSelected(num)}
                                            className={`px-4 py-2 rounded-lg ${selected === num ? "text-[#313131]" : "text-[#DBDBDB]"}`}
                                        >
                                            {num}
                                        </button>
                                        {index !== numbers.length - 1 && <span className="text-[#313131] mx-1">/</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <span>По цене:</span>
                            <img className='' src={down} alt="down" />
                            <img src={downs} alt="downs" />
                        </div>
                    </div>
                </div>
                <div className="text-[#AFAFAF]">
                    <h3 className="text-[20px]">Выберите размер</h3>
                    <div className="flex gap-5 flex-wrap">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`text-[13px] gap-3 items-center py-3 px-7 border-2 border-[#F0EBE7] flex ${selectedSize === size ? "text-[#313131]" : "text-[#AFAFAF]"
                                    }`}
                            >
                                <img src={selectedSize === size ? onCheck : noCheck} alt="check" />
                                {size}
                            </button>
                        ))}
                    </div>

                    <h3 className="text-[20px] mt-4">Выберите рост</h3>
                    <div className="flex gap-5 flex-wrap">
                        {heights.map((height) => (
                            <button
                                key={height}
                                onClick={() => setSelectedHeight(height)}
                                className={`text-[13px] gap-3 items-center py-3 px-7 border-2 border-[#F0EBE7] flex ${selectedHeight === height ? "text-[#313131]" : "text-[#AFAFAF]"
                                    }`}
                            >
                                <img src={selectedHeight === height ? onCheck : noCheck} alt="check" />
                                {height}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter