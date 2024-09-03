import { Component, inject, output } from '@angular/core';
import { TASK_STATUS_OPTIONS, taskStatusOptionsProvider } from '../tasks.model';

@Component({
  selector: 'app-tasks-filter',
  standalone: true,
  imports: [],
  templateUrl: './tasks-filter.component.html',
  styleUrl: './tasks-filter.component.css',
  providers: [taskStatusOptionsProvider]
})
export class TasksFilterComponent {
  taskStatusOptions = inject(TASK_STATUS_OPTIONS)
  filteredStatus = output<string>()
  
  changeTaskFilter(filterStatus:string) {
    this.filteredStatus.emit(filterStatus)
  }
}
