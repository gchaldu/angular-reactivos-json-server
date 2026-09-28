import { Component, inject } from '@angular/core';
import { Task } from '../../interfaces/Task';
import { TaskService } from '../../service/task-service';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {

  taskService = inject(TaskService)
  tasks: Task[] = this.taskService.listTasks()
}
