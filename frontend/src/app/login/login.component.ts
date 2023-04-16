import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin, MotionPathPlugin);

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  leftEyeOrigin: SVGPathElement | null = null;
  rightEyeOrigin: SVGPathElement | null = null;
  @ViewChild('leftEye', { static: false }) leftEye!: ElementRef;
  @ViewChild('rightEye', { static: false }) rightEye!: ElementRef;
  // Add the following properties to your LoginComponent class
  emailLabel: HTMLElement;
  email: HTMLElement;
  passwordLabel: HTMLElement;
  password: HTMLElement;
  showPasswordCheck: HTMLElement;
  showPasswordToggle: HTMLElement;
  mySVG: HTMLElement;
  twoFingers: HTMLElement;
  armL: HTMLElement;
  armR: HTMLElement;
  eyeL: HTMLElement;
  eyeR: HTMLElement;
  nose: HTMLElement;
  mouth: HTMLElement;
  mouthBG: HTMLElement;
  mouthSmallBG: HTMLElement;
  mouthMediumBG: HTMLElement;
  mouthLargeBG: HTMLElement;
  mouthMaskPath: HTMLElement;
  mouthOutline: HTMLElement;
  tooth: HTMLElement;
  tongue: HTMLElement;
  chin: HTMLElement;
  face: HTMLElement;
  eyebrow: HTMLElement;
  outerEarL: HTMLElement;
  outerEarR: HTMLElement;
  earHairL: HTMLElement;
  earHairR: HTMLElement;
  hair: HTMLElement;
  bodyBG: HTMLElement;
  bodyBGchanged: HTMLElement;

  activeElement: any;
  curEmailIndex: any;
  screenCenter: any;
  svgCoords: any;
  emailCoords: any;
  emailScrollMax: any;
  chinMin = 0.5;
  dFromC: any;
  mouthStatus = 'small';
  blinking: any;
  eyeScale = 1;
  eyesCovered = false;
  showPasswordClicked = false;

  eyeLCoords: any;
  eyeRCoords: any;
  noseCoords: any;
  mouthCoords: any;
  eyeLAngle: any;
  eyeLX: any;
  eyeLY: any;
  eyeRAngle: any;
  eyeRX: any;
  eyeRY: any;
  noseAngle: any;
  noseX: any;
  noseY: any;
  mouthAngle: any;
  mouthX: any;
  mouthY: any;
  mouthR: any;
  chinX: any;
  chinY: any;
  chinS: any;
  faceX: any;
  faceY: any;
  faceSkew: any;
  eyebrowSkew: any;
  outerEarX: any;
  outerEarY: any;
  hairX: any;
  hairS: any;


  constructor() {}

  ngAfterViewInit(): void {
    this.initLoginAnimation();
  }

  initLoginAnimation() {
    this.emailLabel = document.querySelector('#loginEmailLabel');
    this.email = document.querySelector('#loginEmail');
    this.passwordLabel = document.querySelector('#loginPasswordLabel');
    this.password = document.querySelector('#loginPassword');
    onUserNameFocus = (e: Event) => {
      // Add the code from login.component.js here
    };

    onUserNameBlur = (e: Event) => {
      // Add the code from login.component.js here
    };

    onPasswordFocus = (e: Event) => {
      // Add the code from login.component.js here
    };

    onPasswordBlur = (e: Event) => {
      // Add the code from login.component.js here
    };

    onPasswordToggleChange = (e: Event) => {
      // Add the code from login.component.js here
    };

    onPasswordToggleClick = (e: Event) => {
      // Add the code from login.component.js here
    };

    spreadFingers() {
      // Add the code from login.component.js here
    }

    closeFingers() {
      // Add the code from login.component.js here
    }

    setEyePosition = (target: HTMLElement, eye: any, origin: any) => {
      // Add the code from login.component.js here
    };
  }

  // Add the updated methods from login.component.js
}
