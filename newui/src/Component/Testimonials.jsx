import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="relative bg-[url('https://templateup.site/coopfarm/wp-content/uploads/sites/17/2024/09/volterra-winter-panorama-rolling-hills-and-green-2022-02-02-05-06-36-utc-min-v2.jpg')] text-white py-16 px-6 md:px-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-green-800 opacity-60"></div>
      <div className="relative text-start">
        <h3 className="text-green-950 font-bold text-4xl">Testimonials</h3>
        <h2 className="text-4xl font-bold mt-2">What people say about us</h2>
      </div>

      <div className="relative flex justify-start mt-8">
        <div className="bg-white text-gray-800 p-6 md:p-8 rounded-lg shadow-lg max-w-lg z-10">
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/10.jpg"
              alt="Ethan Brown"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-green-700">Ethan Brown</p>
              <p className="text-sm text-gray-600">Customer</p>
             
            </div>
          </div>
        </div>
      </div>

      {[ "https://i.pinimg.com/474x/bc/d0/8b/bcd08be9ae691bf68bf607f17b581c0c.jpg", "https://i.pinimg.com/474x/14/af/71/14af716f36b81bf9243516409920479c.jpg", "https://i.pinimg.com/474x/0c/37/8d/0c378db72d4cdb9a3c59a4bc5c55e6c6.jpg", "https://i.pinimg.com/474x/59/9c/f6/599cf6778ccec92f8ca71af381401703.jpg", "https://i.pinimg.com/474x/50/3e/47/503e47aa32e5de7e8b4bc5f119ae6e5c.jpg",].map((img, index) => (
       
           
      
       <div
          key={index}
          className={`absolute rounded-full hidden lg:flex flex-col item-center overflow-hidde border-4   border-white ${
            index % 2 === 0 ? "w-20 h-20 md:w-24 md:h-24" : "w-16 h-16 md:w-32 md:h-32"
          } ${
            ["top-10 right-24","top-44 right-48","top-72 right-12","top-10 right-96","right-80 top-80"][index]
          }`}
        >
          <img src={img} alt="" className="w-full  h-full rounded-full object-cover" />
          <div className="flex justify-center text-yellow-500 mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className='text-sm ' />
                ))}
              </div>
       
        </div>

       
      ))}

    </section>
  );
};

export default Testimonials;