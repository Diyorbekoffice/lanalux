import Delivery from "../assets/Delivery.svg";
import sertifikat from "../assets/sertifikat.svg";
import priz from "../assets/priz.svg";

function Advantages() {
    return (
        <div className="bg-gradient-to-br from-[#896D4D] via-[#CDB79C] to-[#896D4D] rounded-[8px] max-w-[1200px] mx-auto p-1.5 my-28">
            <div className="  text-[#F2F5F5] py-[62px] px-[54px] h-auto border-[1px] border-[#F2F5F5] rounded-[5px]">
                <h2 className="text-[41px] mb-8">преимущества</h2>
                {/* Mobil va katta ekranlar uchun moslashuvchan joylashuv */}
                <div className="flex flex-col md:flex-row  gap-8 sm:gap-16">

                    <div className="flex gap-5 items-start ">
                        <img src={Delivery} alt="Delivery" />
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[30px]">ДОСТАВКА ПО РОССИИ</h3>
                            <p>Почтой России или транспортной компанией СДЭК.</p>
                        </div>
                    </div>

                    <div className="flex gap-5 items-start ">
                        <img src={sertifikat} alt="sertifikat" />
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[30px]">ГАРАНТИЯ КАЧЕСТВА</h3>
                            <p>Вся продукция сертифицирована и соответствует стандартам.</p>
                        </div>
                    </div>

                    <div className="flex gap-5 items-start ">
                        <img src={priz} alt="priz" />
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[30px]">БОНУСЫ И АКЦИИ</h3>
                            <p>Специальные предложения и скидки для постоянных клиентов.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Advantages;
