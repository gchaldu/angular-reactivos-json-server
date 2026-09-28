import { inject, Injectable } from '@angular/core';
import { Task } from '../interfaces/Task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  
  http: HttpClient = inject(HttpClient)
  tasks: any;
  url: string = 'http://localhost:3000/tasks'

  
  add(task: Task){

    this.http.post(this.url, task).subscribe()
    //this.tasks.push(task)
  }

  listTasks(): Observable<Task[]>{
    this.tasks = this.http.get<Task[]>(this.url)
    console.log(this.tasks);
    return this.tasks;
  }
}
