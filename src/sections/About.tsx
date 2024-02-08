import HeadingSection from '../components/smallRusable/HeadingSection';

import aboutMeImg from '../assets/app-images/about-me.svg';
import Anchor from '../components/buttons/Anchor';

import Modal from '../components/smallRusable/Modal';
import { AboutProps } from '../types/myTypes';
import { useState } from 'react';
import Button from '../components/buttons/Button';

function About({ darkModeIsOn, cvUrl }: AboutProps) {
  const [showModal, setShowModal] = useState(false);
  const aboutStyles = darkModeIsOn ? 'bg-black' : 'bg-gray-dark';
  return (
    <section className={`${aboutStyles} relative overflow-hidden`}>
      <div className="container pt-14 sm-des:grid sm-des:grid-cols-12 sm-des:gap-x-5">
        {/* Modal */}
        <Modal cvURl={cvUrl || ''} showModal={showModal} setShowModal={setShowModal} />

        {/* About info */}
        <div className={`relative z-20 sm-des:col-span-8`}>
          <HeadingSection sectionName="about" className={`text-white`} />
          <div className={`mx-auto mt-8 max-w-[72ch] rounded-xl bg-red-light px-5 py-8 sm-des:py-8`}>
            <p className=" mb-5 text-center text-xl !leading-[2.4rem] text-pretty md-des:text-2xl font-semibold text-black">
              I&rsquo;m a computer science graduate with 4 years of experience in sales. I&rsquo;m happy to leverage my
              skills to help grow your business. Let&rsquo;s work together!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5">
              {/* Button trigger vertically centered scrollable modal */}
              <Button
                className="bg-red-dark px-6 sm-tab:px-5 py-4 text-xl rounded-md text-white "
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Read More
              </Button>
              {/* Contact Button */}
              <Anchor className="rounded-md bg-white px-4 py-4 text-xl text-black" href="#contact" blank={false}>
                Get in touch
              </Anchor>
            </div>
          </div>
        </div>
        <img
          src={aboutMeImg}
          alt="about-me"
          className="mx-auto px-10 sm-des:px-0 mt-14 sm-des:mt-10 self-center sm-des:col-span-4 sm-des:col-start-9 "
        />
      </div>
    </section>
  );
}

export default About;
