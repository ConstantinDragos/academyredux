import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
  console.log(props);
  if (!props.song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <div> {`Title: ${props.song.title}`}</div>
      <div> {`Duration: ${props.song.duration}`}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
