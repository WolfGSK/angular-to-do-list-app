import { Component, computed, effect, inject, signal } from '@angular/core';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { TasksService } from './tasks.service';
import { Tasks } from './tasks.model';
import { TasksFilterComponent } from "./tasks-filter/tasks-filter.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NewTaskComponent, TaskComponent, TasksFilterComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  private tasksService = inject(TasksService);
  private selectedFilter = signal<string>('all')

  tasks = computed(() => {
    const filter = this.selectedFilter();
    const allTasks = this.tasksService.allTasks();

    switch (filter) {
      case 'open':
        return allTasks.filter((task) => task.status === 'open');
      case 'in-progress':
        return allTasks.filter((task) => task.status === 'in-progress');
      case 'complete':
        return allTasks.filter((task) => task.status === 'complete');
      default:
        return allTasks;
    }
  });
  
  constructor() { }

  onChangeTaskFilter(filtered:string){
    this.selectedFilter.set(filtered);

  }
}