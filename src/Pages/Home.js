import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center my-50">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br />My Name is<br />
        </h1>
        <h1
  ref={h12}
  className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
>
  {name}
</h1>


<a href="/dv.docx" download>
  <button
    className="text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg"
    draggable="true"
    onDragStart={(e) => {
      e.dataTransfer.setData('text/plain', '/dv.docx');
    }}
  >
    Download CV
  </button>
</a>

        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-3xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>
      <div className="mt-5 md:mt-0">
        <img
          ref={myimageref}
          className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full object-cover md:ml-auto"
          src={img}
          alt="Prem Aman"
        />
      </div>
    </main>
  );
}

export default Home;