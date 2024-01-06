"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import Icons from "./components/Icons";
import About from "./components/About";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";

const inter = Inter({ subsets: ["latin"] });




export default function Home() {

  const currentYear: number = new Date().getFullYear();
  console.log(currentYear);
  

  return (
    <>
   
      {/* <div className="overflow-visible bg-contain bg-center h-128 rounded-md border-y-4  border-grey-600 max-md:h-32"> */}
      <div className="overflow-visible bg-contain bg-center  rounded-md border-y-4  border-grey-600 max-md:h-32 h-80">
        {/* background image */}
        <Image
          className="h-80 w-full max-md:h-32"
          src="/background.jpg"
          alt="Vercel Logo"
          width={1800}
          height={10}
          priority
        />
         {/* <Image
          className="absolute inset-0 object-cover w-full h-80"
          src="/background.jpg"
          alt="Vercel Logo"
          width={1800}
          height={10}
          priority
        /> */}
        {/* <div className="flex justify-center  -mt-40">
      <Welcome/>
      </div> */}
      </div>
      <div className=" max-md:ml-1 -mt-44 overflow-visible ml-12 flex items-center justify-start rounded-lg max-[1180px]:flex-col max-[880px]:-mt-16 ">
        {/* dp */}
        <Image
          className="rounded-full z-10 max-md:h-48 max-md:w-48" // h-full w-full max-md:h-12 max-md:w-34 " 
          src="/dp.jpeg"
          alt="Vercel Logo"
          width={550}
          height={550}
          priority
        />
        {/* <h2 className="drop-shadow-2xl rounded-md -ml-4 px-12 border-y-4 border-gray-600ml-12 font-sans text-6xl max-sm:text-3xl leading-tight text-sky-700 border-r-4 bg-slate-100  max-[1180px]:mt-6 ">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qaisar Hussain <br />
          <p className="text-sky-300 text-5xl max-sm:text-3xl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web Developer</p>
        </h2> */}
        <div className="drop-shadow-2xl rounded-md -ml-4 px-12 border-y-4 border-gray-600ml-12 font-sans text-6xl max-sm:text-3xl leading-tight text-sky-700 border-r-4 bg-slate-100  max-[1180px]:mt-6 ">
          Qaisar Hussain 
          <h3 className="text-sky-300 text-5xl max-sm:text-3xl">Web Developer</h3>
        </div>
      </div>
      <div className="flex justify-center  mt-4 max-md:mx-0">
      <Welcome/>
      </div>
      <Icons/>
      {/* <Projects/> */}
      {/* i have not pushed this section projects yet as it is incomplete as of 3 dec 2023 */}
      <div className="mr-8 flex justify-center max-md:mx-0">
      

        <div className="max-[880px]:justify-center text-sky-400 drop-shadow-2xl mt-12 bg-slate-100 text-3xl m-1 w-3/4 leading-tight rounded-md border-gray-300 border-y-4 max-md:w-full max-md:mx-0 border-2">
          <div className="bg-slate-600 flex items-center justify-center ">
            <h2 className="text-gray-400 rounded-xl text-4xl"> Introduction</h2> <br />
          </div>
          {/* <div className="py-4 px-6 max-[570px]:text-2xl max-[570px]:m-1 max-[570px]:px-0 max-[570px]:mx-0  max-[570px]:bg-slate-100 w-full"> */}
          <div className="py-4 px-6 max-[570px]:text-2xl max-[570px]:m-1 max-[570px]:px-6 max-[570px]:mx-0  max-[570px]:bg-slate-100 w-full ">
          &nbsp;&nbsp;&nbsp;&nbsp; Hello, my name is Qaisar and I am a 
            <strong> Full-Stack Web </strong> developer. <br /> I am passionate about using
            my coding skills to solve complex problems and create innovative
            solutions. <br /> <br /> &nbsp;&nbsp;&nbsp;&nbsp;As a developer, I have experience in a variety of
            programming languages and technologies, and I am always eager to
            learn and expand my skillset. I am a team player and thrive in
            collaborative environments where I can work with other talented
            developers to achieve a common goal. <br /> In my free time, I enjoy
            exploring new technologies, participating in hackathons, and
            contributing to open-source projects. <br /> <br /> &nbsp;&nbsp;&nbsp;&nbsp;I believe that software
            development is more than just writing code. it&#39;s about
            understanding user needs, designing elegant solutions, and
            continuously improving the user experience. <br /> I am excited to be a
            part of this dynamic industry and look forward to making a positive
            impact through my work.
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center bg-slate-600 py-4 px-4 mt-12">
          <h2 className="text-gray-400 rounded-xl text-4xl">Languages</h2>
        </div>
        <br />
        <br />
        <ul className="flex justify-evenly">
          <li>
            {" "}
            <Image
              className="cursor-pointer"
              src="/html3.avif"
              alt="Vercel Logo"
              width={200}
              height={100}
              priority
            />{" "}
          </li>
          <li>
            {" "}
            <Image
              className="cursor-pointer"
              src="/css.webp"
              alt="Vercel Logo"
              width={200}
              height={100}
              priority
            />{" "}
          </li>
          <li>
            {" "}
            <Image
              className="cursor-pointer"
              src="/js.webp"
              alt="Vercel Logo"
              width={200}
              height={100}
              priority
            />{" "}
          </li>
          <li>
            {" "}
            <Image
              className="cursor-pointer"
              src="/ts.png"
              alt="Vercel Logo"
              width={200}
              height={100}
              priority
            />{" "}
          </li>
          <li className="max-md:ml-4">
            {" "}
            <Image
              className=" cursor-pointer rounded-full"
              src="/sol.png"
              alt="Vercel Logo"
              width={200}
              height={100}
              priority
            />{" "}
          </li>
        </ul>
      </div>
      <br />
      <br />
      <div className="flex justify-center bg-slate-600 py-4 px-4">
        <h2 className="text-gray-400 rounded-xl text-4xl">Framworks</h2>
      </div>

      <ul className="flex py-8  justify-evenly">
        <li>
          {" "}
          <Image
            className="cursor-pointer"
            src="/next3.png"
            alt="Vercel Logo"
            width={200}
            height={100}
            priority
          />{" "}
        </li>

        <li className="max-md:mr-4">
          {" "}
          <Image
            className="cursor-pointer" 
            src="/react2.png"
            alt="Vercel Logo"
            width={200}
            height={100}
            priority
          />{" "}
        </li>

        <li>
          {" "}
          <Image
            className="cursor-pointer"
            src="/node2.webp"
            alt="Vercel Logo"
            width={200}
            height={100}
            priority
          />{" "}
        </li>

        <li>
          {" "}
          <Image
            className="cursor-pointer"
            src="/bootstrap.png"
            alt="Vercel Logo"
            width={200}
            height={100}
            priority
          />{" "}
        </li>

        <li>
          {" "}
          <Image
            className="cursor-pointer rounded-full"
            src="/chakraui.png"
            alt="Vercel Logo"
            width={200}
            height={100}
            priority
          />{" "}
        </li>
      </ul>
      <div className="flex justify-center bg-slate-600 py-4 px-4">
        <h2 className="text-gray-400 rounded-xl text-4xl">
          Additional Technologies
        </h2>
      </div>

      <ul className="flex py-8 mt-4  justify-evenly">
        <li>
          {" "}
          <Image
            className="cursor-pointer"
            src="/github2.png"
            alt="Vercel Logo"
            width={200}
            height={100}
            priority
          />{" "}
        </li>
        <li>
          {" "}
          <Image
            className="cursor-pointer"
            src="/figma.png"
            alt="Vercel Logo"
            width={200}
            height={100}
            priority
          />{" "}
        </li>
        <li>
          {" "}
          <Image
            className="cursor-pointer"
            src="/vs.png"
            alt="Vercel Logo"
            width={200}
            height={100}
            priority
          />{" "}
        </li>
        <li>
          {" "}
          <Image
            className="cursor-pointer rounded-t-lg rounded-b-lg "
            src="/chat2.jpeg"
            alt="Vercel Logo"
            width={200}
            height={100}
            priority
          />{" "}
        </li>
      </ul>

      <div className="bg-current mt-16">
        <footer className="flex justify-center">
          <p className="text-slate-100 text-2xl leading-7 py-10 max-md:ml-4">
            Copyright &copy; {currentYear} All Rights Reserved by &nbsp;
            <Link href=""> qaisarhussain.bio</Link>
          </p>
        </footer>
      </div>
    </>
  );
}