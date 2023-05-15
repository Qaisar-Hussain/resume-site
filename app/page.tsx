import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });




export default function Home() {
  return (
    <>
   
      <div className="verflow-visible bg-contain bg-center h-128 rounded-md border-y-4  border-grey-600 max-md:h-32">
        <Image
          className="h-full w-full max-md:h-32"
          src="/background.jpg"
          alt="Vercel Logo"
          width={1800}
          height={10}
          priority
        />
      </div>
      <div className=" max-md:ml-1 -mt-44 verflow-visible ml-12 flex items-center justify-start rounded-lg max-[880px]:flex-col max-[880px]:-mt-16 ">
        <Image
          className="rounded-full z-10 max-md:h-48 max-md:w-48" // h-full w-full max-md:h-12 max-md:w-34 " 
          src="/dp.jpeg"
          alt="Vercel Logo"
          width={550}
          height={550}
          priority
        />
        <h2 className="drop-shadow-2xl rounded-md -ml-4 px-12 border-y-4 border-gray-600ml-12 font-sans text-6xl leading-tight text-sky-700 border-r-4 bg-slate-100 md:max-xl:text-2xl md:max-lg:text-xl  max-[730px]:text-xs max-[570px]:text-2xl ">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qaisar Hussain <br />
          <p className="text-sky-300">Blockchain Developer</p>
        </h2>
      </div>

      <div className="max-md:ml-4 mr-8">
        <div className=" max-[880px]:justify-center drop-shadow-2xl mt-12 w-3/4 max-[880px]:w-full bg-slate-100 ml-12 font-sans text-4xl leading-tight rounded-md border-gray-300 border-y-4 max-md:ml-1">
          <div className="bg-slate-600 py-4 px-4  ">
            <h1 className="text-gray-400 rounded-xl">About</h1>
          </div>
          <br />
          <div className="text-sky-500 py-4 px-4 max-[570px]:text-2xl ">
            Name : Qaisar Hussain <br />
            Age : 28 years
          </div>

          <div className="text-sky-500 py-4 px-4 max-[570px]:text-2xl">
            Role : Blockchain Developer <br />
            From : Pakistan <br />
          </div>

          <div className="text-sky-500 py-4 px-4 max-[570px]:text-2xl">
            Education : 14 years
            <br />
            Experience : 10+ years <br />
          </div>
        </div>

        <div className="flex mt-12 justify-center bg-slate-600 py-4 px-4">
          <h2 className="text-gray-400  rounded-xl text-4xl">Sccocial</h2>
        </div>

        <ul className="flex py-8 mt-4  justify-evenly">
          <li>
            {" "}
            <Link href="https://www.linkedin.com/in/qaisar-hussain-789317229/">
              <Image
                className="cursor-pointer rounded-lg"
                src="/linkdin.png"
                alt="Vercel Logo"
                width={100}
                height={100}
                priority
              />{" "}
            </Link>{" "}
          </li>
          <li className="ml-4">
            {" "}
            <Link href="https://twitter.com/QaisarH65015958?t=PtYCslb_LucxFlBlYqwNfg&s=09">
              <Image
                className="cursor-pointer rounded-lg"
                src="/twitter.jpeg"
                alt="Vercel Logo"
                // fill={true}
                width={100}
                height={100}
                priority
              />{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="https://github.com/Qaisar-Hussain">
              <Image
                className="cursor-pointer rounded-lg"
                src="/github2.png"
                alt="Vercel Logo"
                width={200}
                height={100}
                priority
              />{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/https://facebook.com">
              <Image
                className="cursor-pointer rounded-lg"
                src="/fb.avif"
                alt="Vercel Logo"
                width={100}
                height={100}
                priority
              />{" "}
            </Link>{" "}
          </li>{" "}
        </ul>

        <div className="max-[880px]:justify-center text-sky-400 drop-shadow-2xl mt-12 bg-slate-100  max-md:ml-1 max-md:w-fit text-3xl m-1 w-3/4 leading-tight rounded-md border-gray-300 border-y-4">
          <div className="bg-slate-600 flex items-center justify-center ">
            <h2 className="text-gray-400 rounded-xl text-4xl"> Brief</h2> <br />
          </div>
          <div className="py-4 px-6 max-[570px]:text-2xl max-[570px]:m-1 max-[570px]:px-0 max-[570px]:mx-0  max-[570px]:bg-slate-100 w-full">
          &nbsp;&nbsp;&nbsp;&nbsp; Hello, my name is Qaisar and I am a full-stack
            <strong> Blockchain</strong> developer. <br /> I am passionate about using
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
            className="cursor-pointer dark:md:hover:bg-fuchsia-600"
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
            Copyright &copy; 2023 All Rights Reserved by &nbsp;
            <Link href=""> qaisarhussain.com</Link>
          </p>
        </footer>
      </div>
    </>
  );
}
