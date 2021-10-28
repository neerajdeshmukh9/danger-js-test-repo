import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent{

  comments: Comment[] = [];
  flag : boolean = true;

  constructor(private postService: PostsService) {

    this.flag = false;

  }

  // ngOnInit(): void {

  //   this.getComments();

  // }

  // getComments()
  // {
  //   this.postService.getComments().subscribe((data)=>{
  //       this.comments=data;
  //  });

  // }

  onClick() {
      this.flag = !this.flag;
  }


}
