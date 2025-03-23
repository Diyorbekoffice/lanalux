import React from 'react'
import logo from "../assets/logo.svg";
import mastercard from "../assets/mastercard.svg";
import maestro from "../assets/maestro.svg";
import visa from "../assets/visa.svg";
import mir from "../assets/mir.svg";
import razrabotka from "../assets/разработка.svg";


function Footer() {
    return (
        <footer className='bg-[#2C2C2C] text-[#F2F5F5] p-4'>

            <div className='mx-auto flex justify-between flex-wrap text-left  max-w-[1200px] md:flex-row mb-8 gap-8'>
                <div className='flex flex-col gap-4 justify-between text-[13px] w-[255px]'>
                    <img src={logo} alt="logo" />
                    <p>Одежда и постель из натуральной шерсти <br /> мериноса, ламы, кашемира, верблюда</p>
                    <p>© 2021 LanaLux. Все права защищены.</p>
                </div>

                <div className='flex flex-col gap-4 justify-between text-left'>
                    <h3 className='mb-8'>Виды шерсти</h3>
                    <p>Шерсть мериноса</p>
                    <p>Шерсть ламы-альпаки</p>
                    <p>Шерсть верблюда</p>
                    <p>Кашемир</p>
                </div>

                <div className='flex flex-col gap-4 justify-between text-left'>
                    <h3 className='mb-8'>для клиентов</h3>
                    <p>Доставка и оплата</p>
                    <p>Обмен и возврат</p>
                    <p>Размеры</p>
                    <p>Акции</p>
                </div>

                <div className='flex flex-col gap-4 justify-between text-left w-[164px]'>
                    <h3 className='mb-8'>Наши контакты</h3>
                    <p>+7 (495) 508-76-45</p>
                    <p>lanalux@lanalux.ru </p>
                    <p>Россия, Москва,<br />
                        ул. Домодедовская <br />
                        д. 24, корпус 3</p>
                </div>
            </div>

            <div className='flex justify-between max-w-[1200px] mx-auto pt-4 border-t-[1px] border-t-neutral-600 flex-wrap gap-4'>
                <p>Договор оферта</p>
                <p>Политика в отношении обработки персональных данных</p>
                <div className='flex gap-4'>
                    <img className='w-[33px]' src={mastercard} alt="mastercard" />
                    <img className='w-[33px]' src={maestro} alt="maestro" />
                    <img className='w-[33px]' src={visa} alt="visa" />
                    <img className='w-[33px]' src={mir} alt="mir" />
                </div>
                <img src={razrabotka} alt="" />
            </div>



        </footer>

    )
}

export default Footer