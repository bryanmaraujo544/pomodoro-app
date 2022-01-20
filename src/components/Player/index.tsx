import React from 'react';
import { ContainerPlayer } from './styles'

function Player() {
  return (
    <ContainerPlayer>
      <iframe
        src="https://open.spotify.com/embed/playlist/5DqR5bAbk7mTq5jnvJsjel?utm_source=generator&theme=0"
        width="100%"
        height={100}
      />
    </ContainerPlayer>
    )
  }

export default Player;
