import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss']
})
export class BoardAdminComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  blogs = [];

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  
  removeBlog(blog) {
	let i = this.blogs.indexOf(blog);
	this.blogs.splice(i, 1);
	localStorage.setItem("blogs", JSON.stringify(this.blogs));
}

  
}