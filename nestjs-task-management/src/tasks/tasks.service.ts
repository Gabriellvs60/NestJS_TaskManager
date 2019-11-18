import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-tast.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
// é do serviço, a responsabilidade de manipular todas as tasks
@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
    ) { }

    async getTaskById(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);
        if (!found) {
            throw new NotFoundException("Task with ID not found");
        }
        return found;
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskRepository.createTask(createTaskDto);
    }
    /* getAllTasks(): Task[]{
        return this.tasks;
    }

    getTasksWithFilters(filterDto: GetTasksFilterDTO) :Task[]{
        const {status, search} = filterDto;
        let tasks = this.getAllTasks();

        if(status){
            tasks = tasks.filter(task => task.status === status)
        }
        //não entendi esse includes com os parametros
        if(search){
            tasks = tasks.filter(task =>
                task.title.includes(search) ||
                task.description.includes(search),
                );
        }
        return tasks;
    }

    
    getTaskById(id : string): Task{
        const found = this.tasks.find(task => task.id === id);
        if(!found){
            throw new NotFoundException("Task with ID not found");
        }
        return found;
    }

    deleteTask(id : string) : void{
        const found = this.getTaskById(id);
        this.tasks = this.tasks.filter(task => task.id !== found.id);
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

    updateTasksStatus(id:string, status: TaskStatus){
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    } */
}
