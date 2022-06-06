import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  text = '<main>';
  imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Procyon_lotor_%28Common_raccoon%29.jpg/1200px-Procyon_lotor_%28Common_raccoon%29.jpg';
  constructor() { }

  ngOnInit(): void {
  }

  changeImageKoala() {
    this.imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Koala_climbing_tree.jpg/640px-Koala_climbing_tree.jpg";
  }

  changeImageMapache() {
    this.imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Procyon_lotor_%28Common_raccoon%29.jpg/1200px-Procyon_lotor_%28Common_raccoon%29.jpg";
  }

  test(prueba: any) {
    console.log(prueba);
  }

}
