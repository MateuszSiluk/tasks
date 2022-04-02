import { NgModule } from '@angular/core';
import { InMemoryTasksStorage } from './in-memory-tasks.storage';
import { TASK_DTO_STORAGE } from '../../../application/ports/secondary/task-dto.storage-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemoryTasksStorage,
    { provide: TASK_DTO_STORAGE, useExisting: InMemoryTasksStorage },
    
  ],
  exports: [],
})
export class InMemoryTasksStorageModule {}
