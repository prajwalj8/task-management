package com.TaskManagementWebApplication.backendRestAPI.repository;

import com.TaskManagementWebApplication.backendRestAPI.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task,Long> {
}
