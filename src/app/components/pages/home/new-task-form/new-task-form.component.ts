import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../../../services/task.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.scss',
  imports: [ReactiveFormsModule,RouterOutlet],
  providers:[TaskService],
})
export class TaskFormComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService,private router:Router) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value.title);
      this.taskService.addTask(this.taskForm.value.title);
      this.router.navigate(['/tasks']);    
         this.taskForm.reset();
    }
  }
}
