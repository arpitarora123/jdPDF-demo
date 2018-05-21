// import { Component } from '@angular/core';
import {Component, ElementRef, ViewChild} from "@angular/core";
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
// let jsPDF;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild('test') el: ElementRef;

  constructor() {
  }

  public download() {
    var doc = new jsPDF('l', 'pt', 'a4');
    doc.text(20, 20, document.getElementById('myPdf').innerHTML);
    doc.save('Test.pdf'); 
  }
  
  public download1() {
    html2canvas(document.getElementById('myPdf'), {
      function(canvas) {
        var img = canvas.toDataURL("img/png");
        var doc = new jsPDF('l', 'pt', 'a4');
        doc.addImage(img, 'JPEG', 20, 20);
        doc.save('Test.pdf');
      }
    })
  }

  public test() {
    let pdf = new jsPDF('l', 'pt', 'a4');
    let options = {
      pagesplit: true
    };
    pdf.addHTML(this.el.nativeElement, 0, 0, options, () => {
      pdf.save("test.pdf");
    });
  }
}
