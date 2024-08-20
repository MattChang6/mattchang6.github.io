import '../components/home.css';
import whiteLogo from '../components/images/logos/Primary Logo/JC Primary Logo_white.png';

export function Home() {
    return (
        <div className="homeContainer">
            <div className="whiteLogo">
                <img src={whiteLogo} alt='JCLogo' />
            </div>
            <div className="background">
                <p>Under Construction</p>
            </div>
        </div>
    );
}
