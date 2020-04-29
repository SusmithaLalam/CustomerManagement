import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Susmitha";
  street = "Konduri vari Street";
  city = "RJY";
  region = "North";
  hideAddress = true;

  toggle() {
    this.hideAddress = !this.hideAddress;
  }

  setRegion(val) {
    this.region = val;
  }
}
