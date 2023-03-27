import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  URL = 'https://aprai-381823.rj.r.appspot.com/skills/';

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<skills[]>{
    return this.httpClient.get<skills[]>(this.URL+'lista');
  }
  public detail(id:  number): Observable<skills>{
    return this.httpClient.get<skills>(this.URL + `detail/${id}`);
  }
  public save(skills:skills): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', skills);
  }
  public update(id: number, skills: skills): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, skills);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
  }