import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

function App() {

  const[newtask , setnewtask] = useState('')
  const[tasks , settask] = useState([])


  function addtask(){

    settask([...tasks , newtask])

  }
  function deletetask(index){

    var duplicatearray = [...tasks]
    duplicatearray.splice(index , 1)
    settask(duplicatearray)

  }

  const taskslist = tasks.map((object, index)=>{

    return <div className='row justify-content-center'>

      <h3 className='col-md-6 text-start'>{index+1}. {object}</h3>
      <button onClick={()=>{deletetask(index)}} className='col-md-1 btn btn-danger m-1'>DELETE</button>

    </div>

  })

  return (
    <div className="App">
      <br />
      <br />
      <h1>Todo List</h1>
      
      
      <div className='row justify-content-center'>

        <input type="text" placeholder='Taskname' className='form-content col-md-6 m-1'
        value={newtask} onChange={(e)=>{setnewtask(e.target.value)}}/>
        <button onClick={addtask} className='btn btn-primary col-md-1 m-1'>ADD TASK</button>

      </div>

      <br />
      
      {taskslist}
     
      
      
    </div>
    
  );
}

export default App;
