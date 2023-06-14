import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: string[] = ['Pagare le bollete.', 'Dare da mangiare ai gatti.', 'Fare cena.'];
  newTask: string = '';

  addTask() {
      console.log(this.newTask)
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
  }

  removeTask(task: string) {
    this.tasks = this.tasks.filter((t) => t !== task);
  }
  
}
