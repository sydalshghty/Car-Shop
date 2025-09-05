import "../css/Toyota.css";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState,useEffect } from "react";
import { TbBrandWhatsappFilled } from "react-icons/tb";


function ToyotaDepartament () {
    
    const [CarToyota,setCarToyota] = useState([]);

    useEffect(  () => {
         fetch("Toyota.json")

        .then((res) => res.json())

        .then((data) => setCarToyota(data.ToyotaCars));

    }, []);

    console.log(CarToyota);

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
                    {CarToyota.length === 0 ?
                        <h2>Loading Data...</h2>
                        :
                        <Slider {...settings} ref={setSliderRef}>
                            {CarToyota.map((product,index) => {
                                return(
                                <div className="content-car" key={product.id}>
                                     <div className="content-images">
                                        <img src={product.imgcar1} alt="Toyota" />
                                     </div>
                                    <div className="content-information-car">
                                        <h2 className="text-xl text-mainColor font-semibold">{product.titlecar}</h2>
                                        <div className="col-property">
                                            <p>{product.property1}</p>
                                            <p>{product.property2}</p>
                                        <div>
                                            <p>{product.property3}</p>
                                            <p>كم/لتر</p>
                                        </div>
                            </div>
                            <div className="content-prices">
                                <div className="old-price flex items-center">
                                    <div className="flex gap-1 items-center">
                                            <p className="text-lg text-mainColor font-semibold">ريال</p>
                                            <p className="text-lg text-mainColor font-semibold p-old">{product.oldprice}</p>
                                        </div>
                                        <p>(شامل الضريبة)</p>
                                </div>
                                <div className="new-price flex items-center">
                                        <div className="flex gap-1 items-center">
                                            <p className="text-lg text-mainColor font-semibold">ريال</p>
                                            <p className="text-lg text-mainColor font-semibold">{product.newprice}</p>
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
                                )
                            })}
                        </Slider>
                        
                }
                </div>
                <div className="col-btn mt-16 flex justify-center items-center">
                    <button className="w-52 h-16 bg-mainColor rounded-lg text-white text-lg border-none outline-none">عرض المزيد</button>
                </div>
            </div>
        </div>
    )
}
export default ToyotaDepartament;