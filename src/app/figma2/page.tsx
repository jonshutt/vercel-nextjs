import { Inter } from 'next/font/google';
import { Italianno } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '900'],
  variable: '--font-inter',
});

const italianno = Italianno({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-italianno',
});

export default function Figma2Page() {
  return (
    <div className={`bg-white min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${inter.variable} ${italianno.variable}`}>
      {/* Heading */}
      <div className="mb-8">
        <h1 className="font-inter font-black text-[#881577] text-2xl sm:text-3xl lg:text-4xl">
          Component Showcase
        </h1>
        <h2 className="font-italianno text-[#f402cf] text-2xl sm:text-3xl lg:text-4xl mt-2">
          Creative Design System
        </h2>
      </div>

      {/* Button Row */}
      <div className="flex flex-wrap gap-4 mb-12">
        <button className="bg-[#e4c1c1] hover:bg-[#d4b1b1] transition-colors box-border flex gap-[10px] items-center justify-center p-[10px] rounded-[38px] min-w-[200px]">
          <span className="font-inter font-normal text-[12px] text-black">
            Explore Features
          </span>
        </button>
        <button className="bg-[#e4c1c1] hover:bg-[#d4b1b1] transition-colors box-border flex gap-[10px] items-center justify-center p-[10px] rounded-[38px] min-w-[200px]">
          <span className="font-inter font-normal text-[12px] text-black">
            View Portfolio
          </span>
        </button>
        <button className="bg-[#e4c1c1] hover:bg-[#d4b1b1] transition-colors box-border flex gap-[10px] items-center justify-center p-[10px] rounded-[38px] min-w-[200px]">
          <span className="font-inter font-normal text-[12px] text-black">
            Get Started
          </span>
        </button>
      </div>

      {/* Panel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Panel 1 */}
        <div className="bg-[#e6e8df] border border-black border-solid box-border flex flex-col gap-[14px] items-start p-[10px] rounded-lg">
          <h3 className="font-inter font-black text-[#881577] text-lg sm:text-xl">
            Innovation Hub
          </h3>
          <p className="font-inter font-normal text-[12px] text-black leading-relaxed">
            Discover cutting-edge solutions that transform how we think about technology and design. Our innovation hub showcases the latest trends and breakthrough methodologies.
          </p>
        </div>

        {/* Panel 2 */}
        <div className="bg-[#e6e8df] border border-black border-solid box-border flex flex-col gap-[14px] items-start p-[10px] rounded-lg">
          <h3 className="font-inter font-black text-[#881577] text-lg sm:text-xl">
            Creative Solutions
          </h3>
          <p className="font-inter font-normal text-[12px] text-black leading-relaxed">
            Unleash your creativity with our comprehensive suite of tools and resources. From concept to execution, we provide everything you need to bring your ideas to life.
          </p>
        </div>

        {/* Panel 3 */}
        <div className="bg-[#e6e8df] border border-black border-solid box-border flex flex-col gap-[14px] items-start p-[10px] rounded-lg">
          <h3 className="font-inter font-black text-[#881577] text-lg sm:text-xl">
            Future Ready
          </h3>
          <p className="font-inter font-normal text-[12px] text-black leading-relaxed">
            Stay ahead of the curve with our forward-thinking approach to development and design. We build solutions that adapt and evolve with changing needs.
          </p>
        </div>
      </div>

      {/* Content Paragraphs */}
      <div className="mt-16">
        <h2 className="font-italianno text-[#f402cf] text-2xl sm:text-3xl mb-8">
          About Our Vision
        </h2>
        <div className="space-y-6 max-w-4xl">
          <p className="font-inter font-normal text-[#6526ad] text-sm leading-relaxed">
            In the ever-evolving landscape of digital innovation, we stand at the forefront of transformative design thinking. Our approach combines cutting-edge technology with human-centered principles, creating solutions that not only meet today&apos;s challenges but anticipate tomorrow&apos;s opportunities. Through meticulous research and creative exploration, we craft experiences that resonate deeply with users while driving measurable business results.
          </p>
          
          <p className="font-inter font-normal text-[#6526ad] text-sm leading-relaxed">
            The intersection of art and science forms the foundation of our methodology. We believe that great design emerges from understanding the complex relationships between form, function, and emotion. Every pixel, every interaction, and every decision is carefully considered to create cohesive ecosystems that feel both intuitive and inspiring. Our multidisciplinary team brings together diverse perspectives, ensuring that every project benefits from fresh insights and innovative thinking.
          </p>
          
          <p className="font-inter font-normal text-[#6526ad] text-sm leading-relaxed">
            Sustainability and ethical design principles guide our creative process. We recognize that our work has lasting impact on users, communities, and the environment. This awareness drives us to develop solutions that are not only beautiful and functional but also responsible and inclusive. From accessibility considerations to environmental consciousness, we integrate these values seamlessly into every aspect of our design practice.
          </p>
          
          <p className="font-inter font-normal text-[#6526ad] text-sm leading-relaxed">
            Collaboration lies at the heart of our success. We work closely with clients, stakeholders, and end-users throughout the entire design journey, fostering open communication and shared vision. This collaborative approach ensures that our solutions are not only technically excellent but also aligned with real-world needs and constraints. Together, we transform ambitious ideas into tangible realities that make a meaningful difference.
          </p>
        </div>
      </div>

      {/* Images Section */}
      <div className="mt-16">
        <h2 className="font-italianno text-[#f402cf] text-2xl sm:text-3xl mb-8">
          Visual Gallery
        </h2>
        {/* Gallery Component */}
        <div className="flex gap-[10px] items-center justify-center">
          {/* Image 1 */}
          <div className="relative w-[110px] h-[110px]">
            <div className="absolute bg-[#d9d9d9] border-[#611010] border-[10px] border-solid inset-0"></div>
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
              Design
            </div>
          </div>
          
          {/* Image 2 */}
          <div className="relative w-[110px] h-[110px]">
            <div className="absolute bg-[#d9d9d9] border-[#611010] border-[10px] border-solid inset-0"></div>
            <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
              Code
            </div>
          </div>
          
          {/* Image 3 */}
          <div className="relative w-[110px] h-[110px]">
            <div className="absolute bg-[#d9d9d9] border-[#611010] border-[10px] border-solid inset-0"></div>
            <div className="w-full h-full bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center text-white font-bold text-sm">
              Build
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
