"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsContainer() {
  return (
    <div className="h-[32rem] flex flex-col antialiased bg-black dark:bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Absolutely fantastic experience! The staff is incredibly friendly and professional. My barber took the time to understand exactly what I wanted and delivered a perfect haircut. The atmosphere is relaxed and welcoming, and the shop is always clean. Highly recommend this place to anyone looking for a top-notch grooming experience!",
    name: "Yaksh",
    title: "5/5",
  },
  {
    quote:
      "Hands down the best barber shop in town! I’ve been coming here for months, and I’m always impressed by the consistency and quality of service. The barbers are true artists—they pay attention to every detail and make sure you leave looking sharp. The vibe is great, and the prices are very reasonable for the level of skill you get.",
    name: "Aaryan",
    title: "5/5",
  },
  {
    quote: "I can’t say enough good things about this barber shop! From the moment I walked in, I felt like a valued customer. The barber was super knowledgeable and gave me advice on how to style my hair better. The cut was precise, and I left feeling like a million bucks. Definitely my go-to spot now!",
    name: "Shubham",
    title: "5/5",
  },
  {
    quote:
      "This barber shop is a gem! The barbers are skilled, friendly, and really take pride in their work. I’ve had haircuts here multiple times, and each one has been better than the last.",
    name: "Sandeep",
    title: "5/5",
  },
  {
    quote:
      "Incredible experience every single time! I’ve recommended this place to all my friends, and they’ve all had equally amazing experiences. Don’t hesitate—book an appointment today!",
    name: "Harpreet",
    title: "5/5",
  },
];
