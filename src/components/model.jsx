import { useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { openModel , closeModel } from '../store/activeModelSlice';
import { addTask  , upDateTasks , filterTasks} from '../store/tasksSlice';
import { v4 as uuidv4 } from 'uuid';

function Model() {
  const dispatch = useDispatch();
  const { isUpDate } = useSelector((store) => store.activeModel);
  const [taskName , setTaskName] = useState('');
  const [wrong , setWrong] = useState();
  const [taskState , setTaskState] = useState('complete');
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

  const resetInputs = () => {
    dispatch(closeModel()),
    setTaskName(),
    setTaskState()
  }
  const handleAddNewtask = () => {
    if(taskName == '') {
      setWrong(true)
    } else {
      dispatch(closeModel());
      dispatch(addTask({ 
        id: uuidv4() , 
        state: taskState , 
        title: taskName , 
        time: currentDate  
      }));
    }
  }
  const handleUpDatetask = () => {
    if(taskName == '') {
      setWrong(true)
    } else {
      dispatch(closeModel());
      dispatch(upDateTasks({ 
        state: taskState , 
        title: taskName , 
        time: currentDate
      }));
    }
  }

  return (
    <div className='bg-[#00000096] fixed top-0 left-0 h-full w-full Flex' >
      <div className="model m-4">
        <form className='flex flex-col' onSubmit={(e) => {e.preventDefault()}}>
          <div className='mb-4'>
            <label htmlFor="taskName" className='label'>Title</label>
            <input  
              type="text" 
              id='taskName' 
              className='titleInput' placeholder='Write a new task' 
              onChange={(e) => {setTaskName(e.target.value)}}/>
              <span className={wrong ? 'text-[#e70808] mt-2' : 'hidden'}>Please Write thing</span>
          </div>
          
          <div>
          <div className='mb-8'>
            <label htmlFor="taskState" className='label'>Status</label>
            <select  
              id='taskState' 
              className='select'
              onClick={(e) =>  setTaskState(e.target.value)}>
              <option value={"complete"}>complete</option>
              <option value={"incomplete"}>incomplete</option>
            </select>
          </div>
          </div>
          <div className='flex  gap-x-2'>
            <button className={`btnModel confirmBtn` }
              onClick={() => isUpDate ? handleUpDatetask() : handleAddNewtask()}
            >Done</button>
            <button className='btnModel cancelBtn' 
            onClick={resetInputs}
            >cancel</button>
          </div>
        </form>
    </div>
    </div>
  )
}

export default Model