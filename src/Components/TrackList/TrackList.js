import React from 'react';
//import Track Component
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
    <div className="TrackList">
      {/* Add a map method that renders a set of Track Components */}
      {
        this.props.tracks.map(track => {
          return <Track 
          track={track}
          key={track.id} 
          onAdd={this.props.onAdd}
          onRemove={this.props.onRemove}
          isRemoval={this.props.isRemoval}
          />
        })
      }
    </div> 
    )
  }
}

export default TrackList;
