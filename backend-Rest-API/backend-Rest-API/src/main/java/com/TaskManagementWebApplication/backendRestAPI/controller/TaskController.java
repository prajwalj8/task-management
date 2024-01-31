package com.TaskManagementWebApplication.backendRestAPI.controller;

import com.TaskManagementWebApplication.backendRestAPI.exception.TaskNotFoundException;
import com.TaskManagementWebApplication.backendRestAPI.model.Task;
import com.TaskManagementWebApplication.backendRestAPI.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//crossorigin is used for frontend connection
@CrossOrigin("http://localhost:3000")

public class TaskController {

//    injecting task repositories using autowired
    @Autowired
    private TaskRepository taskRepository;

    //adding a new task
    @PostMapping("/task")
    @ResponseBody
    Task newTask(@RequestBody Task newTask){
        return taskRepository.save(newTask);
    }

//    fetching all tasks
    @GetMapping("/allTasks")
    List<Task>getAllTasks(){
        return taskRepository.findAll();
    }

//    fetching task using single id and handling exception if id is not exist
    @GetMapping("/task/{id}")
    Task getTaskById(@PathVariable Long id) {
        return taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));
    }

//    updating task by id, storing in a map, if id is not exist handling exception
    @PutMapping("task/{id}")
    Task updateTask (@RequestBody Task newTask, @PathVariable Long id){
        return taskRepository.findById(id)
                .map(task->{
                    task.setTask(newTask.getTask());
                    task.setDuedate(newTask.getDuedate());
                    task.setDescription(newTask.getDescription());
                    return taskRepository.save(task);
                }).orElseThrow(()->new TaskNotFoundException(id));
    }

//    delete a task using id, if task is not exist then handling exception
    @DeleteMapping("/task/{id}")
    String deleteTask(@PathVariable Long id){
        if(!taskRepository.existsById(id)){
            throw new TaskNotFoundException(id);
        }

        taskRepository.deleteById(id);
        return "Task Deleted Successfully";
    }
}
