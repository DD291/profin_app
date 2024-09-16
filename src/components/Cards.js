import React from 'react';
import { IoClose } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { TbReportAnalytics } from "react-icons/tb";
import { PiNotebook } from "react-icons/pi";

export function CardTop() {
    return (
        <div className="bg-black text-white border-solid py-10 px-6 rounded-2xl" > 
            <div className="flex sm:flex-row justify-between align-middle"> 
                <div className='flex text-xl sm:flex-row  gap-2 items-center'> 

                <div className= 'flex bg-blue-400 rounded-xl px-2'> ФИН </div>
                <div className='flex'>контроль</div>
                  
                </div>

                <div> 
                <button className="flex sm:flex-row items-center rounded-full justify-around bg-gray-800 hover:bg-gray-100 text-gray-200 font-semibold py-2 px-4  shadow">
                Меню <IoClose/>
                </button> 
                </div>

                </div>
            <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
                <button type="button" 
                 className="sm:flex-row rounded-md	bg-gray-600 my-2 hover:text-black flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                <span className="flex sm:flex-row gap-2 items-center">
                    <IoSettingsSharp className="text-white" />
                Настройки</span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>

            <h2 id="accordion-collapse-heading-2">
                <button type="button"
                 className="sm:flex-row rounded-md	bg-gray-600 my-2 hover:text-black flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                <span className="flex sm:flex-row gap-2 items-center">
                     <TfiWrite className="text-white" /> 
                      Внесение данных
                </span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
            </h2>
            <h2 id="accordion-collapse-heading-3">
                <button type="button" 
                 className="sm:flex-row rounded-md	bg-gray-600 my-2 hover:text-black flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                <span className="flex sm:flex-row gap-2 items-center">
                     <TbReportAnalytics className="text-white" />
                    Отчеты</span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <h2 id="accordion-collapse-heading-4">
                <button type="button" 
                 className="sm:flex-row rounded-md	bg-gray-600 my-2 hover:text-black flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                <span className="flex sm:flex-row gap-2 items-center">
                <PiNotebook className="text-white"/>
                    База знаний</span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            </div>

        </div>
    );
}



export function CardBottom() {
    return (
        <div className="bg-black text-white border-solid py-8 px-6 rounded-2xl" >
            {/* line1 */}
            <div className="text-white mb-8"> Техническая поддержка  </div>


            {/* line2 */}
            <div className="text-white flex sm:flex-row items-center justify-between my-4">
                <div>
                <div className='text-slate-500 text-sm'> Номер поддержки </div>
                <div> 8(999)999 99 99 </div>
                </div>

                <div className='mr-16'>  
                <div className='text-slate-500 text-sm'> Почта поддержки </div>
                <div> pf1@werthesest.ru </div>
                </div>
            </div>

            {/* line3 */}
            <div className="text-white mb-8">
                <div className='text-slate-500 text-sm'> Часы работы </div>
                <div> Пн-Пт с 9:00 до 19:00 мск </div>
            </div>

            {/* line4 */}
            <div className="text-slate-500 pb-2 border-b-2 border-slate-500 text-sm"> Пользовательское соглашение </div>

            {/* line5 */}
            <div className="text-slate-500 pb-2 border-b-2 border-slate-500 text-sm"> Политика конфедициальности </div>

            {/* line6 */}
            <div className="text-slate-500 pb-2 border-b-2 border-slate-500 text-sm"> Юридическая информация  </div>

            {/* line7 */}
            <div className="text-slate-500 text-sm "> Публичная оферта  </div>









        </div>
    );
}

