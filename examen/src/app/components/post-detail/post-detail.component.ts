import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  standalone: false,
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
})

export class PostDetailComponent implements OnInit {

  post$!: Observable<Post>;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.post$ = this.postService.getPostById(postId);
  }
}
