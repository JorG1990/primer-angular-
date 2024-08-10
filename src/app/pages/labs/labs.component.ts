import { Component, signal,} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title ='todo-app';
  welcome = 'bienvenido a mi primera aplicacion con angular';
  tasks = signal([
    'instalar algular cli',
    'crear proyecto',
    'crear componentes',
    'crear servicio',
  ]);

  name = signal('Jorge');
  age = 34;
  disabled = true

  person = {
    name: 'jorge',
    age: 18,
    avatar: 'https://imgs.search.brave.com/4mdfO-5Ce8zySLYNlM0gDRI3ljiyTnUriP1d7KPrQMU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50Lm5hdGlvbmFs/Z2VvZ3JhcGhpYy5j/b20uZXMvbWVkaW8v/MjAyNC8wMS8xMC9w/ZXJyby1sb2JvLTFf/OTU5Zjg4ZThfMjQw/MTEwMTc1MDU3Xzgw/MHg4MDAuanBn'
  }

  clickHandler() {
    alert('hola')
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log (input.value);
  }
}
