import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: {
    id?: number,
    user?: string,
    text?: string,
    imgUrl?: string,
  } = {
    id:1,
    user: "Kiss Dániel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui illo nobis doloremque porro id modi blanditiis quis nisi eaque.",
    imgUrl: "https://randomuser.me/api/?gender=female",
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
