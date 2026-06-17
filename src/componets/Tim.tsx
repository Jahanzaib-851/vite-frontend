


import { FaArrowRight } from "react-icons/fa";
<FaArrowRight />



const Tim = () => {



  return (

    <div className=" bg-slate-50 ">


    <div className=" flex mx-10 sm:mx-12 p-1  sm:p-10 gap-5  sm:mt-5 flex-col sm:flex-row">


      <div className=" w-[100%]   sm:w-[30%] ">

        <img className="  sm:w-[90%] sm:h-[110%]" src="./image 9.png" alt="" />

      </div>
      <div className="w-[100%] sm:w-[70%]  sm:h-[20%] h-[120%] mt-1">
        <p className=" text-[15px]  ">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.


        </p>


        <p className="text-green-500 mt-5">Tim    Smith</p>
        <p className="mt-2">British Dragon Boat Racing Association</p>



        <div className=" flex items-center gap-4 flex-col sm:flex-row ">

          <div className="  w-[80%]  mt-12 flex flex-row items-center      ">

            <img src="./Clients Logos.png" alt="" />
            <img src="./public/Clients.png Logos.png" alt="" />


          </div>


          <div className="flex  flex-row items-center" >
          <p className="    text-green-500  mt-12"> Meet all  customer  </p> <  FaArrowRight className="text-green-500 mt-12" /> </div>
        </div>

      </div>


      </div>



</div >


  )
}
export default Tim;