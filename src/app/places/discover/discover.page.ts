import { Component, OnInit } from '@angular/core';
import { Places } from 'src/assets/models/places.models';
import { PlacesService } from 'src/assets/services/places.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  placeDetails: Places[] = [];

  constructor(
    private placesService: PlacesService,
    private menuController: MenuController
    ) { }

  ngOnInit() {
    this.placeDetails = this.placesService.getPlaces();
  }

  openMenu() {
    this.menuController.toggle();
  }

}
