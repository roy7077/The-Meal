import { useState, useEffect } from "react";
import Card from "./Card";
import "../style/body.css";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [latestdata, setLastestdata] = useState(null);
  const [randomdata, setRandomdata] = useState(null);

  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    const data1 = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=indian"
    );
    const json1 = await data1.json();
    setLastestdata(json1?.meals);

    const data2 = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
    );
    const json2 = await data2.json();
    setRandomdata(json2?.meals);

    console.log(json1?.meals);
    console.log(json2?.meals);
  }

  if (!latestdata || !randomdata) return <h1>no food</h1>;

  return (
    <div className="body">
      <div className="search">
        <input
          value={searchText}
          placeholder="Search for meal"
          className="input-search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button class="button-37">Search</button>
      </div>
      <div className="lower-body">
        <div className="food1">
            <h1>Latest meals</h1>
            <div className="card-list">
            {latestdata.map((data) => {
                return <Card {...data} key={data.id} />;
            })}
            </div>
        </div>
        <div className="food2">
            <h1>Random meals</h1>
            <div className="card-list">
            {randomdata.map((data) => {
                return <Card {...data} key={data.id} />;
            })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
