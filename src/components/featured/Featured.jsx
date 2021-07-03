import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

const Featured = ({type}) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movie" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
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
