import React, { useEffect, useState } from "react";

function AnimeGirl() {
  const [animeGirl, setAnimeGirl] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://api.waifu.im/search/?many=true")
      .then((res) => res.json())
      .then((data) => {
        setAnimeGirl(data.images);
        console.log(data);
      })
      .catch((err) => setError(err.message));
  }, []);
  return (
    <div className="animeGirls">
      {animeGirl.map((img) => {
        return <img src={img.url} className="anime" />;
      })}
      {error}
    </div>
  );
}

export default AnimeGirl;
