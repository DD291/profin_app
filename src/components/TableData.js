
// import myData from './DATA.json';
import { useState } from 'react';

 
// const TABLE_HEAD = ["Name", "Job", "Employed", ""];
const TABLE_HEAD = ["Баркод", "Бренд",  "Предмет", "Кол-во", "Цена","Итого кол-во товаров" ];


//myData;

   
  export function DefaultTable({ tableRows }) {

    // const [tableRows, setTableRows] =  useState([{
    //     "id":0,"barcode":"","product_brand":"","product_name":"","product_quantity":"","price":""}])
    // function downloadFiles() {
    //     setTableRows(myData);
    //     return;
    //   }

        const [inputState, setInputState] =  useState(false);
        const [currId, setCurrId] =  useState(0);
        const [currInput, setCurrInput] =  useState("");
        const [currData, setCurrFata] =  useState(tableRows);



        function onDoubleClick(id,dataValue) {
            console.log("id : "+ id);
            setCurrId(id);
            setInputState(true);
            setCurrInput(dataValue);
            return;
          }

    function changeData(id, dataName,) {
        setInputState(false);
        console.log("currInput : "+ currInput);
        console.log("id : "+ id);
        console.log("dataName : "+ dataName)
        console.log("tableRows[id] : "+ tableRows[id][dataName])
        return;
      }

    return (
      <div className="h-full w-full bg-white round-full px-4">
        <div className="pt-6"> 
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-1/12"></div>
            </div>
        </div>
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr className = "bg-transparent ">
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <div
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
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
                <tr key={id} className={id%2 === 0 ? 'bg-green gap-2 border-xl' : 'bg-white gap-2 border-xl' }>
                  <td className={classes}>

                {inputState && currId===id ? (
                    <div className = "flex sm:flex-row justify-center items-center gap-1 m-0"> 
                     <input
                     value={currInput}
                     type="number"
                     onChange={e => setCurrInput(e.target.value)}
                     defaultValue={barcode}
                     className='justify-start w-16' />
                     <button className="bg-blue-100 hover:bg-blue-700 px-2 py-1 text-black font-bold rounded-full"
                     onClick={()=> {changeData(id,"barcode")}}> ok</button>
                     </div>
                )
                :
                (
                    <div> 
                    <button 
                    // onDoubleClick={() => {changeData(id-1, "barcode")}}  
                    onDoubleClick={() => {onDoubleClick(id,barcode)}}  
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {barcode}
                    </button>
                    </div>
                )


                }
                   
                  </td>
                  <td className={classes}>
                    <div
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {product_brand}
                    </div>
                  </td>
                  <td className={classes}>
                    <div
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {product_name}
                    </div>
                  </td>
                  <td className={classes}>
                    <div
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {product_quantity}
                    </div>
                  </td>
                  <td className={classes}>
                    <div
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {price}
                    </div>
                  </td>
                  {/* <td className={classes}>
                    <div
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      Edit
                    </div>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }


// export function TableData() {
//     return (
//         <div className="flex sm:flex-row bg-transparent text-black" > 
//             <div> 
//             <table className="table-fixed">
//   <thead>
//     <tr>
//       <th className="w-1/7 px-4 py-2">Баркод</th>
//       <th className="w-1/7 px-4 py-2">Предмет</th>
//       <th className="w-1/7 px-4 py-2">Артикул поставщика</th>
//       <th className="w-1/7 px-4 py-2">Размер</th>
//       <th className="w-1/7 px-4 py-2">Доступно к заказу</th>
//       <th className="w-1/7 px-4 py-2">Товары в пути</th>
//       <th className="w-1/7 px-4 py-2">Итого кол-во товаров</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td className="border px-4 py-2">Intro to CSS</td>
//       <td className="border px-4 py-2">Adam</td>
//       <td className="border px-4 py-2">858</td>
//     </tr>
//     <tr className="bg-gray-100">
//       <td className="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
//       <td className="border px-4 py-2">Adam</td>
//       <td className="border px-4 py-2">112</td>
//     </tr>
//     <tr>
//       <td className="border px-4 py-2">Intro to JavaScript</td>
//       <td className="border px-4 py-2">Chris</td>
//       <td className="border px-4 py-2">1,280</td>
//     </tr>
//   </tbody>
// </table>

//             </div>

//             {/* <div> total </div> */}

//         </div>
//     );
// }