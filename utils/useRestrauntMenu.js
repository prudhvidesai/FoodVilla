import React from 'react'
import { useEffect,useState } from 'react'


const useRestrauntMenu = (id) => {
    const[resData,setresData]=useState(null)

     const[items,setItems]=useState()

    const getData = async()=>{
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const rData = await data.json()
        // console.log(resData)
        // setMenu(resData.data.cards[2].card.card.info)
        // setItems(resData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
        // //console.log(menu)
        setresData(rData)
    }
    useEffect(()=>{
        getData()
    },[])
  return resData
}

export default useRestrauntMenu