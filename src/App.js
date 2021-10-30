import React from 'react';
import Card from './components/card/Card';
import styles from './App.module.css';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';

class App extends React.Component {
  state = {
    boards: this.props.data,
    leaveBoard: {},
    druggbleCard: {},
  };

  drugLeaveHandler = e => {
    e.target.className = classNames(styles.item);
  };

  drugStartHandler = (drugStartCard, drugStartBoard) => {
    this.setState({ leaveBoard: drugStartBoard, druggbleCard: drugStartCard });
  };

  drugEndHandler = e => {
    e.target.className = classNames(styles.item);
  };

  dropHandler = (dropOnBoard, dropOnItem) => {
    const { boards, leaveBoard, druggbleCard } = this.state;
    let newBoard = [];
    leaveBoard.items.splice(leaveBoard.items.indexOf(druggbleCard), 1);

    if (isEmpty(dropOnItem)) {
      dropOnBoard.items.push(druggbleCard);
    } else {
      const dropIndex = dropOnBoard.items.indexOf(dropOnItem);
      dropOnBoard.items.splice(dropIndex + 1, 0, druggbleCard);
    }

    newBoard = boards.map(b => {
      if (b.id === dropOnBoard.id) {
        return dropOnBoard;
      }
      if (b.id === leaveBoard.id) {
        return leaveBoard;
      }
      return b;
    });

    this.setState({ boards: newBoard });
  };

  render() {
    const { boards } = this.state;
    return (
      <div className={styles.app}>
        {boards.map(board => (
          <Card
            key={board.id}
            className={styles.board}
            board={board}
            onStartDrugItem={this.drugStartHandler}
            onDropItem={this.dropHandler}
          />
        ))}
      </div>
    );
  }
}

export default App;
