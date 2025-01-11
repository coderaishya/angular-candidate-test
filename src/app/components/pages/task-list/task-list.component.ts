import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../../services/task.service';
import { CheckboxComponent } from '../../ui/checkbox/checkbox.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  standalone: true,
  imports: [CommonModule, CheckboxComponent],
  providers:[TaskService],
 
})
export class TaskListComponent {
  tasks = this.taskService.getTasks();

  constructor(private taskService: TaskService) {}
}
