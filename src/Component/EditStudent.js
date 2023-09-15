import React ,{useContext} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import  Stores from '../Store/Stores'
function EditStudent()
{
    const navigate = useNavigate();
    const GoBack =()=>{
        navigate("/Student")
    }

    const indexGet = useLocation().state.index
        console.log(indexGet)

    const ContextDataGet = useContext(Stores) 
            console.log(ContextDataGet.data[indexGet])
    const UpdateData = {
        name:ContextDataGet.data[indexGet].name,
        age:ContextDataGet.data[indexGet].age,
        course:ContextDataGet.data[indexGet].course,
        batch:ContextDataGet.data[indexGet].batch,
        
    }
    const Changehandler = (e)=>{
        
        UpdateData[e.target.name] = e.target.value;
    }
    const UpdateForm = ()=>{
        // e.preventDefault()
        ContextDataGet.data[indexGet] = UpdateData
        navigate("/Student")
    }

    return(
        <>
            <form  className='forrmaddnewstudent'>

            <label htmlFor="name" className='name'>Name:</label> 
            <input type="text" name="name"  id="name" className='nameadd' placeholder={ContextDataGet.data[indexGet].name} onChange={Changehandler} ></input>
            <label htmlFor='age' className='age'>Age:</label>
            <input type="text" name="age"  id="age" className='ageadd' placeholder={ContextDataGet.data[indexGet].age} onChange={Changehandler}></input>
            <label htmlFor='course' className='course'>Course:</label>
            <input type="text" name="course" id="course" className='courseadd' placeholder={ContextDataGet.data[indexGet].course} onChange={Changehandler}></input>
            <label htmlFor='batch' className='batch'>Batch:</label>
            <input type="text" name="batch"  id="batch"  className='batchadd'placeholder={ContextDataGet.data[indexGet].batch} onChange={Changehandler}></input>
            <button onClick={UpdateForm} className='updatelist'>Update</button>
            <button onClick={GoBack} className='cancle'>Cancle</button> 

            </form>      
        </>
    )
}
export default EditStudent