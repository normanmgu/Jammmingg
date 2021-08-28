import './App.css';
//we need to import Playlist, SeachBar, and SearchResults components
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      searchResults: [
        {name: 'name1', artist: 'artist1', album: 'album1', id: 1},
        {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
        {name: 'name3', artist: 'artist3', album: 'album3', id: 3}
      ],
      playListName: 'My Playlist',
      playListTracks: [
        {name: 'playList1', artist: 'playlistArtist1', album: 'playlistAlbum1', id: 4},
        {name: 'playList2', artist: 'playlistArtist2', album: 'playlistAlbum2', id: 5},
        {name: 'playList3', artist: 'playlistArtist3', album: 'playlistAlbum3', id: 6},
      ]
    }
  }
  addTrack(track) {
    // Makes sures the track is not already added to the playlist to avoid duplicates
    let tracks = this.state.playListTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      tracks.push(track);
      this.setState(
        {playListTracks: tracks}
      )
    }
  }
  removeTrack(track) {
    let tracks = this.state.playListTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState(
      {playListTracks: tracks}
    );
  }
  updatePlayListName(name) {
    this.setState(
      {playListName: name}
    )
  }
  savePlaylist() {
    const trackUris = this.state.playListTracks.map(track => track.uri);
  }
  search(searchTerm) {
    console.log(searchTerm);  
  }
  render(){
   return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar 
            onSearch={this.search}
        />
        <div className="App-playlist">
          <SearchResults 
            searchResults={this.state.searchResults} 
            onAdd={this.addTrack}
          />
          <Playlist
            playListName={this.state.playListName}
            playListTracks={this.state.playListTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlayListName}
            onSave={this.savePlaylist}
            />
        </div>
      </div>
    </div>
    ) 
  }
}

export default App;