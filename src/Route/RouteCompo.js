import React ,{useState} from 'react'
import Home from '../Component/Home'
import Student from '../Component/Student'
import Contact from '../Component/Contact'
import AddnewStudent from '../Component/AddnewStudent'
import EditStudent from '../Component/EditStudent'
import {BrowserRouter ,Routes,Route,NavLink} from 'react-router-dom'
import Store from '../Store/Stores'
import '../Component/Style.css'
function RouteCompo()
{
    const [StudData,setStudData] = useState([
        { id:1 , name:"Trisha" , age:"22" ,course:"MERN", batch:"April"},
        { id:2 , name:"Era" , age:"23" , course:"MERN",batch:"April"},
        { id:3 , name:"Shree" , age:"21" ,course:"MERN", batch:"April"},
        { id:4 , name:"kratika" , age:"20" ,course:"MERN", batch:"April"},
        { id:5 , name:"vihan" , age:"22" , course:"MERN",batch:"April"},
        { id:6 , name:"jai" , age:"24" ,course:"MERN", batch:"April"},
    ])
        console.log(StudData.length)
    return(
        <>
          
            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Student" element={
                        <Store.Provider value = {{data : StudData , dataFun : setStudData}}>
                            <Student />
                        </Store.Provider>
                    }/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/EditStudent" element={
                        <Store.Provider value = {{data : StudData , dataFun : setStudData}}>
                            <EditStudent/>
                        </Store.Provider>
                    }/>
                    <Route path="/AddnewStudent" element={
                        <Store.Provider value = {{data : StudData , dataFun : setStudData}}
                        >
                            <AddnewStudent/>
                        </Store.Provider>
                    }/>
                </Routes>
                
                
                <header>
                    <NavLink to='/' className='Nav'>Home</NavLink>
                    <NavLink to='/Student' className='Nav'>Student</NavLink>
                    <NavLink to="/Contact" className='Nav'>Contact</NavLink>
                </header>
            </BrowserRouter>        
        </>
    )
}
export default RouteCompo