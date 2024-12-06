import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UxNode {
  name: string;
  children?: UxNode[];
}

@Injectable({
  providedIn: 'root',
})
export class UxDiagramService {
  private apiUrl = 'http://localhost:5000/api/ux-diagram'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  fetchUxDiagram(): Observable<UxNode> {
    return this.http.post<UxNode>(this.apiUrl, {});
  }
}
