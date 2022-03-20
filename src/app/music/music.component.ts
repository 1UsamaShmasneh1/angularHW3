import { Component, OnInit } from '@angular/core';
import type { Singer } from './interface';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.fillUl();
  }

  fillUl(){
    let ul = document.getElementById('ul');
    for (const iterator of this.singer.songs) {
      let li = document.createElement('li');
      li.appendChild(document.createTextNode(iterator));
      ul?.appendChild(li);
    }
  }

  getInfo(){return this.singer.info}

  singer: Singer = {
    firstname: "Eyal",
    lastname: "Golan",
    age: 50,
    songs: ["סוף של כל סיפור", "דופק עם תעודות", "באו גדול", "כשאת איתו"],
    img: "https://upload.wikimedia.org/wikipedia/commons/2/20/Eyal_Golan_in_2015_%28cropped%29.jpg",
    info: "some information"    
  }

}
