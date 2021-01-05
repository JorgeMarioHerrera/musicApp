import { SpotifyService } from 'src/app/servicios/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [],
})
export class ArtistaComponent {

artista: any;
loadingArtist: boolean;
topTracks: any[] = [];

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {

    this.router.params.subscribe((params) => {
      console.log(params['id']);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista(id: string) {
    this.loadingArtist = true;
    this.spotify.getArtista(id).subscribe((data) => {
      console.log(data);
      this.artista = data;
      this.loadingArtist = false;

    });
  }
  getTopTracks(id: string) {
    this.spotify.getTracks(id).subscribe((topTracks: any) => {
      console.log(topTracks);
      this.topTracks = topTracks;
      console.log(this.topTracks);
    });
  }
}
