import { Component, inject, input,  } from '@angular/core';
import { TasksService } from '../tasks.service';
import { ButtonComponent } from '../../shared/button/button.component';
import { FormsModule } from '@angular/forms';
import { Tasks } from '../tasks.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  
  task = input.required<Tasks>()

  private tasksService = inject(TasksService);

  removeTask(id: string) {
    this.tasksService.onRemoveTask(id);
  }

  updateTask(taskId: string, newStatus:'open' | 'in-progress' | 'complete') { 
    this.tasksService.onUpdateTask(taskId, newStatus);
  }
}
