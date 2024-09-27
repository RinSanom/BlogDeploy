import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 2500 }); // Initialize AOS with a duration for animations
  }, []);

  return (
    <div className="font-sans dark:bg-black">
      {/* About Us Section */}
      <section className="text-center py-10 grid grid-cols-1 md:grid-cols-2 gap-10 bg-cyan-950">
        <div className="flex flex-col justify-center">
          <h1 data-aos="zoom-in" className="text-4xl font-bold mb-4 text-white">
            About StoryBridge
          </h1>
          <p
            data-aos="zoom-in"
            className="text-gray-200 max-w-2xl mx-auto text-lg"
          >
            Welcome to StoryBridge, a space where writers and readers come
            together to share ideas, stories, and knowledge. Whether you're a
            seasoned blogger or a first-time writer, our platform empowers you
            to create, share, and engage with a community of passionate readers.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className=" h-32 w-32 md:h-48 md:w-48 flex items-center justify-center">
            <img
              src="./public/assets/team-1.gif"
              alt="Your Image"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-yellow-500 p-10 md:p-[100px] border-t">
        <h1
          data-aos="zoom-in"
          className="text-4xl font-bold mb-4 text-center text-white"
        >
          Our History
        </h1>
        <p
          data-aos="zoom-out"
          className="text-gray-200 px-4 md:px-14 mx-auto text-lg"
        >
          When we launched StoryBridge, our goal was to provide a platform where
          individuals could share their voices and connect through storytelling.
          We set out to create an interactive space that makes blogging
          engaging, flexible, and accessible to everyone. Since then, we’ve
          empowered countless writers and readers worldwide to explore their
          passions and exchange ideas. Through our platform, we aim to foster
          creativity, community, and collaboration in the ever-evolving
          landscape of digital content.
        </p>
      </section>

      <section className="bg-cyan-950 p-10 md:p-[100px] border-t">
        <h1
          data-aos="zoom-in"
          className="text-4xl font-bold mb-4 text-center text-white"
        >
          Our Mission
        </h1>
        <p
          data-aos="zoom-in"
          className="text-gray-200 px-4 md:px-14 mx-auto text-lg"
        >
          At StoryBridge, we believe in the transformative power of knowledge
          and skills. Our mission is to empower individuals through interactive
          learning experiences that bridge the gap between theory and practical
          application. We strive to provide a dynamic platform where modern
          technical skills can be learned, practiced, and mastered. We are
          committed to fostering a community of learners who are curious,
          ambitious, and eager to thrive in the ever-evolving tech landscape.
          Through engaging content, expert insights, and collaborative
          opportunities, we aim to inspire and equip our users with the tools
          they need to succeed in their careers and beyond. Join us on this
          journey to unlock your potential and embrace the future of learning!
        </p>
      </section>

      {/* Detail Section */}
      <section className="text-center py-10 bg-yellow-500 border-t">
        <h2 data-aos="zoom-out" className="text-4xl font-bold mb-4 text-white">
          Meet Our Team
        </h2>
        <p
          data-aos="zoom-out"
          className="text-gray-200 max-w-2xl mx-auto text-lg"
        >
          Our team includes experienced engineers, innovative designers, and a
          community-focused support staff, all working together to ensure that
          your blogging experience is seamless and enjoyable.
        </p>
      </section>

      {/* Our Mentors Section */}
      <section className="text-center py-10 bg-yellow-500">
        <h2 data-aos="zoom-in" className="text-4xl font-bold mb-6 text-white">
          Our Mentors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <img
              src="./public/assets/mentor-1.jpg"
              alt="Mentor 1"
              className="w-48 h-48 rounded-full mx-auto object-cover"
            />
            <div className="about font-bold text-gray-200 text-center">
              <h2 className="text-lg">Kay Keo</h2>
              <p>Mentor</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="./public/assets/mentor-2.jpg"
              alt="Mentor 2"
              className="w-48 h-48 rounded-full mx-auto object-cover"
            />
            <div className="about font-bold text-gray-200 text-center">
              <h2 className="text-lg">Sin Sreyphea</h2>
              <p>Mentor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Members Section */}
      <section className="text-center py-10 bg-cyan-950 border-t">
        <h2 data-aos="zoom-out" className="text-4xl font-bold mb-6 text-white">
          Our Members
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              name: "Rin Sanom",
              role: "Leader",
              image: "./assets/sanom.jpg",
            },
            {
              name: "Kim Chamraoen",
              role: "Frontend & UX/UI",
              image: "./assets/chamraoen.jpg",
            },
            {
              name: "Khoy Kimhak",
              role: "PowerPoint & Script",
              image: "./assets/kimhak-pic.jpg",
            },
            {
              name: "Sorn Sophamarinet",
              role: "Frontend & UX/UI & Presentation",
              image: "./assets/marinet1.jpg",
            },
            {
              name: "Uy Chakriya",
              role: "Frontend & UX/UI",
              image: "./assets/chakrya.jpg",
            },
            {
              name: "Heang Navy",
              role: "Frontend & UX/UI",
              image: "./assets/navy.jpg",
            },
          ].map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-gray-200"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 rounded-full mx-auto object-cover"
              />
              <div className="about font-bold text-center">
                <h2 className="text-lg">{member.name}</h2>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
