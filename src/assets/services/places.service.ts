import { Injectable } from '@angular/core';
import { Places } from '../models/places.models';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Places[] = [
    new Places(1, 'Iceland',
    `Even without the northern lights, Iceland is an otherworldly place to visit, with glaciers,
    geysers, massive waterfalls, and volcanoes.`,
    'https://www.smartyleowl.com/wp-content/uploads/2019/07/northern-lights-iceland-15-1-1024x678-1024x678.jpg',
    299.90),
    new Places(2, 'Fairbanks, Alaska',
    `Located just two degrees below the Arctic near international airport and close to
    the impressive Denali National Park, Fairbanks is the best place in the U.S. to take in the northern lights.`,
    'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_542,q_75,w_962/v1/clients/fairbanks/AK_FAI_Aurora_111154_56_David_W_Shaw__7fb056fc-3b06-44c8-b727-c9a2c843a156.jpg',
    192.30),
    new Places(3, 'Yellowknife, Canada',
    `Canada is an aurora viewing paradise, thanks to its northern latitude and low light pollution; elsewhere in the country,
    Wood Buffalo and Jasper National Park are popular viewing spots.`,
    'https://yellowknifetours.com/wp-content/uploads/2018/07/yellowknife-slider-02.jpg',
    98.90),
    new Places(4, 'Tromsø, Norway',
    `The largest urban area in northern Norway is 217 miles north of the Arctic Circle,
    but thanks to the Gulf Stream the coastline has surprisingly moderate temperatures.`,
    'http://www.carsnorway.com/img-test/blog/tromso-northern-lights.jpg',
    91.90),
    new Places(5, 'Northern Sweden and Finland',
    `Sweden’s northernmost town of Kiruna is a gateway for nearby attractions.
    There is the ICEHOTEL, mountainous Abisko National Park, the local Sami culture, and plentiful reindeer.`,
    'https://blog.pickyourtrail.com/wp-content/uploads/2015/10/canada-1.jpg',
    89.75),
    new Places(6, 'Greenland',
    `It’s possible to be too far north to see the northern lights—such is the case in
    northern Greenland. But head farther south for
    beautiful auroras and attractions like Qaleraliq Glacier, which has small floating icebergs even in summer.`,
    'https://images.rove.me/w_740,q_85/n8y2potb2ixxtjamvtnp/greenland-northern-lights.jpg',
    89.75),
    new Places(7, 'Tasmania and New Zealand',
    `You hear about northern lights more often than southern lights (aurora australis)
    because there are fewer locations to see auroras from the Southern Hemisphere.`,
    'https://www.abc.net.au/reslib/201406/r1285473_17442778.jpg',
    89.75)
  ];

  constructor() { }

  getPlaces() {
    return [...this.places];
  }

  getPlacesByID(placeID: number) {
    return {...this.places.find((place) => place.placeID === placeID)};
  }
}
