import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent {

  constructor(private taskService: TaskService) { }
  ngOnInit() {}
  createNewList() {
      //console.log("In a function")
      this.taskService.createList('Testing').subscribe((response:any) => {
      //console.log("Success!")
      console.log("This is a response: " + JSON.stringify(response));
    });
  }
}
