import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  createList(title: string) {
    //console.log("Function gets title successfully")
    return this.webReqService.post('lists', {title})
  }

  getLists() {
    return this.webReqService.get('lists')
  }

  getTasks(listId: string) {
    return this.webReqService.get(`lists/${listId}/tasks`)
  }

  createTask(title: string, listId: string) {
    //console.log("Function gets title successfully")
    return this.webReqService.post(`lists/${listId}/tasks`, {title})
  }

  complete(task: any) {
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, {completed: !task.completed})
  }
}
