


import { FaArrowRight } from "react-icons/fa";
<FaArrowRight />



const Tim = () => {



  return (
    <div className=" flex bg-slate-50 p-8 gap-10 sm:mt-5 flex-col sm:flex-row">


      <div className=" w-[100%]  sm:w-[30%] ">

        <img className="  sm:w-[100%] sm:h-[80%]" src="../../public/image 9.png" alt="" />

      </div>
      <div className="w-[100%] sm:w-[60%] h-[120%] mt-1">
        <p className=" text-[15px] ">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.


        </p>


        <p className="text-green-500">Tim    Smith</p>
        <p>British Dragon Boat Racing Association</p>



        <div className=" flex items-center gap-4 flex-row ">

          <div className="  w-[80%]  flex flex-row items-center      ">

            <img src="../../public/Clients Logos.png" alt="" />
            <img src="../../public/Clients.png Logos.png" alt="" />


          </div>


          <div className="flex flex-row items-center" >
          <p className="    text-green-500 "> Meet all  customer  </p> <  FaArrowRight className="text-green-500" /> </div>
        </div>

      </div>






    </div>


  )
}
export default Tim;