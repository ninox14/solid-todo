import { Accessor, Component, createSignal, For } from 'solid-js';

import TodoItem from '../TodoItem/TodoItem';

export interface Todo {
  done: boolean;
  task: string;
}

interface Store {
  todos: Todo[];
}

const Todo: Component = () => {
  const [state, setState] = createSignal<Store>({ todos: [] });
  const [task, setTask] = createSignal('');
  const handleTaskCahnge = (
    e: Event & {
      currentTarget: HTMLInputElement;
      target: Element;
    }
  ) => {
    setTask(e.currentTarget.value);
  };

  const handleAddTodo = () => {
    // setState((state) => ({
    //   todos: [...state.todos, { task: task(), done: false }],
    // }));
  };

  const handleDoneChange = (indx: Accessor<number>) => {
    setState('todos', indx(), { done:  });
  };
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="todo" onChange={handleTaskCahnge} />
        <button onClick={handleAddTodo}>add</button>
      </form>
      <div>
        <For each={state().todos}>
          {(item, indx) => (
            <TodoItem
              {...item}
              index={indx}
              handleDoneChange={handleDoneChange}
            />
          )}
        </For>
      </div>
    </>
  );
};

export default Todo;
