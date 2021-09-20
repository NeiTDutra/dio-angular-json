import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getPosts() {

    return this.http.get('http://localhost:7070/posts')
  }

  postPosts(post: Post) {

    return this.http.post('http://localhost:7070/posts', post)
  }
}
