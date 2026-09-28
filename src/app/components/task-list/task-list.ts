import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../../interfaces/Task';
import { TaskService } from '../../service/task-service';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit{
  
  ngOnInit(): void {
    this.taskService.listTasks().subscribe(
      data => {
        this.tasks = data
        console.log(data);
      }
    )
  }

  taskService = inject(TaskService)
  tasks: any = this.taskService.listTasks()
}
