import React from 'react';
import { MdAccountCircle } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { CiExport } from "react-icons/ci";
import { Triangle } from 'lucide-react';
import { ImFolderDownload } from "react-icons/im";
import { FaFolderPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";



export function BarTop() {
    return (
        <div className="flex sm:flex-row text-lg content-center justify-between bg-white text-black border-solid py-2 px-6 rounded-3xl m-4 items-center" > 
            <div className='flex sm:flex-row justify-start h-full gap-4'>
                <div className="flex sm:flex-row gap-1 items-center"> 
                    <MdAccountCircle className='h-8 w-8' />
                    Иванов И.И.
                </div>
                <div className="flex sm:flex-row gap-1 rounded-3xl bg-blue-200 text-blue-600 py-4 px-4 items-center">
                <FaCalendarAlt className="text-blue-600 h-4 w-4" />
                    Тариф до 15.04.2024
                </div>
            </div>


            <div className='flex sm:flex-row justify-end gap-2'>
            <button className="bg-white hover:bg-slate-100 text-black  font-bold py-2 px-4 rounded-full border-4">
            Выйти </button>
            <button className="flex sm:flex-row items-center justify-between bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
            О нас <GoTriangleDown className="text-white mt-1" /> </button>
            
            </div>



        </div>
    );
}


export function BarTwo() {
    return (
        <div className="flex sm:flex-row bg-transparent text-black gap-8 mt-12" > 
            <div className="flex text-4xl" > Остатки сформированы на 01.04.2023 г. </div>
            <div className="flex sm:flex-row items-center gap-1 rounded-full bg-black text-white py-3 px-5">
               <FaBook className="text-white" />
                Инструкция
            </div>


        </div>
    );
}

export function BarThree() {
    return (
        <div className="flex sm:flex-row my-4 py-0 font-xl items-center" > 
            <div className="flex rounded-xl bg-white text-black px-2 py-3 gap-3 items-center mr-2 ">
                <div className='font-bold '>Баркод </div>
                <div className="flex rounded-xl bg-slate-200 text-slate-500 p-2">
                    6549384928423 </div>
                
            </div>

            <div className="flex sm:flex-row rounded-xl bg-white text-black p-2 gap-3 items-center mx-2">
                <div className='font-bold'> Артикул </div>
                <div className="flex sm:flex-row rounded-xl bg-slate-200 text-slate-500 p-3">
                    Джрн3894в </div>
                
            </div>

            <div className="flex sm:flex-row rounded-xl bg-white text-black p-2 gap-3 items-center mx-2">
                <div className='font-bold'> Размер </div>
                <div className="flex sm:flex-row rounded-xl bg-slate-200 text-slate-500 p-3">
                    44 </div>
            </div>

            <div className="flex sm:flex-col rounded-xl bg-white text-black px-4 py-1 gap-0 items-center ml-2">
            <div className="flex   text-slate-500 p-0">
            Категория </div>
            <div className='font-bold flex sm:flex-row items-center justify-between p-0'> Джинсы  <GoTriangleDown className='h-8 w-4'/> </div>

            </div>
            


        </div>
    );
}
export function BarFour() {
    return (
        <div className="flex sm:flex-row gap-4 my-8" > 
                       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full">
                       Сформировать </button>
                       <button className="flex sm:flex-row bg-black gap-2 items-center hover:bg-slate-500  text-white font-bold py-4 px-4 rounded-full">
                        <CiExport className="text-white text-lg" />  Экспорт </button>
        </div>
    );
}


export function BarBottom() {
    return (
        <div className="flex sm:flex-row content-center justify-between bg-transparent text-black border-solid py-2 m-4 items-center border-t-2 border-b-2 border-slate-500" > 
        <div className='flex sm:flex-row justify-start gap-8'>
                <button className="flex sm:flex-row gap-2 items-center justify-between "> 
                    <ImFolderDownload />
                    Загрузить данные из csv
                </button>
                <button className="flex sm:flex-row gap-2 items-center justify-between ">
                <FaFolderPlus   />
                    Изменить данные
                </button>
        </div>
        <div className='flex sm:flex-row justify-end'>
        <button className="flex sm:flex-row gap-2 items-center justify-between border-l-2 pl-8 border-slate-500">
        Очистить <IoClose  /> 
        </button>
        </div>
    </div>
    )
}

