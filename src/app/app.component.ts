import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasicForm';
  topics=['angular','react','view'];

  userModel =new User("shini","shini@","we","view","wdw",true);
}
