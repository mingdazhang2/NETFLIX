import "./featured.scss"

import React from 'react'
import { InfoOutlined, PlayArrow } from "@material-ui/icons"

const Featured = ({type}) => {
  return (
    <div className="featured">
        {/* <img 
        src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="featured" /> */}
        {type&&(
            <div className="category">
                <span>{type==='movie'?'Movies':'Series'}</span>
                <select name="genre" id="genre">
                    <option >Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="romance">Romance</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
         <img  src="https://www.gannett-cdn.com/-mm-/d89934bbf4ed2c79314d85906cb9ead195e37398/c=0-150-5760-3398/local/-/media/USATODAY/USATODAY/2014/03/19//1395264857000-AP-PEOPLE-SHAILENE-WOODLEY-62850148.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp"
        alt="bk" 
        />
        <div className="info">
            <img 
            src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
            alt="title" />
            <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maiores obcaecati reprehenderit recusandae sunt a vel asperiores aperiam alias ex. Totam quibusdam asperiores molestiae labore eum. Fugit perspiciatis odit quam.</span>
        
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
    
  )
}

export default Featured