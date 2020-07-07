import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/assets/services/places.service';
import { Places } from 'src/assets/models/places.models';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offerDetails: Places[] = [];

  constructor(
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.offerDetails = this.placesService.getPlaces();
  }

}
