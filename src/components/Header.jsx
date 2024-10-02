import logo from "../assets/logo.svg";
import afisha from "../assets/afisha.svg";
import activeAfisha from "../assets/whiteMain.svg";
import seans from "../assets/Transfer.svg";
import bileti from "../assets/Monitoring.svg";
import search from "../assets/search.svg";
import { useState } from "react";
import activeSeans from "../assets/redSeans.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RU from "../assets/RU.svg";


const Header = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [selectedLanguage, setSelectedLanguage] = useState("Ру");

  const Token = localStorage.getItem("Token");
  const location = useLocation();
  const navigate = useNavigate();


  const languages = [
    { code: "ru", label: "Ру", flag: "RU.png" },
    { code: "en", label: "Ан", flag: "EN.png" },
    { code: "uz", label: "Уз", flag: "UZ.png" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language.label);
    setIsOpen(false);
  };

  return (
    <div className="px-[90px] flex justify-between mb-3 items-center">
      <Link to={"/"}>
        <div>
          <img src={logo} alt="" />
        </div>
      </Link>
      <div className="flex hover:text-[#1D1D1D]">
        <button onClick={() => navigate("/")}>
          <img src={location.pathname === '/' ? afisha : activeAfisha} alt="" />
        </button>
        <button onClick={() => navigate("/seans")}>
          <img src={location.pathname === '/seans' ? activeSeans : seans} alt="" />
        </button>
        <button>
          <img src={bileti} alt="" />
        </button>{" "}
        <button>
          <img src={search} alt="" />
        </button>
      </div>
      <div className="relative w-[92px]">
            <div
              className="flex items-center w-[92px] h-[48px] bg-main-language hover:bg-main-language0 rounded-[12px] cursor-pointer"
              onClick={toggleDropdown}
            >
              <img
                src={languages.find((l) => l.label === selectedLanguage).flag
                }
                className="w-[22px] h-[22px] ml-3 mr-[1.5px rounded-full]"
                alt="language-flag"
              />
              <span className="text-main-white ml-1 mr-4 hover:text-main-language1 font-medium text-[14px] leading-[16px] tracking-[0.01em]">{selectedLanguage}</span>
              <img className="w-3 h-2" src={RU} alt="vector-language.png" />
            </div>
            {isOpen && (
              <ul className="absolute mt-2 w-[92px] bg-main-language rounded-[12px] shadow-lg z-10">
                {languages.map((language) => (
                  <li
                    key={language.code}
                    className="w-full h-[48px] flex items-center justify-center text-main-white cursor-pointer hover:bg-blue-500 hover:text-main-language1"
                    onClick={() => handleSelectLanguage(language)}
                  >
                    {language.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
      <div className="flex gap-[20px]">
       
        <Link to={Token ? '/profile' : '/login'}>
          <button className="bg-[#C61F1F] px-[67px] py-[18px] rounded-[12px]">
            {Token ? "профиль" : "Войти"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
