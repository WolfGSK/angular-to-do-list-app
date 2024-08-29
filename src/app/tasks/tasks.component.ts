import { Component, effect, inject } from '@angular/core';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { TasksService } from './tasks.service';
import { Tasks } from './tasks.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NewTaskComponent, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  private tasksService = inject(TasksService);

  tasks:Tasks[]= this.tasksService.allTasks();
  constructor() {
    effect(() => {
      this.tasks = this.tasksService.allTasks();
    });
  }
  

}
