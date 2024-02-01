import React from "react";
const BodyCarousel =({data})=>{
    return(
        <>
            {data.map((item)=>{
                console.log(item)
            })}
            {console.log(data)}
            yes
        </>
    )
}

export default BodyCarousel ;