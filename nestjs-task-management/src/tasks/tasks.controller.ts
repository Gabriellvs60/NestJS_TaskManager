import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes,ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipe/task-status-validation.pipe';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService){}

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id : number) : Promise<Task>{
        return this.taskService.getTaskById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task>{
        return this.taskService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id', ParseIntPipe) id:number): Promise<void>{
    return this.taskService.deleteTask(id);
    }

    /* @Get()
    getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDTO) : Task[]{
        if(Object.keys(filterDto).length){
           return this.taskService.getTasksWithFilters(filterDto);
        }else{
            return this.taskService.getAllTasks();
        }
    }

    @Post()
    @UsePipes(ValidationPipe)
        createTask(@Body() createTaskDto: CreateTaskDto)  : Task{
            return this.taskService.createTask(createTaskDto);
    }

   

    
    @Delete('/:id')
    deleteTask(@Param('id') id : string) : void{
        this.taskService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id:string,
        @Body('status', TaskStatusValidationPipe) status: TaskStatus,
    ):Task {
        return this.taskService.updateTasksStatus(id,status);
    } */
}

//createTask(
    /* @Body('title') title: string,
    @Body('description') description: string, */

        /* @Post()
    createTask(@Body() body){
        console.log('body', body)
    } */