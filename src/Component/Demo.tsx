import { FC, useState } from "react";
interface props{
    count :number
}
const Demo:FC<props>=(props)=>{

    return <>
    <h1> value is : {props.count}</h1></>

} 

export default Demo