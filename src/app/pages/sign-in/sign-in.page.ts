import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.page.html",
  styleUrls: ["./sign-in.page.scss"]
})
export class SignInPage implements OnInit {
  user: any = {};
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  login() {
    this.navCtrl.navigateForward("/slider");
  }
  forgotPassword() {
    this.navCtrl.navigateForward("/forgot-password");
  }
  signUp() {
    this.navCtrl.navigateForward("/sign-up");
  }
}
