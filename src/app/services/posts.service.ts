import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  url : string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { 

  }

  getPosts(): Observable<Post[]>
  {
      return this.http.get<Post[]>(this.url + '/posts');    
  }

  getComments() : Observable<Comment[]>
  {
      return this.http.get<Comment[]>(this.url+ '/comments');
  }

}
