// Asset imports
const imgAVibrantGreenLandscapeFeaturingAWindTurbineAndSolarPanelsUnderAClearBlueSky = "http://localhost:3845/assets/0d91c06b3432bcf4d8c54f1f733063214b3f774e.png";
const imgAModernWindTurbineStandingTallAgainstAClearBlueSkyWithGreenFieldsInTheForeground = "http://localhost:3845/assets/0d5a87f78f11f7e5e17e88f9c70d8f47fca990d0.png";
const imgDivider = "http://localhost:3845/assets/e434be69a6673e36fd05386c0857bf43bf7ff853.svg";
const imgDivider1 = "http://localhost:3845/assets/1e685c62159fcc229523c45fb48a488ded0e3ba8.svg";
const imgItalic = "http://localhost:3845/assets/1f340ae4792561254410b3f10adeb641c220778f.svg";
const imgBattery = "http://localhost:3845/assets/8758c29123e3942dcc0327a6fb759ae3ac902675.svg";
const imgBriefcase = "http://localhost:3845/assets/81503f1367c6721eafa58664d6d72374a880a526.svg";
const imgServer = "http://localhost:3845/assets/8b19907d3f083347c2f919e66d9455ebdc26adc8.svg";
const imgStar = "http://localhost:3845/assets/38d08dfcb02a344ef6e6e72fcc06e5ebf4bc8611.svg";
const imgDivider2 = "http://localhost:3845/assets/417542aedf1c4e810dc9503be79b95939eef286e.svg";
const imgDivider3 = "http://localhost:3845/assets/0000f553d2822bebfd51caa5a5f49f38d2f91b93.svg";

export default function FigmaPage() {
  return (
    <div className="bg-[#fafcff] min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="bg-[#fafcff] flex items-center justify-between py-4 w-full border-b border-gray-200">
        <div className="flex items-center">
          <p className="font-serif font-semibold text-[#1b2128] text-2xl sm:text-3xl">
            Rethink
          </p>
        </div>
        <nav className="flex font-serif font-normal gap-6 sm:gap-8 text-[#1b2128] text-lg sm:text-xl">
          <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>
      </div>

      {/* Main Content Container */}
      <div className="w-full py-8 sm:py-12">
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="bg-[#fafcff] flex flex-col items-center pb-12 w-full">
            <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden rounded-lg">
              {/* Hero content overlay */}
              <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-6 sm:px-8 lg:px-12">
                <div className="max-w-2xl">
                  <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-[#1b2128] mb-6">
                    Rethink Carbon Solutions
                  </h1>
                  <p className="font-sans font-normal text-lg sm:text-xl lg:text-2xl opacity-70 text-[#1b2128] leading-relaxed">
                    Innovative solutions for a sustainable future.
                  </p>
                </div>
              </div>
              {/* Background image */}
              <img 
                alt="A vibrant green landscape featuring a wind turbine and solar panels under a clear blue sky" 
                className="absolute inset-0 w-full h-full object-cover object-center" 
                src={imgAVibrantGreenLandscapeFeaturingAWindTurbineAndSolarPanelsUnderAClearBlueSky} 
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-[#fafcff] flex flex-col gap-6 items-start pb-16 pt-12 w-full">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1b2128] w-full">
              Our Values
            </h2>
            
            {/* First Row of Value Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <div className="bg-[rgba(37,80,126,0.09)] border border-transparent rounded-2xl p-8 h-64 flex flex-col gap-6">
                <div className="w-16 h-16">
                  <img alt="Sustainability icon" className="w-full h-full object-contain" src={imgItalic} />
                </div>
                <p className="font-sans font-normal text-lg text-[#1b2128]">
                  Sustainability
                </p>
              </div>
              <div className="bg-[rgba(37,80,126,0.09)] border border-transparent rounded-2xl p-8 h-64 flex flex-col gap-6">
                <div className="w-16 h-16">
                  <img alt="Innovation icon" className="w-full h-full object-contain" src={imgBattery} />
                </div>
                <p className="font-sans font-normal text-lg text-[#1b2128]">
                  Innovation
                </p>
              </div>
              <div className="bg-[rgba(37,80,126,0.09)] border border-transparent rounded-2xl p-8 h-64 flex flex-col gap-6">
                <div className="w-16 h-16">
                  <img alt="Integrity icon" className="w-full h-full object-contain" src={imgBriefcase} />
                </div>
                <p className="font-sans font-normal text-lg text-[#1b2128]">
                  Integrity
                </p>
              </div>
            </div>

            {/* Second Row of Value Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <div className="bg-[rgba(37,80,126,0.09)] border border-transparent rounded-2xl p-8 h-64 flex flex-col gap-6">
                <div className="w-16 h-16">
                  <img alt="Collaboration icon" className="w-full h-full object-contain" src={imgServer} />
                </div>
                <p className="font-sans font-normal text-lg text-[#1b2128]">
                  Collaboration
                </p>
              </div>
              <div className="bg-[rgba(37,80,126,0.09)] border border-transparent rounded-2xl p-8 h-64 flex flex-col gap-6">
                <div className="w-16 h-16">
                  <img alt="Impact icon" className="w-full h-full object-contain" src={imgStar} />
                </div>
                <p className="font-sans font-normal text-lg text-[#1b2128]">
                  Impact
                </p>
              </div>
              <div className="bg-[rgba(37,80,126,0.09)] border border-transparent rounded-2xl p-8 h-64 flex flex-col gap-6">
                <div className="w-16 h-16">
                  <img alt="Excellence icon" className="w-full h-full object-contain" src={imgStar} />
                </div>
                <p className="font-sans font-normal text-lg text-[#1b2128]">
                  Excellence
                </p>
              </div>
            </div>
          </div>

          {/* Solutions Section */}
          <div className="bg-[#fafcff] flex flex-col gap-12 items-start justify-center py-12 w-full">
            <div className="flex flex-col gap-12 items-center w-full">
              <div className="flex flex-col gap-4 items-center max-w-4xl text-[#1b2128] text-center w-full">
                <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl w-full">
                  Discover Our Solutions
                </h2>
                <p className="font-sans font-normal text-lg sm:text-xl w-full leading-relaxed">
                  Explore our cutting-edge solutions for reducing carbon footprints and promoting sustainability.
                </p>
              </div>
              <button className="bg-[#3396ff] flex items-center justify-center px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                <span className="font-mono font-medium text-black text-lg">
                  Learn More
                </span>
              </button>
            </div>
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
              <img 
                alt="A modern wind turbine standing tall against a clear blue sky with green fields in the foreground" 
                className="w-full h-full object-cover object-center" 
                src={imgAModernWindTurbineStandingTallAgainstAClearBlueSkyWithGreenFieldsInTheForeground} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#fafcff] flex flex-col gap-6 items-start pb-6 pt-16 w-full border-t border-gray-200">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-8 items-start">
            <p className="font-serif font-normal text-xl text-[rgba(20,33,46,0.62)]">
              2023 Rethink Carbon
            </p>
          </div>
          <button className="border border-[rgba(73,91,110,0.2)] flex items-center justify-center px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="font-mono font-medium text-[#1b2128] text-lg">
              Contact Us
            </span>
          </button>
        </div>
      </footer>
    </div>
  );
}

