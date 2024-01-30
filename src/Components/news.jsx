import React from 'react'
import firstNews from "./../assets/news1-Healthy.jpeg"
import secondNews from "./../assets/news2-Healthy.jpg"
import thredNews from "./../assets/news3-Healthy.jpg"
import Cardnews from './Cardnews'




const news = () => {
  return (
    <div>
      <div className='row1 container py-10 px-12'>
    <div>
      <h1 className=' text-2xl font-bold'>Latest News</h1>
      <p className=' py-3 text-gray-500'>Present posts in a best way to highlight interesting moments of your blog</p>
    </div>
<div className=' grid  gap-3  rounded-lg grid-cols-1 sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3    '>
<Cardnews img={firstNews} date="Aug 27 ,2023"  cmnt="8" desc="Healthy Food Healthy life "/>
<Cardnews img={secondNews} date="Nov 29, 2023"  cmnt="1"  desc=" Healthy Food Healthy life" />
<Cardnews img={thredNews}  date="Dec 3,2023 "  cmnt="5"  desc=" Healthy Food Healthy life"/>

</div>

</div></div>
  )
}

export default news