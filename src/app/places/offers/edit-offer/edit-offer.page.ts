import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from 'src/assets/services/places.service';
import { Places } from 'src/assets/models/places.models';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  editPlaceDetails: Places;
  placeID: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private navController: NavController,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeID')) {
        this.navController.navigateBack('/places/tabs/offers');
        return;
      }
      this.placeID = + paramMap.get('placeID');
      this.editPlaceDetails = this.placesService.getPlacesByID(this.placeID);
    });
  }

}
