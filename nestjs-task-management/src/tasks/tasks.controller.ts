import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes,ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipe/task-status-validation.pipe';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { tsConstructorType } from '@babel/types';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../auth/user.entity';
import { GetUser } from '../auth/get-user.decorator';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
    constructor(private taskService: TasksService){}

    @Get()
    getTasks(@Query(ValidationPipe) filterDto:GetTasksFilterDTO){
       return this.taskService.getTasks(filterDto);
    }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id : number) : Promise<Task>{
        return this.taskService.getTaskById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(
        @Body() createTaskDto: CreateTaskDto,
        @GetUser() user : User,
        ): Promise<Task>{
        return this.taskService.createTask(createTaskDto, user);
    }

    @Delete('/:id')
    deleteTask(@Param('id', ParseIntPipe) id:number): Promise<void>{
    return this.taskService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id', ParseIntPipe) id:number,
        @Body('status', TaskStatusValidationPipe) status: TaskStatus,
    ):Promise<Task> {
        return this.taskService.updateTaskStatus(id,status);
    }
    /* @Get()
    getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDTO) : Task[]{
        if(Object.keys(filterDto).length){
           return this.taskService.getTasksWithFilters(filterDto);
        }else{
            return this.taskService.getAllTasks();
        }
    }idjfdifjdif

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