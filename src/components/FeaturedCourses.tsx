"use client"  // we add whenever there is framer motion components and 
import Link from "next/link"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"


interface Course{
    "id": number,
    "title": string,
    "slug": string,
    "description": string,
    "price": number,
    "instructor": string,
    "isFeatured": boolean,
}

export default function FeaturedCourses(){

    const featuredCourses=courseData.courses.filter((course:Course)=>course.isFeatured)

    return (
        <div className="py-12 relative rounded-t-[60px]  bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
                </div>
            </div>
            <div className="mt-10 mx-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
                {
                    featuredCourses.map((course:Course)=>(
                        <div key={course.id} className="flex flex-col">
                            <BackgroundGradient
                                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                    <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                        <h1 className="text-xl sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</h1>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                        <Link href={`/courses/${course.slug}`}>
                                        
                                        <button className="mt-5 h-10 bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6  text-white inline-block">
                                                <span className="absolute inset-0 overflow-hidden rounded-full">
                                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                                                </span>
                                                <div className="relative h-9 flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                                                <span>{`Learn More`}</span>
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                    d="M10.75 8.75L14.25 12L10.75 15.25"
                                                    ></path>
                                                </svg>
                                                </div>
                                                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                                            </button>
                                        </Link>
                                    </div>
                            </BackgroundGradient>
                        </div>
                    ))
                }
            </div>
            <div className="mt-20 text-center">
                <Link href={"/courses"}
                className="px-4 py-2"
                >
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#06b6d4,53%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                View All courses
                </button>
                </Link>
            </div>
        </div>
    )
}

