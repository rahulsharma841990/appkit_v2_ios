import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPostPage } from '../pages/list-post/list-post';
import { ListPage } from '../pages/list/list';
import {ContactUsPage} from '../pages/contact-us/contact-us';
import {ProductDetailsPage}from '../pages/product-details/product-details';
import {ListproductPage} from '../pages/listproduct/listproduct';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { PostDetailPage } from '../pages/post-detail/post-detail';
import { Network } from '@ionic-native/network';
import {ApidataPage} from'../pages/apidata/apidata';
import { Camera } from '@ionic-native/camera';
import { FilterPipe } from '../pipes/filter/filter';
import { GoogleMaps,GoogleMap,GoogleMapsEvent,GoogleMapOptions,CameraPosition,MarkerOptions,Marker } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import {} from '@types/googlemaps'; 
import { ElementRef } from '@angular/core';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { AutocompleteProvider } from '../providers/autocomplete/autocomplete';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactUsPage,
    ListproductPage,
    ProductDetailsPage,
    ListPostPage,
    PostDetailPage,
    ApidataPage,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AutoCompleteModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCN8JRSYdG_kYvIA9cPNZdSfH_82J78ODU",
      libraries: ["places"]
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactUsPage,
    ListproductPage,
    ProductDetailsPage,
    ListPostPage,
    PostDetailPage,
    ApidataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    Network,
    SQLite,
    Camera,
    GoogleMaps,
    Geolocation,
    AutocompleteProvider
    
  ]
})
export class AppModule {}
