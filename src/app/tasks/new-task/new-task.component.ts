import { Component, ElementRef, inject,  viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  private TasksService = inject(TasksService)

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form')
  onSubmit(title:string,description:string) {
    this.TasksService.onAddTask({title,description});
    this.form().nativeElement.reset();
  }
}
