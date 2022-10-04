import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from 'src/app/services/blog-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles:any=[];

  constructor(private blog:BlogServiceService) { }

  ngOnInit(): void {
    this.getArticle();
  }
  getArticle(){
 
   
    this.blog.getBlog().subscribe((data:any)=>{
    
  
    this.articles=data;
    console.log(this.articles);
    
  });
  

}

}
