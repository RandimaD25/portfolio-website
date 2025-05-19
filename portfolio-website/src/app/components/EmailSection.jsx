"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import LinkedIn from "../images/contact-me-icons/linkedin.png";
import Instagram from "../images/contact-me-icons/instagram.png";
import Github from "../images/contact-me-icons/github.png";
import Loading from "../images/icon-images/loading.png";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setEmailSubmitted(false);

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const resData = await response.json();
      console.log("Message sent:", resData);
      setEmailSubmitted(true);
      formRef.current.reset(); // ✅ Reset form after submission
    } catch (error) {
      console.error("Error sending message:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-12 flex-1 flex flex-col md:grid md:grid-cols-2 md:mt-10 py-12 px-6 sm:px-16 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-purple-900 rounded-full h-80 w-80 z-0 top-2/3 -left-4 transform -translate-x-1/2 -translate-1/2 blur-2xl opacity-50 absolute "></div>

      <div className="px-4 xl:px-16 z-10">
        <h5 className="text-4xl md:text-5xl font-bold text-transparent mb-4 bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600">
          Let's Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 text-justify text-sm md:text-md lg:text-[1rem]">
          I'm on the lookout for exciting opportunities as an Associate Software
          Engineer or Software Engineer. Feel free to reach out—whether it’s
          about a role, a project, or just a quick chat, I’m always happy to
          connect!
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

      <div className="z-10 pr-4 xl:pr-16 pl-2 xl:pl-6 py-8 md:py-0">
        <form
          ref={formRef}
          className="flex flex-col gap-2 text-sm md:text-md lg:text-[1rem]"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="text-white block font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            type="text"
            id="name"
            required
            placeholder="John Doe"
            className="bg-[#1819E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5 mb-3"
          />

          <label htmlFor="email" className="text-white block font-medium">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            placeholder="johndoe@gmail.com"
            className="bg-[#1819E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5 mb-3"
          />

          <label htmlFor="subject" className="text-white block font-medium">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            required
            placeholder="What’s this about?"
            className="bg-[#1819E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5 mb-3"
          />

          <label htmlFor="message" className="text-white block font-medium">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            cols={8}
            required
            placeholder="Write your message here..."
            className="bg-[#1819E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5 mb-3"
          />

          <button
            className="bg-gradient-to-r from-purple-400 to-pink-600 text-white mt-3 sm:mt-0 cursor-pointer rounded-full py-3 flex justify-center items-center gap-4"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Image
                  className="animate-spin"
                  src={Loading}
                  width={20}
                  height={20}
                  alt="loading"
                />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>

          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
