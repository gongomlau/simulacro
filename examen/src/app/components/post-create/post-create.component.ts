import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-create',
  standalone: false,
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css',
})
export class PostCreateComponent {
  post: Post = {
    id: 0,
    title: '',
    body: '',
    userId: 0,
  };

  constructor(private postService: PostService, private router: Router) {}

  createPost(): void {
    this.postService.createPost(this.post).subscribe(() => {
      this.router.navigate(['/posts']);
    });
  }
}
