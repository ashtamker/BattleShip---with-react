import React from 'react;'
import Cell from './Cell';

class Board extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      battleField: null,
      flotilla: null,
      shots: 0,
      hits: 0,
      maxHits: 0,
      screenMode: null
    }
  }
}


export default Board;