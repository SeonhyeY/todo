import React, { useEffect, useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import AddTodo from '../AddTodo/AddTodo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
  const [todoItems, setTodoItems] = useState(getTodos);
  const handleAdd = (newItem) => {
    setTodoItems([...todoItems, newItem]);
  };
  const handleUpdate = (updatedItem) =>
    setTodoItems(
      todoItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  const handleDelete = (deletedItem) =>
    setTodoItems(todoItems.filter((item) => item.id !== deletedItem.id));

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoItems));
  }, [todoItems]);

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

function getTodos() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItem(todoItems, filter) {
  if (filter === 'all') {
    return todoItems;
  }

  return todoItems.filter((item) => item.status === filter);
}
