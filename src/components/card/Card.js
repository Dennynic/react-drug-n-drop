import React, { Component } from 'react';
import Task from '../task/Task';
import styles from './styles.module.css';

export default class Card extends Component {
  card = {};

  drugOverHandler = e => {
    e.preventDefault();
  };

  dropItemHandler = item => {
    this.card = item;
  };

  dropCardHandler = () => {
    const { onDropItem } = this.props;
    onDropItem(this.props.board, this.card);
    this.card = {};
  };

  render() {
    const { board, className, onStartDrugItem } = this.props;

    return (
      <div
        className={className}
        onDragOverCapture={this.drugOverHandler}
        onDrop={this.dropCardHandler}
      >
        <div className={styles.board__title}>{board.title}</div>

        {board.items.map(item => (
          <Task
            key={item.id}
            board={board}
            item={item}
            onStartDrugItem={onStartDrugItem}
            onDropItem={this.dropItemHandler}
          />
        ))}
      </div>
    );
  }
}
