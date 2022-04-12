


import React from 'react'

// importing all images for services
import pos from './images/poster1.jpg'
import mob from './images/final.png'
import accessories from './images/accessories1.jpg'
import software from './images/soft.png'
import unlocking from './images/unlocking.png'
import chip from './images/chip.png'


function Ecom() {
  return (
    <div className="hidden md:block mx-5  ">
        <section class="text-gray-600 body-font">
  <div class="container px- py-24 ">
    <div class="flex flex-wrap -m-2">
      <div class=" p-4 w-[45%] h-[50%]">
        <a class="block relative h-48 rounded overflow-hidden"> 
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={mob} />
        </a>
        <div class="mt-4">
          <h2 class="text-gray-900 title-font text-lg font-medium">Mobile Phones</h2>
        </div>
      </div>
      
      <div class="p-4 w-[45%]">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={accessories} />
        </a>
        <div class="mt-4">
          <h2 class="text-gray-900 title-font text-lg font-medium">Accessories</h2>
        </div>
      </div>
      <div class="p-4 w-[45%]">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={software} />
        </a>
        <div class="mt-4">
          <h2 class="text-gray-900 title-font text-lg font-medium">Software</h2>
        </div>
      </div>
      <div class="p-4  w-[45%]">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={unlocking} />
        </a>
        <div class="mt-4 ">
          <h2 class="text-gray-900 title-font text-lg font-medium">Unlocking</h2>
        </div>
      </div>
    
     
      
    </div>

    <div className="flex p-4">
    <img className="mx-auto" src={pos} alt="" />
    <img className="mx-auto " src={chip} alt="" />

    </div>

  </div>
</section>

    </div>
  )
}

export default Ecom