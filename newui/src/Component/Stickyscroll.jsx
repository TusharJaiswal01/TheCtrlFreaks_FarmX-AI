"use client";
import React from "react";
import { StickyScroll } from "./Acertnity/sticky-scroll-reveal";


const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <img
        src="https://t4.ftcdn.net/jpg/10/71/25/19/240_F_1071251933_RlwCjPlOAkZKEtWVvHDXwSP43KMbCilZ.jpg"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo" />
    </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://khetibuddy.com/wp-content/uploads/2024/02/Hand-using-device-with-stats-and-crops-in-the-background.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <img
        src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/f16c4b5c-d439-4b1f-b81c-8ab426673378/f3b719e9-e3c6-4851-8d64-8f7e7dfaac88_1792x1024.jpg?t=1716722272"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo" />
    </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://as1.ftcdn.net/v2/jpg/11/41/13/52/1000_F_1141135239_SSB2XNaRdxPNG7dW5mvH3OCkGIkIVgfB.jpg"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    (<div className="">
      <StickyScroll content={content} />
    </div>)
  );
}
