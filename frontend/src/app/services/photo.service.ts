import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PhotoData} from "../photo";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhotoById(id: string): Observable<PhotoData> {
    return this.http.get<any>(`http://localhost:8080/photo-service/api/photos/${id}`);
  }
}
