import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as ace from 'ace-builds'; // ace module ..
// language package, choose your own
// import 'ace-builds/src-noconflict/mode-html';
// ui-theme package
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-beautify';
import 'ace-builds/src-noconflict/ext-language_tools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



}
