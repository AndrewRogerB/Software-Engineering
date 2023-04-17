import {AfterViewInit, Component} from '@angular/core';
import {Expo, gsap, Power2, Quad} from 'gsap';
import {MorphSVGPlugin} from 'gsap/MorphSVGPlugin';
import {DrawSVGPlugin} from 'gsap/DrawSVGPlugin';
import {MotionPathPlugin} from 'gsap/MotionPathPlugin';

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
  password!: HTMLInputElement;
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
  activeElement: string | null = null;
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
    this.initLoginForm();

  }

  calculateFaceMove = (e: Event) => {
    let carPos = (this.email as HTMLInputElement).selectionEnd,
      div = document.createElement('div'),
      span = document.createElement('span'),
      copyStyle = getComputedStyle(this.email),
      caretCoords: { x: number; y: number; };

    if (carPos === null || carPos === 0) {
      carPos = (this.email as HTMLInputElement).value.length;
    }

    [].forEach.call(copyStyle, (prop: string) => {
      (div.style as any)[prop] = (copyStyle as any)[prop];
    });

    div.style.position = 'absolute';
    document.body.appendChild(div);
    div.textContent = (this.email as HTMLInputElement).value.substr(0, carPos);
    span.textContent = (this.email as HTMLInputElement).value.substr(carPos) || '.';
    div.appendChild(span);

    if(this.email.scrollWidth <= this.emailScrollMax) {
      caretCoords = this.getPosition(span);
      this.dFromC = this.screenCenter - (caretCoords.x + this.emailCoords.x);
      this.eyeLAngle = this.getAngle(this.eyeLCoords.x, this.eyeLCoords.y, this.emailCoords.x + caretCoords.x, this.emailCoords.y + 25);
      this.eyeRAngle = this.getAngle(this.eyeRCoords.x, this.eyeRCoords.y, this.emailCoords.x + caretCoords.x, this.emailCoords.y + 25);
      this.noseAngle = this.getAngle(this.noseCoords.x, this.noseCoords.y, this.emailCoords.x + caretCoords.x, this.emailCoords.y + 25);
      this.mouthAngle = this.getAngle(this.mouthCoords.x, this.mouthCoords.y, this.emailCoords.x + caretCoords.x, this.emailCoords.y + 25);
    } else {
      this.eyeLAngle = this.getAngle(this.eyeLCoords.x, this.eyeLCoords.y, this.emailCoords.x + this.emailScrollMax, this.emailCoords.y + 25);
      this.eyeRAngle = this.getAngle(this.eyeRCoords.x, this.eyeRCoords.y, this.emailCoords.x + this.emailScrollMax, this.emailCoords.y + 25);
      this.noseAngle = this.getAngle(this.noseCoords.x, this.noseCoords.y, this.emailCoords.x + this.emailScrollMax, this.emailCoords.y + 25);
      this.mouthAngle = this.getAngle(this.mouthCoords.x, this.mouthCoords.y, this.emailCoords.x + this.emailScrollMax, this.emailCoords.y + 25);
    }

    this.eyeLX = Math.cos(this.eyeLAngle) * 20;
    this.eyeLY = Math.sin(this.eyeLAngle) * 10;
    this.eyeRX = Math.cos(this.eyeRAngle) * 20;
    this.eyeRY = Math.sin(this.eyeRAngle) * 10;
    this.noseX = Math.cos(this.noseAngle) * 23;
    this.noseY = Math.sin(this.noseAngle) * 10;
    this.mouthX = Math.cos(this.mouthAngle) * 23;
    this.mouthY = Math.sin(this.mouthAngle) * 10;
    this.mouthR = Math.cos(this.mouthAngle) * 6;
    this.chinX = this.mouthX * .8;
    this.chinY = this.mouthY * .5;
    this.chinS = 1 - ((this.dFromC * .15) / 100);
    if(this.chinS > 1) {
      this.chinS = 1 - (this.chinS - 1);
      if(this.chinS < this.chinMin) {
        this.chinS = this.chinMin;
      }
    }
    this.faceX = this.mouthX * .3;
    this.faceY = this.mouthY * .4;
    this.faceSkew = Math.cos(this.mouthAngle) * 5;
    this.eyebrowSkew = Math.cos(this.mouthAngle) * 25;
    this.outerEarX = Math.cos(this.mouthAngle) * 4;
    this.outerEarY = Math.cos(this.mouthAngle) * 5;
    this.hairX = Math.cos(this.mouthAngle) * 6;
    this.hairS = 1.2;

    gsap.to(this.eyeL, 1, {x: -this.eyeLX , y: -this.eyeLY, ease: Expo.easeOut});
    gsap.to(this.eyeR, 1, {x: -this.eyeRX , y: -this.eyeRY, ease: Expo.easeOut});
    gsap.to(this.nose, 1, {x: -this.noseX, y: -this.noseY, rotation: this.mouthR, transformOrigin: "center center", ease: Expo.easeOut});
    gsap.to(this.mouth, 1, {x: -this.mouthX , y: -this.mouthY, rotation: this.mouthR, transformOrigin: "center center", ease: Expo.easeOut});
    gsap.to(this.chin, 1, {x: -this.chinX, y: -this.chinY, scaleY: this.chinS, ease: Expo.easeOut});
    gsap.to(this.face, 1, {x: -this.faceX, y: -this.faceY, skewX: -this.faceSkew, transformOrigin: "center top", ease: Expo.easeOut});
    gsap.to(this.eyebrow, 1, {x: -this.faceX, y: -this.faceY, skewX: -this.eyebrowSkew, transformOrigin: "center top", ease: Expo.easeOut});
    gsap.to(this.outerEarL, 1, {x: this.outerEarX, y: -this.outerEarY, ease: Expo.easeOut});
    gsap.to(this.outerEarR, 1, {x: this.outerEarX, y: this.outerEarY, ease: Expo.easeOut});
    gsap.to(this.earHairL, 1, {x: -this.outerEarX, y: -this.outerEarY, ease: Expo.easeOut});
    gsap.to(this.earHairR, 1, {x: -this.outerEarX, y: this.outerEarY, ease: Expo.easeOut});
    gsap.to(this.hair, 1, {x: this.hairX, scaleY: this.hairS, transformOrigin: "center bottom", ease: Expo.easeOut});

    document.body.removeChild(div);
  };

  onEmailInput = (e: Event) => {
    this.calculateFaceMove(e);
    let value = (this.email as HTMLInputElement).value;
    this.curEmailIndex = value.length;

    // very crude email validation to trigger effects
    if(this.curEmailIndex > 0) {
      if(this.mouthStatus === "small") {
        this.mouthStatus = "medium";
        gsap.to([this.mouthBG, this.mouthOutline, this.mouthMaskPath], 1, {morphSVG: this.mouthMediumBG as any, shapeIndex: 8, ease: Expo.easeOut});
        gsap.to(this.tooth, 1, {x: 0, y: 0, ease: Expo.easeOut});
        gsap.to(this.tongue, 1, {x: 0, y: 1, ease: Expo.easeOut});
        gsap.to([this.eyeL, this.eyeR], 1, {scaleX: .85, scaleY: .85, ease: Expo.easeOut});
        this.eyeScale = .85;
      }
      if(value.includes("@")) {
        this.mouthStatus = "large";
        gsap.to([this.mouthBG, this.mouthOutline, this.mouthMaskPath], 1, {morphSVG: this.mouthLargeBG as any, ease: Expo.easeOut});
        gsap.to(this.tooth, 1, {x: 3, y: -2, ease: Expo.easeOut});
        gsap.to(this.tongue, 1, {y: 2, ease: Expo.easeOut});
        gsap.to([this.eyeL, this.eyeR], 1, {scaleX: .65, scaleY: .65, ease: Expo.easeOut, transformOrigin: "center center"});
        this.eyeScale = .65;
      } else {
        this.mouthStatus = "medium";
        gsap.to([this.mouthBG, this.mouthOutline, this.mouthMaskPath], 1, {morphSVG:this.mouthMediumBG as any, ease: Expo.easeOut});
        gsap.to(this.tooth, 1, {x: 0, y: 0, ease: Expo.easeOut});
        gsap.to(this.tongue, 1, {x: 0, y: 1, ease: Expo.easeOut});
        gsap.to([this.eyeL, this.eyeR], 1, {scaleX: .85, scaleY: .85, ease: Expo.easeOut});
        this.eyeScale = .85;
      }
    } else {
      this.mouthStatus = "small";
      gsap.to([this.mouthBG, this.mouthOutline, this.mouthMaskPath], 1, {morphSVG: this.mouthSmallBG as any, shapeIndex: 9, ease: Expo.easeOut});
      gsap.to(this.tooth, 1, {x: 0, y: 0, ease: Expo.easeOut});
      gsap.to(this.tongue, 1, {y: 0, ease: Expo.easeOut});
      gsap.to([this.eyeL, this.eyeR], 1, {scaleX: 1, scaleY: 1, ease: Expo.easeOut});
      this.eyeScale = 1;
    }
  }

  onEmailFocus = (e: Event) => {
    this.activeElement = "email";
    const target = e.target as HTMLElement;
    const parentElement = target.parentElement;
    if (parentElement) {
      parentElement.classList.add("focusWithText");
    }
    this.onEmailInput(e);
  };

  onEmailBlur = (e: Event) => {
    this.activeElement = null;
    setTimeout(() => {
      if (this.activeElement === "email") {
      } else {
        const target = e.target as HTMLInputElement;
        const parentElement = target.parentElement;
        if (target.value === "" && parentElement) {
          parentElement.classList.remove("focusWithText");
        }
        // startBlinking();
        this.resetFace();
      }
    }, 100);
  };

  onEmailLabelClick = (e: Event) => {
    this.activeElement = "email";
  }

  onPasswordFocus = (e: Event) => {
    this.activeElement = "password";
    if(!this.eyesCovered) {
      this.coverEyes();
    }
  };

  onPasswordBlur = (e: Event) => {
    this.activeElement = null;
    setTimeout(() => {
      if (this.activeElement === "toggle" || this.activeElement === "password") {
      } else {
        this.uncoverEyes();
      }
    }, 100);
  };

  onPasswordToggleFocus = (e: Event) => {
    this.activeElement = "toggle";
    if(!this.eyesCovered) {
      this.coverEyes();
    }
  };

  onPasswordToggleBlur = (e: Event) => {
    this.activeElement = null;
    if (!this.showPasswordClicked) {
      setTimeout(() => {
        if (this.activeElement === "password" || this.activeElement === "toggle") {
        } else {
          this.uncoverEyes();
        }
      }, 100);
    }
  };

  onPasswordToggleMouseDown = (e: Event) => {
    this.showPasswordClicked = true;
  }

  onPasswordToggleMouseUp = (e: Event) => {
    this.showPasswordClicked = false;
  }

  onPasswordToggleChange = (e: Event) => {
    setTimeout(() => {
      // if checkbox is checked, show password
      if ((e.target as HTMLInputElement).checked) {
        this.password.type = "text";
        this.spreadFingers();

        // if checkbox is off, hide password
      } else {
        this.password.type = "password";
        this.closeFingers();
      }
    }, 100);
  };

  onPasswordToggleClick = (e: Event) => {
    //console.log("click: " + e.target.id);
    (e.target as HTMLInputElement).focus();
  }

  spreadFingers() {
    gsap.to(this.twoFingers, .35, {transformOrigin: "bottom left", rotation: 30, x: -9, y: -2, ease: Power2.easeInOut});
  }

  closeFingers() {
    gsap.to(this.twoFingers, .35, {transformOrigin: "bottom left", rotation: 0, x: 0, y: 0, ease: Power2.easeInOut});
  }

  coverEyes() {
    gsap.killTweensOf([this.armL, this.armR]);
    gsap.set([this.armL, this.armR], { visibility: "visible" });
    gsap.to(this.armL, 0.45, { x: -93, y: 10, rotation: 0, ease: Quad.easeOut });
    gsap.to(this.armR, 0.45, { x: -93, y: 10, rotation: 0, ease: Quad.easeOut, delay: 0.1 });
    gsap.to(this.bodyBG, 0.45, { morphSVG: this.bodyBGchanged as any, ease: Quad.easeOut });
    this.eyesCovered = true;
  }

  uncoverEyes() {
    gsap.killTweensOf([this.armL, this.armR]);
    gsap.to(this.armL, 1.35, { y: 220, ease: Quad.easeOut });
    gsap.to(this.armL, 1.35, { rotation: 105, ease: Quad.easeOut, delay: 0.1 });
    gsap.to(this.armR, 1.35, { y: 220, ease: Quad.easeOut });
    gsap.to(this.armR, 1.35, { rotation: -105, ease: Quad.easeOut, delay: 0.1, onComplete: () => {
        gsap.set([this.armL, this.armR], { visibility: "hidden" });
      }});
    gsap.to(this.bodyBG, 0.45, { morphSVG: this.bodyBG as any, ease: Quad.easeOut });
    this.eyesCovered = false;
  }

  resetFace() {
    gsap.to([this.eyeL, this.eyeR], 1, {x: 0, y: 0, ease: Expo.easeOut});
    gsap.to(this.nose, 1, {x: 0, y: 0, scaleX: 1, scaleY: 1, ease: Expo.easeOut});
    gsap.to(this.mouth, 1, {x: 0, y: 0, rotation: 0, ease: Expo.easeOut});
    gsap.to(this.chin, 1, {x: 0, y: 0, scaleY: 1, ease: Expo.easeOut});
    gsap.to([this.face, this.eyebrow], 1, {x: 0, y: 0, skewX: 0, ease: Expo.easeOut});
    gsap.to([this.outerEarL, this.outerEarR, this.earHairL, this.earHairR, this.hair], 1, {x: 0, y: 0, scaleY: 1, ease: Expo.easeOut});
  }

  startBlinking(delay?: number) {
    if (delay) {
      delay = this.getRandomInt(delay);
    } else {
      delay = 1;
    }
    this.blinking = gsap.to([this.eyeL, this.eyeR], 0.1, {
      delay: delay,
      scaleY: 0,
      yoyo: true,
      repeat: 1,
      transformOrigin: "center center",
      onComplete: () => {
        this.startBlinking(12);
      },
    });
  }

  stopBlinking() {
    this.blinking.kill();
    this.blinking = null;
    gsap.set([this.eyeL, this.eyeR], {scaleY: this.eyeScale});
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getAngle(x1: number, y1: number, x2: number, y2: number) {
    return Math.atan2(y1 - y2, x1 - x2);
  }

  getPosition(el: HTMLElement): { x: number; y: number } {
    let xPos = 0;
    let yPos = 0;

    while (el) {
      if (el.tagName === "BODY") {
        let xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        let yScroll = el.scrollTop || document.documentElement.scrollTop;

        xPos += el.offsetLeft - xScroll + el.clientLeft;
        yPos += el.offsetTop - yScroll + el.clientTop;
      } else {
        xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
        yPos += el.offsetTop - el.scrollTop + el.clientTop;
      }

      el = el.offsetParent as HTMLElement;
    }

    return {
      x: xPos,
      y: yPos
    };
  }

  // isMobileDevice() {
  //   let check = false;
  //   (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  //   return check;
  // }

  initLoginForm() {
    this.emailLabel = document.querySelector('#loginEmailLabel')!;
    this.email = document.querySelector('#loginEmail')!;
    this.passwordLabel = document.querySelector('#loginPasswordLabel')!;
    this.password = document.querySelector('#loginPassword')!;
    this.showPasswordCheck = document.querySelector('#showPassword')!;
    this.showPasswordToggle = document.querySelector('#showPasswordToggle')!;
    this.mySVG = document.querySelector('.svgContainer')!;
    this.twoFingers = document.querySelector('.twoFingers')!;
    this.armL = document.querySelector('.armL')!;
    this.armR = document.querySelector('.armR')!;
    this.eyeL = document.querySelector('.eyeL')!;
    this.eyeR = document.querySelector('.eyeR')!;
    this.nose = document.querySelector('.nose')!;
    this.mouth = document.querySelector('.mouth')!;
    this.mouthBG = document.querySelector('.mouthBG')!;
    this.mouthSmallBG = document.querySelector('.mouthSmallBG')!;
    this.mouthMediumBG = document.querySelector('.mouthMediumBG')!;
    this.mouthLargeBG = document.querySelector('.mouthLargeBG')!;
    this.mouthMaskPath = document.querySelector('#mouthMaskPath')!;
    this.mouthOutline = document.querySelector('.mouthOutline')!;
    this.tooth = document.querySelector('.tooth')!;
    this.tongue = document.querySelector('.tongue')!;
    this.chin = document.querySelector('.chin')!;
    this.face = document.querySelector('.face')!;
    this.eyebrow = document.querySelector('.eyebrow')!;
    this.outerEarL = document.querySelector('.earL .outerEar')!;
    this.outerEarR = document.querySelector('.earR .outerEar')!;
    this.hair = document.querySelector('.hair')!;
    this.bodyBG = document.querySelector('.bodyBGnormal')!;
    this.bodyBGchanged = document.querySelector('.bodyBGchanged')!;

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
    gsap.set(this.armL, {x: -93, y: 220, rotation: 105, transformOrigin: "top left"});
    gsap.set(this.armR, {x: -93, y: 220, rotation: -105, transformOrigin: "top right"});

    // set initial mouth property (fixes positioning bug)
    gsap.set(this.mouth, {transformOrigin: "center center"});

    // activate blinking
    this.startBlinking(5);

    // determine how far email input can go before scrolling occurs
    // will be used as the furthest point avatar will look to the right
    this.emailScrollMax = this.email.scrollWidth;

    // check if we're on mobile/tablet, if so then show password initially
    // if (this.isMobileDevice()) {
    //   this.password.type = "text";
    //   this.showPasswordCheck.checked = true;
    //   gsap.set(this.twoFingers, {transformOrigin: "bottom left", rotation: 30, x: -9, y: -2, ease: Power2.easeInOut});
    // }
  }


  // Add the updated methods from login.component.js
}
