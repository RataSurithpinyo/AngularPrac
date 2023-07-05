import { TaskService } from 'src/app/task.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent {
  constructor(private taskService: TaskService, private router: Router) { }
  createList(title: string) {
      this.taskService.createList(title).subscribe((response: any) => {
      //console.log(JSON.stringify(response));
      // Navigate to new route '/lists/:id'
      //var jsonResponse = JSON.parse(response);
      this.router.navigate(['/lists', response.data._id])
    });
  }
}
