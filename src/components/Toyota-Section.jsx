import "../css/Toyota.css";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { TbBrandWhatsappFilled } from "react-icons/tb";

function ToyotaDepartament () {
     const  settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        speed: 500,
      responsive: [
      {
        breakpoint: 1400, 
        settings: {
          slidesToShow: 3,
        },
        },
        {
          breakpoint: 1030,
          settings: {
              slidesToShow: 2
            },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };


      const [sliderRef, setSliderRef] = useState(null);

        const goToPrev = () => {
            if (sliderRef) {
            sliderRef.slickPrev(); 
            }
        };

        const goToNext = () => {
                if (sliderRef) {
                sliderRef.slickNext();
                }
        };

    return(
        <div className="Toyota-departament w-full h-full pt-10 pb-10" id="Toyota-departament">
            <div className="container text-end w-full">
                <div className="col-heading flex w-full items-end justify-end">
                    <div className="col w-6 h-12 rounded bg-mainColor">
                    </div>
                    <p className="text-2xl text-mainColor">تويوتا</p>
                </div>
                <div className="content-button flex w-full justify-end mt-8 gap-4">
                    <div className="col-icon bg-mainColor" onClick={goToPrev}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <div className="col-icon" onClick={goToNext}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
                <div className="all-cars-toyota w-full mt-6 mr-7">
                <Slider {...settings} ref={setSliderRef} >
                    <div className="content-car">
                        <div className="content-images">
                            <img src="https://s3.eu-central-1.amazonaws.com/v3-cfs.motory.com/vehicle-used/l-1753095623.6152-687e1dc796336.webp" alt="Toyota" />
                        </div>
                        <div className="content-information-car">
                            <h2 className="text-xl text-mainColor font-semibold">تويوتا هايلاندر ال اي هايبرد 2025</h2>
                            <div className="col-property">
                                <p>جديد</p>
                                <p>أوتوماتيك</p>
                                <div>
                                    <p>20.70</p>
                                    <p>كم/لتر</p>
                                </div>
                            </div>
                            <div className="content-prices">
                                <div className="old-price flex items-center">
                                    <div className="flex gap-1 items-center">
                                            <p className="text-lg text-mainColor font-semibold">ريال</p>
                                            <p className="text-lg text-mainColor font-semibold p-old"> 151,900</p>
                                        </div>
                                        <p>(شامل الضريبة)</p>
                                </div>
                                <div className="new-price flex items-center">
                                        <div className="flex gap-1 items-center">
                                            <p className="text-lg text-mainColor font-semibold">ريال</p>
                                            <p className="text-lg text-mainColor font-semibold"> 144,900</p>
                                        </div>
                                        <p>(شامل الضريبة)</p>
                                </div>
                            </div>
                        </div>
                        <div className="available-col">
                            <p>التمويل متاح</p>
                        </div>
                        <div className="contact-whatsap w-full h-16 bg-whattsappcolor flex justify-center items-center gap-4 cursor-pointer">
                            <TbBrandWhatsappFilled  className="text-white text-2xl"/>
                            <a href="#Whatsapp" className="text-lg text-white">واتساب</a>
                        </div>
                    </div>
                    <div className="content-car">
                        <div className="content-images">
                            <img src="https://i.postimg.cc/yY4vvsmc/l-1750244890-6079-68529e1a94684.webp" alt="Toyota" />
                        </div>
                        <div className="content-information-car">
                            <h2 className="text-xl text-mainColor font-semibold">تويوتا كورولا اكس ال اي 1.5 2024</h2>
                            <div className="col-property">
                                <p>81,239 KM</p>
                                <p>أوتوماتيك</p>
                                <div>
                                    <p>19.60</p>
                                    <p>كم/لتر</p>
                                </div>
                            </div>
                            <div className="content-prices">
                                <div className="old-price flex items-center">
                                    <div className="flex gap-1 items-center">
                                            <p className="text-lg text-mainColor font-semibold">ريال</p>
                                            <p className="text-lg text-mainColor font-semibold p-old"> 69.000</p>
                                        </div>
                                        <p>(شامل الضريبة)</p>
                                </div>
                                <div className="new-price flex items-center">
                                        <div className="flex gap-1 items-center">
                                            <p className="text-lg text-mainColor font-semibold">ريال</p>
                                            <p className="text-lg text-mainColor font-semibold"> 67.299</p>
                                        </div>
                                        <p>(شامل الضريبة)</p>
                                </div>
                            </div>
                        </div>
                        <div className="available-col">
                            <p>التمويل متاح</p>
                        </div>
                        <div className="contact-whatsap w-full h-16 bg-whattsappcolor flex justify-center items-center gap-4 cursor-pointer">
                            <TbBrandWhatsappFilled  className="text-white text-2xl"/>
                            <a href="#Whatsapp" className="text-lg text-white">واتساب</a>
                        </div>
                    </div>
                    <div className="content-car">
                        <div className="content-images">
                            <img src="https://i.postimg.cc/tT92p5gk/l-1754901468-9339-6899abdce4027.webp" alt="Toyota" />
                        </div>
                        <div className="content-information-car">
                            <h2 className="text-xl text-mainColor font-semibold">تويوتا يارس واي ليمتد 1.3لتر 2026</h2>
                            <div className="col-property">
                                <p>جديد</p>
                                <p>أوتوماتيك</p>
                                <div>
                                    <p>22ز10</p>
                                    <p>كم/لتر</p>
                                </div>
                            </div>
                            <div className="content-prices">
                                <div className="old-price flex items-center">
                                    <div className="flex gap-1 items-center">
                                            <p className="text-lg text-mainColor font-semibold">ريال</p>
                                            <p className="text-lg text-mainColor font-semibold p-old">69.940</p>
                                        </div>
                                        <p>(شامل الضريبة)</p>
                                </div>
                                <div className="new-price flex items-center">
                                        <div className="flex gap-1 items-center">
                                            <p className="text-lg text-mainColor font-semibold">ريال</p>
                                            <p className="text-lg text-mainColor font-semibold">67.850</p>
                                        </div>
                                        <p>(شامل الضريبة)</p>
                                </div>
                            </div>
                        </div>
                        <div className="available-col">
                            <p>التمويل متاح</p>
                        </div>
                        <div className="contact-whatsap w-full h-16 bg-whattsappcolor flex justify-center items-center gap-4 cursor-pointer">
                            <TbBrandWhatsappFilled  className="text-white text-2xl"/>
                            <a href="#Whatsapp" className="text-lg text-white">واتساب</a>
                        </div>
                    </div>
                    <div className="content-car">
                        <div className="content-images">
                            <img src="https://i.postimg.cc/cCF140NH/l-1753004387-1929-687cb9632f190.webp" alt="Toyota" />
                        </div>
                        <div className="content-information-car">
                            <h2 className="text-xl text-mainColor font-semibold">تويوتا هايلاندر ال اي هايبرد 2025</h2>
                            <div className="col-property">
                                <p>جديد</p>
                                <p>أوتوماتيك</p>
                                <div>
                                    <p>20.70</p>
                                    <p>كم/لتر</p>
                                </div>
                            </div>
                            <div className="content-prices">
                                <div className="old-price flex items-center">
                                    <div className="flex gap-1 items-center">
                                            <p className="text-lg text-mainColor font-semibold">ريال</p>
                                            <p className="text-lg text-mainColor font-semibold p-old"> 151,900</p>
                                        </div>
                                        <p>(شامل الضريبة)</p>
                                </div>
                                <div className="new-price flex items-center">
                                        <div className="flex gap-1 items-center">
                                            <p className="text-lg text-mainColor font-semibold">ريال</p>
                                            <p className="text-lg text-mainColor font-semibold"> 144,900</p>
                                        </div>
                                        <p>(شامل الضريبة)</p>
                                </div>
                            </div>
                        </div>
                        <div className="available-col">
                            <p>التمويل متاح</p>
                        </div>
                        <div className="contact-whatsap w-full h-16 bg-whattsappcolor flex justify-center items-center gap-4 cursor-pointer">
                            <TbBrandWhatsappFilled  className="text-white text-2xl"/>
                            <a href="#Whatsapp" className="text-lg text-white">واتساب</a>
                        </div>
                    </div>
                    <div className="content-car">
                        <div className="content-images">
                            <img src="https://i.postimg.cc/SNzNp0vy/l-1744006919-046-67f36f070b3ce.webp" alt="Toyota" />
                        </div>
                        <div className="content-information-car">
                            <h2 className="text-xl text-mainColor font-semibold">تويوتا فيلوز جي ال اكس 2025</h2>
                            <div className="col-property">
                                <p>جديد</p>
                                <p>أوتوماتيك</p>
                                <div>
                                    <p>19.30</p>
                                    <p>كم/لتر</p>
                                </div>
                            </div>
                            <div className="content-prices">
                                <div className="old-price flex items-center">
                                    <div className="flex gap-1 items-center">
                                            <p className="text-lg text-mainColor font-semibold">ريال</p>
                                            <p className="text-lg text-mainColor font-semibold p-old">85.100</p>
                                        </div>
                                        <p>(شامل الضريبة)</p>
                                </div>
                                <div className="new-price flex items-center">
                                        <div className="flex gap-1 items-center">
                                            <p className="text-lg text-mainColor font-semibold">ريال</p>
                                            <p className="text-lg text-mainColor font-semibold">81.995</p>
                                        </div>
                                        <p>(شامل الضريبة)</p>
                                </div>
                            </div>
                        </div>
                        <div className="available-col">
                            <p>التمويل متاح</p>
                        </div>
                        <div className="contact-whatsap w-full h-16 bg-whattsappcolor flex justify-center items-center gap-4 cursor-pointer">
                            <TbBrandWhatsappFilled  className="text-white text-2xl"/>
                            <a href="#Whatsapp" className="text-lg text-white">واتساب</a>
                        </div>
                    </div>
                </Slider>
                </div>
                <div className="col-btn mt-16 flex justify-center items-center">
                    <button className="w-52 h-16 bg-mainColor rounded-lg text-white text-lg border-none outline-none">عرض المزيد</button>
                </div>
            </div>
        </div>
    )
}
export default ToyotaDepartament;