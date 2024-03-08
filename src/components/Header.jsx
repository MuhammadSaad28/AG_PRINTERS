import React,{useEffect,useState} from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom';
import './Header.css';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';


const Header = () => {
    const [active, setActive] = useState('Home');
    const [search, setSearch] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
        if(location.pathname === '/'){
            setActive('Home')
        }else if(location.pathname === '/add-record'){
            setActive('Add New')
        }
    },[location.pathname])
    const Logout = ()=>{
       signOut(auth).then(()=>{
           localStorage.removeItem('ag-token');
           localStorage.removeItem('ag-user');
           window.location.reload();
       })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(search !== ''){
            navigate(`/search?articleName=${search}`)
            setSearch('')
        }
    }
  return (
    <div>
      <div className="header">
        <p className="logo">AG Printers</p>
        <div className="header-right">
          <form onSubmit={handleSubmit} style={{display:'inline'}}>
            <input type="text" className='inputField' placeholder='Search Article Name ...' onChange={(e)=>setSearch(e.target.value)} value={search} />
          </form>
            <Link to="/">
             <p className={`${active === "Home" ? "active" : ""}`} onClick={()=>setActive("Home")}>Home</p>
            </Link>
            <Link to="/add-record">
             <p className={`${active === "Add New" ? "active" : ""}`} onClick={()=>setActive("Add New")}>Add New Record</p>
            </Link>
            <p className="logout" onClick={Logout}>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default Header
