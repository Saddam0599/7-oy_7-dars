import logo from "../assets/footer-logo.svg";
import play_market from "../assets/google-play.svg";
import app_store from "../assets/app-store.svg";
import list from "../assets/list.svg";
import rek from "../assets/reklama.svg";
import faq from "../assets/FAQ.svg";
import contact from "../assets/contact.svg";
import insta from "../assets/instagram.svg"

function Footer() {
  return (
    <div className="flex justify-between bg-[#111111] px-[50px] py-[30px] rounded-[12px] mt-[120px]">
      <div className="flex flex-col gap-[48px]">
        <img width="55px" src={logo} alt="" />
        <div className="flex flex-col gap-2">
          <a href="">
            <img src={play_market} alt="" />
          </a>
          <a href="">
            <img src={app_store} alt="" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <h5>О нас</h5>
        <div className="flex gap-[8px] items-center">
          <img src={list} alt="" />
          <p className="text-[#A1A1A1] text-[16px]">Публичная оферта</p>
        </div>{" "}
        <div className="flex gap-[8px] items-center">
          <img src={rek} alt="" />
          <p className="text-[#C61F1F] text-[16px] border-b-[2px] border-b-[#C61F1F]">
            Реклама
          </p>
        </div>{" "}
        <div className="flex gap-[8px] items-center">
          <img src={faq} alt="" />
          <p className="text-[#A1A1A1] text-[16px]">F.A.Q</p>
        </div>{" "}
        <div className="flex gap-[8px] items-center">
          <img src={contact} alt="" />
          <p className="text-[#A1A1A1] text-[16px]">Контакты</p>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <h5>Категории</h5>
        <div className="flex gap-[8px] items-center">
          <img src={list} alt="" />
          <p className="text-[#A1A1A1] text-[16px]">Кино</p>
        </div>{" "}
        <div className="flex gap-[8px] items-center">
          <img src={rek} alt="" />
          <p className="text-[#A1A1A1] text-[16px]">Театр</p>
        </div>{" "}
        <div className="flex gap-[8px] items-center">
          <img src={faq} alt="" />
          <p className="text-[#A1A1A1] text-[16px]">Концерты</p>
        </div>{" "}
        <div className="flex gap-[8px] items-center">
          <img src={contact} alt="" />
          <p className="text-[#A1A1A1] text-[16px]">Спорт</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col mb-14">
          <h5>Связаться с нами</h5>
          <h5 className="text-[#C61F1F] mt-5 text-[20px] font-[500]">
            +998 (95) 897-33-38
          </h5>
        </div>
        <div className="flex flex-col">
          <h5>Социальные сети</h5>
          <div className="flex">
          <img width={"24px"} src={insta} className="mt-5 mr-5" alt="" />
          <img width={"24px"} src={insta} className="mt-5 mr-5" alt="" />
          <img width={"24px"} src={insta} className="mt-5" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
