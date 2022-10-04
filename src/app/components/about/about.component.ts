import { Component, OnInit } from '@angular/core';
import { GithubProjectsService } from 'src/app/services/github-projects.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  userdata?: any = [];
  constructor(private user: GithubProjectsService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.user.getUser().subscribe((data: any) => {

      this.userdata = data;
    });

}
}
