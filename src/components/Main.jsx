import React from 'react'
import svg2 from './images/svg2.jpg'
import pos from './images/poster1.jpg'
import mob from './images/final.png'
import accessories from './images/accessories1.jpg'
import software from './images/soft.png'
import unlocking from './images/unlocking.png'



function Main() {
  return (
    <div className=" bg-gray-200 mx-1 md:hidden">
      {/* <h1 className="text-gray-700 text-xl m-2 font-bold ">services we provide</h1> */}
      <img src={svg2} alt="" />
      
      <h1 className="font-semibold text-lg p-2 bg-red-700 text-white animate-pulse md:text-2xl text-center">Hurry-Up and Get the best deals now  </h1>

      <div className="services">

        <div className="flex flex-row mx-2 justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5  my-3" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
</svg>
            <h1 className="font-bold text-black m-2 p-1 text-lg animate-"> 
                    The services we provide</h1>
        </div>
        
        <ul className=" inline-block items-center space-x-2">
          <li className="py-2 px-3   m-2 shadow-xl bg-white inline-block rounded-lg  shadow-md m-1">
          <div className="flex p-1 my-1 md:px-0">

          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
          &#x27A3;Brand new Mobile Phones
          </div>
          <img className="w-[95%] mx-auto md:w-[40%] md:h-[40%] " src={mob} alt="" />
          </li>


          <li className="py-2 px-3 m-2 shadow-xl  bg-white inline-block rounded-lg  shadow-md m-1">
          <div className="flex">

          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
          &#x27A3;  Mobile accessories
          </div>
          
          <img src={accessories} alt="" />
          </li >



          <li className="py-4 px-3    m-2 shadow-xl bg-white inline-block rounded-lg  shadow-md m-1">
          
🔓  &#x27A3; Unlocking
          <img src={unlocking} className="px-12" alt="" />
          </li>


          <li className="py-2 px-3 m-2 shadow-xl bg-white inline-block rounded-lg  shadow-md m-1">
         <div className="flex">

          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
</svg>
          &#x27A3; Software
         </div>
          <img src={software} alt="" />
          </li>

          
        </ul>
      </div>

      <div className="p-2 pb-4 ">
        <img  className="rounded-md mx-auto h-[80%] w-[100%]" src={pos} alt="" />
      </div>

      

    </div>

    


  )
}

export default Main