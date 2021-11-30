import React from 'react'

const MenuCard = ({menuData,cat}) => {
    const cate=cat;
    return (
        <>
        <div className="cardHolder">
        <h1>{cate}</h1>    
        {menuData.map((curr)=>{
            const {id,image,name,category,price,description}=curr;
            const imageUrl="/"+image;
        return(
        <>
        <div className="card" key={id}>
            <div className="card-body">
                <div className="cardPic"><img src={imageUrl} alt=""/></div>
                <div className="cardTitle" >{name}<br/>{"₹"+price}</div>
                <div className="cardInfo" ><b>{category}</b><br/>{description}</div>
                </div>
        </div>
        </>
            )
        })}
        </div>
        </>
        )
}

export default MenuCard
