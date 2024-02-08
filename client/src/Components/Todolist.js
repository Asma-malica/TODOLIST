// Todolist.js
import './Todolist.css';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'


function Todolist(props) {
  const todolist = props.todolist.map((task, index) => {

        const taskComplete = task =>{
            axios.put('http://localhost:8000/api/tasks/$(task._id)',{
                _id : task.
            
        })

    }
        return <li key = {index}>
            <div>
                <CheckIcon className={task.isComplete ? 'isComplete' : 'checkicon'}/>
                <p className={task.isComplete?'taskcomplete':''}onClick={() => {
                    taskComplete(task)
                }}   >{task.todo}</p>
            </div> 
            <div>
                <EditIcon className='edit' />
                <CloseIcon className='close' />
            </div>
        </li>

  })


  return (
    <div className='tasklist'>
      <ul>{todolist}</ul>
    </div>
  );
}

export default Todolist;


// import './Todolist.css'
// import React from 'react'
// import CheckIcon from '@mui/icons-material/Check';
// import EditIcon from '@mui/icons-material/Edit';
// import CloseIcon from '@mui/icons-material/Close';


// function Todolist(props)
// {
//     const todolist = props.todolist.map((task,index) => {
//         return <li key = {index}>
//             <div>
                
//             </div>
//             <div>

//             </div>
//         </li>
//     })
//     return(
//         <div className='tasklist'>
//             <ul>
//                 {todolist}
//             </ul>
//         </div>
//     )
// }

// export default Todolist