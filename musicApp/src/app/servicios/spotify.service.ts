import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

   getQuery(query: string) {

    const Url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAxV7i7K7fzk-HGvJTPMwp_hgGLYPQQXOL6ITcSG6i1WIe8M0l85yKiiRe2iQIquczulQey6zkQoi-KZO4'
    });

    return this.http.get(Url,  { headers });

   }

   getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20').pipe( map((data: any) => {
      return data.albums.items;
    }));

    //  const headers = new HttpHeaders({
    //    'Authorization': 'Bearer BQAFrzVs1EzBLDykWVxyGv4I9fOhWaecNqDF6rK9fwR1fCmsF7ifEnIjZv0I4Oczd9ABoluJ7C5n_-AzW74'
    //  });
    //      return this.http.get(this.Url + 'browse/new-releases?limit=20', { headers }).pipe( map((data: any) => {
    //    return data.albums.items;
      // }));
   }

   getArtista( termino: string ) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`).pipe( map((data: any) => data.artists.items));
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQAFrzVs1EzBLDykWVxyGv4I9fOhWaecNqDF6rK9fwR1fCmsF7ifEnIjZv0I4Oczd9ABoluJ7C5n_-AzW74'
    // });
    // return this.http.get(this.Url + `search?q=${ termino }&type=artist&limit=20`, { headers })
    // .pipe( map((data: any) => data.artists.items // cuando una funcion flecha tiene una unica linea se puede abreviar.
    // ));
   }
}
