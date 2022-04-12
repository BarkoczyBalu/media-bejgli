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
      title: "Barna Kenyér",
      details: "Teljes kiőrlésű tönkölybúzalisztből, búzakenyérlisztből és búzakovászból készítjük",
      imgUrl: "/assets/pastries/barna-kenyer.jpg",
      info: {
        calorie: "1350 kJ/320 kcal",
        fat: "5.6 g",
        carbohydrate: "53 g",
        protein: "12 g",
        salt: "1,4 g"
      }
    },
    {
      id: 2,
      title: "Kovászos Kenyér",
      details: "Hagyományos és megbízható kovászos eljárással készítjük kenyereinket",
      imgUrl: "/assets/pastries/kovaszos-kenyer.jpg",
      info: {
        calorie: "1220 kJ/270 kcal",
        fat: "4.5 g",
        carbohydrate: "47 g",
        protein: "12 g",
        salt: "1,2 g"
      }
    },
    {
      id: 3,
      title: "Magvas Kenyér",
      details: "Szezámmaggal, tökmaggal és pirított napraforgómaggal készített kenyerünk",
      imgUrl: "/assets/pastries/magvas-kenyer.jpg",
      info: {
        calorie: "1445 kJ/362 kcal",
        fat: "7.4 g",
        carbohydrate: "68 g",
        protein: "20 g",
        salt: "1,7 g"
      }
    },
    {
      id: 4,
      title: "Szezámmagos Pogácsa",
      details: "Burgonyás pogácsa szezámmaggal bolondítva",
      imgUrl: "/assets/pastries/szezammagos-pogacsa.jpg",
      info: {
        calorie: "1350 kJ/320 kcal",
        fat: "5.6 g",
        carbohydrate: "53 g",
        protein: "12 g",
        salt: "1,4 g"
      }
    },
    {
      id: 5,
      title: "Sajtos Háromszög",
      details: "Három féle sajtot (Chedar, Gouda és Trapista) tartalmazó péksüteményünk",
      imgUrl: "/assets/pastries/sajtos-haromszog.jpg",
      info: {
        calorie: "1350 kJ/320 kcal",
        fat: "5.6 g",
        carbohydrate: "53 g",
        protein: "12 g",
        salt: "1,4 g"
      }
    },
    {
      id: 6,
      title: "Gluténmentes Barna Kenyér",
      details: "Gluténmentes tönkölybúzalisztből, gluténmentes búzakenyérlisztből és búzakovászból készítjük",
      imgUrl: "/assets/pastries/barna-kenyer.jpg",
      info: {
        calorie: "1350 kJ/320 kcal",
        fat: "5.6 g",
        carbohydrate: "53 g",
        protein: "12 g",
        salt: "1,4 g"
      }
    },
    {
      id: 7,
      title: "Gluténmentes Kovászos Kenyér",
      details: "Hagyományos és megbízható kovászos eljárással készítjük kenyereinket",
      imgUrl: "/assets/pastries/kovaszos-kenyer.jpg",
      info: {
        calorie: "1350 kJ/320 kcal",
        fat: "5.6 g",
        carbohydrate: "53 g",
        protein: "12 g",
        salt: "1,4 g"
      }
    },
    {
      id: 8,
      title: "Gluténmentes Szezámmagos Pogácsa",
      details: "Gluténmentes burgonyás pogácsa szezámmaggal bolondítva",
      imgUrl: "/assets/pastries/szezammagos-pogacsa.jpg",
      info: {
        calorie: "1350 kJ/320 kcal",
        fat: "5.6 g",
        carbohydrate: "53 g",
        protein: "12 g",
        salt: "1,4 g"
      }
    },
    {
      id: 9,
      title: "Almás Tekercs",
      details: "Gondosan feltekert, magyar almában gazdag tekercsünk",
      imgUrl: "/assets/pastries/almas-tekercs.jpg",
      info: {
        calorie: "1350 kJ/320 kcal",
        fat: "5.6 g",
        carbohydrate: "53 g",
        protein: "12 g",
        salt: "1,4 g"
      }
    },
    {
      id: 10,
      title: "Csokis Muffin",
      details: "60%-os étcsokival leöntött, Nutellából készült csokis muffinunk",
      imgUrl: "/assets/pastries/csokis-muffin.jpg",
      info: {
        calorie: "1350 kJ/320 kcal",
        fat: "5.6 g",
        carbohydrate: "53 g",
        protein: "12 g",
        salt: "1,4 g"
      }
    },
    {
      id: 11,
      title: "Vaníliás Croissant",
      details: "A franciák kedvence immáron vaníliás puding belsővel",
      imgUrl: "/assets/pastries/vanilias-croissant.jpg",
      info: {
        calorie: "1350 kJ/320 kcal",
        fat: "5.6 g",
        carbohydrate: "53 g",
        protein: "12 g",
        salt: "1,4 g"
      }
    },
    {
      id: 12,
      title: "Cukormentes Almás Tekercs",
      details: "Gondosan feltekert, magyar almában gazdag és cukormentes tekercsünk",
      imgUrl: "/assets/pastries/almas-tekercs.jpg",
      info: {
        calorie: "1350 kJ/320 kcal",
        fat: "5.6 g",
        carbohydrate: "53 g",
        protein: "12 g",
        salt: "1,4 g"
      }
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
