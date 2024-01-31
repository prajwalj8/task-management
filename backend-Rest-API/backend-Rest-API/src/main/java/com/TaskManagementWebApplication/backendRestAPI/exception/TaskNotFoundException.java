package com.TaskManagementWebApplication.backendRestAPI.exception;

public class TaskNotFoundException extends RuntimeException{

    public TaskNotFoundException(Long id){
        super("Task does not exist!");
    }

}
