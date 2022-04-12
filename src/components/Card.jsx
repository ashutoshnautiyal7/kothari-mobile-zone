
import React from 'react';
import profile from './images/pic2.jpeg'
import chip from './images/smart.png'


//importing icons
import { FaGithub, FaEnvelope,FaLinkedinIn, FaInstagram, FaFacebook} from 'react-icons/fa';

function Card()
{
  return(
    <div className="w-full bg-gray-200 md:bg-white pb-4 md:p-6 md:-my-12 md:mx-auto ">
        <div className="flex-col justify-center max-w-xs mx-auto w-[90%] md:w-full bg-white    shadow-2xl rounded-xl px-5 py-3   ">
            <div className=" ">
                <img src={profile} alt="" className=" animate-bounce  md:animate-none w-32 mx-auto rounded-full drop-shadow-md  " />
            </div>

            <div className="text-center mt-5 ">
                <h2 className="text-xl sm:text-2xl text-gray-900 font-bold ">Manish Kothari</h2>
               

                <p className="text-xs sm:text-base text-gray-600 pt-2  px-5 w-auto inline-block  font-semibold text-lg ">Owner</p>
                <div className="flex md:mx-8">
                <img className="w-4 my-1 mx-1 h-6 animate-spin" src={chip} alt="" />
                <p className="text-xs sm:text-base text-gray-600 pt-1 pb-4 px-auto w-auto inline-block border-b-2 font-semibold text-lg  ">(+91)9999042531</p>

                </div>

            </div>
            
            <div className="flex align-center space-x-3  justify-center mt-4 ">  


              <a href="https://www.facebook.com/manish.kothari.91" target="_blank" className="text-xl text-blue-600   hover:bg-gray-800 hover:text-white rounded-full transition-colors duration-500  mr-2">
                <FaFacebook />
                <span class="sr-only">GitHub</span>
              </a>

              <a href="https://www.instagram.com/jatt_banty/" className="text-xl text-gray-50  bg-gradient-to-tr from-yellow-600 to-purple-600 hover:bg-gray-800  hover:text-white rounded-full transition-colors duration-500 mr-2">
                <FaInstagram />
                <span class="sr-only">GitHub</span>
              </a>

              

              <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZqrsnvcttBKfQcmPKXBSPRnJbnlmnVglQtWdgnrfDNLLdXgQJKblDsQgtqXCdqccBXHQZ" target="_blank" className="text-xl text-gray-800  hover:bg-gray-800 hover:text-white rounded-full transition-colors duration-500 mr-2">
                <FaEnvelope />
                <span class="sr-only">GitHub</span>
              </a>

              

            </div>
            

        </div>

       
    
    </div>
  )
}

export default Card;
