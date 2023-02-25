import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { upDateTasks  } from '../store/tasksSlice';
import { openModel , closeModel , openUpDateModel , closeUpDateModel} from '../store/activeModelSlice';
function UpDateModel() {
  const dispatch = useDispatch();
  const [taskUpDateName , setTaskUpDateName] = useState(null);
  const [taskUpDateState , setTaskUpDateState] = useState(null);
  const [currentDateUpDate, setCurrentDateUpDate] = useState(new Date().toLocaleString());
  const upDateTask = { state: taskUpDateState , title: taskUpDateName , time: currentDateUpDate};
  const handleUpDateTask = (data) => {
    dispatch(upDateTasks(data))
    dispatch(closeUpDateModel());
  }
  const resetInputs = () => {
    setTaskName(),
    setTaskState(),
    dispatch(closeUpDateModel())
  }
  return (
    <div className='bg-[#00000096] fixed top-0 left-0 h-full w-full Flex'>
    <div className="model flex flex-col z-[999] bg-[#dedede] w-[500px] max-w-full p-6 rounded-[4px]">
      <form className='flex flex-col' onSubmit={(e) => {e.preventDefault()}}>
        <div className='mb-4'>
          <label htmlFor="taskName" className='inline-block mb-3'>Title</label>
          <input  
            type="text" 
            id='taskName' 
            className='block w-full  h-[40px] outline-none pl-2' placeholder='Write a new task' 
            />
        </div>
        <div>
        <div className='mb-8'>
          <label htmlFor="taskState" className='inline-block mb-3'>Status</label>
          <select  
            id='taskState' 
            className='block w-full h-[40px] outline-none pl-2'
            
          >
            <option value={"complete"}>complete</option>
            <option value={"incomplete"}>incomplete</option>
          </select>
        </div>
        </div>
        <div className='flex  gap-x-2'>
          <button className='btnModel bg-[#415a77]  text-[#fff] '
            onClick={() => handleUpDateTask(upDateTask)}
          >Update</button>
          <button className='btnModel bg-[#cccdde]  text-[#646681] ' 
          onClick={resetInputs}
          >cancel</button>
        </div>
      </form>
  </div>
  </div>
  )
}

export default UpDateModel