'use client';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Jua } from "next/font/google";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  type ISourceOptions,
  type Container,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import StackComponent from "./components/StackComponent";
import YearAgoComponent from "./components/YearAgoComponent";
import TitleJourneyComponent from "./components/TitleJourneyComponent";
import SubtitleJourneyComponent from "./components/SubtitleJourneyComponent";
import CardJourneyComponent from "./components/CardJourneyComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkComponent from "./components/LinkComponent";
const jua = Jua({ weight: "400", subsets: ["latin"] });
export default function Home() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadFull(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      // background: {
      //   color: {
      //     value: "#0d47a1",
      //   },
      // },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 75,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: false,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 0.2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.8,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  const imageUrls = ["c", "py", "go", "js", "php", "java", "ts"]

  if (init) return (<>
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
    <main className="flex min-h-screen flex-col items-center bg-utama max-w-layar">
      <nav className="flex justify-between items-center w-full max-w-screen-lg  px-16 pt-16 ">
        <div className={jua.className}>
          <p className="text-4xl font-bold select-none">Reza</p>
        </div>
        <div className="bg-blue-600 rounded-md h-10 w-28 flex justify-center items-center group-hover">
          <button className="flex rounded-md bg-blue-400 w-full justify-center h-full items-center translate-y-[-3px] font-medium hover:bg-blue-500 transition-colors ease-in">
            Start
          </button>
        </div>
      </nav>
      <section className="flex flex-col items-center justify-center my-16  px-16 ">
        <h1 className="uppercase text-6xl font-black ">avada kedavra!</h1>
        <p className="text-xl">Get to know me more, feel free to share your thoughts.</p>
        <div className="flex gap-5 my-12">

          <a target="_blank" href="https://www.linkedin.com/in/m-rezamuktasib/" className="bg-blue-600 rounded-md h-12 flex justify-center items-center group-hover">
            <button className="text-md font-bold px-8 flex rounded-md bg-blue-400 w-full justify-center h-full items-center translate-y-[-3px] hover:bg-blue-500 transition-colors ease-in">
              Connect In LinkedIn
            </button>
          </a>
          <a target="_blank" href="https://github.com/Reza1290" className="bg-slate-800 rounded-md h-12 flex justify-center items-center group-hover">
            <button className="text-md font-bold px-8 flex rounded-md bg-slate-600 w-full justify-center h-full items-center translate-y-[-3px] hover:bg-slate-700 transition-colors ease-in">
              Github
            </button>
          </a>
        </div>
      </section>

      <section className="relative w-full flex justify-center my-12 translate-x-[-2rem]">
        <section className="bg-utama border border-x-0 border-slate-800 w-full h-56 w-[3000px] rotate-[5deg] rounded flex items-center">
          <div className="relative flex gap-6 carousel-secondary">

            {imageUrls.map((url, index) =>
              <StackComponent key={index} type={url.toUpperCase()} id={`${"stack" + index}`} name="stack" imageUrl={`${"assets/" + url + ".jpg"}`} last={imageUrls.length - 1 == index} first={index == 0} />
            )}
          </div>
        </section>
      </section>
      <section className="relative flex flex-col items-center justify-center mx-16 max-w-screen-lg w-full">
        <h1 className="uppercase text-4xl font-black ">MY Journey</h1>
        <div className="grid grid-cols-9 w-full my-10">
          <div className="col-span-4 grid grid-rows-4 justify-end text-end gap-4">
            <div className="flex flex-col items-end gap-y-4">
              <YearAgoComponent year={'2014/02/01'} />
              <LinkComponent link="/media/" title="Me doing green screen thing :D" />
              <LinkComponent link="https://www.youtube.com/@mrezamuktasib/" title="My Youtube Channel" />
            </div>
            <div className="flex flex-col">
              <TitleJourneyComponent title="Junior High School" />
              <SubtitleJourneyComponent subtitle="SMP NEGERI 3 SURABAYA" reference="https://smpn3sby.sch.id/" />
              <CardJourneyComponent>
                <p>
                  &nbsp; &nbsp;  &nbsp;This was the year I met friends who also shared a passion for computers,
                  as well as a senior and teacher (Mr. Dirin and Mr. A. Mukhtar) who <strong>introduced me to Linux</strong>. It was the beginning of my deep dive into the world of open-source software.
                  Around this time, I also got my second laptop, an <strong>ASUS A455LF</strong>, as a reward for getting accepted into one of the top middle schools
                  in Surabaya.

                </p>
                <br />
                <p>
                  &nbsp;  &nbsp;  &nbsp;I joined an open-source community called <strong>3 FOSS IT</strong>, and I had the privilege of serving as the leader from 8th to 9th grade.
                  Additionally, I was part of the <strong>Youth Scientific Writing extracurricular</strong>, where I developed a love for writing and inventing,
                  expressing my ideas through <strong>abstracts and projects</strong>!


                </p>
              </CardJourneyComponent>
            </div>
            <div className="flex flex-col items-end gap-y-4">
              <YearAgoComponent year={'2019/01/01'} />
              <LinkComponent link="/media/" title="Abstract lists" />
              <LinkComponent link="#media" title="Achievement" />
            </div>
            <div className="flex flex-col ">
              <TitleJourneyComponent title="University" />
              <SubtitleJourneyComponent subtitle="POLITEKNIK ELEKTRONIKA NEGERI SURABAYA (EEPIS)" reference="" />
              <CardJourneyComponent>
                <p>
                  &nbsp; &nbsp;  &nbsp;I&apos;m grateful to have been accepted into Politeknik Elektronika Negeri Surabaya, where <strong>I pursued a diploma in Informatics Engineering</strong>. My journey continued to evolve as I participated in several competitions, including UI/UX design and business competitions that won an award, and even wrote a paper. I also earned a national <strong>certification as a Junior Web Developer</strong>.
                </p>
                <br />
                <p>
                  &nbsp;  &nbsp;  &nbsp;Now, <strong>I find myself creating this website while studying at Hanyang University ERICA as part of the IISMA program</strong>, where I am honored to be an awardee!


                </p>
              </CardJourneyComponent>
            </div>
          </div>
          <div className="grid grid-rows-4 justify-center">
            <div className="row-span-4 rounded bg-gradient-to-b from-utama via-white to-utama w-1"></div>
          </div>
          <div className="col-span-4 grid grid-rows-4 gap-4">
            <div className="flex flex-col ">
              <TitleJourneyComponent title="Elementary School" />
              <SubtitleJourneyComponent subtitle="SDN PERAK BARAT KAWASAN" reference="" />
              <CardJourneyComponent>
                <p>
                  &nbsp; &nbsp;  &nbsp;This was the year <strong>I was introduced to computers</strong> by a friend, sparking my interest in the world of technology.
                  At first, it was just gaming—thanks to my friend for showing me the ropes! We spent hours playing Gamehouse classics and
                  even tried out simulators like FlightSim and Train. During this time, I received my first notebook, <strong>the Acer Aspire One</strong>.
                  I was beyond grateful!
                </p>
                <br />
                <p>
                  &nbsp;  &nbsp;  &nbsp;This period also marked the beginning of my journey into <strong>video editing</strong>.
                  With just a trial version of After Effects, I managed to create my first green screen edits.
                  However, this was also when I encountered my first tech issue—my laptop got stuck in a <strong> boot loop</strong>.
                  That challenge led me to learn how to <strong>create a bootable disk</strong>, and my fascination with computers grew from there.

                </p>
              </CardJourneyComponent>
            </div>
            <div className="flex flex-col items-start gap-y-4">
              <YearAgoComponent year={'2016/01/01'} />
              <LinkComponent link="https://www.youtube.com/watch?v=tewBstzGH00" title="Youtube Tutorial :D" reverse={true} />
              <LinkComponent link="https://3fossit.wordpress.com/" title="3FOSSIT Website" reverse={true} />
            </div>
            <div className="flex flex-col ">
              <TitleJourneyComponent title="Senior High School" />
              <SubtitleJourneyComponent subtitle="SMA NEGERI 8 SURABAYA" reference="https://sman8sby.sch.id/" />
              <CardJourneyComponent>
                <p>
                  &nbsp; &nbsp;  &nbsp;In this year, the <strong>COVID-19 pandemic hit</strong>, and I had to study from home. But this became an opportunity for me to dive into how games are made and to <strong>begin learning programming</strong>. I started with the basics—flowcharts, data types—and even though I didn&apos;t go too deep, I managed to learn <strong>my first programming language, its C++</strong>.

                </p>
                <br />
                <p>
                  &nbsp;  &nbsp;  &nbsp;I also continued <strong>submitting abstracts to various competitions</strong>, even though I didn&apos;t make it to the finals.
                  It&apos;s okay, it <strong>was a great learning experience!</strong> This year
                  was also filled with some disappointment, as I was rejected from several of my dream universities.
                  But <strong>I didn&apos;t give up</strong>, and eventually, I found myself at <a href="https://pens.ac.id/" target="_blank" className="font-bold">Politeknik Elektronika Negeri Surabaya</a>, which has now become my favorite campus!

                </p>
              </CardJourneyComponent>
            </div>
            <div className="flex flex-col items-start gap-y-4">
              <YearAgoComponent year={'2022/01/01'} />
              <LinkComponent link="#achievement" title="Achievement & Certificate" reverse={true} />
              <LinkComponent link="https://iisma.kemdikbud.go.id/" title="What Is IISMA?" reverse={true} />
            </div>

          </div>

        </div>
      </section>
      <section className="relative flex flex-col items-center justify-center mx-16 max-w-screen-lg w-full">
        <h1 className="uppercase text-4xl font-black ">Featured Works</h1>
            
      </section>
    </main>

  </>
  );
}

