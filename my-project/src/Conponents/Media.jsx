


// import { useState } from "react";
// import { FaChevronRight, FaMinus, FaPlus } from "react-icons/fa";
// import Btn from "./Btn";

// const Media = () => {
//   // State to track which items are expanded
//   const [expanded, setExpanded] = useState([true, false, false]);

//   // Toggle function to show/hide images
//   const toggleExpand = (index) => {
//     setExpanded((prev) =>
//       prev.map((item, i) => (i === index ? !item : item))
//     );
//   };

//   // Media items data
//   const mediaItems = [
//     {
//       date: "9 Sep, 2024",
//       title: "Development of the Week: Palazzo Preatoni in Business Bay.",
//       description:
//         "For March 2024’s last development of the week, we take a comprehensive look at Palazzo Preatoni. It is a project by the globally renowned Preatoni Properties.",
//       imgSrc: "/assets/media1.jpeg",
//     },
//     {
//       date: "15 June, 2024",
//       title: "Italian Property Developer Preatoni Acquires Dubai Star Tower.",
//       description:
//         "The Dubai Star Tower will rise to 45 floors and incorporate retail, office space and residential units in addition to a spa and swimming pool...",
//       imgSrc: "/assets/media1.jpeg",
//     },
//     {
//       date: "9 Sep, 2024",
//       title: "Preatoni Real Estate opens up in Dubai.",
//       description:
//         "We have built high-class tourism and residential complexes, hotels and leisure centers worth 2.5bn euros in the MENA region, such as the Domina Coral...",
//       imgSrc: "/assets/media1.jpeg",
//     },
//   ];

//   return (
//     <section className="layout py-8 border-t border-gray-200">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-4">
//         <h2 className="text-4xl font-serif text-gray-900">Press & Media</h2>
//         <div className="flex flex-col md:flex-row md:items-center mt-4 md:mt-0">
//           <p className="text-gray-600 max-w-xl text-sm md:text-base pr-4">
//           Preatoni stands at the forefront of global real estate development, delivering iconic projects that redefine innovation and elegance. Stay updated with our latest news, project launches
//           </p>
//         </div>
//         <Btn label={"VIEW ALL"} borderColor={"border border-black"} iconColor={"text-black"} />
//       </div>

//       {mediaItems.map((item, index) => (
//         <div key={index} className="border-b border-gray-200">
//         <div className="flex flex-col md:flex-row py-4 gap-6">
//           {/* Left Section (Date & Heading) */}
//           <div className="flex items-center gap-4 w-1/2">
//             <p className="text-sm text-gray-500 w-32 flex-shrink-0">{item.date}</p>
//             <h1 className="text-base font-medium mt-2 flex-1">{item.title}</h1>
//           </div>
      
//           {/* Middle Section (Description) */}
//           <div className="w-1/2">
//             <p className="text-sm text-gray-600">{item.description}</p>
//           </div>
      
//           {/* Right Section (Expand Button) */}
//           <div className="flex justify-end">
//             <button
//               className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
//               onClick={() => toggleExpand(index)}
//             >
//               {expanded[index] ? (
//                 <FaMinus className="h-4 w-4 text-gray-500" />
//               ) : (
//                 <FaPlus className="h-4 w-4 text-gray-500" />
//               )}
//             </button>
//           </div>
//         </div>
      
//         {/* Image Section */}
//         {expanded[index] && (
//           <div className="mt-4 relative h-full w-full overflow-hidden rounded-md">
//             <img
//               src={item.imgSrc}
//               alt={item.title}
//               className="object-cover rounded-2xl w-full"
//             />
//             <div className="absolute bottom-6 left-8">
//               <span className="bg-primary border border-white text-white text-xs px-3 py-2 rounded-full">
//                 Market Trends
//               </span>
//             </div>
//           </div>
//         )}
//       </div>
//       ))}
//     </section>
//   );
// };

// export default Media;

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Btn from "./Btn";

const Media = () => {
  // State to track which items are expanded
  const [expanded, setExpanded] = useState([true, false, false]);

  // Toggle function to show/hide images
  const toggleExpand = (index) => {
    setExpanded((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  // Media items data
  const mediaItems = [
    {
      date: "9 Sep, 2024",
      title: "Development of the Week: Palazzo Preatoni in Business Bay.",
      description:
        "For March 2024’s last development of the week, we take a comprehensive look at Palazzo Preatoni. It is a project by the globally renowned Preatoni Properties.",
      imgSrc: "/assets/media1.jpeg",
    },
    {
      date: "15 June, 2024",
      title: "Italian Property Developer Preatoni Acquires Dubai Star Tower.",
      description:
        "The Dubai Star Tower will rise to 45 floors and incorporate retail, office space and residential units in addition to a spa and swimming pool...",
      imgSrc: "/assets/media1.jpeg",
    },
    {
      date: "9 Sep, 2024",
      title: "Preatoni Real Estate opens up in Dubai.",
      description:
        "We have built high-class tourism and residential complexes, hotels and leisure centers worth 2.5bn euros in the MENA region, such as the Domina Coral...",
      imgSrc: "/assets/media1.jpeg",
    },
  ];

  return (
    <section className="layout py-8 border-t border-gray-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 pb-4">
        <h2 className="text-3xl md:text-4xl t text-gray-900">
          Press & Media
        </h2>
        <div className="flex flex-col md:flex-row items-center mt-4 mb-4 md:mt-0 md:mb-0">
          <p className="text-gray-600 max-w-xl text-sm md:text-base pr-4 text-center md:text-start">
            Preatoni stands at the forefront of global real estate development,
            delivering iconic projects that redefine innovation and elegance.
            Stay updated with our latest news, project launches.
          </p>
        </div>
        <Btn
          label={"VIEW ALL"}
          borderColor={"border border-black"}
          iconColor={"text-black"}
        />
      </div>

      {/* Media Items */}
      {mediaItems.map((item, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Section (Date & Heading) */}
            <div className="flex md:flex-row items-start md:items-center gap-4 w-full md:w-1/2">
              <p className="text-sm text-gray-500 w-24 md:w-32 flex-shrink-0">
                {item.date}
              </p>
              <h1 className="text-base font-medium flex-1">{item.title}</h1>
            </div>

            {/* Middle Section (Description) */}
            <div className="w-full md:w-1/2">
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>

            {/* Right Section (Expand Button) */}
            <div className="flex justify-end md:justify-center">
              <button
                className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                onClick={() => toggleExpand(index)}
              >
                {expanded[index] ? (
                  <FaMinus className="h-4 w-4 text-gray-500" />
                ) : (
                  <FaPlus className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          {/* Image Section */}
          {expanded[index] && (
            <div className="mt-4 relative h-full w-full overflow-hidden rounded-md">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="object-cover rounded-2xl w-full h-auto"
              />
              <div className="absolute bottom-6 left-8">
                <span className="bg-primary border border-white text-white text-xs px-3 py-2 rounded-full">
                  Market Trends
                </span>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Media;
