import React from "react";
import Link from "next/link";
import Image from "next/image";
import LinkedIn from "../images/contact-me-icons/linkedin.png";
import Instagram from "../images/contact-me-icons/instagram.png";
import Github from "../images/contact-me-icons/github.png";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-4 py-12 px-6 sm:px-16 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-purple-900 rounded-full h-80 w-80 z-0 top-2/3 -left-4 transform -translate-x-1/2 -translate-1/2 blur-2xl opacity-50 absolute "></div>
      <div className="px-4 xl:px-16 z-10">
        <h5 className="text-4xl md:text-5xl font-bold text-transparent mb-4 bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600">
          Let's Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 text-justify">
          {""}I am currently looking for new opportunities. My inbox is always
          open. Whether you have a questions or just want to say hi, I'll try my
          best to get back to you.
        </p>

        <div className="socials flex flex-row gap-4">
          <Link href="https://www.linkedin.com/in/randima-dias-a2a22a245/">
            <Image
              src={LinkedIn}
              alt="linkedin-icon"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>

          <Link href="https://github.com/RandimaD25">
            <Image src={Github} alt="github-icon" width={40} height={40} />
          </Link>

          <Link href="https://www.instagram.com/randima_dias_?igsh=bmRhaDB1eGduMTk4">
            <Image
              src={Instagram}
              alt="instagram-icon"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>

      <div className="pr-4 xl:pr-16 pl-2 xl:pl-6 py-8 md:py-0">
        <form className="flex flex-col gap-2">
          <label htmlFor="name" className="text-white block font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="John Doe"
            className="bg-[#1819E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5 mb-3"
          />

          <label htmlFor="email" className="text-white block font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="jcob@gmail.com"
            className="bg-[#1819E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5 mb-3"
          />

          <label htmlFor="subject" className="text-white block font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            required
            placeholder="What’s this about?"
            className="bg-[#1819E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5 mb-3"
          />

          <label htmlFor="message" className="text-white block font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            placeholder="Write your message here..."
            className="bg-[#1819E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5 mb-3"
          />

          <button
            className="bg-gradient-to-r from-purple-400 to-pink-600 text-white mt-3 sm:mt-0 cursor-pointer rounded-full py-3"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
