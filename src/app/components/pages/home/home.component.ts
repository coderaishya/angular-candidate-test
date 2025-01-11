import { Component } from '@angular/core';
import { TaskFormComponent } from './new-task-form/new-task-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TaskFormComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
