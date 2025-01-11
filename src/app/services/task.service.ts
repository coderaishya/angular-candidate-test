import { Injectable } from '@angular/core';

export interface Task {
  id: string;
  title: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  addTask(title: string): void {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      done: false,
    };
    this.tasks.push(newTask);
  }

  updateTask(id: string, done: boolean): void {
    const task = this.getTaskById(id);
    if (task) {
      task.done = done;
    }
  }
}
