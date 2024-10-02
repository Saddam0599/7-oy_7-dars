import MainLayout from "../layouts/Main_layout";
import icon from "../assets/profile.svg";
import logout from "../assets/logout.svg";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";

function ProfilePage() {
  const navigate = useNavigate("/");
  const handleLogout = () => {
    localStorage.removeItem("Token");
    const Token = localStorage.getItem("Token");

    if (!Token) {
      toast.loading("Akkountdan chiqilmoqda");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  const telNumber = localStorage.getItem("telNumber");
  return (
    <MainLayout>
      <ToastContainer />

      <div className="max-w-[380px] w-full mx-auto">
        <div className="bg-[#111111] py-6 pl-5 rounded-[12px] flex gap-3 mb-6 mt-12">
          <img src={icon} alt="" />
          Мои данные
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[#4D4D4D]">Имя пользователя</p>
            <div className="bg-[#111111] py-6 pl-5 rounded-[12px]">
              Abdulaziz Abdujalilov
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#4D4D4D]">Номер телефона</p>
            <div className="bg-[#111111] py-6 pl-5 rounded-[12px]">
              +998 {telNumber}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#4D4D4D]">Адрес электронной почты</p>
            <div className="bg-[#111111] py-6 pl-5 rounded-[12px]">
              abdulaziz@tickets.uz
            </div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="bg-[#111111] py-6 pl-5 rounded-[12px] flex gap-3 mb-6 mt-12 w-full"
        >
          <img src={logout} alt="" />
          Выйти из аккаунта
        </button>
      </div>
    </MainLayout>
  );
}

export default ProfilePage;
