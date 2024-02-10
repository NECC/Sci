'use client';
import Image from 'next/image'
import Nav from "@components/Nav";
import './page.css';
import React from "react";
import Accor from "@components/accordion";
import ColorModeToggle from '@components/ColorModeToggle';


export default function Faqs() {

    return (
        <div className='bg-gradient-to-b from-sky-400 to-sky-300 dark:bg-black h-screen'>
            <div className='pt-[96px] flex lg:w-8/12 w-full justify-center items-center m-auto'>
                <div className='flex flex-col lg:w-1/2 gap-6'>
                    <p className='dark:text-white text-white md:text-5xl text-4xl font-extrabold'>FIND THE <span className='underline decoration-4'>ANSWER</span> TO YOUR QUESTIONS</p>
                    <p className='dark:text-white text-white font-poppins font-light leading-8'>This list of frequently asked questions serves to complement the general rules that you can find below. Get in touch with the organizing team whenever a question arises and we will add answers to the most frequently asked questions here. (igual ou cesium )</p>
                </div>
                <Image className="box hidden lg:block" src="/interrogacao.png" alt="Banner" width={300} height={300} />
            </div>

            <div className='lg:w-8/12 w-11/12 m-auto mt-4'>
                <Accor />
            </div>
            <ColorModeToggle />
        </div>
    )
}