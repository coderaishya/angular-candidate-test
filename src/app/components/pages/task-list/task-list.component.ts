import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../../services/task.service';
import { CheckboxComponent } from '../../ui/checkbox/checkbox.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  standalone: true,
  imports: [CommonModule, CheckboxComponent],
  providers:[TaskService],
 
})
export class TaskListComponent {
  tasks: any;

  constructor(private taskService: TaskService,private router: Router) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.tasks = this.taskService.getTasks();
  }

  goToDetail(taskId: any) {
    this.router.navigate(['tasks', taskId]);
  }
}
