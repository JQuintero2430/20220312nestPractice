import { TaskStatus } from "../tasks.entity"
import { IsString, IsNotEmpty, MinLength, IsOptional, IsIn } from 'class-validator';

export class createTaskDto {  
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    description: string

    status?: TaskStatus
}

export class updateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @IsOptional()
    title?: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    description?: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @IsIn([TaskStatus.CLOSED, TaskStatus.IN_PROGRESS, TaskStatus.DONE, TaskStatus.PENDING])
    status?: TaskStatus
}