import React from "react"

const Song = (props) => {
  if (!props.songs) return null
  return (
    <div>
      <p>{props.song["im:name"].label}</p>
    </div>
  )
}

export default Song
