import { Component, OnInit } from '@angular/core';
import { WpRestApiService } from 'src/app/wp-rest-api.service';

@Component({
  selector: 'app-wp-blog',
  templateUrl: './wp-blog.component.html',
  styleUrls: ['./wp-blog.component.css']
})
export class WpBlogComponent implements OnInit {
  blogData;
  constructor(private wpRestApiService: WpRestApiService) { }

  ngOnInit(): void {
    this.getAllBlog();
  }
  getAllBlog() {
    this.wpRestApiService.getBlog().subscribe(response => {
      console.log(response);
      this.blogData = response;
    });
  }
  page = 1;
  next() {
      this.wpRestApiService.nextUser(this.page += 1).subscribe(data => {
        console.log(data);
        if (data) {
          this.blogData = data;
        }
      });
  }
  previous() {
      if (this.page > 1) {
        this.wpRestApiService.previousUser(this.page -= 1).subscribe(data => {
          console.log(data);
          if (data) {
            this.blogData = data;
          }
        });
      }
  }
}

