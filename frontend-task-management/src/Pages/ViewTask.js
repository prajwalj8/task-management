import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewTask() {


    const [task, setTask] = useState({
        task: "",
        duedate: "",
        description: ""
    })

    const { id } = useParams();

    useEffect(() => {
        loadTasks()
    }, [])

    const loadTasks = async () => {
        const result = await axios.get(`http://localhost:8080/task/${id}`)
        setTask(result.data)
    }


    return (
        <div className='container'>

            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className='test-center m-4'>View Task Details</h2>
                <div className='card'>
                    <div className='card-header'>
                        <span> Details of Task Id :
                            {task.id}</span>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <span> <b>Task:</b>
                                    {task.task}</span></li>
                            <li className='list-group-item'>
                                <span> <b>Duedate:</b>
                                    {task.duedate}</span></li>

                            <li className='list-group-item'>
                                <span> <b>Description:</b>
                                    {task.description}</span></li>
                        </ul>

                    </div>

                </div>
                <Link className='btn my-2 btn-dark' to={"/detailview"}>Back</Link>
            </div>
        </div>
    )
}
