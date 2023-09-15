import React from 'react'
import { useContext } from 'react'
import Store from '../Store/Stores'
import { NavLink, useNavigate } from 'react-router-dom'

function Student()
{
   
    const ContextData = useContext(Store)
            console.log(ContextData.data)
    
    const navigate = useNavigate()        
            
    return(
        
        <>
            <section className='student'>
            <h1 className='studenthead'>Student Details :</h1> 
            <button onClick={()=>navigate('/AddnewStudent')} className='addnewstudent'>Add New Student</button>
            </section>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                        {ContextData.data.map((item,index)=>{ 
                            return( 
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.course}</td>
                                        <td>{item.batch}</td>
                                        <td><NavLink to="/EditStudent" state={{index}}>Edit</NavLink></td>
                                    </tr>
                               
                                ) 
                        })} 
                </tbody>
            </table>       
        </>
    )
}
export default Student