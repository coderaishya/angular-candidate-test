import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { TaskFormComponent } from './components/pages/home/new-task-form/new-task-form.component';
import { TaskDetailsComponent } from './components/pages/task-detail/task-detail.component';
import { TaskListComponent } from './components/pages/task-list/task-list.component';


export const routes: Routes = [
  { path: '', component: TaskFormComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/:taskId', component: TaskDetailsComponent },
];

bootstrapApplication(TaskFormComponent, {
  providers: [provideRouter(routes)],
});
