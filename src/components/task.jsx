import { useDispatch} from 'react-redux';
import { MdDelete , MdEdit , MdCheck} from 'react-icons/md';
import { openModel  , openUpDateModel} from '../store/activeModelSlice';
import { removeTask , upDateIndex , checkTask} from '../store/tasksSlice';

function Task({items}) {
  const dispatch = useDispatch();
  const sendIndex = (id) => {
    dispatch(openModel());
    dispatch(openUpDateModel());
    dispatch(upDateIndex(id))
  }

  
  return (
    <div className="item flex items-start flex-wrap gap-x-3 p-2 bg-[#fff] rounded-[4px] my-2 " 
    >
    <button className={`checkBtn w-[26px] h-[26px] rounded-[4px] bg-slate-400 Flex text-xl text-[#fff]`}
      onClick={() => {
        dispatch(checkTask(items.id))
      }}
    >{items.state == 'complete' && <MdCheck/>}</button>
    <div className="deatials flex flex-col flex-1 text-ellipsis overflow-hidden">
      <h3 className='font-medium text-[1.1rem] text-[#2c2525d9] break-words'>{items.title}</h3>
      <span className='text-[0.8rem] font-medium text-[#3c3636c2]'>{items.time} | {items.state}</span>
    </div>
    <div className="icons flex  justify-evenly items-center basis-[20%]">
      <span className="itemIcon " onClick={() => { dispatch(removeTask(items.id)) }}>
        <MdDelete/>
      </span>
      <span className="itemIcon " onClick={() => sendIndex(items.id)}>
        <MdEdit/>
      </span>
    </div>
  </div>
  )
}

export default Task
