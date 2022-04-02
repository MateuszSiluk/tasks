import { NgModule } from '@angular/core';
import { InMemoryRemovedTaskStorage } from './in-memory-removed-task.storage';
import { REMOVED_TASK_DTO_STORAGE } from '../../../application/ports/secondary/removed-task-dto.storage-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemoryRemovedTaskStorage,
    {
      provide: REMOVED_TASK_DTO_STORAGE,
      useExisting: InMemoryRemovedTaskStorage,
    },
  ],
  exports: [],
})
export class InMemoryRemovedTaskStorageModule {}
