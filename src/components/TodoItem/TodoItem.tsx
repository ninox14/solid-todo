import { Accessor, Component } from 'solid-js';
import { Todo } from '../Todo/Todo';

import './TodoItem.css';

interface Props extends Todo {
  index: Accessor<number>;
  handleDoneChange: (idx: Accessor<number>) => void;
}

const TodoItem: Component<Props> = ({
  done,
  task,
  index,
  handleDoneChange,
}) => {
  return (
    <div
      class="todo"
      classList={{ done }}
      onClick={() => handleDoneChange(index)}
    >
      <span>{task}</span> <span>isDone: </span>
      <span>{done ? 'true' : 'false'}</span>
    </div>
  );
};

export default TodoItem;
