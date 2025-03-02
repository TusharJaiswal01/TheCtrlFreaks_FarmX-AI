export default function HeroSection() {
    const imageURL = "https://scontent.fbom19-1.fna.fbcdn.net/o1/v/t0/f2/m340/AQOGiKlbyjsoilgeQzOM2JChp5LMWKdx0ntxCxwN4KnddZ7cWHHCDW6X8mvhzt0oeyXwH-LNchjh5XsyQlSpnSBWD5RQRTxPfWpoziFi8LyQkWkprfQDw5ylCC4k4zq3dVttLsygRCUBtr8rWXRJx1fAluCtXw.jpeg?_nc_ht=scontent.fbom19-1.fna.fbcdn.net&_nc_cat=103&ccb=9-4&oh=00_AYA2Ht8DhkLcGqvSvbCXy6DUF12vGXXGKNAxDAQwyRVzSw&oe=67C4C48E&_nc_sid=5b3566"; // Ensure correct image path
  
    return (
      <div className="bg-gradient-to-t from-[#09203f] to-[#537895] text-white font-serif min-h-screen flex flex-col items-center">
        {/* Navbar */}
        
  
        {/* Hero Section */}
        <div className="max-w-6xl w-full flex flex-col items-center px-6 md:px-10 py-16">
          {/* Title and Description at Top */}
          <div className="text-center max-w-2xl mb-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">FarmXAI Team</h1>
            <p className="text-base md:text-3xl mt-2">
              We are delighted to help you anytime. Let's bring together the farmers community under oneroof and enhance the element of technology in most important sector of our economy, AGRICULTURE!
            </p>
          </div>
  
          {/* Main Content Layout */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center relative">
            {/* Left Section with Circular Styled Text */}
            <div className="w-full ml-[-20px] md:w-1/3 text-left mb-8 md:mb-0 relative flex flex-col items-start">
              <div className="mt-6">
                <span className="text-5xl md:text-7xl font-bold">1.2M</span>
                <p className="text-sm md:text-2xl">Deification and worship of natural phenomena</p>
              </div>
              <p className="uppercase text-xs md:text-xl font-semibold mt-4">
                The assignment of a physical form to a god
              </p>
            </div>
  
            {/* Center Single Image */}
            <div className="relative w-[250px] md:w-[350px] lg:w-[450px] h-[350px] md:h-[500px] flex justify-center items-center border-4 rounded-2xl border-white">
              <img
                src={imageURL}
                alt="Hero"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
  
            {/* Right Section with Horizontal Line and Button */}
            <div className="w-full md:w-1/3 text-right mt-8 md:mt-0 flex flex-col items-end">
              <div className="mb-6 flex  justify-end items-center">
                <button className=" px-4 py-2 rounded-full flex items-center gap-2 bg-white hover:text-white">
                  <span className="text-sm">tusharjaiswaltj01@gmail.com</span>
                  <span className="w-5 h-5 border border-white rounded-full flex items-center justify-center">→</span>
                </button>
              </div>
              <h3 className="font-semibold text-2xl">Participants</h3>
              <div className="flex justify-center md:justify-end mt-2">
                <img src="man.jpg" alt="User" className="w-12 h-12 rounded-full" />
                <img src="women.jpg" alt="User" className="w-12 h-12 rounded-full -ml-2" />
                <img src="man2.jpg" alt="User" className="w-12 h-12 rounded-full -ml-2" />
                <span className="ml-2">10+ More</span>
              </div>
              <div className="w-full border-t border-white my-4"></div>
              <p className="mt-4 italic text-xs md:text-xl">
                "Declension Natur is a feminine noun. Remember that, in German, both the spelling of the word."
                <br /> - Jorge Batlart
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }