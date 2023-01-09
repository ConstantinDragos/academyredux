import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
const SongList = (props) => {
  console.log(props);
  return (
    <div>
      {props.songs.map((song) => {
        return (
          <div key={song.title}>
            <h1>{song.title}</h1>
            <button onClick={() => props.selectSong(song)}>select</button>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
