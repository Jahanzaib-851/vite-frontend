const Header = () => {
  return (
    <div className="bg-slate-100 p-4 sm:p-2">
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-0 mx-5 sm:mx-10 mt-5 justify-between">
        <div className="flex flex-row gap-1 items-center">



          <img className="w-[20px] h-[20px]" src="../../public/Icon (1).png" alt="" />
          <img className="w-[90px] h-[20px]" src="../../public/Nexcent.png" alt="" />
        </div>

        <div className="flex flex-wrap justify-center sm:flex-row gap-4 sm:gap-8">
             <a className="hover:text-green-600 transition-colors" href="">Home</a>

          <a className="hover:text-green-600 transition-colors" href="">Service</a>

          <a className="hover:text-green-600 transition-colors" href="">Feature</a>

              <a className="hover:text-green-600 " href="">Product</a>
          <a className="hover:text-green-600 transition-colors" href="">testimonial</a>




          <a className="hover:text-green-600 transition-colors" href="">FAQ</a>
        </div>

            <div className="gap-2 sm:gap-5 px-[30px] flex items-center">
          <button className="py-[10px] px-[20px] text-green-600">Login</button>
          <button className="bg-green-600 text-white w-[91px] h-[40px] rounded">sigup</button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:mt-5 justify-between items-center mx-5 sm:mx-10 gap-10 sm:gap-5 mt-10">
                <div className="w-full sm:w-[60%] flex flex-col items-center sm:items-start text-center sm:text-left">
          <strong className="text-3xl sm:text-5xl block leading-tight">Lessons and insights</strong>
    
    
     <p className="text-3xl sm:text-5xl text-green-500 mt-1 sm:mt-2">from 8 years</p>
                <p className="mt-4 sm:mt-5 text-[14px] text-gray-500 max-w-md">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="text-white py-2 px-6 text-lg mt-6 sm:mt-8 rounded bg-green-600 hover:bg-green-700 transition-colors">
            Register
          </button>
        </div>

        <div className="w-full sm:w-[35%] flex justify-center">
          <img      className="w-full max-w-[300px] sm:max-w-[391px] h-auto object-contain"

          
            src="../../public/Illustration.png"
            alt="Illustration"
          />
        </div>
      </div>
    </div>
  )
}

export default Header;