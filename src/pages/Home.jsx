import React, { useEffect, useState } from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllMemes().then((memes) => setData(memes.data.memes));
  }, []);
  return (
    <div>
    <h1 style={{justifyContent: "center", alignItems: "center", display: "flex"}}>Meme Generator</h1>
      <div className="meme-row">
        {data.map((meme) => (
          <MemeCard key={meme.id} img={meme.url} title={meme.name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
