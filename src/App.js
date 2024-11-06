import { useState } from 'react';
import './App.css';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header />
      <div class='container'>
        <Filter filters={filters} filter={filter} onFilterChange={setFilter} />
        <TodoList filter={filter} />
      </div>
    </DarkModeProvider>
  );
}

export default App;
