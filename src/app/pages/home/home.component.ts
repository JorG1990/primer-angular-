import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from './../../models/task.model'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'instalar angular cli',
      completed: false
    },
    {
      id: Date.now(),
      title: 'crear proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'crear componentes',
      completed: false
    },
    {
      id: Date.now(),
      title: 'crear servicio',
      completed: false
    },
  ]);
// funcion para agregar un nuevo item
  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
  }

//
  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

// funcion para eliminar sin mutar el array
  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
  }

  updateTask(index: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }

}
