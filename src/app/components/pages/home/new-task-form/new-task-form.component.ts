import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../../../services/task.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { InputComponent } from '../../../ui/input/input.component';
import { CheckboxComponent } from '../../../ui/checkbox/checkbox.component';

@Component({
  selector: 'app-task-form',
  standalone: true,
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.scss',
  imports: [ReactiveFormsModule,RouterOutlet,InputComponent,RouterModule,CheckboxComponent],
  providers:[TaskService],
})
export class TaskFormComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService,private router:Router) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);
      this.taskService.addTask(this.taskForm.value);
      this.router.navigate(['/tasks']);    
         this.taskForm.reset();
    }
    else{
      alert('Please fill all fields');
      return;
    }
  }
}
