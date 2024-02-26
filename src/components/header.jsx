
import jsImg from '../assets/js.png'
export function Header({children}){
    return(
    <header className='header'>
        <img src={jsImg}></img>
        <h1 className='title'>{children}</h1>
        <span className='txt'>Best JS Frameworks of today</span>
    </header>
    )
}