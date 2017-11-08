import React from "react"
import ReactDOM from "react-dom"
import Header from "../components/Header"
import SongList from "../components/SongList"
import Song from "../components/Song"

class ITunesContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      songs: [],
      currentSong: null
    }
    // this.handleSongSelected = this.handleSongSelected.bind(this)
  }


  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    const request = new XMLHttpRequest()
    request.open("GET", url)

    request.addEventListener("load", () => {
      if (request.status !== 200) return
      const data = JSON.parse(request.responseText)
      // console.log("Data:", data);
      // console.log("Song:", data.feed.entry[0]["im:name"].label);
      this.setState({songs: data.feed.entry})
    })
    request.send()
  }

  // handleSongSelected(index) {
  //   const selectedSong = this.state.songs[index]
  //   this.setState({currentSong: selectedSong})
  // }



  render() {
    return (
      <div id="i-tunes-container">
        <Header
          title="iTunes Top 20"
        />
        <SongList
          songs={this.state.songs}
          onSongSelected={this.handleSongSelected}
        />
        <Song song={this.state.currentSong} />
      </div>
    )
  }
}

export default ITunesContainer
