import { Component } from '@angular/core';
import { TaskCreate } from '../../components/task-create/task-create';
import { TaskList } from '../../components/task-list/task-list';

@Component({
  selector: 'app-home',
  imports: [TaskCreate, TaskList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
