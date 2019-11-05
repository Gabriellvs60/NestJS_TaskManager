import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import {Task, TaskStatus} from './task.model';
import { CreateTaskDto } from './dto/create-tast.dto';
@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService){}

    @Get()
    getAllTasks() : Task[]{
       return this.taskService.getAllTasks();
    }

    @Post()
        createTask(@Body() createTaskDto: CreateTaskDto)  : Task{
            return this.taskService.createTask(createTaskDto);
    }

    @Get('/:id')
    getTaskById(@Param('id') id : string){
        return this.taskService.getTaskById(id);
    }

    
    @Delete('/:id')
    deleteTask(@Param('id') id : string) : void{
        this.taskService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id:string,
        @Body('status') status: TaskStatus,
    ):Task {
        return this.taskService.updateTasksStatus(id,status);
    }
}

//createTask(
    /* @Body('title') title: string,
    @Body('description') description: string, */

        /* @Post()
    createTask(@Body() body){
        console.log('body', body)
    } */