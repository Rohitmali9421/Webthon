import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";

function Contact() {
  const [result, setResult] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "bcdd9c56-2472-4f87-b8e1-f4e9af1b9fb7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(false);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(false);
    }
  };

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <section className="w-full overflow-x-clip bg-purple-100">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-orange-500" data-aos="fade-right">
              Contact
            </p>
            <h2
              className="font-heading mb-4 font-bold tracking-tight text-black text-3xl sm:text-5xl"
              data-aos="fade-left">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-black">
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-black">
                I'm always excited to work on new projects and explore new opportunities.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-500 text-white">
                    <FaLocationDot className='text-xl' />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-black">Location</h3>
                    <p className="text-black">Kolhapur, Maharastra, India</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-500 text-white">
                    <FaPhone className='text-xl' />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-black">Contact</h3>
                    <p className="text-black">Mobile: +91 8767507569</p>
                    <p className="text-black">Email: beatmart@gmail.com</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-500 text-white">
                    <MdOutlineWatchLater className='text-2xl' />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-black">Availability</h3>
                    <p className="text-black">Monday - Friday: 09:00 - 18:00</p>
                    <p className="text-black">Weekends: 10:00 - 14:00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12 bg-white shadow-md rounded-md" id="form">
              <h2 className="mb-4 text-2xl font-bold text-black">Ready to Get Started?</h2>
              <form id="contactForm" onSubmit={onSubmit}>
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider text-black">Name</label>
                    <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-black py-2 pl-2 pr-4 shadow-md text-black sm:mb-0" name="name" required />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider text-black">Email</label>
                    <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-black py-2 pl-2 pr-4 shadow-md text-black sm:mb-0" name="email" required />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="message" className="pb-1 text-xs uppercase tracking-wider text-black">Message</label>
                    <textarea id="message" name="message" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-black py-2 pl-2 pr-4 shadow-md text-black sm:mb-0" required></textarea>
                  </div>
                </div>
                <div className="text-center">
                  {result ? (<button type="submit" className="w-full bg-orange-500 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Sending....</button>):(<button type="submit" className="w-full bg-orange-500 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>)}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;