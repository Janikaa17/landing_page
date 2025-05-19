import faces from "../assets/download.jpg";
import { Link } from "react-router-dom";
import image1 from "../assets/image.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3]; // Updated to include image2

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="flex flex-col items-center pt-16"
      style={{
        minHeight: "calc(100vh - 64px)", // adjust if your navbar height is different
        backgroundColor: "#D4A76A",
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'4\' numOctaves=\'8\' stitchTiles=\'stitch\'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type=\'linear\' slope=\'1.5\'/%3E%3C/feComponentTransfer%3E%3CfeGaussianBlur stdDeviation=\'0.05\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      }}
    >
      {/* <h1 className="text-[3.5rem] md:text-[3rem] font-extrabold leading-tight text-black text-center mt-6" style={{ letterSpacing: "-0.03em", maxWidth: "90vw" }}>
        IT DIDN&apos;T START WITH YOU,<br />BUT IT CAN END BECAUSE OF YOU
      </h1>
      <img
        src={faces}
        alt="Diverse faces"
        className="mt-6 rounded-lg shadow-lg w-full h-auto max-w-3xl"
        style={{ maxWidth: "700px" }}
      /> */}

      {/* Hero Section: Image + Text Side by Side */}
      <div className="flex justify-center items-center w-full mt-12">
        <div className="flex flex-col md:flex-row bg-[#AAA592] shadow-lg overflow-hidden w-full max-w-6xl h-[320px]">
          {/* Image Section */}
          <div className="md:basis-1/3 w-full h-full bg-[#e6dfc9] flex items-stretch">
            <img
              src={faces}
              alt="Leandra Isler"
              className="object-cover w-full h-full bg-center bg-no-repeat"
            />
          </div>
          {/* Text Section */}
          <div className="md:basis-2/3 w-full flex flex-col justify-center p-8 h-full" style={{ backgroundColor: '#B7C4C7' }}>
            <h2 className="text-4xl font-light text-black mb-6">Empowering Youth to End Domestic Violence</h2>
            <p className="text-xl text-black mb-8">
              Our purpose is to empower youth to take a stand against gender-based violence and domestic violence by fostering a culture of respect, equality, and action.
            </p>
            <div className="flex items-center gap-2">
              <Link to="/contact-us">
                <button className="group flex items-center gap-2 text-lg text-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border border-black text-black transition duration-300 group-hover:bg-black group-hover:text-white">&rarr;</span>
                  Connect with us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Thin black line after hero section */}
      <div className="flex justify-center w-full mt-16 mb-8">
        <div className="h-px bg-black w-full max-w-6xl" />
      </div>

      {/* Big Text Section */}
      <div className="w-full flex justify-center">
        <div className="max-w-6xl w-full px-4 pt-4 pb-8 md:pt-8 md:pb-16">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light text-black break-words text-justify" style={{ lineHeight: 1.3 }}>
            Welcome to TAG4Change – <span className="font-normal">youth-led movement for justice, equality, and safer communities. </span>
            We empower young people to take action against <span className="font-normal">gender-based and domestic violence through awareness, advocacy, and education. </span>
          </h1>
        </div>
      </div>
      <div className="flex justify-center w-full mt-6 mb-8">
        <div className="w-full max-w-6xl" style={{ height: '1.3px', backgroundColor: '#000' }} />
      </div>

      {/* Two-column Info/Image Section */}
      <div className="flex justify-center w-full mt-12">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
          {/* Left Box */}
          <div
            className="border border-black shadow-md p-8 flex-1 max-w-xl min-h-[350px] relative hover:border-black transition"
            style={{
              backgroundColor: '#D4A76A',
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'4\' numOctaves=\'8\' stitchTiles=\'stitch\'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type=\'linear\' slope=\'1.5\'/%3E%3C/feComponentTransfer%3E%3CfeGaussianBlur stdDeviation=\'0.05\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            }}
          >
            <div className="text-5xl text-black font-light select-none">+</div>
            <div className="mt-2 p-6">
              <h2 className="text-2xl font-light mb-4">VOICES OF CHANGE</h2>
              <p className="text-base text-black mb-6">
                Every story of transformation begins with a single voice. At TAG4Change, we amplify these voices—stories of resilience, courage, and hope from young individuals taking a stand against domestic violence. Through our initiatives, youth are not just participants; they are leaders, educators, and advocates driving meaningful change in their communities.
              </p>
              <Link to="/about">
                <button className="group flex items-center gap-2 text-lg text-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border border-black text-black transition duration-300 group-hover:bg-black group-hover:text-white">&rarr;</span>
                  Read more
                </button>
              </Link>
            </div>
          </div>

          {/* Right Box - Image Section with Slideshow */}
          <div className="flex-1 max-w-xl min-h-[350px] relative">
            <div className="relative w-full h-full">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Youth empowerment ${index + 1}`}
                  className={`w-full h-full object-cover border border-black shadow-md absolute transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {/* Slideshow Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-black' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute bottom-6 left-6">
              <Link to="/gallery">
                <button className="group flex items-center gap-2 text-lg text-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border border-black bg-black text-white transition duration-300 group-hover:bg-black group-hover:text-white">&rarr;</span>
                  Gallery
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-16 mb-8">
        <div className="w-full max-w-6xl" style={{ height: '1.3px', backgroundColor: '#000' }} />
      </div>
    </div>
  );
}
