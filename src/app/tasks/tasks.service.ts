import { Injectable } from '@angular/core';
import { Tasks } from './tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { 
    const tasks = localStorage.getItem('to-do-tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  tasks:Tasks[] = [
    {
      title:'Time to test services',
      description:'This is an attempt to create a service component',
      id:'0',
      timeStamp:new Date().toLocaleString()
    }
  ];

  private saveTasks() {
    localStorage.setItem('to-do-tasks', JSON.stringify(this.tasks));
  }

  onAddTask (task:{title:string, description:string }) {
    const timeStamp = new Date().toLocaleString();
    const randomId = Math.random().toString();
    
    this.tasks.unshift({
      title:task.title,
      description:task.description,
      id:randomId,
      timeStamp:timeStamp
    });

    this.saveTasks();
  }

  onRemoveTask (id:string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }
}
