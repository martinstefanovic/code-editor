import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as ace from 'ace-builds'; // ace module ..
// language package, choose your own
// import 'ace-builds/src-noconflict/mode-html';
// ui-theme package
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-beautify';
import 'ace-builds/src-noconflict/ext-language_tools';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
})
export class CodeEditorComponent implements OnInit, AfterViewInit {
  displayBasic:boolean;
  @ViewChild('htmlEditor') private editor: ElementRef<HTMLElement>;
  @ViewChild('cssEditor') private editorCss: ElementRef<HTMLElement>;
  @ViewChild('idoc') private idoc: ElementRef;

  htmlEditor;
  cssEditor;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // * ACE Config
    ace.config.set('fontSize', '14px');
    ace.config.set(
      'basePath',
      'https://unpkg.com/ace-builds@1.4.12/src-noconflict'
    );

    // * Create instance of ACE editor for HTML
    this.htmlEditor = ace.edit(this.editor.nativeElement);

    // * Create instance of ACE editor for CSS
    this.cssEditor = ace.edit(this.editorCss.nativeElement);

    let kod = `<html lang="en">
    <head>
       <!-- Required meta tags -->
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <!-- Bootstrap CSS -->
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
       <title>Hello, world!</title>
    </head>
    <body>
       <div class="container">
       <h1>Hello, world!</h1>
          <ul>
             <li>1</li>
             <li>2</li>
             <li>3</li>
             <li>4</li>
          </ul>
       </div>
       <!-- Option 1: Bootstrap Bundle with Popper -->
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    </body>
 </html>`;

    // Set initial values for Editors
    this.htmlEditor.session.setValue(kod);

    // Set theme, mode & options for editors
    this.htmlEditor.setTheme('ace/theme/tomorrow_night');
    this.htmlEditor.session.setMode('ace/mode/html');
    this.htmlEditor.setOptions({
      highlightActiveLine: true,
      enableLiveAutocompletion: true,
      cursorStyle: 'slim',
      behavioursEnabled: true,
      autoScrollEditorIntoView: true,
      wrapBehavioursEnabled: true,
      wrap: true,
      fontFamily: 'Consolas'
    });

    this.cssEditor.setTheme('ace/theme/tomorrow_night');
    this.cssEditor.session.setMode('ace/mode/css');
    this.cssEditor.setOptions({
      highlightActiveLine: true,
      enableLiveAutocompletion: true,
      cursorStyle: 'slim',
      behavioursEnabled: true,
      autoScrollEditorIntoView: true,
      wrapBehavioursEnabled: true,
      wrap: true,
      fontFamily: 'Consolas'
    });

    this.update();
    this.htmlEditor.on('change', () => {
      // console.log(this.htmlEditor.getValue());
      this.update();
    });

    this.cssEditor.on('change', () => {
      this.update();
    });
  }

  update() {
    console.log(`<style>${this.cssEditor.getValue()}</style>` + this.htmlEditor.getValue());
    this.idoc.nativeElement.contentDocument.open();
    this.idoc.nativeElement.contentDocument.write(this.htmlEditor.getValue()+  `<style>${this.cssEditor.getValue()}</style>`);
    this.idoc.nativeElement.contentDocument.close();
  }

  onResizeWindow(event) {
    console.log('TEST');
    console.log(event.sizes[1]);
    this.htmlEditor.container.style.width = `${event.sizes[0] - 3}vw`;
    this.htmlEditor.resize();
  }

  onResizeTopBottom(event) {
    this.htmlEditor.container.style.height = `${event.sizes[0]}vh`;
    this.htmlEditor.resize();
  }

}
