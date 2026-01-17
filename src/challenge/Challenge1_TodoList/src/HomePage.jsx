import React, { useState } from "react";

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  const [TodoList, setTodoList] = useState([]);
  
  // Calculate completed and pending counts
  const completedCount = TodoList.filter((todo) => todo.completed).length;
  const pendingCount = TodoList.filter((todo) => !todo.completed).length;

  const handleAddTask = () => {
    if (inputValue.trim()) {
         const isDuplicate = TodoList.some(
        (todo) => todo.task.toLowerCase() === inputValue.trim().toLowerCase()
      );
      
      if (isDuplicate) {
        // setErrorMessage("This task already exists!");
        alert("This task already exists!");
        // setTimeout(() => setErrorMessage(""), 3000);
        return;
      }

      const newTask = {
        id: Date.now(),
        task: inputValue,
        completed: false,
      };
      setTodoList([...TodoList, newTask]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>ToDo List</h1>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Enter a task..."
          style={{ 
            flex: 1, 
            padding: '10px', 
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          value={inputValue}
        />
        <button
          onClick={handleAddTask}
          style={{ 
            padding: '10px 20px', 
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add Task
        </button>
      </div>

      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', textAlign: 'center' }}>
        <div style={{ flex: 1, padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>{TodoList.length}</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Total Tasks</div>
        </div>
        <div style={{ flex: 1, padding: '15px', backgroundColor: '#d4edda', borderRadius: '4px' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#155724' }}>{completedCount}</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Completed Tasks</div>
        </div>
        <div style={{ flex: 1, padding: '15px', backgroundColor: '#fff3cd', borderRadius: '4px' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#856404' }}>{pendingCount}</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Pending Tasks</div>
        </div>
      </div>
<div style={{height:"60vh",overflow:"auto"}}>
 <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: '12px', color: '#666' }}>Task</th>
            <th style={{ textAlign: 'center', padding: '12px', color: '#666' }}>Completed</th>
            <th style={{ textAlign: 'center', padding: '12px', color: '#666' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {TodoList.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center', padding: '30px', color: '#999' }}>
                No tasks yet. Add one to get started!
              </td>
            </tr>
          ) : (
            TodoList.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px' }}>
                  <span style={{ 
                    textDecoration: item.completed ? 'line-through' : 'none',
                    color: item.completed ? '#999' : '#333'
                  }}>
                    {item.task}
                  </span>
                </td>
                <td style={{ textAlign: 'center', padding: '12px' }}>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => {
                      const updatedList = TodoList.map((todo) => {
                        if (todo.id === item.id) {
                          return { ...todo, completed: !todo.completed };
                        }
                        return todo;
                      });
                      setTodoList(updatedList);
                    }}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </td>
                <td style={{ textAlign: 'center', padding: '12px' }}>
                  <button
                    onClick={() => {
                      const filteredList = TodoList.filter(
                        (todo) => todo.id !== item.id
                      );
                      setTodoList(filteredList);
                    }}
                    style={{
                      padding: '6px 16px',
                      backgroundColor: item.completed?'#28a745':'#dc3545',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      opacity: item.completed ? 0.4 : 1,
                    }}
                    disabled={item.completed}
                  >
                    {item.completed ? "Completed" : "Delete Task"}                    
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
</div>
     
    </div>
  );
};

export default HomePage;