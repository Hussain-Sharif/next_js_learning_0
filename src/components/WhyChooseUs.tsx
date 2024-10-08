"use client"
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content=[
    {
        title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
        description:
          "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="https://images.pexels.com/photos/4572212/pexels-photo-4572212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
    {
        title: "Live Feedback & Engagement",
        description:
          "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.",
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="https://images.pexels.com/photos/4090883/pexels-photo-4090883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
    {
        title: "Cutting-Edge Curriculum",
        description:
          "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="https://images.pexels.com/photos/5553626/pexels-photo-5553626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
    {
        title: "Limitless Learning Opportunities",
        description:
          "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.",
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="https://images.pexels.com/photos/4005446/pexels-photo-4005446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
]

export default function WhyChooseUs(){
    return(
        <div>
            <StickyScroll content={content}/>
        </div>
    )
}