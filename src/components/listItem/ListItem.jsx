import { PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined, Add } from '@material-ui/icons'
import { useState } from 'react'
import './listItem.scss'

export default function ListItem({index}) {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div className="listItem" 
        style={{left: isHovered && index * 245 - 50 + index * 2.4 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/War_official_poster.jpg/220px-War_official_poster.jpg" alt="" />
        <div className="itemInfo">
            <div className="icons">
                <PlayArrow/>
                <Add/>
                <ThumbUpAltOutlined/>
                <ThumbDownOutlined/>
            </div>
            <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">+18</span>
                <span>1998</span>
            </div> 
            <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget massa dui. Donec nec tellus eget ante tincidunt porttitor sed dignissim massa.
            </div> 
            <div className="genre">Action</div>  
        </div>
        </div>
    )
}
