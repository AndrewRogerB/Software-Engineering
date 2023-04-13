import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import {map, Observable, throwError} from "rxjs";
import {catchError, first, tap} from "rxjs/operators";

import { Room } from "../models/Room";
import { User } from "../models/User";
import { ErrorHandlerService } from "./error-handler.service";
import { Request, Response } from 'express';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class RoomService {
  private url = "http://localhost:3000/room";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

  fetchAll(): Observable<Room[]> {
    return this.http
      .get<Room[]>(this.url, { responseType: "json" })
      .pipe(
        map(response => Array.isArray(response) ? response : [response]), // wrap single object in array
        catchError(this.errorHandlerService.handleError<Room[]>("fetchAll", []))
      );
  }


  createPost(
    formData: Partial<Room>,
    userName: Pick<User, "name">
  ): Observable<Room> {
    return this.http
      .post<Room>(
        this.url,
        { topic: formData.topic, creator: userName, stance: formData.stance, timeO: formData.timeO},
        this.httpOptions
      )
      .pipe(
        catchError((error: any, caught: Observable<Room>) => {
          console.log(error);
          return throwError(error);
        })

      );
  }


  deletePost(postId: Pick<Room, "id">): Observable<{}> {
    return this.http
      .delete<Room>(`${this.url}/${postId}`, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<Room>("deletePost"))
      );
  }
}
