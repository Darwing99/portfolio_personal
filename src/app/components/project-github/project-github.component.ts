import { Component, OnInit } from '@angular/core';
import {GithubProjectsService} from 'src/app/services/github-projects.service';
import {Project} from 'src/app/models/Project';
@Component({
  selector: 'app-project-github',
  templateUrl: './project-github.component.html',
  styleUrls: ['./project-github.component.css']
})
export class ProjectGithubComponent implements OnInit {
  
  project_list?:any;

  constructor(private projects:GithubProjectsService) {
    this.project_list=new Project();
   }

  ngOnInit(): void {
    this.getProject();
  }
  getProject(){
 
   
    this.projects.getProject().subscribe((data:Project)=>{
    
  
    this.project_list=data;
    
  });
  

}
}
