import { Component, inject, input,  } from '@angular/core';
import { TasksService } from '../tasks.service';
import { ButtonComponent } from '../../shared/button/button.component';
import { FormsModule } from '@angular/forms';
import { TASK_STATUS_OPTIONS, Tasks, TaskStatus, taskStatusOptions, taskStatusOptionsProvider } from '../tasks.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'] // Corrected to styleUrls
})
export class TaskComponent {
  
  task = input.required<Tasks>()

  private tasksService = inject(TasksService);
  taskStatusOptions = inject(TASK_STATUS_OPTIONS)

  removeTask(id: string) {
    this.tasksService.onRemoveTask(id);
  }

  updateTask(taskId: string, newStatus: string) {
    const validStatuses: TaskStatus[] = ['open', 'in-progress', 'complete'];
    if (validStatuses.includes(newStatus as TaskStatus)) {
      this.tasksService.onUpdateTask(taskId, newStatus as TaskStatus);
    } else {
      console.error(`Invalid status: ${newStatus}`);
    }
  }
  expandTask(status:boolean,taskId:string) {
    this.tasksService.onExpandTask(status,taskId);
  }
}
