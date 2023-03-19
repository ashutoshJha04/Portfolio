import React ,{useState,useEffect}from "react";
import "./comp/skills.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation,Autoplay } from "swiper";
import "./comp/skills.css";
 
 
 

function Keeda() {
    const [ret, setreact] = useState('React.js');
    const [js, setjs] = useState('Vanilla.js');
    const [html, sethtml] = useState('HTML');
    const [word, setword] = useState('Ms-Word');
    const [Exce, setExcel] = useState("Ms-Excel");
    const [css, setcss] = useState('CSS');
    const [btstrp, setbtstrp] = useState('Bootstrap');
    const [swip, setSwip] = useState(4);

 
     
  
   
   
  return (
    <div className="skill">
      <center>
        <div className="cla">Skills</div>
         
      </center>
      
      <div className="contan">
      <Swiper
      breakpoints={{
        1376: {
          // width: 576,
          slidesPerView: 4,
        },
        1200: {
          // width: 576,
          slidesPerView: 3,
        },
        768: {
          // width: 768,
          slidesPerView: 2,
          
        },
      }}
      spaceBetween={60}
      // slidesPerGroup={3}
      loop={true}
      autoplay={{
        delay: 2200,
        disableOnInteraction: true
    }}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
        
        
      }}
      navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide><div className="box" onMouseEnter={()=>{setreact('64%')}} onMouseLeave={()=>{setreact('React.js')}}>{ret}</div></SwiperSlide>
      <SwiperSlide> <div className="box" onMouseEnter={()=>{setjs('78%')}} onMouseLeave={()=>{setjs('Vanilla.js')}}>{js}</div></SwiperSlide>
      <SwiperSlide><div className="box" onMouseEnter={()=>{sethtml('87%')}} onMouseLeave={()=>{sethtml('HTML')}}>{html}</div></SwiperSlide>
      <SwiperSlide> <div className="box" onMouseEnter={()=>{setcss('90%')}} onMouseLeave={()=>{setcss('CSS')}}>{css}</div></SwiperSlide>
      <SwiperSlide><div className="box" onMouseEnter={()=>{setbtstrp('60%')}} onMouseLeave={()=>{setbtstrp('Bootstrap')}}>{btstrp}</div></SwiperSlide>
      <SwiperSlide> <div className="box" onMouseEnter={()=>{setExcel('58%')}} onMouseLeave={()=>{setExcel('MS-Excel')}}>{Exce}</div></SwiperSlide>
      <SwiperSlide><div className="box" onMouseEnter={()=>{setword('70%')}} onMouseLeave={()=>{setword('MS-Word')}}>{word}</div></SwiperSlide>
      
      
    </Swiper>
      </div>
    </div>
  );
}

export default Keeda;
