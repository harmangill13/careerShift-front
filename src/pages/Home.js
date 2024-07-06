import React from "react";
import Carousel from "../components/carousel.component";

const Home = () => {
  const imageUrls = [
    "https://thebusinessmagazine.co.uk/wp-content/uploads/2024/01/RS1366_iStock-1127397327-1-e1705061756967.jpg",
    "https://www.shutterstock.com/shutterstock/videos/1106683701/thumb/1.jpg?ip=x480",
    "https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-15204.jpg",
   "https://wallpapers.com/images/featured/hd-engineering-a1m4ls6bf0rchyfd.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-indigo-600">CareerShift</h1>
          <h2 className="mt-4 text-3xl text-gray-700">Your Ultimate Resource for Career Changes</h2>
        </div>
        <div className="mt-8">
          <Carousel slides={imageUrls} />
        </div>
        <div className="mt-12 space-y-8">
          <section className="text-center">
            <h2 className="text-4xl font-bold text-gray-800">Welcome to CareerShift!</h2>
            <p className="mt-4 text-lg text-gray-600">
              Are you considering a career change but feeling overwhelmed by the process? Look no further! CareerShift is your ultimate resource for navigating the complexities of shifting careers, providing you with all the information you need to confidently embark on your next professional journey.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-gray-800">Discover Your Next Career</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore a comprehensive database of careers, complete with detailed descriptions, requirements, and valuable resources. Whether you're looking to switch industries or advance within your current field, CareerShift offers insights into a wide array of professions to help you make informed decisions about your future.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-gray-800">Professional Coaching Support</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our network of experienced coaches is here to guide you every step of the way. From personalized advice to strategic planning, our professional coaches offer the support you need to navigate your career transition successfully. Gain clarity, build confidence, and achieve your career goals with the help of our dedicated experts.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-gray-800">What You’ll Find on CareerShift:</h2>
            <ul className="mt-4 list-disc list-inside text-lg text-gray-600 space-y-2">
              <li>
                <span className="font-bold text-gray-800">Extensive Career Database:</span> Dive into detailed profiles of various careers, including job descriptions, necessary qualifications, and essential resources to get you started.
              </li>
              <li>
                <span className="font-bold text-gray-800">Expert Coaching:</span> Connect with professional career coaches who provide personalized guidance, helping you to identify your strengths, set goals, and create a roadmap for your career change.
              </li>
              <li>
                <span className="font-bold text-gray-800">Valuable Resources:</span> Access articles, tips, and tools designed to support your career transition, from resume building and interview preparation to skill development and networking strategies.
              </li>
            </ul>
          </section>
          <section className="text-center">
            <p className="mt-4 text-lg text-gray-600">
              At CareerShift, we understand that changing careers can be daunting, but with the right information and support, it can also be an exciting and fulfilling experience. Let us help you turn your career aspirations into reality.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Start your career shift today with CareerShift – your guide to a brighter professional future!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;