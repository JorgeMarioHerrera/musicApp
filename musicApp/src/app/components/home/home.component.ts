import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  loading: boolean;
  nuevasCanciones: any[] = [];
  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe(( data: any ) => {
      this.nuevasCanciones = data;
      this.loading = false;
      this.error = false;
    }, (errorServicio) => {
      this.error = true;
      this.loading = false;
      this.mensajeError = errorServicio.error.error.message;
      console.log(errorServicio.error.error.message);
    });
  }
}
