import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  constructor(private _todoService: TodoService) {
    
   }

  ngOnInit() {
    this.todos = [
      {
        text: "Learn programming"
      },
      {
        text: "Practice typescript"
      }
    ];
  }
  addTodo(){
    console.log(this.text);
    this.todos.push({
      text: this.text
    });
  }
  deleteTodo(aa){
    console.log("text: ",aa)
    for(var i = 0; i <= this.todos.length; i++){
      if(this.todos[i].text == aa){
        this.todos.splice(i, 1);
      }

    }

  }

}
