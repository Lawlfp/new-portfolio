import './Header.css';
 import { useNavigate } from 'react-router-dom'

function Header(){
    const navigate = useNavigate();
    return(  
        <div className="sticky top-0 w-full bg-black z-50">
            <div className="flex justify-center mx-auto">
                <button className="nav-item hover:cursor-pointer" onClick={() => navigate('/')} style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Home</button>
                <button className="nav-item hover:cursor-pointer" onClick={() => navigate('/about')} style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>About</button>
                <button className="nav-item hover:cursor-pointer" onClick={() => navigate('/projects')} style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Projects</button>
                <button className="nav-item hover:cursor-pointer" onClick={() => navigate('/contact')} style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Contact</button>
            </div>
        </div>
    )
}
export default Header