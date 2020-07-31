import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]>{
      return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // Toggle Completed
  toggleCompleted(todo: Todo):Observable<any>{
      const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  // Delete Todo
  deleteTodo(todo:Todo):Observable<Todo>{
      const url = `${this.todosUrl}/${todo.id}`;
      return this.http.delete<Todo>(url, httpOptions);
  }

    addTodo(todo:Todo):Observable<any>{
      return this.http.post(this.todosUrl, todo, httpOptions);
    }
}
