import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  lists: any;
  tasks: any;

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }
  ngOnInit() {
    //console.log(this.route)
    this.route.params.subscribe((params: Params) => {
      if (params['listId'] != undefined) {
        this.taskService.getTasks(params['listId']).subscribe((tasks) => { //getting the response back
          this.tasks = tasks
        })
      }
    })
    this.taskService.getLists().subscribe((lists) => { //getting the response back
      //console.log(typeof lists)
      //console.log(lists)
      this.lists = lists
    })
  }

  onTaskClick(task: any){
    this.taskService.complete(task).subscribe(() => {
      //console.log("updated successfully")
      //console.log(task.completed)
      task.completed = !task.completed
    })
  }
}
