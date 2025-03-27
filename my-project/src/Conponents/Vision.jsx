// import React from "react";

// const Vision = () => {
//   return (
//     <section className="grid grid-cols-3 gap-4 items-end max-w-5xl mx-auto py-12">
//       {/* Images */}

//         <img
//           src="/assets/vision1.jpeg"
//           alt="Dubai"
//           className="h-72 w-full object-cover"
//         />
//         <img
//             src="/assets/vision2.jpeg"
//             alt="Italy"
//             className="h-[14rem] w-[90%]  object-cover "
//           />
//           <img
//             src="/assets/vision3.jpeg"
//             alt="Villa"
//             className="h-[10rem] w-full object-cover"
//           />

//         <div className="flex items-end gap-6">

//         </div>

//       {/* Text & Button */}
//       {/* <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
//         <h1 className="text-3xl lg:text-4xl font-serif font-semibold leading-snug">
//           Preatoni Building Dreams, Defining Excellence with Vision and Quality
//         </h1>
//         <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-medium rounded-full flex items-center gap-2 hover:bg-yellow-600 transition">
//           LEARN MORE →
//         </button>
//       </div> */}
//     </section>
//   );
// };

// export default Vision;

import React from "react";
import Btn from "./Btn";

const Vision = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row gap-4 items-end max-w-5xl px-4 mx-auto py-12">
        {/* Images */}

        <img
          src="/assets/vision1.jpeg"
          alt="Dubai"
          className="h-[21rem] hidden lg:block  lg:w-[40%] object-cover"
        />
        <div className="lg:w-[55%] w-full">
          <h1 className="text-2xl font-medium text-center lg:text-start lg:text-3xl pb-2">
            Preatoni Building Dreams, Defining Excellence with Vision and
            Quality
          </h1>
          <div className="flex justify-center lg:hidden py-2">
            <Btn
              label={"LEARN MORE"}
              className={"border border-black "}
              iconColor={"text-black"}
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end items-center lg:gap-4 gap-2">
            <img
              src="/assets/vision2.jpeg"
              alt="Italy"
              className="h-[16rem] lg:w-[40%] w-full  object-cover "
            />
            <div className="w-full">
             <div className="lg:block hidden">
             <Btn
                label={"LEARN MORE"}
                className={"border border-black "}
                iconColor={"text-black"}
              />
             </div>
              <img
                src="/assets/vision3.jpeg"
                alt="Villa"
                className="h-[12rem] mt-2 w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex items-end gap-6"></div>

        {/* Text & Button */}
        {/* <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
        <h1 className="text-3xl lg:text-4xl font-serif font-semibold leading-snug">
          Preatoni Building Dreams, Defining Excellence with Vision and Quality
        </h1>
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-medium rounded-full flex items-center gap-2 hover:bg-yellow-600 transition">
          LEARN MORE →
        </button>
      </div> */}
      </section>
    </>
  );
};

export default Vision;
