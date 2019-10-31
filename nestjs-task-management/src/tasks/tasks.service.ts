import { Injectable } from '@nestjs/common';
import{Task} from './task.model';

// é do serviço, a responsabilidade de manipular todas as tasks
@Injectable()
export class TasksService {
    private tasks :Task[] = [];

    getAllTasks(): Task[]{
        return this.tasks;
    }
}
