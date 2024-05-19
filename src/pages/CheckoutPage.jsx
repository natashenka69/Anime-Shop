import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { decrease, removeFromCart } from "../redux/slice/cartSlice";
import { increase } from "../redux/slice/cartSlice";

export default function CheckoutPage() {  
  const cartItems = useSelector((state) => state.cart.cart);
  const {amount} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  return (
    <div className="mt-[74px] font-bold">
      <div className="xl:grid xl:grid-cols-4 flex flex-col">
        <div className="2xl:ml-[200px] xl:ml-[50px] mt-24 col-span-3">
          <h1 className="text-8xl mb-4 ml-2 xl:ml-0">Cart({cartItems.length})</h1>
          <div className="flex justify-between xl:max-w-[800px] max-w-[720px] md:max-w-[900px] mb-2 text-2xl font-light ml-4 xl:mr-8 mr-4">
            <p>Product</p>
            <p>Price</p>
          </div>
          <hr className="max-w-[1200px] mb-4 mr-2" />
          <div className="">
            {cartItems.map((item) => {
              return (
                <div className="flex flex-col justify-center items-left ml-4 xl:mr-8 mr-2">
                  <div className="flex flex-row">
                    <div className="h-full">
                    <img src={item.image} className="w-[200px] h-[200px] object-cover object-top" />
                    </div>
                    <div className="mt-4 w-[400px] ml-4 justify-between flex flex-col">
                    <p className="">{item.title}</p>
                    <div className="space-x-3 flex"><span>
                    Amount:</span> <button className="bg-black text-white text-[18px] rounded-full px-2" onClick={() => dispatch(decrease(item))}>-</button><p>{item.amount}</p>
                    <button onClick={() => dispatch(increase(item))} className="bg-black text-white text-[18px] rounded-full px-2">+</button>
                    </div>
                    </div>
                    <div className="mt-4 xl:ml-32 md:ml-56 ml-8 justify-between flex flex-col">
                    <p className="">${(item.price * item.amount).toFixed(2)}</p>
                    <button className="underline underline-offset-4" onClick={() => dispatch(removeFromCart({id: item.id}))}>Remove</button>
                    </div>
                  </div>
                  <hr className="my-4 max-w-[1200px]"/>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-[#f6f6f5] mt-16 xl:mt-0 h-full xl:min-h-[900px] min-h-[250px] w-full md:pb-0 pb-8">
        <div className="xl:h-[730px] xl:items-start justify-between xl:justify-center ml-12 flex flex-col">
            <div className=" flex xl:flex-col mt-8 xl:mt-0 justify-between w-full xl:mx-0">
            <div>
            <p className="text-xl font-normal mb-4">Subtotal ({cartItems.reduce((acc, item) => acc + item.amount, 0)} items)</p>
            <p className="text-2xl font-medium">${cartItems.reduce((acc, item) => acc + item.amount * item.price, 0).toFixed(2)}</p>
            </div>
          <div className="mt-6 mr-4 xl:mr-0">
          <button className="px-20 py-4 text-xl bg-red-500 rounded-full text-white hover:bg-black duration-300 font-normal">Checkout</button>
          </div>
            </div>
            <div className="items-start">
            <p className="xl:max-w-[200px] text-red-500 font-medium mt-4">Taxes and shipping are calculated at checkout.</p>
          <p className="xl:max-w-[200px] text-red-500 font-medium mt-4">*Item availability isn’t guaranteed until checkout is complete.</p>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
