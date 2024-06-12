import React from 'react'

const RestrauntCard = (props) => {
    const{image,name,cost,rating}=props
    const thumb = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${image}`
  return (
    <li style={{height:"250px",width:"150px",padding:"10px",backgroundColor:"lightgrey",marginRight:"12px",marginBottom:"12px"}}>
      <img src={thumb} alt='img' style={{height:"120px",width:"150px"}}/>
      <h4>{name}</h4>
      <p>{cost}</p>
      <p>{rating}</p>
    </li>
  )
}

// export const RestrauntPromoCard = (RestrauntCard)=>{
//     return (props)=>{
//         <>
//          <RestrauntCard props={...props}/>
//          <p style={{backgroundColor:"green",color:"white"}}>Promoted</p>
//         </>
      
//     }

// }

export default RestrauntCard