package com.TaskManagementWebApplication.backendRestAPI.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class TaskNotFoundMap {

    @ResponseBody
//    if exception is found then its response to the handler
    @ExceptionHandler(TaskNotFoundException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)

    //all exception will be extracted  into map
    public Map<String,String> exceptionHandler(TaskNotFoundException exception){
        Map<String,String> error=new HashMap<>();
        error.put("Error",exception.getMessage());
        return error;
    }
}
