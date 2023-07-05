import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  listId: string = ''

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['listId'] != undefined) {
        this.listId = params['listId']
        console.log(this.listId)
      }
    })
  }

  createTask(title: string) {
        this.taskService.createTask(title, this.listId).subscribe((newTask: any) => {
          //console.log(newTask)
          this.router.navigate([`/lists/${this.listId}`])
        })
  }
}
