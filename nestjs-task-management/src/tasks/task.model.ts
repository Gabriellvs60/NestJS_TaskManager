export interface Task {
    id : string;    //quem cria é o sistema
    title : string; //info do user
    description: string;    //info do user
    status: TaskStatus; //sistema usa e manipula
}

export enum TaskStatus{
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}