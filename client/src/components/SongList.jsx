import React from "react"

const SongList = (props) => {

  const list = props.songs.map((song, index) => {
    return(
      <div key={index} id="songs-and-artists">
        <li id="songs">
          {song["im:name"].label}
        </li>
        <li id="artists">
          {song["im:artist"].label}
        </li>
      </div>
    )
  })


  const previews = props.songs.map((song, index) => {
    return(
      <div key={index}>
        <li id="previews">
          <a href={song["im:collection"].link.attributes.href}>
            <img src="../../build/play_icon.png" alt="play" />
          </a>
        </li>
      </div>
    )
  })

  return (
    <div id="songs-and-previews">
      <ul id="song-list">
        {list}
      </ul>
      <ul id="preview-list">
        {previews}
      </ul>
    </div>
  )
}

export default SongList
