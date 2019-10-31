import { Injectable } from '@nestjs/common';
import{Task, TaskStatus} from './task.model';
import * as uuid from 'uuid/v1';
// é do serviço, a responsabilidade de manipular todas as tasks
@Injectable()
export class TasksService {
    private tasks :Task[] = [];

    getAllTasks(): Task[]{
        return this.tasks;
    }

    //este metodo será chamado pelo controller para criar um task
    createTask(title:string, description:string) : Task{
        const task : Task = {
            id: uuid(),
            //se o argumento passado tiver o mesmo nome da variavel,
            //o ecmascript define automaticamente pra nos = a title : title,
            title,
            description,
            status: TaskStatus.OPEN,
        };
//retornar o dado adicionado auxilia os caras do front-end
//pois eles nao vao precisar fazer um get para buscar esse dado.
        this.tasks.push(task);
        return task;
    }
}
