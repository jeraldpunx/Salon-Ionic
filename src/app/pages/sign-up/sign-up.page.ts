import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.page.html",
  styleUrls: ["./sign-up.page.scss"]
})
export class SignUpPage implements OnInit {
  user: any = {};
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  backPage() {
    this.navCtrl.back();
  }
  register() {
    this.navCtrl.navigateBack("/phone-verification");
  }
  signIn() {
    this.navCtrl.navigateBack("/sign-in");
  }
}
