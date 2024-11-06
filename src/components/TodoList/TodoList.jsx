import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import AddTodo from '../AddTodo/AddTodo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
  const [todoItems, setTodoItems] = useState([
    { id: '123', text: 'Study', status: 'active' },
    { id: '234', text: 'Cleaning', status: 'completed' },
    { id: '345', text: 'Review', status: 'active' },
  ]);
  const handleAdd = (newItem) => {
    setTodoItems([...todoItems, newItem]);
  };
  const handleUpdate = (updatedItem) =>
    setTodoItems(
      todoItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  const handleDelete = (deletedItem) =>
    setTodoItems(todoItems.filter((item) => item.id !== deletedItem.id));

  const filteredItems = getFilteredItem(todoItems, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filteredItems.map((filteredItem) => (
          <TodoItem
            key={filteredItem.id}
            todo={filteredItem}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItem(todoItems, filter) {
  if (filter === 'all') {
    return todoItems;
  }

  return todoItems.filter((item) => item.status === filter);
}
