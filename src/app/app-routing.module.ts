import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { AddTaskFormPageModule } from './pages/add-task-form.page-module';
import { ListOfTasksPageModule } from './pages/list-of-tasks.page-module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
  {
    path: 'add-task',
    loadChildren: () => AddTaskFormPageModule,
  },
  { 
        path: 'all-tasks', 
        loadChildren: () => ListOfTasksPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
