import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// * Primeng imports
import {ButtonModule} from 'primeng/button';
import {SplitterModule} from 'primeng/splitter';
import {TabViewModule} from 'primeng/tabview';
import {DialogModule} from 'primeng/dialog';
import {AvatarModule} from 'primeng/avatar';
import {BadgeModule} from 'primeng/badge';

// * Angular split
import { AngularSplitModule } from 'angular-split';

// * Angular imports
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { TopHeaderComponent } from './shared/top-header/top-header.component';
import { BottomBarComponent } from './shared/bottom-bar/bottom-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CodeEditorComponent,
    TopHeaderComponent,
    BottomBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // ? Angular split
    AngularSplitModule,
    // ? Primeng imports
    ButtonModule,
    SplitterModule,
    TabViewModule,
    DialogModule,
    AvatarModule,
    BadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
