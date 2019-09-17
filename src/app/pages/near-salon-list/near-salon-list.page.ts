import { ModalController, NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-near-salon-list",
  templateUrl: "./near-salon-list.page.html",
  styleUrls: ["./near-salon-list.page.scss"]
})
export class NearSalonListPage implements OnInit {
  salonList: any = [
    {
      name: "RedBox Barber",
      image: "../../../assets/images/General/Rectangle.png",
      address: "288 McClure Court, Arkansas",
      distance: "1.2 km",
      star: "3.5",
      time: "8:30 am - 9:00pm"
    },
    {
      name: "Beauty Plus Spa",
      image: "../../../assets/images/General/Rectangle.png",
      address: "34 McClure Court, Arkansas",
      distance: "3.0 km",
      star: "4.0",
      time: "8:30 am - 9:00pm"
    },
    {
      name: "Looks Unisex Salon",
      image: "../../../assets/images/General/Rectangle.png",
      address: "85 McClure Court, Arkansas",
      distance: "4.0 km",
      star: "3.5",
      time: "9:00 am - 8:00pm"
    }
  ];
  constructor(
    public modalController: ModalController,
    public navCtrl: NavController
  ) {}

  ngOnInit() {}

  viewSalonDetauil() {
    this.modalController.dismiss();
    this.navCtrl.navigateForward("/salon-detail");
  }
}
