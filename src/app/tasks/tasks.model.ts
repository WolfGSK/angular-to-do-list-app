export type TaskStatus = 'open' | 'in-progress' | 'complete';

export interface Tasks  {
    id:string,
    title:string,
    description:string,
    timeStamp:string,
    status: TaskStatus
}

