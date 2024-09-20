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
import FlipCardComponent from "./components/FlipCardComponent";
import CalendarComponent from "./components/CalendarComponent";
import ExperienceCardComponent from "./components/ExperienceCardComponent";
import ProductComponent from "./components/ProductComponent";
import NavBar from "./components/NavBar";
import fs from "fs/promises";
import path from "path";
import ProjectSection from "./components/ProjectSection";


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
            enable: false,
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

  const imageUrls = ["C", "Python", "Golang", "JavaScript", "PHP", "Java", "TypeScript"]

  if (init) return (<>
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
    <main className="flex min-h-screen flex-col items-center bg-utama max-w-layar overflow-x-hidden">
      <NavBar></NavBar>
      <section className="flex flex-col items-center justify-center my-16  max-sm:px-8 px-16 ">
        <h1 className="uppercase text-6xl font-black ">avada kedavra!</h1>
        <p className="text-xl">Get to know me more, feel free to share your thoughts.</p>
        <div className="flex gap-5 my-12">

          <a target="_blank" href="https://www.linkedin.com/in/m-rezamuktasib/" className="bg-blue-600 rounded-md h-12 flex justify-center items-center group-hover">
            <button className="text-md font-bold px-8 flex rounded-md bg-blue-400 w-full justify-center h-full items-center translate-y-[-3px] hover:bg-blue-500 transition-colors ease-in">
              Connect On LinkedIn
            </button>
          </a>
          <a target="_blank" href="https://github.com/Reza1290" className="bg-slate-800 rounded-md h-12 flex justify-center items-center group-hover">
            <button className="text-md font-bold px-8 flex rounded-md bg-slate-600 w-full justify-center h-full items-center translate-y-[-3px] hover:bg-slate-700 transition-colors ease-in">
              Github
            </button>
          </a>
        </div>
      </section>

      <section className="relative w-full flex justify-center my-12 translate-x-[-2rem] max-xl:max-w-screen-lg ">
        <section className="bg-utama border border-x-0 border-slate-800 w-full py-6 w-full rotate-[5deg] rounded flex items-center">
          <div className="relative flex gap-6 carousel-secondary">
            {imageUrls.map((url, index) =>
              <StackComponent key={index} type={url} id={`${"stack" + index}`} name="stack" imageUrl={`${"assets/" + url + ".jpg"}`} last={imageUrls.length - 1 == index} first={index == 0} />
            )}
          </div>
        </section>
      </section>
      <section className="relative flex flex-col items-center justify-center max-sm:px-2 px-16 max-w-screen-lg w-full">
        <h1 className="uppercase text-4xl font-black">MY Journey</h1>
        <div className="grid grid-cols-9 max-sm: grid-cols-12 w-full my-10 ">
          <div className="col-span-4 max-sm:col-auto grid grid-rows-4 justify-end text-end gap-4 max-sm:hidden">
            <div className="flex flex-col items-end gap-y-4 ">
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
          <div className="grid grid-rows-4 col-span-1 justify-center">
            <div className="row-span-4 rounded bg-gradient-to-b from-utama via-white to-utama w-1"></div>
          </div>
          <div className="col-span-4 max-sm:col-auto grid grid-rows-4 gap-4">
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
              <div className="flex flex-col items-end gap-y-4 mb-4 max-sm:flex hidden">
                <YearAgoComponent year={'2014/02/01'} />
                <LinkComponent link="/media/" title="Me doing green screen thing :D" />
                <LinkComponent link="https://www.youtube.com/@mrezamuktasib/" title="My Youtube Channel" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-4">
              <div className="flex flex-col mb-4 max-sm:flex hidden">
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
              <div className="flex flex-col items-end gap-y-4 mb-4 max-sm:flex hidden">
                <YearAgoComponent year={'2019/01/01'} />
                <LinkComponent link="/media/" title="Abstract lists" />
                <LinkComponent link="#media" title="Achievement" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-4">
              <div className="flex flex-col max-sm:flex hidden">
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
              <YearAgoComponent year={'2022/01/01'} />
              <LinkComponent link="#achievement" title="Achievement & Certificate" reverse={true} />
              <LinkComponent link="https://iisma.kemdikbud.go.id/" title="What Is IISMA?" reverse={true} />

            </div>

          </div>

        </div>
      </section>
      <ProjectSection></ProjectSection>
      {/* <CalendarComponent></CalendarComponent> */}
      <section className="relative flex flex-col items-center justify-center max-sm:px-8 px-16 max-w-screen-lg w-full py-16">
        <h1 className="uppercase text-4xl font-black mt-12"> What I&apos;ve Achieved</h1>
        <h1 className=" text-xl font-semibold mb-12 text-slate-200"><span className="bg-blue-400 rounded px-1">Experiences</span>, <span className="bg-red-400 rounded px-1">Certifications  or Licenses</span>, <span className="bg-green-500 px-1 rounded">Awards</span></h1>
        <div className="relative w-full flex justify-center items-center grid grid-rows-4 gap-y-8">
          <ExperienceCardComponent type="exp" month="Nov" year="2023" title="Intership Web Developer (3 Months)" subtitle="PT. Digital Solusi Master" />

          <ExperienceCardComponent month="Nov" year="2023" title="1st Winner at FASILKOM FEST UPN " subtitle="Business Plan Competition" />
          <ExperienceCardComponent month="Nov" year="2023" title="3rd Winner at FASILKOM FEST UPN " subtitle="Ui/Ux Competition" />
          <ExperienceCardComponent type="cert" month="Nov" year="2023" title="Certificate Junior Web Developer" subtitle="National Certification by BNSP" />
          <ExperienceCardComponent month="Mar" year="2023" title="Silver Medal at IYSA COMPETITION " subtitle="Innovation Competition" />
          <ExperienceCardComponent month="Feb" year="2022" title="2nd Winner at IE FAIR 17th " subtitle="Industrial Engineering Olympiad" />
          <ExperienceCardComponent month="Dec" year="2021" title="3rd Winner at CERDAS CERMAT SMA AWARDS 2021" subtitle="Nationality(Pancasila) Olympiad" />
          <ExperienceCardComponent month="Oct" year="2021" title="4th Winner at KOMPETISI KIMIA UNAIR" subtitle="Chemistry Olympiad" />

        </div>
      </section>
      <section className="flex flex-col w-full bg-slate-800 relative z-2 items-center overflow-hidden">
        <div className="relative max-sm:px-8 px-16 max-w-screen-lg py-16 grid grid-cols-2 gap-16 max-md:grid-cols-1">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-black">What I&apos;ve Built</h1>
            <h1 className="text-md mb-12 text-slate-200 text-justify">This is the various digital products and platforms I&apos;ve created over the years. From YouTube channels and blogs to entrepreneurial ventures, each project reflects my passion for innovation and creativity.
              Whether it&apos;s sharing knowledge, building communities, or launching a business, these creations represent my journey of growth and learning in the digital world. Explore the projects that have shaped my skills and vision for the future.
            </h1>
          </div>
          <div className="relative z-[99] min-h-[450px]">
            <div className='absolute z-[93] bg-blue-700 top-20 left-40 border-blue-900 border-x-0 border-b-[0.2rem] border-t-0 rounded-md h-64 w-96 bg-cover no-repeat bg-[url("/assets/product/blog_pemrograman.png")]'></div>
            <div className='absolute z-[92] bg-blue-700 border-blue-900 border-x-0 border-b-[0.2rem] border-t-0 rounded-md h-64 w-96 bg-cover no-repeat bg-[url("/assets/product/yt_pemrograman.png")]'></div>
            <div className='absolute z-[94] top-72 left-20 bg-blue-700 border-blue-900 border-x-0 border-b-[0.2rem] border-t-0 rounded-md h-32 w-72 bg-cover no-repeat bg-[url("/assets/product/ig_recode.png")]'></div>
          </div>
        </div>
      </section>
      <section className="w-full relative z-2 w-full flex justify-center">
        <div className="relative flex flex-col max-sm:px-8 px-16 max-w-screen-lg py-16 grid grid-cols-12 max-md:grid-cols-3 gap-8 grid-flow-col-dense 	max-md:grid-rows-3">
          <ProductComponent title="Pemrograman Tech" desc="I create Pemrograman Tech to make Tutorial about Tech such as web Programming."
            youtube="https://www.youtube.com/@pemrogramantech"
            instagram="https://instagram.com/pemrograman.tech"
            link="https://www.pemrograman.tech"
            image="yt_pemrograman"
          ></ProductComponent>
          <ProductComponent title="CiptaKode" desc="I offer some service about hosting, web programming, such as slicing, develop website etc."
            instagram="https://instagram.com/ciptakode"
            link="https://ciptakode.biz.id"
            image="wb_ciptakode"
          ></ProductComponent>
          <ProductComponent title="ReCode Daily" desc="Share my code or knowledge as daily Programming."
            instagram="https://instagram.com/re.codedaily"
            image="ig_recode"
          ></ProductComponent>

        </div>
      </section>
      <section className="relative bg-gradient-to-t from-slate-100/5 to-utama h-80 z-2 w-full"></section>
      <section className="bg-utama w-full py-8 z-2 relative flex flex-col justify-center items-center gap-8">
        <div className={jua.className}>
          <p className="text-4xl font-bold select-none">Reza</p>
        </div>
        <div className="flex gap-8">
          <div className="">
            <a href="gmail.com">

              Hubungi Saya
            </a>
          </div>
          <div className="">
            <a href="/assets/cv.pdf" download='thanks'>

              Download Cv
            </a>
          </div>
          <div className="">
            <a href="/labs">

              Labs
            </a>
          </div>
          <div>
            <a href="https://leetcode.com/u/Reza1290/">

              Xd
            </a>
          </div>
        </div>


        <div className="flex gap-4">
        <a href="https://github.com/Reza1290" className="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 496 512">
            <path
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </a>


        <a href="https://www.instagram.com/m_rezamuktasib" className="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512">
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </a>


        <a href="https://linkedin.com/m-rezamuktasib" className="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512">
            <path
              d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
        </a>


        <a href="https://stackoverflow.com/users/21103209/m-reza-muktasib" className="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 384 512">
            <path
              d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z" />
          </svg>
        </a>
        </div>

        <div className="text-center font-semibold">
          ©2024-2025 Reza1290. CopyLeft. <br /> Design Inspired by Tako & FontAwesome ♥, rest is my idea! :D
        </div>
      </section>
    </main>


  </>
  );
}

