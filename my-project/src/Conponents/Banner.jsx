import React from 'react'

const Banner = () => {
  return (
    <div>
    
    <div className="relative   layout  text-white overflow-hidden py-12 lg:py-6 lg:h-[80vh] ha-uto flex justify-end items-end">
   
      

      {/* Content Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 ">
        
        <div className="">
          <h1 className="text-3xl md:text-4xl  text-center lg:text-start font-light leading-tight">
            Let's Build the Next Big Thing Together
          </h1>
        </div>

        
        <div className="text-sm text-center lg:text-start">
          <p>
            Preaton is an international property development company with a strong presence in Italy, Egypt, and the
            UAE. With a commitment to excellence, innovation, and sustainability, we specialize in creating luxurious
            residential, commercial, and mixed-use projects.
          </p>
        </div>

        
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <div className="absolute inset-0 rounded-full border border-white/30 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-black flex items-center justify-center">
                  <span className="text-black font-bold text-xl">P</span>
                </div>
              </div>
            </div>

            {/* Circular Text */}
            <div className="absolute inset-0 ">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text>
                  <textPath xlinkHref="#circlePath" className="text-[8px] uppercase tracking-widest fill-white">
                    Contact Us • Excellence • Innovation • Sustainability • Contact Us •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Banner