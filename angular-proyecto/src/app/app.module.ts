import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { DefaultUserComponent } from './default-user/default-user.component';
import { HeaderComponent } from './layout/header/header.component';
import { HeaderNavComponent } from './layout/header-nav/header-nav.component';
import { LeftNavComponent } from './layout/left-nav/left-nav.component';
import { LeftNavMenuComponent } from './layout/left-nav/left-nav-menu/left-nav-menu.component';
import { Page404Component } from './modules/server/page404/page404.component';
import { Page401Component } from './modules/server/page401/page401.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    FooterComponent,
    NavigationComponent,
    DefaultUserComponent,
    HeaderComponent,
    HeaderNavComponent,
    LeftNavComponent,
    LeftNavMenuComponent,
    Page404Component,
    Page401Component
  ],
  imports: [
    BrowserModule,
    // Core
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
