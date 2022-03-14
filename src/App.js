import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";

export default () => {

  const [homeList, setHomeList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //Pega a lista completa
      let list = await Tmdb.getHomeList();
      setHomeList(list);
    }
    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {homeList.map((item, key)=>(
        <div>
          {item.title}
        </div>
        ))}
      </section>
    </div>
  ); }
