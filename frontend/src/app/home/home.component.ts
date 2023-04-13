import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import { RoomService } from "../services/room.service";
import { AsyncPipe } from '@angular/common';


import { Room } from "src/app/models/Room";
import { User } from "src/app/models/User";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  isAuthenticated = false;
  rooms$: Observable<Room[]>;
  userId: Pick<User, "id">;
  creatorName: String;

  constructor(private authService: AuthService, private router: Router, private RoomService: RoomService) {}

  ngOnInit(): void {
    this.rooms$ = this.fetchAll();
    this.userId = this.authService.userId;
    this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    });
  }


  fetchAll(): Observable<Room[]> {
    return this.RoomService.fetchAll();
  }

  delete(roomId: Pick<Room, "id">): void {
    this.RoomService
      .deletePost(roomId)
      .subscribe(() => (this.rooms$ = this.fetchAll()));
  }


}
