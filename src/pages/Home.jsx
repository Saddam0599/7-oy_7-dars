import { useEffect, useState } from "react";
import MainLayout from "../layouts/Main_layout";
import Sliderr from "../components/Slider";
import Render from "../components/Render";

function Home() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch("https://66f8f3612a683ce973107f6f.mockapi.io/api/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
      });
  }, []);

  return (
    <div className="max-w-[1360px] w-full mx-auto">
      <MainLayout>
        <Sliderr />
        <Render data={movieData} />
      </MainLayout>
    </div>
  );
}

export default Home;
