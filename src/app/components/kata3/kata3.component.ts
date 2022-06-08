import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kata3',
  templateUrl: './kata3.component.html',
  styleUrls: ['./kata3.component.scss']
})
export class Kata3Component implements OnInit {

  id:number = 1;

  taskName = "";

  taskList:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  newTask() {
    const task = {
      id : this.id,
      name: this.taskName || `Tarea ${this.id}`,
      completed: false,
      description: 'Añade una descripción',
    };
    this.taskList.push(task);
    this.taskName = "";
    this.id++;
  }

  newTaskEnter(event:any) {
    if(event.keyCode === 13) {
      this.newTask();
    }
  }

  setCompleted(task:any) {
    this.taskList.map((item:any) => {
      if(item.id === task.id){
        item.completed = true;
      }
    })
  }

  deleteTask(task:any) {
    this.taskList = this.taskList.filter((item:any) => item.id !== task.id);
  }

}
