import "./App.css";

// swiper lib
import teste13 from './assets/pexels-klaui-7465325.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Adicione o módulo Autoplay
import 'swiper/css';
import 'swiper/css/pagination';

function App() {
  return (
    <>
      <h1>Aprendendo swiper</h1>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]} // Inclua o módulo Autoplay aqui
        autoplay={{
          delay: 3000, // tempo em milissegundos entre as transições (3 segundos neste caso)
          disableOnInteraction: false, // continua o autoplay após interação do usuário
        }}
      >
        <SwiperSlide>
          <img className="foto" src={teste13} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="foto" src={teste13} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="foto" src={teste13} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="foto" src={teste13} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
