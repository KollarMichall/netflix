import { ArrowDropDown, Search, Notifications } from '@material-ui/icons'
import './navbar.scss'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/800px-Netflix_logo.svg.png" alt="logo"></img>

                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="https://pressbooks.com/app/uploads/sites/47296/2015/12/Asian-Girl-iPad.jpg" alt="photo" />
                    <div className="profile">
                      <ArrowDropDown className="icon"/>
                      <div className="options">
                          <span>Settings</span>
                          <span>Logout</span>
                      </div>
                    </div>                 
                </div>
            </div>


        </div>
    )
}

export default Navbar
