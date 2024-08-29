export interface Tasks  {
    id:string,
    title:string,
    description:string,
    timeStamp:string,
    status: 'open' | 'in-progress' | 'complete'
}