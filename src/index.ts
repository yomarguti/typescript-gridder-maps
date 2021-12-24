/// <reference types="@types/google.maps" />
import { Company } from './Company';
import { User } from './User';
import { Map } from './Map';

const mapDiv = document.getElementById('map');

const user = new User();
const company = new Company();

const map = new Map(mapDiv);

map.addMarker(user);
map.addMarker(company);
