import { FaInstagram } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa6";

const Foooter = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap md:flex-nowrap p-10 bg-black gap-10 sm:gap-6 justify-between text-left">

      <div className="w-full sm:w-[45%] md:w-[30%] flex flex-col gap-4">
        <img className="w-[70px] h-[30px] object-contain" src="./Nexcent.png" alt="Logo" />
        <div>
          <p className="text-gray-400 text-sm">Copyright © 2020 Nexcent ltd.</p>
          <p className="text-gray-400 text-sm">All rights reserved</p>
        </div>

        <div className="gap-4 flex flex-row mt-2">
          <FaInstagram className= "bg-white  text-black p-1.5 text-3xl rounded-full cursor-pointer hover:bg-gray-200 " />
       
       
       
       
       
          <CiSettings className="bg-white text-black p-1.5 text-3xl rounded-full cursor-pointer hover:bg-gray-200 " />
         
         
         
         
         
         
          <CiTwitter className="bg-white text-black p-1.5 text-3xl rounded-full cursor-pointer hover:bg-gray-200 " />
          <FaYoutube className="bg-white text-black p-1.5 text-3xl rounded-full cursor-pointer hover:bg-gray-200 " />
        </div>
      </div>

      <div className="w-full sm:w-[45%] md:w-[15%] flex flex-col gap-2">
        <strong className="text-white text-lg mb-2 block">Company</strong>
       
       
        <p className="text-gray-300 hover:text-white  text-sm ">About us</p>
               <p className="text-gray-300 hover:text-white  text-sm ">Blogs</p>
                                <p className="text-gray-300 hover:text-white  text-sm ">Contact us</p>
        <p className="text-gray-300 hover:text-white  text-sm ">Pricing</p>
             <p className="text-gray-300 hover:text-white  text-sm ">Testimonials</p>
      </div>

      <div className="w-full sm:w-[45%] md:w-[15%] flex flex-col gap-2">
        <strong className="text-white text-lg mb-2 block">Support</strong>
             <p className="text-gray-300 hover:text-white  text-sm ">Help Center</p>
        <p className="text-gray-300 hover:text-white  text-sm ">Legal</p>
                             <p className="text-gray-300 hover:text-white  text-sm ">Terms Of Service</p>
        <p className="text-gray-300 hover:text-white  text-sm ">Privacy Policy</p>
   <p className="text-gray-300 hover:text-white  text-sm ">Status</p>
      </div>

    
    
    
    
    
      <div className="w-full sm:w-[45%] md:w-[25%] flex flex-col gap-3">
        <strong className="text-white text-lg mb-1 block">Stay up to date</strong>
        <div className="relative">
       
       
       
       
       
       
       
          <input
            type="email"  placeholder="Enter your email"
            className="w-full bg-gray-800 text-white placeholder-gray-500 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
          />
        </div>
      </div>

    </div>
  )
}

export default Foooter;