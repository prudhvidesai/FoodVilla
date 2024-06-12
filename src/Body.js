import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import useOnline from "./useOnline";


const Body = () => {
    const [list, setList] = useState([]);
  
    const [sList, setSlist] = useState([]);
  
    const [sInput, setInput] = useState("");
  
    // const PromoCard = RestrauntPromoCard(RestrauntCard)
  
    const onlineStat = useOnline()
  
    const getData = async () => {
      const resp = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const resData = await resp.json();
      //console.log(resData)
      const respList =
        resData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      //console.log(respList)
      const updatedData = respList.map((item) => ({
        name: item.info.name,
        id: item.info.id,
        rating: item.info.avgRating,
        cost: item.info.costForTwo,
        img: item.info.cloudinaryImageId,
      }));
      //console.log(updatedData);
      setList(updatedData);
      setSlist(updatedData)
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    const handleClick = () => {
      const filterdList = list.filter((item) => item.rating > 4);
      setSlist(filterdList);
    };
  
    const handleSearch = (e) => {
      setInput(e.target.value);
    };
  
  const handleSearchBtn = ()=>{
      const searchList = list.filter((item)=>item.name.toLowerCase().includes(sInput.toLowerCase()))
      setSlist(searchList)
  }
  
  if(onlineStat===false) return <h3>Something went wrong please check your internet connection...</h3>
    
  
    return (
      
        <div className="body-cont">
          <div className="search-cont">
            <input
              type="text"
              placeholder="Search"
              className="srch-box"
              onChange={handleSearch}
              value={sInput}
            />
            <button style={{ marginTop: "1px", height: "25px", width: "60px" }} onClick={handleSearchBtn}>
            Search
          </button>
          </div>
          <div className="restraunts-cont">
            <h1>Top Restraunts in the city...</h1>
            <button onClick={handleClick}>Top Rated Restaurants</button>
            <ul className="restraunt-list-cont">
              {list.length===0?<Shimmer/>:(sList.map((item) =>  <Link key={item.id} to={'/restaurant/'+item.id}><RestrauntCard
                  
                  name={item.name}
                  cost={item.cost}
                  image={item.img}
                  rating={item.rating}
                /></Link>
                
              ))
              }
            </ul>
          </div>
        </div>
      
    );
  };
  export default Body;