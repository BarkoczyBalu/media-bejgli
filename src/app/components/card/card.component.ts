import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() pastry: {
    id?: number,
    title?: string,
    details?: string,
    imgUrl?: string,
  } = {
    id: 1,
    title: "Kenyér",
    details: "Kenyereink többek, mint egyszerű kenyerek",
    imgUrl: "https://www.seriouseats.com/thmb/ppIgHWuL0Qtq2Z8OeooRhgVWfX4=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__06__20200419-no-knead-bread-vicky-wasik2-a20f97803cb349e38c2c3fad18f767b5.jpg",
  };


  constructor() { }

  ngOnInit(): void {
  }

}
