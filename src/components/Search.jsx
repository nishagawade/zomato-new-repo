import React, { useState } from 'react';
import './style.css';
import Form from 'react-bootstrap/Form';
import { Cards } from './Cards';
import Fooddata from './FoodData';

export const Search = () => {
    

    const [data, setData] = useState(Fooddata);
    const [copyData, setCopyData] = useState([])

    const changeData = (e) =>{
        debugger;
        const searchData = e.toLowerCase();

        if(searchData === ''){
            setCopyData(data)
        }else {
            const searchEle = copyData.filter((ele)=>{
                return ele.rname.toLowerCase().match(searchData)
            });

            setCopyData(searchEle)
        }
    }
    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
    return (
        <>
            <div className='container-fluid d-flex justify-content-between align-items-center' style={{ width: '100%' }}>
                <img src={zomatologo} style={{ width: "10rem", position: "relative", left: "2%", top: "2%", cursor: "pointer" }} alt="" />
                <h2 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3">Search Filter App</h2>
            </div>

            <Form className='d-flex justify-content-center align-items-center'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">

                    <Form.Control type="text"
                        onChange={(e) => changeData(e.target.value)}
                        placeholder="Search Restaurant" />
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{ background: "#ed4c67" }}>Submit</button>

            </Form>

            <div className='iteam_section mt-4'>
                <h2 className='px-4' style={{ fontWeight: 400 }}>Restaurants open in Mumbai Now</h2>
                <div className='row d-flex justify-content-around align-items-center'>
                {copyData && <Cards data={copyData}/>  }
                </div>
               
            </div>



        </>
    )
}
