import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Edittask() {

    let navigate=useNavigate()

    const {id}=useParams()

    const [tasks, setTask] = useState({
        task: "",
         duedate: "",
        description: ""

    },[])

    const { task,duedate, description } = tasks


    const onInputChange = (e) => {
        setTask({ ...tasks, [e.target.name]: e.target.value })
    }

    useEffect(()=>{
        loadTasks();
    },[])

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/task/${id}`,tasks)
        navigate("/listView")
    };

    const loadTasks=async()=>{
        const result=await axios.get(`http://localhost:8080/task/${id}`,tasks)
        setTask(result.data)
    }

    return (
        <div className='container'>

            <div className="col-md-4 offset-md-4 border rounded p-4 mt-2 shadow">
                <h2 className='test-center m-4'>Update Task</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="mb-3">
                        Title
                        <input type='{text}' className="form-control" placeholder='Task Title' name='task'
                            value={task} onChange={(e) => onInputChange(e)}  defaultValue={tasks.task} required/>

                    </div>
                    <div className="mb-3">
                        Duedate
                        <input type={"date"} className="form-control" defaultValue={tasks.duedate} placeholder='Due Date of Task' name='duedate' onChange={(e) => onInputChange(e)} value={duedate}  />

                    </div>
                    <div className="mb-3">
                        Description
                        <textarea maxLength="200" className='form-control' defaultValue={tasks.description} onChange={(e) => onInputChange(e)} placeholder='Task Description max length 200' name="description" value={description}></textarea>

                    </div>

                    <button type="submit" className="btn btn-success"> Update</button>
                    <Link to="/listView" className="btn btn-outline-danger mx-2"> Cancel</Link>
                </form>
            </div>

        </div>
    )
}
