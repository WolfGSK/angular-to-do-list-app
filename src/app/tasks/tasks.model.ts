import { InjectionToken, Provider } from "@angular/core";

export type TaskStatus = 'open' | 'in-progress' | 'complete';

export interface Tasks  {
    id:string,
    title:string,
    description:string,
    timeStamp:string,
    status: TaskStatus,
    isExpand: boolean
}

type TaskStatusOptions = {
    value: TaskStatus,
    text:string
}[];

export const TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusOptions>(
    'task-status-options'
);


export const taskStatusOptions : TaskStatusOptions = [
    {
        value:'open',
        text: 'Open'
    },
    {
        value:'in-progress',
        text:'In progress'
    },
    {
        value:'complete',
        text:'Complete'
    }
]

export const taskStatusOptionsProvider: Provider = {
    provide: TASK_STATUS_OPTIONS,
    useValue: taskStatusOptions,
  };