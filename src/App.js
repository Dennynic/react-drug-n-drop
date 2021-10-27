import React from 'react';
import styles from './App.css';
import {data} from './data';

class App extends React.Component {

  state = {
    boards: data,

  }

  render(){
    const {boards} = this.state;
    return(
      <div className={styles.app}>
        {boards.map(item => 
            <div className='board'></div>

          )}
      </div>
    )
  }  
  
}

export default App;
