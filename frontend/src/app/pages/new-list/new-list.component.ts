import { TaskService } from 'src/app/task.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent {
  constructor(private taskService: TaskService) { }
  createList(title: string) {
      this.taskService.createList(title).subscribe((response:any) => {
      console.log(JSON.stringify(response));
    });
  }
}
