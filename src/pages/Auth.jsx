import { useState } from "react";
import MainLayout from "../layouts/Main_layout";
import { Link, useNavigate } from "react-router-dom";
import UzFlag from "../assets/Uz.svg";
import { useMask } from "@react-input/mask";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const [telNumber, setTelNumber] = useState("");
  const inputRef = useMask({ mask: "__  ___ __ __", replacement: { _: /\d/ } });
  const navigate = useNavigate();
  const Token = localStorage.getItem("Token");

  if (Token){
    navigate("/")
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (telNumber.length >= 13) {
      const beginNum = telNumber.split(" ")[0];
      if (
        beginNum == 99 ||
        beginNum == 97 ||
        beginNum == 95 ||
        beginNum == 90 ||
        beginNum == 88 ||
        beginNum == 33
      ) {
        navigate("/login/sms");
        localStorage.setItem("telNumber", telNumber)
        localStorage.setItem("Token", telNumber)
      } else {
        toast.error("Raqam xato kiritildi");
      }
    } else {
      toast.error("Raqam formati xato");
    }
  };

  return (
    <MainLayout>
      <div className="w-full relative">
        <Link to={"/"}>
          <button className="absolute left-0 w-16 h-16 bg-[#111111] rounded-[12px] text-[28px] text-[#C61F1F] inline">
            {" < "}
          </button>
        </Link>
        <div className="flex justify-center">
          <div className="flex flex-col">
            <h1 className="text-[32px] font-medium text-center">Регистрация</h1>
            <div className="max-w-[300px] w-full text-center mb-8">
              <p className="text-[#777777] text-[16px]">
                Введите номер телефона для того чтобы войти или пройти
                регистрацию
              </p>
            </div>

            <form onSubmit={(e) => handleSubmit(e)}>
              <label
                className="bg-[#111111] pl-4 py-5 rounded-[12px] flex gap-3 text-white text-[16px]"
                htmlFor="input"
              >
                <img src={UzFlag} alt="" />
                <h5>+998</h5>
                <input
                  value={telNumber}
                  ref={inputRef}
                  className="bg-transparent outline-none"
                  type="text"
                  name=""
                  id="input"
                  minLength="0"
                  onChange={(e) => setTelNumber(e.target.value)}
                />
              </label>
              <button className="max-w-[380px] w-full mt-6 bg-[#C61F1F] py-4 rounded-[12px]">
                Регистрация
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </MainLayout>
  );
}

export default LoginPage;
