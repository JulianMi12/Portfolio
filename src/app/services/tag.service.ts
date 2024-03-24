import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Tag } from '../entity/tag';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getTag(lan: string, tag:string): Observable<string> {
    return this.http.get<any>(`${this.apiServerUrl}/tag/findTag?lan=${lan}&tag=${tag}`).pipe(
      map((response: any) => {
        return response.map((tagData: string) => {
          return tagData;
        });
      })
    );
  }

  public getTags(): Observable<Tag[]> {
    return this.http.get<any[]>(`${this.apiServerUrl}/tag/all`).pipe(
      map((response: any[]) => {
        return response.map(tagData => {
          const tagN: Tag = {
            id: tagData.id,
            tag: tagData.tag,
            en: tagData.en,
            es: tagData.es
          };
          return tagN;
        });
      })
    );
  }
}
