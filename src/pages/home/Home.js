import { UserContext } from '../../UserContext.js';
import SideNavbar from '../../components/sideNavbar/SideNavbar.js';
import './Home.css';

function Home() {
    return (
        <UserContext.Consumer>
            {(username) => (
                <div className="home">
                    <p>{username}</p>
                    <SideNavbar username={username}/>
                </div> 
            )}
            
        </UserContext.Consumer> 
    );
}

export default Home;