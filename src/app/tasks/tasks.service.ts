import { Injectable, signal } from '@angular/core';
import { Tasks, TaskStatus } from './tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks = signal<Tasks[]>([{
    title: 'Time to test services',
    description: 'This is an attempt to create a service component',
    id: '0',
    timeStamp: new Date().toLocaleString(),
    status: 'open',
    isExpand: false
  }]);

  constructor() { 
    const tasks = localStorage.getItem('to-do-tasks');

    if (tasks) {
      this.tasks.set(JSON.parse(tasks)); 
    }
  }

  allTasks = this.tasks.asReadonly();

  private saveTasks() {
    localStorage.setItem('to-do-tasks', JSON.stringify(this.tasks()));
  }

  onAddTask(taskData: { title: string, description: string }) {
    const timeStamp = new Date().toLocaleString();
    const randomId = Math.random().toString();

    const newTask: Tasks = {
      ...taskData,
      id: randomId,
      timeStamp: timeStamp,
      status: 'open',
      isExpand: false
    };

    this.tasks.update((oldTasks) => [newTask,...oldTasks ]);
    this.saveTasks();
  }

  onRemoveTask(id: string) {
    this.tasks.update((oldTasks) => oldTasks.filter((task) => task.id !== id));
    this.saveTasks();
  }

  onUpdateTask(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((tasks) => tasks.map((task) => task.id === taskId ? { ...task,status: newStatus} : task));
    this.saveTasks();
  }

  onExpandTask(expandTask:boolean,taskId:string) {
    expandTask = !expandTask;
    this.tasks.update((tasks) => tasks.map((task) =>taskId === task.id ? {...task,isExpand: expandTask}: task))
    this.saveTasks();
  }
}