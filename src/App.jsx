import TasksContainer from "./components/tasksContainer";
import AddTask from "./components/task";
import Model from "./components/model";
import { useDispatch, useSelector } from "react-redux";
import { addTask , filterTasks} from "./store/tasksSlice";
import { openModel , closeModel , closeUpDateModel} from "./store/activeModelSlice";

function App() {
  const dispatch = useDispatch();
  const { isActiveModel } = useSelector((store) => store.activeModel)
  const addTaskBtn = () => {
    dispatch(openModel());
    dispatch(closeUpDateModel())
  }

  return (
    <div className="app p-0 m-0 box-border">
      <header className="flex justify-start items-center h-[75px] bg-[#415a77] px-5">
        <h2 className="font-medium text-slate-100 text-lg">To-Do App</h2>
      </header>
      <div className="container w-3/4 lg:w-2/4 mx-auto  h-auto py-3 px-2">
        <div className="font-carioFont flex justify-between items-center mb-4">
          {/* Btn add task */}
          <button className="addTaskBtn capitalize w-[100px] h-[45px] bg-[#415a77] rounded-md text-[#fff]"
            onClick={() => addTaskBtn()}
            
          >new task</button>
          {/* Select state task */}
          <select className="stateOption bg-[#415a77] text-[#fff] rounded-[4px] outline-none"
            onChange={(e) => dispatch(filterTasks(e.target.value))}
          >
            <option value="all">all</option>
            <option value="incomplete">incomplete</option>
            <option value="complete">complete</option>
          </select>
        </div>
        {/* Tasks Container */}
          <TasksContainer/>
        {
          isActiveModel && <Model/>
          
        }
      </div>
    </div>
  )
}

export default App
