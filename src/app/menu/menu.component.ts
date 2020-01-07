import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public prueba() {
      $(window).scroll( function() {
        const winTop = $(window).scrollTop();
        if (winTop >= 30) {
          $('body').addClass('sticky-header');
        } else {
          $('body').removeClass('sticky-header');
        }
      });
  }
  constructor() { }

  ngOnInit() {
  }

}
