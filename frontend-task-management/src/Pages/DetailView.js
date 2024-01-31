import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function DetailView() {

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

        <div >
            <table class="table py-5 ">
                <thead>
                    <tr>
                        <th scope="col">SN</th>
                        <th scope="col">Task</th>
                        <th scope="col">DueDate</th>
                        <th scope="col">Description</th>
                        <th scope="col">Details</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        tasks.map((task, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{task.task}</td>
                                <td>{task.duedate}</td>
                                <td>{task.description}</td>
                                <td>
                                    <Link className='btn btn-warning mx-2' to={`/viewtask/${task.id}`}>View Task</Link>
                                </td>

                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
