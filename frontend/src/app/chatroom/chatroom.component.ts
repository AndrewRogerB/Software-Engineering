import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {RoomService} from "../services/room.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  constructor(private authService: AuthService, private roomService: RoomService, private router: Router) {}

  isAuthenticated = false;

  ngOnInit(): void {

    this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    });
  }

}
