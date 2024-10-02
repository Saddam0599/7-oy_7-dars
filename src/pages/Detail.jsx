import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/Main_layout";
import Bileti from "../components/Bileti";
import About_film from "../components/About_film";
import panda from "../assets/panda.png";

const DetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [tab, setTab] = useState(1);

  useEffect(() => {
    fetch(`https://66f8f3612a683ce973107f6f.mockapi.io/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);

  console.log(movie);

  if (!movie) {
    return <p>Yuklanmoqda...</p>;
  }

  return (
    <MainLayout>
      <div className="relative mb-12">
        <img
          src={panda}
          alt="Movie Banner"
          className="max-w-[1360px] w-full max-h-[640px]"
        />
        <h1 className="absolute bottom-28 left-[40%] text-[32px] font-medium">
          {movie.title}
        </h1>
      </div>

      <div className="max-w-[380px] w-full mx-auto">
        <button
          onClick={() => setTab(1)}
          className={`py-4 w-[188px] rounded-xl ${
            tab === 1 ? "bg-[#1D1D1D] text-[#C61F1F]" : "bg-[#111111]"
          }`}
        >
          Билеты
        </button>
        <button
          onClick={() => setTab(2)}
          className={`py-4 w-[188px] rounded-xl ${
            tab === 2 ? "bg-[#1D1D1D] text-[#C61F1F]" : "bg-[#111111]"
          }`}
        >
          О фильме
        </button>
      </div>

      {tab === 1 ? <Bileti /> : <About_film set={setTab} />}
    </MainLayout>
  );
};

export default DetailPage;
