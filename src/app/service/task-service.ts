import { Injectable } from '@angular/core';
import { Task } from '../interfaces/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  
  tasks: Task[] =[]
  
  add(task: Task){
    this.tasks.push(task)
  }

  listTasks(){
    return this.tasks;
  }
}
