import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import shers from "../assets/shers.svg";
import banner from "../assets/banner.svg";
import vedio from "../assets/vedio.svg";

import Advantages from "../components/Advantages";
import Categories from "../components/Categories";
import WoolTypes from "../components/WoolTypes";
import Info from "../components/Info";
import Maps from "../components/Maps";

function Home() {
  return (
    <div>
      <Header />
      <main className="">
        <div className="flex flex-wrap justify-center mx-auto max-w-[1200px] gap-12 max-[1200px]:mt-5 items-center">
          <div className="">
            <h2 className="text-[#7D3E00] font-medium leading-[38px] text-[25px]">  Кардиганы: <br />  80% шерсти мериноса <br /> и 20% шерсти ангоры
            </h2>
            <Link to="/delivery">
              <button className="px-24 py-4 mt-5 bg-gradient-to-r from-[#CDB79C] to-[#896D4D] text-white rounded-[5px] cursor-pointer">Перейти </button>
            </Link>
          </div>
          <img className="w-[400px] min-[1201px]:w-[600px]" src={banner} alt="banner" />
        </div>
        <img className="relative top-[-40px] min-[1200px]:top-[-80px]" src={shers} alt="shers" />
      </main>

      <section className="mx-4">
        <WoolTypes />
        <img className="w-full max-w-[1200px] mx-auto my-10 object-cover" src={vedio} alt="vedio" />
        <Categories />
        <Advantages />
        <Info />
      </section>
      <img className="" src={shers} alt="shers" />
      <Maps />
      <Footer />
    </div>
  );
}

export default Home;
