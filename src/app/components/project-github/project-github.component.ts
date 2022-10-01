import { Component, OnInit } from '@angular/core';
import {GithubProjectsService} from 'src/app/services/github-projects.service';

@Component({
  selector: 'app-project-github',
  templateUrl: './project-github.component.html',
  styleUrls: ['./project-github.component.css']
})
export class ProjectGithubComponent implements OnInit {
  project_list:any=[];

  constructor(private projects:GithubProjectsService) { }

  ngOnInit(): void {
    this.getProject();
  }
  getProject(){
 
   
    this.projects.getProject().subscribe((data:any)=>{
    
  
    this.project_list=data;
    
  });
  

}
}
