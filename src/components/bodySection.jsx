/* eslint-disable no-unused-vars */
import React from 'react' ;
import { RiShoppingBag3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';


const BodySection =()=>{
    return (
        <div
        className="relative bg-cover bg-center h-[83vh] flex items-center justify-start text-white"
        style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url('./src/assets/images/home.png')`,
          }}
      >
        
         
          <div className=" bg-opacity-50 p-2 rounded-lg text-left  pl-40">
        <h1 className="text-4xl md:text-7xl font-bold mb-4">Welcome to ShopHub</h1>
        <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-3 text-2xl">
        <RiShoppingBag3Line />Start Shopping
        </Link>
      </div>


        </div>
  
    )
}
export default BodySection;