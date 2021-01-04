import { SpotifyService } from 'src/app/servicios/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];

  constructor(private spotify: SpotifyService) { }

  buscar(value: string) {
    console.log(value);
    this.spotify.getArtista(value).subscribe ((data: any) => {
      this.artistas = data;
      console.log(data);
    });
  }

}
