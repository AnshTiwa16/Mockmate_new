import React, {useState} from 'react';

function Todolist(){
    
    const [tasks, settasks] = useState(["eat breakfast", "take a shower", "get ready for college!"]);
    const [newtask, setnewtasks] = useState("");

    function addtask(){
        if(newtask.trim() !== ""){
settasks(t=>[...t, newtask]);
setnewtasks("");}
    }

    function deletetask(index){
const updatetasks=tasks.filter((_, i)=> i !== index);
settasks(updatetasks);
    }

    function movetaskup(index){

        if(index>0){
            const updatetasks=[...tasks];
            [updatetasks[index],updatetasks[index-1]]=
            [updatetasks[index-1],updatetasks[index]];
            settasks(updatetasks);        }
    }

    function movetaskdown(index){

        if(index<tasks.length -1){
            const updatetasks=[...tasks];
            [updatetasks[index],updatetasks[index+1]]=
            [updatetasks[index+1],updatetasks[index]];
            settasks(updatetasks);
        }
    }

    function handleinputchange(e){
setnewtasks(e.target.value);
    }


return(
    <div className="to-do-list">
    <h1>To-Do-List!</h1>

<div className ="input">
 <input type ="text" placeholder='add text here...' value={newtask} onChange={handleinputchange}/>
 <button className ="button-class" onClick={addtask}>
Add
 </button>
 </div>
<ol>
{tasks.map((task, index) =>
<li key={index}>
    <span className="text">{task}</span>
    <button className ="remove" onClick={()=> deletetask(index)}>Delete</button>
    <button className="up" onClick={()=> movetaskup(index)}>Move Up</button>
    <button className ="down" onClick={()=> movetaskdown(index)}>Move Down</button>
</li>

)}
</ol>
</div>
)
}
export default Todolist


 