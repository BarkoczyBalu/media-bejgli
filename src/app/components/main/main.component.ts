import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public comments: Array<Object> = [
    {
      id: 1,
      user: "Kiss Dániel",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui illo nobis doloremque porro id modi blanditiis quis nisi eaque.",
      imgUrl: "https://placebear.com/150/150",
    },
    {
      id: 2,
      user: "Kecskés Pál",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui illo nobis doloremque porro id modi blanditiis quis nisi eaque.Totam qui illo nobis doloremque porro id modi blanditiis quis nisi eaque.Totam qui illo nobis doloremque porro id modi blanditiis quis nisi eaque.Totam qui illo nobis doloremque porro id modi blanditiis quis nisi eaque.",
      imgUrl: "https://placebear.com/150/150",
    },
    {
      id: 3,
      user: "Szabó Evelin",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui illo nobis doloremque porro id modi blanditiis quis nisi eaque.",
      imgUrl: "https://placebear.com/150/150",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
