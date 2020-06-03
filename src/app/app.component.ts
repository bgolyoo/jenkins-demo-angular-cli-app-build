import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jenkins-demo-angular-cli-app-build';

  hello(){
    console.log('hello');
  }
}
