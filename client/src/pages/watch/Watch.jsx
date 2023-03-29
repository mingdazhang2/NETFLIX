import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import "./watch.scss"

const Watch = () => {
  return (
    <div className='watch'>
        <div className='back'>
            <ArrowBackOutlined/>
            Home
        </div>
        <video 
        src="https://vod-progressive.akamaized.net/exp=1677935341~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=9eb00e72c77eb8a2af8b700208cdb106f39ca1a209e886a9d9f4452e5d73fcc1/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4"
        className='video' autoPlay progress controls></video>
    </div>

  )
}

export default Watch