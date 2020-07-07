import { Component, OnInit } from '@angular/core';
import { Places } from 'src/assets/models/places.models';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from 'src/assets/services/places.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {

  placeID: number;
  placeDetails: Places;

  constructor(
    private activeRoute: ActivatedRoute,
    private navController: NavController,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeID')) {
        this.navController.navigateBack('/places/tabs/discover');
        return;
      }
      this.placeID = + paramMap.get('placeID');
      this.placeDetails = this.placesService.getPlacesByID(this.placeID);
    });
  }

  bookPlace() {
    
  }

}
