import './App.css';
import { BarBottom, BarFour, BarThree, BarTop, BarTwo } from './components/Bars';
import { CardTop, CardBottom } from './components/Cards';
// import { TableData } from './components/TableData';
import { AiOutlineMessage } from "react-icons/ai";
// import { DefaultTable } from './components/TableData';
import myData from './components/DATA.json';
import { useState } from 'react';
import { ImFolderDownload } from "react-icons/im";
import { FaFolderPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { CiExport } from "react-icons/ci";
import { GoTriangleDown } from "react-icons/go";





function App() {
  const TABLE_HEAD = ["Баркод", "Бренд",  "Предмет", "Кол-во", "Цена","Итого кол-во товаров" ];
  const [inputState, setInputState] =  useState(false);
const [currId, setCurrId] =  useState(0);
const [currInput, setCurrInput] =  useState("");
const [currColumn, setCurrColumn] =  useState("");
  const [tableRows, setTableRows] =  useState([{
    "id":0,"barcode":"123","product_brand":"","product_name":"","product_quantity":"","price":""}]);
    const [totalQuantity, setTotalQuantity] =  useState("");
    const [totalPrice, setTotalPrice] =  useState("");


    const getTotalQuantity = (arr) => {
        let total = 0
        for (let i = 0; i < arr.length; i++) {
            total += parseInt(arr[i].product_quantity);
        }
        return total
    }


    const getTotalPrice = (arr) => {
      let total = 0
      for (let i = 0; i < arr.length; i++) {
          total += parseInt(arr[i].price);
      }
      return total
  }




  function downloadFiles() {
    setTableRows(myData);
    setTotalQuantity(getTotalQuantity(myData));
    setTotalPrice(getTotalPrice(myData));
    return;
  }

  function cleanFiles() {
    setTableRows([{ "id":0,"barcode":"","product_brand":"","product_name":"","product_quantity":"","price":""}]);
    setTotalQuantity("");
    setTotalPrice("");
    return;
  }

  


  function saveFiles() {
    const data = JSON.stringify(tableRows);
    const time = Date.now();
    var string_data = JSON.stringify(data);
      var file = new File([string_data], time+'savefile.json', {type: 'json'})
      
      var anchor = document.createElement('a');
      anchor.setAttribute('href', window.URL.createObjectURL(file));
      anchor.setAttribute('download', time+'savefile.json')
      anchor.click();
      URL.revokeObjectURL(anchor.href);

    return;
  }


  function onDoubleClick(id, columnName, dataValue ) {
    console.log("id : "+ id);
    setCurrId(id);
    setCurrColumn(columnName);
    setInputState(true);
    setCurrInput(dataValue);
    return;
  }

function changeData(id, columnName) {
setInputState(false);

let newArr = [...tableRows]; 
newArr[id-1][columnName] = currInput; 
setTableRows(newArr);
setTotalQuantity(getTotalQuantity(newArr));
setTotalPrice(getTotalPrice(newArr));

return;
}







  return (
    <div className="flex sm:flex-row bg-slate-100 w-full h-full p-16">
      <div className="flex sm:flex-col justify-start w-1/4 ml-20 mt-4"> 
        <div >
        <CardTop />
        </div>

        <div  className="mt-10" >
        <CardBottom />
        </div>

<div> 
<button className="flex sm:flex-row items-center justify-center w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 gap-2 px-4 rounded-2xl">
  <AiOutlineMessage/> Связаться с нами </button> </div>

      </div>



      <div className="justify-end w-3/4 ml-16"> 
        <BarTop />
        <BarTwo />
        <BarThree />
        <div className="flex sm:flex-row gap-4 my-8" > 
                       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full">
                       Сформировать </button>
                       <button onClick={saveFiles} className="flex sm:flex-row bg-black gap-2 items-center hover:bg-slate-500  text-white font-bold py-4 px-4 rounded-full">
                        <CiExport className="text-white text-lg" />  Экспорт </button>
        </div>
        {/* <BarFour /> */}
        <div className="flex sm:flex-row content-center justify-between bg-transparent text-black border-solid py-2 m-4 items-center border-t-2 border-b-2 border-slate-500" > 
        <div className='flex sm:flex-row justify-start gap-8'>
                <button className="flex sm:flex-row gap-2 items-center justify-between" onClick={downloadFiles}> 
                    <ImFolderDownload />
                    Загрузить данные из csv
                </button>
                <button className="flex sm:flex-row gap-2 items-center justify-between ">
                <FaFolderPlus   />
                    Изменить данные
                </button>
        </div>
        <div className='flex sm:flex-row justify-end'>
        <button className="flex sm:flex-row gap-2 items-center justify-between border-l-2 pl-8 border-slate-500" onClick={cleanFiles}>
        Очистить <IoClose  /> 
        </button>
        </div>
    </div>
        {/* <BarBottom /> */}
        {/* <TableData /> */}

              <div className="h-full w-full bg-white round-full px-4">
        <div className="pt-6"> 
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-1/12"></div>
            </div>
        </div>
        <table className="w-full min-w-max table-auto overflow-hidden text-left overflow-y-auto ">
          <thead>
            <tr className = "bg-transparent text-lg">
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <div
                    variant="small"
                    color="blue-gray"
                    className="flex sm:flex-row font-normal leading-none opacity-70 items-center"
                  >
                    {head} <GoTriangleDown className='h-8 w-4'/>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows?.map(({ id, barcode, product_brand, product_name, product_quantity, price }, index) => {
              const isLast = index === tableRows.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
   
              return (
                <tr key={id} className='bg-green gap-2 round-xl even:bg-gray-50 odd:bg-white'>
                  <td className={classes}>

                {inputState && currId===id && currColumn==="barcode" ? (
                    <div className = "flex sm:flex-row justify-center items-center gap-1 m-0"> 
                     <input
                     value={currInput}
                     type="number"
                     maxLength={25}
                     onChange={e => setCurrInput(e.target.value)}
                     defaultValue={barcode}
                     className='justify-start w-16' />
                     <button className="bg-blue-100 hover:bg-blue-700 px-2 py-1 text-black font-bold rounded-full"
                     onClick={()=> {changeData(id,"barcode")}}> ok</button>
                     </div>
                ) : (
                    <div> 
                    <button 
                    onDoubleClick={() => {onDoubleClick(id,"barcode",barcode)}}  
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {barcode}
                    </button>
                    </div>
                )}
                   
                  </td>
                  <td className={classes}>
                  {inputState && currId===id&& currColumn==="product_brand"  ? (
                    <div className = "flex sm:flex-row justify-center items-center gap-1 m-0"> 
                     <input
                     value={currInput}
                     type="text"
                     maxLength={25}
                     onChange={e => setCurrInput(e.target.value)}
                     defaultValue={product_brand}
                     className='justify-start' />
                     <button className="bg-blue-100 hover:bg-blue-700 px-2 py-1 text-black font-bold rounded-full"
                     onClick={()=> {changeData(id,"product_brand")}}> ok</button>
                     </div>
                ) : (
                    <div> 
                    <button 
                    onDoubleClick={() => {onDoubleClick(id,"product_brand",product_brand)}}  
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {product_brand}
                    </button>
                    </div>
                )}
                    {/* <div
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {product_brand}
                    </div> */}
                  </td>
                  <td className={classes}>
                  {inputState && currId===id && currColumn==="product_name"  ? (
                    <div className = "flex sm:flex-row justify-center items-center gap-1 m-0"> 
                     <input
                     value={currInput}
                     type="text"
                     maxLength={25}
                     onChange={e => setCurrInput(e.target.value)}
                     defaultValue={product_name}
                     className='justify-start ' />
                     <button className="bg-blue-100 hover:bg-blue-700 px-2 py-1 text-black font-bold rounded-full"
                     onClick={()=> {changeData(id,"product_name")}}> ok</button>
                     </div>
                ) : (
                    <div> 
                    <button 
                    onDoubleClick={() => {onDoubleClick(id,"product_name",product_name)}}  
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {product_name}
                    </button>
                    </div>
                )}
                    {/* <div
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {product_name}
                    </div> */}
                  </td>
                  <td className={classes}>
                  {inputState && currId===id && currColumn==="product_quantity" ? (
                    <div className = "flex sm:flex-row justify-center items-center gap-1 m-0"> 
                     <input
                     value={currInput}
                     type="number"
                     maxLength={25}
                     onChange={e => setCurrInput(e.target.value)}
                     defaultValue={product_quantity}
                     className='justify-start w-16' />
                     <button className="bg-blue-100 hover:bg-blue-700 px-2 py-1 text-black font-bold rounded-full"
                     onClick={()=> {changeData(id,"product_quantity")}}> ok</button>
                     </div>
                ) : (
                    <div> 
                    <button 
                    onDoubleClick={() => {onDoubleClick(id,"product_quantity",product_quantity)}}  
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {product_quantity}
                    </button>
                    </div>
                )}
                    {/* <div
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {product_quantity}
                    </div> */}
                  </td>
                  <td className={classes}>
                  {inputState && currId===id && currColumn==="price" ? (
                    <div className = "flex sm:flex-row justify-center items-center gap-1 m-0"> 
                     <input
                     value={currInput}
                     type="number"
                     maxLength={25}
                     onChange={e => setCurrInput(e.target.value)}
                     defaultValue={price}
                     className='justify-start w-16' />
                     <button className="bg-blue-100 hover:bg-blue-700 px-2 py-1 text-black font-bold rounded-full"
                     onClick={()=> {changeData(id,"price")}}> ok</button>
                     </div>
                ) : (
                    <div> 
                    <button 
                    onDoubleClick={() => {onDoubleClick(id,"price",price)}}  
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {price}
                    </button>
                    </div>
                )}
                    {/* <div
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {price}
                    </div> */}
                  </td>
                   <td className={classes}>
                   <div
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {product_quantity}
                    </div> 
                    {/*
                    <div
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      Edit
                    </div> */}
                  </td> 
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className='flex sm:flex-row gap-16 justify-end mr-72 text-2xl text-blue-700'>
          <div>Итого</div>
          <div>{totalQuantity}   </div>
          <div> {totalPrice} </div>
        </div>
      </div>
        
      </div>


    </div>
  );
}

export default App;
