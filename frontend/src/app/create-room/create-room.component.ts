import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms"
import {MatRadioModule} from '@angular/material/radio';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent {
  roomForm: FormGroup;
}
