import { useState } from 'react'
import './App.css'

import { closestCorners, DndContext, DragEndEvent, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'

import { Column } from './components/Column/Column'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { Input } from './components/Input/Input'

function App() {

  const [tasks, setTasks] = useState([
    { id: '1', title: 'Estudar' },
    { id: '2', title: 'Ir na academia' },
  ])

  const AddTask = (title: string) => {
    setTasks((tasks) => [...tasks, { id: (tasks.length + 1).toString(), title }]);
  };

  const getTaskPos = (id: string) => tasks.findIndex(task => task.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id.toString());
      const newPos = getTaskPos(over.id.toString());

      return arrayMove(tasks, originalPos, newPos);
    });
  };


  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <div className="App">
      <h1 className='h1'>Minhas Tarefas ✅</h1>

      <Input onSubmit={AddTask} />

      <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Column tasks={tasks} />
      </DndContext>

    </div>
  )
}

export default App
