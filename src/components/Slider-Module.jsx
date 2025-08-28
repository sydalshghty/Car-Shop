import ToyotaImg from "../assets/l-1669878465.8496-638852c1cf6f3 (2).webp";
import KIAImg from "../assets/l-1669878484.7524-638852d4b7b24 (1).webp";
import HuantyImg from "../assets/l-1669878510.9276-638852eee2747 (1).webp";
import NissanImg from "../assets/l-1669878674.042-638853920a43c.webp";
import AMGImg from "../assets/l-1669878687.1593-6388539f26e4e.webp";
import CheryImg from "../assets/l-1678610317.8179-640d8f8dc7acf.webp";
import ShafrlyImg from "../assets/l-1669878861.6257-6388544d98c1d.webp";
import "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SliderModuleCars () {
     const  settings = {
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        speed: 500,
      responsive: [
      {
        breakpoint: 1350, 
        settings: {
          slidesToShow: 3,
        },
        },
        {
          breakpoint: 1100,
          settings: {
              slidesToShow: 2
            },
      },
      {
        breakpoint: 768,
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

    return(
        <div className="all-modules-cars">
            <div className="container">
                <div className="slider-modules">
                    <Slider {...settings}>
                        <div className="col-module">
                            <img src={ToyotaImg} alt="Toyota" />
                            <p>تويوتا</p>
                        </div>
                        <div className="col-module">
                            <img src={KIAImg} alt="KIA" />
                            <p>كيا</p>
                        </div>
                        <div className="col-module">
                            <img src={HuantyImg} alt="Huanty" />
                            <p>هيونداي</p>
                        </div>
                        <div className="col-module">
                            <img src={NissanImg} alt="Nissan" />
                            <p>نيسان</p>
                        </div>
                        <div className="col-module">
                            <img src={AMGImg} alt="Amg" />
                            <p>ام جي</p>
                        </div>
                        <div className="col-module">
                            <img src={CheryImg} alt="Chery" />
                            <p>شيري</p>
                        </div>
                        <div className="col-module">
                            <img src={ShafrlyImg} alt="Shafrly" />
                            <p>شفروليه</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default SliderModuleCars;