import React, {useState} from 'react'
import { Figures } from '../data'
import Card from './Card'

import { Link } from "react-router-dom"

export default function Hero() {

const truncateString = (str, num) => {
    if(str?.length > num) {
      return str.slice(0, num) + "..."
    } else {
      return str;
    }
  }

const date = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}
const dateYesterday = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate() - 1;
  return `${month}/${date}/${year}`;
}

const [currentDate, setCurrentDate] = useState(date());
const [yesterdayDate, setYesterdayDate] = useState(dateYesterday());


  return (
    <div className='w-full h-full bg-black pb-12'>
      <div>
        <div>
        <h1 className='ml-8 text-white text-[28px] pt-8'>New Items</h1>
        <p className='ml-8 text-white text-[24px]'>{currentDate} Updated Items</p>
        <div class="flex mt-2 mx-4 items-center text-center justify-center">
  <div class="flex-1 border-t-2 border-white"></div>
</div>
      </div>
        <div className='place-items-center grid grid-cols-2 min-[600px]:grid-cols-3 min-[900px]:grid-cols-4 lg:grid-cols-5 min-[1300px]:grid-cols-6 2xl:grid-cols-8'>
        {Figures.map((figure) => {
            return (
              <Link key={figure.id} to={`/figure/${figure.id}`}>
            <Card key={figure.title} title={truncateString(figure.title, 41)} image={figure.image} price={figure.price} category={figure.category} company={figure?.company}/>
              </Link>
            )
        })}
        </div>
        </div>

        <div>
        <div>
        <p className='ml-8 text-white text-[24px] mt-8'>{yesterdayDate} Updated Items</p>
        <div class="flex mt-2 mx-4 items-center text-center justify-center">
  <div class="flex-1 border-t-2 border-white"></div>
</div>
      </div>
        <div className='place-items-center grid grid-cols-2 min-[600px]:grid-cols-3 min-[900px]:grid-cols-4 lg:grid-cols-5 min-[1300px]:grid-cols-6 2xl:grid-cols-8'>
        {[...Figures].reverse().map((figure) => {
            return (
              <Link key={figure.id} to={`/figure/${figure.id}`}>
            <Card key={figure.title} title={truncateString(figure.title, 41)} image={figure.image} price={figure.price} category={figure.category} company={figure?.company}/>
              </Link>
            )
        })}
        </div>
        </div>
    </div>
  )
}
