export default function InfoCard() {
    return (
      <div className="flex w-52 absolute left-2 bottom-2 items-center justify-center  bg-black">
        <div className="bg-white rounded-2xl shadow-lg p-6 w-80">
          {/* Label */}
          <span className="bg-yellow-300 text-black text-xs font-semibold px-3 py-1 rounded-full">
            PROVEN RESULTS
          </span>
  
          {/* Title */}
          <h2 className="text-lg font-semibold text-black mt-4">
            Our agricultural solutions are backed
          </h2>
  
          {/* Divider */}
          <div className="border-b border-gray-300 my-4"></div>
  
          {/* Footer */}
          <div className="flex items-center justify-between text-gray-600 text-sm font-medium">
            <span>Get Know More</span>
            <span className="text-xl">→</span>
          </div>
        </div>
      </div>
    );
  }
  