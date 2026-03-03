import MainLogo from "../assets/MainLogo.png";
import '../styles/MainHeader.css';

function MainHeader() {
    return(
        <>
            <div className="main-header">
                <img src={MainLogo} alt="Main Logo" className="main-logo" aria-hidden />
            </div>            
        </>
    )
}

export default MainHeader;