import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import 'tailwindcss/tailwind.css';
import ImmersiveBackground from './Another';
import ImageScroller from './ImageScroller';

gsap.registerPlugin(ScrollTrigger);


const ScrollEffect = () => {
  const containerRef = useRef(null);
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);

  useEffect(() => {
    // GSAP animations code (as you provided)
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=1900',
        scrub: true,
        pin: true,
        markers: false,
      },
    })
    .fromTo(
      firstImageRef.current,
      { y: 0, opacity: "1", clipPath: 'inset(0% 0% 0% 0%)' },
      { y: '-500px', duration: 1, clipPath: 'inset(50% 0% 0% 0%)' }
    )
    .fromTo(
      secondImageRef.current,
      { y: '0%', opacity: "0" },
      { y: 0, duration: 1, opacity: "1" },
      '<'
    )
    .fromTo(
      '.image-left', 
      { x: '-120%', opacity: 0 },
      { x: '-220px', opacity: 1, duration: 1 }
    )
    .fromTo(
      '.image-right', 
      { x: '40%', opacity: 0 },
      { x: '170px', opacity: 1, duration: 1 },
      '<'
    )
    .fromTo(
      '.second-image-left', 
      { x: '-150%', opacity: 0 }, 
      { x: '-380px', opacity: 1, duration: 1 }
    )
    .fromTo(
      '.second-image-right', 
      { x: '150%', opacity: 0 }, 
      { x: '330px', opacity: 1, duration: 1 }, 
      '<'
    );
  }, []);

  return (
    <div ref={containerRef} className=" h-[100vh] w-screen flex justify-center items-center relative overflow-hidden z-10 " style={{backgroundImage: `url('')`}}>
      {/* iPhone Image */}
      <div className="relative w-80 z-10 overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696811effea0ba47d64ed54_Holding-iPhone-p-1080.png"
          alt="iPhone"
          className="relative inset-0 w-full h-auto z-50 ml-9"
        />

        <div className='absolute top-2 ml-[4.25rem] z-0 w-32 h-[17.25rem] overflow-hidden'>
          <img
            ref={firstImageRef}
            src="https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696811effea0ba47d64eddb_phone-lock.jpg"
            alt="First Image"
            className="absolute w-[100%] h-[100%] object-cover z-0 rounded-2xl mix-blend-difference"
          />
          <img
            ref={secondImageRef}
            src="EducationSystem.jpg"
            alt="Second Image"
            className="absolute w-[100%] h-[100%] object-cover z-0"
          />
        </div>
      </div>

      {/* First Pair of Images */}
      <ImmersiveBackground imgLink="multilingual.jpg" Classprop="image-left absolute" margetop="-5.5rem" />
      <ImmersiveBackground imgLink="EducationChatbot.avif" Classprop="image-right absolute" margetop="-5.5rem" />

      {/* Second Pair of Images */}
      <ImmersiveBackground imgLink="CodeEditor.avif" Classprop="second-image-left absolute" margetop="-4rem" small="true" />
      <ImmersiveBackground imgLink="StudentMonitoring.jpg" Classprop="second-image-right absolute" margetop="-4rem" small="true" />

      {/* Add ImageScroller at the bottom */}
      <ImageScroller />
    </div>
  );
};

export default ScrollEffect;