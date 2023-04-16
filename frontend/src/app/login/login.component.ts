import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {gsap, Power2} from 'gsap';
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
  emailLabel!: HTMLElement;
  email!: HTMLElement;
  passwordLabel!: HTMLElement;
  password!: HTMLElement;
  showPasswordCheck!: HTMLElement;
  showPasswordToggle!: HTMLElement;
  mySVG!: HTMLElement;
  twoFingers!: HTMLElement;
  armL!: HTMLElement;
  armR!: HTMLElement;
  eyeL!: HTMLElement;
  eyeR!: HTMLElement;
  nose!: HTMLElement;
  mouth!: HTMLElement;
  mouthBG!: HTMLElement;
  mouthSmallBG!: HTMLElement;
  mouthMediumBG!: HTMLElement;
  mouthLargeBG!: HTMLElement;
  mouthMaskPath!: HTMLElement;
  mouthOutline!: HTMLElement;
  tooth!: HTMLElement;
  tongue!: HTMLElement;
  chin!: HTMLElement;
  face!: HTMLElement;
  eyebrow!: HTMLElement;
  outerEarL!: HTMLElement;
  outerEarR!: HTMLElement;
  earHairL!: HTMLElement;
  earHairR!: HTMLElement;
  hair!: HTMLElement;
  bodyBG!: HTMLElement;
  bodyBGchanged!: HTMLElement;

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
    this.emailLabel = document.querySelector('#loginEmailLabel')!;
    this.email = document.querySelector('#loginEmail')!;
    this.passwordLabel = document.querySelector('#loginPasswordLabel')!;
    this.password = document.querySelector('#loginPassword')!;

  }
  onEmailInput = (e: Event) => {
    // Add the code from login.component.js here
  }

  onEmailFocus = (e: Event) => {
    // Add the code from login.component.js here
  };

  onEmailBlur = (e: Event) => {
    // Add the code from login.component.js here
  };

  onEmailLabelClick = (e: Event) => {
    // Add the code from login.component.js here
  }

  onPasswordFocus = (e: Event) => {
    // Add the code from login.component.js here
  };

  onPasswordBlur = (e: Event) => {
    // Add the code from login.component.js here
  };

  onPasswordToggleFocus = (e: Event) => {
    // Add the code from login.component.js here
  };

  onPasswordToggleBlur = (e: Event) => {
    // Add the code from login.component.js here
  };

  onPasswordToggleMouseDown = (e: Event) => {
    // Add the code from login.component.js here
  }

  onPasswordToggleMouseUp = (e: Event) => {
    // Add the code from login.component.js here
  }

  onPasswordToggleChange = (e: Event) => {
    // Add the code from login.component.js here
  }

  onPasswordToggleClick = (e: Event) => {
    // Add the code from login.component.js here
  }



  spreadFingers() {
    // Add the code from login.component.js here
  }

  closeFingers() {
    // Add the code from login.component.js here
  }

  coverEyes() {
    // Add the code from login.component.js here
  }

  uncoverEyes() {
    // Add the code from login.component.js here
  }

  resetFace() {
    // Add the code from login.component.js here
  }

  startBlinking(delay: number) {
    // Add the code from login.component.js here
  }

  stopBlinking() {
    // Add the code from login.component.js here
  }

  getRandomInt(max: number) {
    // Add the code from login.component.js here
  }

  getAngle(x1: number, y1: number, x2: number, y2: number) {
    // Add the code from login.component.js here
  }

  getPosition(el: HTMLElement) {
    // Add the code from login.component.js here
  }

  // isMobileDevice() {
  //   let check = false;
  //   (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  //   return check;
  // }

  initLoginForm() {
    this.svgCoords = this.getPosition(this.mySVG);
    this.emailCoords = this.getPosition(this.email);
    this.screenCenter = this.svgCoords.x + (this.mySVG.offsetWidth / 2);
    this.eyeLCoords = {x: this.svgCoords.x + 84, y: this.svgCoords.y + 76};
    this.eyeRCoords = {x: this.svgCoords.x + 113, y: this.svgCoords.y + 76};
    this.noseCoords = {x: this.svgCoords.x + 97, y: this.svgCoords.y + 81};
    this.mouthCoords = {x: this.svgCoords.x + 100, y: this.svgCoords.y + 100};

    // handle events for email input
    this.email.addEventListener('focus', this.onEmailFocus);
    this.email.addEventListener('blur', this.onEmailBlur);
    this.email.addEventListener('input', this.onEmailInput);
    this.emailLabel.addEventListener('click', this.onEmailLabelClick);

    // handle events for password input
    this.password.addEventListener('focus', this.onPasswordFocus);
    this.password.addEventListener('blur', this.onPasswordBlur);
    //passwordLabel.addEventListener('click', onPasswordLabelClick);

    // handle events for password checkbox
    this.showPasswordCheck.addEventListener('change', this.onPasswordToggleChange);
    this.showPasswordCheck.addEventListener('focus', this.onPasswordToggleFocus);
    this.showPasswordCheck.addEventListener('blur', this.onPasswordToggleBlur);
    this.showPasswordCheck.addEventListener('click', this.onPasswordToggleClick);
    this.showPasswordToggle.addEventListener('mouseup', this.onPasswordToggleMouseUp);
    this.showPasswordToggle.addEventListener('mousedown', this.onPasswordToggleMouseDown);

    // move arms to initial positions
    TweenMax.set(this.armL, {x: -93, y: 220, rotation: 105, transformOrigin: "top left"});
    TweenMax.set(this.armR, {x: -93, y: 220, rotation: -105, transformOrigin: "top right"});

    // set initial mouth property (fixes positioning bug)
    TweenMax.set(this.mouth, {transformOrigin: "center center"});

    // activate blinking
    this.startBlinking(5);

    // determine how far email input can go before scrolling occurs
    // will be used as the furthest point avatar will look to the right
    this.emailScrollMax = this.email.scrollWidth;

    // check if we're on mobile/tablet, if so then show password initially
    // if (this.isMobileDevice()) {
    //   this.password.type = "text";
    //   this.showPasswordCheck.checked = true;
    //   TweenMax.set(this.twoFingers, {transformOrigin: "bottom left", rotation: 30, x: -9, y: -2, ease: Power2.easeInOut});
    // }
  }


  // Add the updated methods from login.component.js
}
