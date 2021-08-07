import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: any = ''
  temporary: any

  action(act: any) {
    this.value += act
  }

  clearAll() {
    this.value = ''
  }

  delLast() {
    this.temporary = this.value.slice(0, -1)
    this.value = this.temporary
  }

  getResult() {
    this.value = eval(this.value)
  }

}
