import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public recommendedPastries: Array<Object> = [
    {
      id: 3,
      title: "Magvas Kenyér",
      details: "Szezámmaggal, tökmaggal és pirított napraforgómaggal készített kenyerünk",
      imgUrl: "/assets/pastries/magvas-kenyer.jpg",
    },
    {
      id: 6,
      title: "Gluténmentes Barna Kenyér",
      details: "Gluténmentes tönkölybúzalisztből, gluténmentes búzakenyérlisztből és búzakovászból készítjük",
      imgUrl: "/assets/pastries/barna-kenyer.jpg",
    },
    {
      id: 10,
      title: "Csokis Muffin",
      details: "60%-os étcsokival leöntött, Nutellából készült csokis muffinunk",
      imgUrl: "/assets/pastries/csokis-muffin.jpg",
    },
    {
      id: 12,
      title: "Cukormentes Almás Tekercs",
      details: "Gondosan feltekert, magyar almában gazdag és cukormentes tekercsünk",
      imgUrl: "/assets/pastries/almas-tekercs.jpg",
    },
  ]

  public comments: Array<Object> = [
    {
      id: 1,
      user: "Kiss Dániel",
      text: '"Nagyon kedves volt a kiszolgálás. Máskor is jövök ide!"',
      imgUrl: "/assets/users/user1.jpg",
    },
    {
      id: 2,
      user: "Kecskés Pál",
      text: '"Egy nagyon barátságos környezet és a legjobb ízek társulása egy helyen. Ha van lehetősége az embernek kipróbálni, semmiképp se hagyja ki!"',
      imgUrl: "/assets/users/user2.jpg",
    },
    {
      id: 3,
      user: "Szabó Evelin",
      text: '"Pék süteményekből sajnos nem sok félét tudok megenni a gluténérzékenységem miatt, de a @Media Bejgli pékségben kapható gluténmentes termékeket bármikor szívesen fogyaszthatom."',
      imgUrl: "/assets/users/user3.jpg",
    },
    {
      id: 4,
      user: "Gergely Lajos",
      text: '"Az itteni almás tekercsnél nincs finomabb! Ezt a kislányom is megmondta!"',
      imgUrl: "/assets/users/user4.jpg",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
