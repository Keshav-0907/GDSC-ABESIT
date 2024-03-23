import Navbar from "@/components/Navbar";
import React from "react";
import { PastEvents } from "@/Common/PastEvents";
import Link from "next/link";
import Head from "next/head";
import ProgressBar from "@/components/ProgressBar";

const events = () => {
  return (
    <>
      <Head>
        <title>GDSC ABESIT | Events</title>
      </Head>
      <div>
        <ProgressBar />
        <Navbar />
        <div className="my-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 px-5 lg:px-8 md:my-10">
          <div className="text-5xl">Our Past Events</div>

          <div className="text-gray-400 text-sm">
            we conducted various events, sessions this year, some of them are...
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-20">
            {PastEvents.map((event) => (
              <div
                key={event.id}
                className=" border-[1px] border-gray-300 w-fit p-1 rounded-3xl"
              >
                <div>
                  <img
                    src={event.img}
                    alt="err"
                    className="w-72 h-40 object-cover rounded-3xl"
                  />
                </div>

                <div className="my-5 text-black px-2">
                  <div className="font-medium text-xl">{event.title}</div>
                  <div className="text-xs">{event.date}</div>

                  <div className="text-gray-500 text-xs my-2 max-w-fit">
                    {event.description}
                  </div>

                  <div>
                    {event.link ? (
                      <Link
                        className=" text-white bg-black rounded-xl flex justify-center items-center h-10 mt-5 hover:cursor-pointer"
                        href={event.link}
                      >
                        {" "}
                        Know More{" "}
                      </Link>
                    ) : (
                      <div className=" text-gray-500 bg-gray-300 rounded-xl flex justify-center items-center h-10 mt-5">
                        More Info Coming soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default events;
