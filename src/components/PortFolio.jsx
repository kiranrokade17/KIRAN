import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import reactjs from "../../public/reactjs.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-40 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="w-[200px] h-[250px] border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-110 duration-300 mx-auto flex flex-col items-center"
              key={id}
            >
              {/* Center the logo */}
              <div className="flex justify-center items-center mb-4">
                <img
                  src={logo}
                  className="w-[100px] h-[100px] p-2 rounded-full border-[2px]"
                  alt={name}
                />
              </div>
              {/* Card Content */}
              <div className="text-center">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-sm">
          
                </p>
              </div>
              {/* Reduced button size */}
              <div className="mt-auto flex space-x-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-1 text-sm rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-3 py-1 text-sm rounded">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
