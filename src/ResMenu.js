import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import React from "react";
import useRestrauntMenu from "../utils/useREstrauntMenu";

const ResMenu = () => {
  const { id } = useParams();

  const resData = useRestrauntMenu(id);

  //console.log(menu)
  //console.log(items)
  if (resData === null) return;
  //if(items.length===0) return

  return (
    <div>
      <h1>{resData.data.cards[2].card.card.info.name}</h1>
      <p>{resData.data.cards[2].card.card.info.cuisines.join(",")}</p>
      {resData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map(
        (item) => (
          <p key={item.card.info.id}>{item.card.info.name}</p>
        )
      )}
    </div>
  );
};

export default ResMenu;