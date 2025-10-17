function Header(){
    return(  
        <div className="flex sticky top-0  mx-auto bg-black overflow-hidden z-2">
            <span className="nav-item" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Home</span>
            <span className="nav-item" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>About</span>
            <span className="nav-item" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Projects</span>
            <span className="nav-item" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Contact</span>
        </div>
    )
}
export default Header