import React, { Component } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

export default class Task extends Component {

  drugOverHandler = e => {
    e.preventDefault();
    if (e.target.className === styles.item) {
      e.target.className = classNames(styles.item, styles.withBoxShadow);
    }
  };

  drugLeaveHandler = e => {
    e.target.className = styles.item;
  };

  drugStartHandler = e => {
    const { item, board, onStartDrugItem } = this.props;
    onStartDrugItem(item, board);
  };

  drugEndHandler = e => {
    e.target.className = styles.item;
  };

  dropHandler = (e) => {
    e.preventDefault();
    e.target.className =  classNames(styles.item, styles.item_wihout_shadow);
    const { onDropItem, item } = this.props;
    onDropItem(item);
  };

  render() {
    const { item } = this.props;
    return (
      <div
        className={styles.item}
        draggable="true"
        onDragOverCapture={this.drugOverHandler}
        onDragLeaveCapture={this.drugLeaveHandler}
        onDragStartCapture={this.drugStartHandler}
        onDragEnd={this.drugEndHandler}
        onDrop={this.dropHandler}
      >
        {item.title}
      </div>
    );
  }
}
