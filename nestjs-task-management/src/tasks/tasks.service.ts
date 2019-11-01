import { Injectable } from '@nestjs/common';
import{Task, TaskStatus} from './task.model';
import * as uuid from 'uuid/v1';
import { CreateTaskDto } from './dto/create-tast.dto';
// é do serviço, a responsabilidade de manipular todas as tasks
@Injectable()
export class TasksService {
    private tasks :Task[] = [];

    getAllTasks(): Task[]{
        return this.tasks;
    }

    getTaskById(id : string): Task{
        return this.tasks.find(task => task.id === id);
    }

    deleteTask(id : string) : void{
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    //este metodo será chamado pelo controller para criar um task
    createTask(createTaskDto : CreateTaskDto) : Task{

        const {title, description} = createTaskDto;
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
