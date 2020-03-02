import React from 'react'
import { Player } from './player'

const Footer = ({currentSong}) => {
  return (
    <React.Fragment>
      <Player song={{
        title: currentSong.title || 'Title',
        artist: currentSong.artist || 'Artist'
      }}/>
    </React.Fragment>
  )
}

export default Footer