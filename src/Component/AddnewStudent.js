import React from 'react'
import { useContext } from 'react'
import Store from '../Store/Stores'
import {useNavigate } from 'react-router-dom'
function AddnewStudent()
{
    
    const Studata = useContext(Store)
    console.log(Studata.data.length);
    const navigate = useNavigate()

    const newStud = {
        id:Studata.data.length+1,
        name:'',
        age:'',
        batch:'',
        course:'',
    }
    
    const Changehandler = (e)=>{
        newStud[e.target.name] = [e.target.value]
    }

    const UpdateList = ()=>{
        Studata.data.push(newStud);
        navigate('/Student')
    }

    return(
        <>
            <form className='forrmaddnewstudent' >
                <label htmlfor="name" className='name'>Name</label> 
                <input type="text" name="name"  id="name" placeholder="Enter Name" onChange={Changehandler} className='nameadd'></input>
                <br></br>
                <label htmlfor="age" className='age'>Age</label>
                <input type="text" name="age"  id="age" placeholder="Enter Age" onChange={Changehandler} className='ageadd'></input>
                <br></br>
                <label htmlFor='course'  className='course'>Course</label>
                <input type="text" name="course"  id="course" placeholder="Enter Course" onChange={Changehandler} className='courseadd'></input>
                <br></br>
                <label htmlFor='batch' className='batch'>Batch</label>
                <input type="text" name="batch"  id="batch" placeholder="Enter Batch" onChange={Changehandler} className='courseadd'></input>
                <br></br>
                <button onClick={UpdateList} className='updatelist'>Submit</button>
                
                <button onClick={()=>navigate("/Student")}  className='cancle'>Cancle </button> 
                <h1 className='addtext'>Add New Student</h1> 
            </form>       
        </>
    )
}
export default AddnewStudent