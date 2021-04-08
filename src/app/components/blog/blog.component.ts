import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {

  constructor() { }

  blogs = [];

  ngOnInit(): void {
		
	}

  ngOnDestroy(): void {

   }

	addBlog(title, content) {
		let blog = { "title": title.value, "content": content.value };
		if (localStorage.getItem("blogs")) {
			this.blogs = JSON.parse(localStorage.getItem("blogs"));
		}
		this.blogs.push(blog);
		localStorage.setItem("blogs", JSON.stringify(this.blogs));
		title.value = "";
		content.value = "";
	}
}
