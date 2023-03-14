import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { updateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Task description',
      status: TaskStatus.PENDING,
    },
  ];
  getAllTasks() {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const task = {
      id: (this.tasks.length + 1).toString(),
      title: title,
      description: description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);
    return task;
  }

  updateTask(id: string, updatedFields: updateTaskDto): Task {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updatedFields);
    this.tasks = this.tasks.map(task => task.id === id ? newTask : task); 
    return newTask;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id!== id);
  }
  getTaskById(id: string) {
    return this.tasks.find((task) => task.id === id);
  }
}
