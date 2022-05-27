import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { PostData } from './postdata.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  fetchedPosts: PostData[] = [];
  constructor(private http: HttpClient) {}
  firebaseUrl =
    'https://blog-app-e6bdb-default-rtdb.firebaseio.com/posts.json';

  ngOnInit(): void {
    this.fetchPosts();
  }

  createPost(postData: { title: string; content: string }) {
    console.log(postData);
    this.http.post(this.firebaseUrl, postData).subscribe((responseData) => {
      console.log(responseData);
    });
  }

  onFetchPosts(){
    this.fetchPosts();
  }

  onDeletePosts(){
    this.http.delete(this.firebaseUrl).subscribe((response) =>{
      console.log("Posts cleared");
      this.fetchedPosts = [];
    });
  }

  fetchPosts(){
    this.http.get(this.firebaseUrl)
    .pipe(map((responseData) => {
      const postsArray : PostData[] = [];
      for(const key in responseData) {
        postsArray.push({...responseData[key], id:key})
      }
      return postsArray;
    }))
    .subscribe((posts) => {
      this.fetchedPosts = posts;
    });
  }
}