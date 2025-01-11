import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Task, TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-detail.component.html',
 styleUrl: './task-detail.component.scss',
  standalone: true,
  imports: [CommonModule],
 
})
export class TaskDetailsComponent implements OnInit {
  task?: Task;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {}

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('taskId');
    if (taskId) {
      this.task = this.taskService.getTaskById(taskId);
    }
  }
}
