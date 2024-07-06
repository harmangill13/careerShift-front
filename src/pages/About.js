import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-indigo-600">About CareerShift</h1>
          <p className="mt-4 text-3xl text-gray-700">Our Story</p>
        </div>
        <div className="mt-12 space-y-8">
          <section className="text-center">
            <p className="mt-4 text-lg text-gray-600">
              CareerShift was founded in 2024 by Harman Gill. Our story began with a personal journey of career transformation. Having changed my career path multiple times from physiotherapy, to sales and then joining a software engineering bootcamp, I realized the challenges and uncertainties that come with such a significant life decision.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Inspired by my own experiences, I decided to create CareerShift as one of my bootcamp projects. The goal was simple: to help people who find themselves in a similar situation as mine by providing the necessary resources and support to discover and pursue their future career paths.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              At CareerShift, we understand the complexities of changing careers and the need for reliable information and guidance. Our platform is designed to offer comprehensive career resources, expert coaching, and valuable tools to make the transition smoother and more manageable.
            </p>
          </section>
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our mission is to empower individuals to confidently navigate their career transitions, providing them with the knowledge, support, and inspiration needed to achieve their professional goals.
            </p>
          </section>
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Why CareerShift?</h2>
            <ul className="mt-4 list-disc list-inside text-lg text-gray-600 space-y-2">
              <li>Personal Experience: Founded by someone who has personally undergone career changes, we truly understand the journey and its challenges.</li>
              <li>Comprehensive Resources: Our platform offers a wealth of information on various careers, including job descriptions, qualifications, and resources.</li>
              <li>Expert Guidance: Connect with professional coaches who can provide personalized advice and strategic planning for your career shift.</li>
              <li>Supportive Community: Join a community of like-minded individuals who are also navigating their career transitions.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;