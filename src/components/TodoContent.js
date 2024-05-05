import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from './TodoList';
import styles from '../styles/modules/todoItem.module.scss';

function TodoContent() {
  const todo = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const sortedTodoList = [...todo];
  sortedTodoList.sort((a, b) => a - b);
  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === 'all') {
      return true;
    }
    return item.status === filterStatus;
  });

  return (
    <div className={styles.mainBox}>
      {filteredTodoList && filteredTodoList.length > 0 ? (
        filteredTodoList.map((todoelem) => (
          <TodoList key={todoelem.id} todo={todoelem} />
        ))
      ) : (
        <div
          style={{
            display: ' flex',
            alignItems: 'center',
            backgroundColor: '#ecedf6',
            borderRadius: '12px',
            justifyContent: 'space-around',
            margin: 'auto',
            color: '#585858',
          }}
        >
          <h1>You Have NO TODOS</h1>
        </div>
      )}
    </div>
  );
}

export default TodoContent;
