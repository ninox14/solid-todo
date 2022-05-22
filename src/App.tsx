import type { Component } from 'solid-js';

import styles from './App.module.css';
import Todo from './components/Todo/Todo';

const App: Component = () => {
  return (
    <div>
      <Todo />
    </div>
  );
};

export default App;
