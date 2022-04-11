import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public pastries: Array<Object> = [
    {
      id: 1,
      title: "Rozsos Kenyér",
      details: "Kenyereink többek, mint egyszerű kenyerek",
      imgUrl: "https://www.seriouseats.com/thmb/ppIgHWuL0Qtq2Z8OeooRhgVWfX4=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__06__20200419-no-knead-bread-vicky-wasik2-a20f97803cb349e38c2c3fad18f767b5.jpg",
    },
    {
      id: 2,
      title: "Fehér Kenyér",
      details: "Kenyereink többek, mint egyszerű kenyerek",
      imgUrl: "https://www.seriouseats.com/thmb/ppIgHWuL0Qtq2Z8OeooRhgVWfX4=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__06__20200419-no-knead-bread-vicky-wasik2-a20f97803cb349e38c2c3fad18f767b5.jpg",
    },
    {
      id: 3,
      title: "Kovászos Kenyér",
      details: "Kenyereink többek, mint egyszerű kenyerek",
      imgUrl: "https://www.seriouseats.com/thmb/ppIgHWuL0Qtq2Z8OeooRhgVWfX4=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__06__20200419-no-knead-bread-vicky-wasik2-a20f97803cb349e38c2c3fad18f767b5.jpg",
    },
    {
      id: 4,
      title: "Kapros Zsemle",
      details: "A vizes zsemle már a múlté, itt van az új kapros zsemle",
      imgUrl: "https://www.seriouseats.com/thmb/ppIgHWuL0Qtq2Z8OeooRhgVWfX4=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__06__20200419-no-knead-bread-vicky-wasik2-a20f97803cb349e38c2c3fad18f767b5.jpg",
    },
    {
      id: 5,
      title: "Kenyér",
      details: "A vizes zsemle már a múlté, itt van az új kapros zsemle",
      imgUrl: "https://www.seriouseats.com/thmb/ppIgHWuL0Qtq2Z8OeooRhgVWfX4=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__06__20200419-no-knead-bread-vicky-wasik2-a20f97803cb349e38c2c3fad18f767b5.jpg",
    },
    {
      id: 6,
      title: "Kenyér",
      details: "A vizes zsemle már a múlté, itt van az új kapros zsemle",
      imgUrl: "https://www.seriouseats.com/thmb/ppIgHWuL0Qtq2Z8OeooRhgVWfX4=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__06__20200419-no-knead-bread-vicky-wasik2-a20f97803cb349e38c2c3fad18f767b5.jpg",
    },
    {
      id: 7,
      title: "Kenyér",
      details: "Kenyereink többek, mint egyszerű kenyerek",
      imgUrl: "https://www.seriouseats.com/thmb/ppIgHWuL0Qtq2Z8OeooRhgVWfX4=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__06__20200419-no-knead-bread-vicky-wasik2-a20f97803cb349e38c2c3fad18f767b5.jpg",
    },
    {
      id: 8,
      title: "Kenyér",
      details: "Kenyereink többek, mint egyszerű kenyerek",
      imgUrl: "https://www.seriouseats.com/thmb/ppIgHWuL0Qtq2Z8OeooRhgVWfX4=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__06__20200419-no-knead-bread-vicky-wasik2-a20f97803cb349e38c2c3fad18f767b5.jpg",
    },
    {
      id: 9,
      title: "Kenyér",
      details: "Kenyereink többek, mint egyszerű kenyerek",
      imgUrl: "https://www.seriouseats.com/thmb/ppIgHWuL0Qtq2Z8OeooRhgVWfX4=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__06__20200419-no-knead-bread-vicky-wasik2-a20f97803cb349e38c2c3fad18f767b5.jpg",
    },
    {
      id: 10,
      title: "Kenyér",
      details: "Kenyereink többek, mint egyszerű kenyerek",
      imgUrl: "https://www.seriouseats.com/thmb/ppIgHWuL0Qtq2Z8OeooRhgVWfX4=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__06__20200419-no-knead-bread-vicky-wasik2-a20f97803cb349e38c2c3fad18f767b5.jpg",
    },
    {
      id: 11,
      title: "Kenyér",
      details: "Kenyereink többek, mint egyszerű kenyerek",
      imgUrl: "https://www.seriouseats.com/thmb/ppIgHWuL0Qtq2Z8OeooRhgVWfX4=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__06__20200419-no-knead-bread-vicky-wasik2-a20f97803cb349e38c2c3fad18f767b5.jpg",
    },
    {
      id: 12,
      title: "Kenyér",
      details: "Kenyereink többek, mint egyszerű kenyerek",
      imgUrl: "https://www.seriouseats.com/thmb/ppIgHWuL0Qtq2Z8OeooRhgVWfX4=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__06__20200419-no-knead-bread-vicky-wasik2-a20f97803cb349e38c2c3fad18f767b5.jpg",
    },
  ]

  public selectedItem: any = { }

  constructor() { }

  ngOnInit(): void {
  }

  public onSelect(pastry: Object){
    this.selectedItem = pastry;
    
    let dblock = document.getElementById('details-block');
    dblock?.scrollIntoView({behavior:"smooth", block: "center"});
  }

}
