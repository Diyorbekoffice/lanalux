import phone from "../assets/clarity_phone-handset-line.svg";
import mail from "../assets/octicon_mail.svg";
import loc from "../assets/loc.svg";

function Maps() {
    return (

        <div>
            <div className="relative top-24 px-6">
                <div className="bg-gradient-to-r from-[#CDB79C] to-[#896D4D] text-white rounded-[5px] mx-auto max-w-[1200px] p-1 ">
                    <div className="border-[1px] border-[#F9F7F4] rounded-[5px]">
                        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-16 justify-center divide-y sm:divide-y-0 sm:divide-x divide-white px-8 sm:px-14 py-8 sm:py-12">

                            {/* Telefon */}
                            <div className="flex items-start w-full md:w-auto py-4 md:py-0">
                                <img src={phone} alt="phone" />
                                <div className="px-6">
                                    <p className="font-medium text-[22px] sm:text-[25px] text-white mb-4">Телефоны</p>
                                    <p className="text-lg sm:text-[20px] text-white">+7 (495) 508-76-45</p>
                                    <p className="text-lg sm:text-[20px] text-white">+7 (916) 656-98-60</p>
                                </div>
                            </div>

                            {/* E-mail */}
                            <div className="flex items-start w-full md:w-auto py-4 md:py-0 md:px-6">
                                <img src={mail} alt="mail" />
                                <div className="px-6">
                                    <p className="font-medium text-[22px] md:text-[25px] text-white mb-4">E-mail</p>
                                    <p className="text-lg md:text-[20px] text-white">lanalux@lanalux.ru</p>
                                </div>
                            </div>

                            {/* Manzil */}
                            <div className="flex items-start w-full md:w-auto py-4 md:py-0">
                                <img src={loc} alt="loc" />
                                <div className="px-6">
                                    <p className="font-medium text-[22px] md:text-[25px] text-white mb-4">Адрес</p>
                                    <p className="text-lg md:text-[20px] text-white">
                                        Россия, Москва, <br />
                                        ул. Домодедовская<br />
                                        д. 24, корпус 3
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full flex justify-center">
                <iframe
                    className="w-full h-screen border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.7371652592697!2d37.70597917710628!3d55.6065878730304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab17f6d92d21d%3A0xf48a2ae732ebc0d8!2z0JTQvtC80L7QtNC10LTQvtCy0YHQutCw0Y8g0YPQuy4sIDI0INC60L7RgNC_0YPRgSAzLCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTE1NTgy!5e0!3m2!1sru!2s!4v1742446924433!5m2!1sru!2s"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}

export default Maps;
