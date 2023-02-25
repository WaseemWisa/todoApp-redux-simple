import { useSelector } from 'react-redux';
import Task from './task';
function TasksContainer() {
  const { tasksItem } = useSelector((store) => store.tasks);
  const { filterState } = useSelector((store) => store.tasks);

  const list = [...tasksItem]
  const sortedTodo = list.filter((item , i) => {
    if (filterState == 'all') {
      return true
    }
    return item.state === filterState
  })

  return (
    <div className='bg-slate-400 py-2 px-4 rounded-[5px] h-auto' >
      {
        sortedTodo.length > 0  ? sortedTodo.map((item , i) => <Task key={i} items={item}/>) 
        : 
        <h1  className='text-lg mx-auto text-[#000000b7] text-center font-medium bg-slate-200 w-fit p-1 rounded-[4px]'>No Tasks </h1>
      }
    </div>
  )
}

export default TasksContainer