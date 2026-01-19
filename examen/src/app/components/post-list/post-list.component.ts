import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }


deletePost(id: number): void {
  if (confirm('¿Seguro que quieres eliminar este post?')) {
    this.postService.deletePost(id).subscribe(() => {
      this.posts$ = this.postService.getPosts(); // Recarga la lista
    });
  }
}
}
