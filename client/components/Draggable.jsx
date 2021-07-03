import React from 'react';

export const createDraggableComponent = Component => {
  class Draggable extends React.Component {
    render() {
      return (
        <div
          className="draggable"
          onDrag={console.log}
          onDragEnter={console.log}
          onDragLeave={console.log}
          onDragOver={console.log}
          onDragStart={console.log}
          onDrop={console.log}>
          <Component {...this.props} />
        </div>
      );
    }
  }

  Draggable.displayName = 'Draggable(' + Component.name + ')';

  return Draggable;
};