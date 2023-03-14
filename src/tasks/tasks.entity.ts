export enum TaskStatus {
  PENDING = 'pending',
  CLOSED = 'closed',
  IN_PROGRESS = 'in-progress',
  DONE = 'done',
}

export class Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
