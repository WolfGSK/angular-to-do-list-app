import { Component, inject } from '@angular/core';
import { TasksService } from '../tasks.service';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  private TasksService = inject(TasksService);
  
  tasks = this.TasksService.tasks;

  removeTask(id:string) {
    this.TasksService.onRemoveTask(id);
    this.tasks = this.TasksService.tasks;
  }

}
