import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: 'app/navbar.component.html',
  styles:[`
     a:active, a:hover{
        background: #EEE;
     }
     .active-link{
        background: #EEE;
     }
  `]
  
})
export class NavBarComponent {

}