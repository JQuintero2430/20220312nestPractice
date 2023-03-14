import { Body, Controller, Get, Post, Delete, Param, Put, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto, updateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

  constructor(private tasksService: TasksService) {}

  @Get()
  getAlltasks() {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() newTask: createTaskDto) {
    return this.tasksService.createTask(newTask.title, newTask.description);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.tasksService.deleteTask(id);
    return 'The task has been deleted';
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() updatedFields: updateTaskDto) {
    return this.tasksService.updateTask(id, updatedFields);
  }

  @Patch(':id')
  patchTask(@Param('id') id: string, @Body() updatedFields: updateTaskDto) {
    return this.tasksService.updateTask(id, updatedFields);
  }
}
