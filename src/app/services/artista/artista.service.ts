import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Artista } from 'src/model/artista';
import { api } from '../api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};


@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  artistas: Artista[] = [];

  constructor(private http: HttpClient) { }

  getArtista(id: number): Observable<Artista> {
    return this.http.get<Artista>(api.artistas + "/" + id);
  }

  getArtistas(): Observable<Artista[]> {
    return this.http.get<Artista[]>(api.artistas);
  }

  createArtista(artista: Artista): Observable<Artista> {
    return this.http.post<Artista>(api.artistas, artista, httpOptions);
  }

  updateArtista(artista: Artista): Observable<Artista> {
    return this.http.put<Artista>(api.artistas + "/" + artista.id, artista, httpOptions);
  }
}
