import React, { useEffect, useState } from "react";

function CatsFact() {
  const [catsFact, setCatsFact] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function FetchData() {
      const res = await fetch("https://catfact.ninja/fact");
      const catsData = await res.json();
      setCatsFact(catsData.fact);
    }
    FetchData().catch((err) => {
      setError(err.message);
    });
  }, []);
  return (
    <div className="cat">
      <div className="fact">
        {catsFact}
        {error !== null && error}
      </div>
    </div>
  );
}

export default CatsFact;
