"use client";

import Nav from "@components/Nav";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import ImageData from "../data/images.json"
import Hexa from "@components/Hexa";
import { images } from "@next.config";
import Image from "next/image";
import Sponsor from "@components/Sponsor";
import sponsorData from "../data/sponsor.json"


const image = ImageData.images
const sponsor = sponsorData.Patrocinadores



/**
 * @session {
 *  email:"pedroaugennes@gmail.com",
 *  exp: 1703690045,
 *  iat: 1701098045,
 *  id: "de48905f-44e5-482c-80e4-533de1f160f8",
 *  jti: "56ea8bf1-74b9-4da1-8dbc-a3080ab849dc",
 *  name:"pedro",
 *  points:0,
 *  role:"USER",
 *  sub:"de48905f-44e5-482c-80e4-533de1f160f8"
 * }
 */

export default function Home() {
  const [user, setUser] = useState({});

  const { data: session } = useSession({
    required: false,
  });

  useEffect(() => {
    if (session) setUser(session.user);
  }, [session]);

  // console.log(user);

  return (
    <main className="bg-black   ">
      <Nav />
      <div className="bg-[url('/banner.png')] bg-no-repeat bg-cover lg:h-[550px] h-[400px] pt-[32px]  w-full lg:relative ">
        <div className="flex flex-col gap-4 sm:w-4/5 w-11/12 itens-center justify-center  m-auto h-full  ">
          <h1 className="text-white md:text-6xl text-5xl font-extrabold leading-tight text-center lg:text-left lg:w-4/5 ">SEMANA DA CIÊNCIA E INOVAÇÃO</h1>
          <p className='text-white text-xl text-center lg:text-left'>14 - 15 MARÇO</p>
          <div className="flex justify-center lg:justify-start">
            <Link
              href="/"
              className='bg-white font-monteserrat text-black py-2 px-4 rounded-md text-sm font-medium leading-5 hover:text-gray-600'>
              EVENTOS
            </Link>
          </div>
        </div>
        <Hexa />
      </div>

      <div className="sm:w-4/5 w-11/12 m-auto mt-[79px]">
        <div className="lg:w-4/5 w-full flex lg:flex-wrap overflow-x-auto gap-2 ">
          {
            image.map((images, index) => (
              <Image
                key={index}
                src={images.path}
                alt='logo'
                width={400}
                height={400}
                className="lg:w-[32%]"
              />
            ))
          }
        </div>

        <div className="w-[15%] h-[4px] bg-white mt-[79px] "></div>
        <h1 className="text-white md:text-5xl text-4xl font-extrabold leading-tight lg:text-left lg:w-4/5 mt-[23px]">O QUE É</h1>
        <p className="text-white mt-[39px] font-poppins font-light leading-8 lg:w-4/5 w-full"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad repellat soluta aspernatur natus nobis quos porro velit, illum nihil magni cupiditate! Sunt pariatur ratione, maiores velit officiis quod eum quisquam!</p>

        <div className="w-[15%] h-[4px] bg-white mt-[85px] "></div>
        <h1 className="text-white md:text-5xl text-4xl font-extrabold leading-tight after:lg:text-left lg:w-4/5 mt-[23px]">PATRÓCINIOS</h1>
        <div className="lg:w-4/5 w-full mt-[39px] flex flex-col gap-[80px]">
          {
            sponsor.map((sponsor, index) => {
              return (<Sponsor {...sponsor} key={index} />);
            })
          }
        </div>
        <div className="w-[15%] h-[4px] bg-white mt-[85px]"></div>
        <h1 className="text-white md:text-5xl text-4xl font-extrabold leading-tight after:lg:text-left lg:w-4/5 mt-[23px]">NÚCLEOS ORGANIZADORES</h1>

      </div>
      <br />  {/* TEM AQUI UM BUG FICA UMA LINHA BRANCA NO FIM DA PAGINA
        */}
    </main>
  );
}
