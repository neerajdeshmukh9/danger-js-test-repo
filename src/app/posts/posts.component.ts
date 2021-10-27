import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostsService) { }

  ngOnInit(): void {

    this.getPosts();

  }

  getPosts()
  {
    this.postService.getPosts().subscribe((data) => {

      this.posts=data;  

    });
  }  

}
