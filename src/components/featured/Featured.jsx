import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

const Featured = () => {
    return (
        <div className="featured">
           <img width="100%" src="https://pressbooks.com/app/uploads/sites/47296/2015/12/Asian-Girl-iPad.jpg" alt="" />
            <div className="info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/Matrix_4_Logo.png" alt="" />
                <span className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus metus, efficitur vel turpis non, hendrerit varius mauris. Mauris cursus imperdiet sem, sed suscipit odio faucibus quis. Pellentesque at turpis tristique, mollis lectus ac, vehicula eros
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
