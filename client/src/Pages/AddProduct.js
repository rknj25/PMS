import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate=useNavigate();
    const [pro,setPro]=useState({
        name:"",
        price:"",
        description:"",
        image:""
    })
    const handleChange=(e)=>{
        setPro({
            ...pro, 
            [e.target.name]:e.target.value
        })
    }
    const handleImage=(e)=>{
        setPro({
            ...pro,
            image:e.target.files[0]
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const formData=new FormData();

            formData.append("name",pro.name);
            formData.append("price",pro.price);
            formData.append("description",pro.description);
            formData.append("image",pro.image);

            const response=await axios.post("http://localhost:9999/api/product/add",
                formData
            )

            console.log("Product Added");
            alert(response.data.message)
            setPro({
                name:"",
                price:"",
                description:"",
                image:""
            })
            navigate('/dashboard')
        }
        catch{
            console.log("Error in Adding");
            
        }
    }
  return (
    <div>
        
        <Navbar/>
        <div className='d-flex justify-content-center align-item-center'>
                <form onSubmit={handleSubmit} style={{width:"500px", marginTop:"50px", padding:"15px", height:"400px",border:"1px solid black", borderRadius:"10px"}}>
                    
                    <input type='text' placeholder='Enter The Name' className='form-control' name='name' value={pro.name} onChange={handleChange}/><br/><br/>
                    <input type='text' placeholder='Enter The Price' className='form-control' name='price' value={pro.price} onChange={handleChange}/><br/><br/>
                    <input type='text' placeholder='Enter The description' className='form-control' name='description' value={pro.description} onChange={handleChange}/><br/><br/>
                    <input type='file' className='form-control' name='image' onChange={handleImage}/><br/><br/>
                    <button className='btn btn-danger form-control'>Add Product</button>
                </form>
    </div>
    </div>
  )
}

export default AddProduct
