import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-edit',
  standalone: false,
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.css',
})

export class PostEditComponent implements OnInit {
  post: Post = {
    id: 0,
    title: '',
    body: '',
    userId: 0,
  };

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPostById(postId).subscribe((data) => {
      this.post = data; // Carga los datos en el formulario
    });

  }
  updatePost(): void {
    const id = this.post.id!;
    this.postService.updatePost(id, this.post).subscribe(() => {
      this.router.navigate(['/posts']);
    });
  };
}
