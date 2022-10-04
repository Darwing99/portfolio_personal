import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  windowScrolled: boolean=true;
  constructor(@Inject(DOCUMENT) private document: Document,private router:Router) {}
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      } 
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 100) {
          this.windowScrolled = false;
      }
  }
 
  getComponentBlog(){
    this.router.navigate(['/blog']);
  }
  getComponentHome(){
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
