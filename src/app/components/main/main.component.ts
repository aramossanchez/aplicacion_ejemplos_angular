import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  message = '<main>';

  imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Procyon_lotor_%28Common_raccoon%29.jpg/1200px-Procyon_lotor_%28Common_raccoon%29.jpg';

  colors = ['red', 'blue', 'green', 'yellow'];
  
  constructor() { }

  ngOnInit(): void {
  }

  changeImageKoala() {
    this.imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Koala_climbing_tree.jpg/640px-Koala_climbing_tree.jpg";
  }

  changeImageMapache() {
    this.imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Procyon_lotor_%28Common_raccoon%29.jpg/1200px-Procyon_lotor_%28Common_raccoon%29.jpg";
  }

  handleMessage(event:any) {
    this.message = event.target.value;
  }

  alertMessage(e:any) {
    alert(e);
  }

}
