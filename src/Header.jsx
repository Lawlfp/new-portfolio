function Header(){
    return(  
        <div className="sticky top-0 w-full bg-black z-50">
            <div className="flex justify-center mx-auto">
                <span className="nav-item" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Home</span>
                <span className="nav-item" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>About</span>
                <span className="nav-item" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Projects</span>
                <span className="nav-item" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Contact</span>
            </div>
        </div>
    )
}
export default Header