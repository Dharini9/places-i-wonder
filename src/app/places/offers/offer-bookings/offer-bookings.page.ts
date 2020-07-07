import { Component, OnInit } from '@angular/core';
import { Places } from 'src/assets/models/places.models';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from 'src/assets/services/places.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  offers: Places;
  placeID: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private placesService: PlacesService,
    private navController: NavController
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeID')) {
        this.navController.navigateBack('/places/tabs/offers');
        return;
      }
      this.placeID = + paramMap.get('placeID');
      this.offers = this.placesService.getPlacesByID(this.placeID);
    });
  }

}
