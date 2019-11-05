import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import {Task, TaskStatus} from './task.model';
import { CreateTaskDto } from './dto/create-tast.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';


@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService){}

    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDTO) : Task[]{
        if(Object.keys(filterDto).length){
           return this.taskService.getTasksWithFilters(filterDto);
        }else{
            return this.taskService.getAllTasks();
        }
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