import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                <div class="container-fluid">
                    <a class="navbar-brand fs-4 text-primary-emphasis fw-semibold" href="/listView">Task Manager</a>
                    <button class="navbar-toggler"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">

                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link fw-medium text-dark mx-4" aria-current="page" to="/listView">List View</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link fw-medium text-dark mx-4" to="/detailView">Detail View</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link  fw-medium text-dark mx-4" aria-disabled="true" to='/addTask'>Add Task</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>


        </div>
    )
}
