import axios from "axios";
import { useEffect, useReducer, useRef, useState } from "react";

// Table
import _ from "lodash"
import { Button, Table, TextField } from "@mui/material";
import Paginat from "./Pagination";

function DataPreview(){
const [data,setData]=useState([]);
const [searchedData,setSearcher ] = useState([])

const [startpage,setPage] = useState(0)
const [size,setSize] = useState(10)
const [seats ,setSeatnumber]=useState()
const datafetcher =  ()=>{

   axios.get("http://localhost:3000").then((e) => 
   setSearcher(_.reverse(e.data)) & setData(_.reverse(e.data)) 
   )
}
useEffect( ()=>
 datafetcher()
   
    ,[])
    
    // console.log(ref.current);
    

//     const Search = (s)=>{
// s.preventDefault();

// // console.log(`${s.target.value}`.trim());
// const mapper = data.filter(e=>e.items.includes(s.target.value))
// console.log(mapper)
// setSearcher(mapper)
// setPage(1)
// // .includes("سلاقوس")

// // data.filter((e)=>e.includes("مواسير"))
// // console.log(newData);

//     }

//     const Delet=(e)=>{
//       axios.post('https://amaccompany.onrender.com/delete',{id:e},{withCredentials:true}).then((e) => console.log(e.data))
// const data = searchedData.filter((s)=> e != s._id)
// const dataRe = [...data]
// setSearcher(dataRe)
//     }
//     const reset =()=>{
     
//       setZero(ref.current)
//       setZero(ref.current-1)
// console.log(ref.current)
// setUpdater(0) 

//     }
//     const updating =(id,items,store,type,quantity)=>{

//       setItems(items);

//       setStore(store);
// setType(type);
      
// setQuantity(quantity);
// setUpdater(id)      

//     }
//     const updateOne=(e)=>{
//       console.log("updateOne",e)
//       axios.post('https://amaccompany.onrender.com/updatedata',{id:e,store:store,items:items,type:type,quantity:Quantity},{withCredentials:true}).then((e) => e.data == "updated" ?  reset()  :setError("خطأ في البيانات") )
// // const data = searchedData.filter((s)=> e != s._id)
// // const dataRe = [...data]
// // setSearcher(dataRe)
// // ref.current = 
//     }
const Search = (s)=>{
  s.preventDefault();
  
  // console.log(`${s.target.value}`.trim());
  const mapper = data.filter(e=>e.arabic_name.includes(s.target.value))
  console.log(mapper)
  setSearcher(mapper)
  setPage(1)
  // .includes("سلاقوس")
  
  // data.filter((e)=>e.includes("مواسير"))
  // console.log(newData);
  
      }
      const SearchByseaTing= (s)=>{
        s.preventDefault();
    setSeatnumber()
        
            }
            const bu = ()=>{

        const mapper = data.filter(e=>e.seating_no == seats)
    //  console.log(mapper)
        setSearcher(mapper)
        setPage(1)

            }
      const handleChange = (event, value) => {
        setPage(value);
      };
  

      return (
        <div>
    
        <TextField style={{"marginTop": "12px"}} label="بحث بالاسم" onChange={(e)=>Search(e)}/>
        <TextField style={{"marginTop": "12px"}} label="بحث برقم الجلوس" onChange={(e)=>setSeatnumber(e.target.value)}/>
      <Button style={{marginTop:"30px"}} color="secondary" onClick={bu}>اضغط هنا للبحث برقم الجلوس</Button>
      <Table striped="columns">
          
          
          <thead>
            <tr >
            <th style={{width:"200px"}}>رقم الجلوس</th>
              <th style={{width:"200px"}}>الاسم بالكامل
</th>
              
              
              <th style={{width:"200px"}}>النجاح/الرسوم</th>
                       
                     <th style={{width:"200px"}}>المجموع الكلي</th>

            </tr>
          </thead>
          {/* {data.} */}
          {_.drop(searchedData,(startpage-1 )* 20).slice(0,size).map((e)=>
          <tbody key={e.seating_no.length}>
            <tr>
            <td style={{width:"200px"}} >{e.seating_no}</td>
              
              <td style={{width:"200px"}}>{e.arabic_name}</td>
            
              
              <td style={{width:"70px"}}>{e.student_case_desc}</td>
              <td style={{width:"70px"}}>{e.total_degree}</td>
              
              
              </tr>      
               
    
    </tbody>)}
          
                  </Table>
    <div>
    <Paginat  startPage={startpage} size={searchedData.length} Setter={handleChange} color="secondary"/>
    </div>
    
    {/* <Transaction data={data}/> */}
    </div>
    
    
    
)








}

export default DataPreview;