import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Listview() {

    const [tasks, setTasks] = useState([]);

    const { id } = useParams()

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const result = await axios.get("http://localhost:8080/allTasks");
        setTasks(result.data);
    };

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:8080/task/${id}`)
        loadTasks()
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table class="table shadow">
                    <thead>
                        <tr>
                            <th scope="col">SN</th>
                            <th scope="col">Task</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tasks.map((task, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{task.task}</td>
                                    <td>
                                        <Link className='btn btn-outline-success mx-2' to={`/edittask/${task.id}`}>Update</Link>
                                        <button className='btn btn-danger' onClick={() => deleteTask(task.id)} >Delete</button>
                                    </td>

                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
