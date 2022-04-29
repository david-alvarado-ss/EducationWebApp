import {Component, OnInit, Input, OnChanges, ViewChild, ElementRef} from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { ConfigService } from '../mathjax/config.service'
@Component({
  selector: 'mathjax',
  templateUrl: './mathjax.component.html',
  styleUrls: ['./mathjax.component.css']
})
export class MathjaxComponent implements OnChanges,OnInit {
  @Input() content: string;
  constructor(public cs: ConfigService) { }
  mathJaxObject;

  ngOnChanges(changes: SimpleChanges) {
    // to render math equations again on content change
    if (changes['content']) {
      this.renderMath()
    }
  }
  ngOnInit() {
   this.loadMathConfig();
   this.renderMath();
  }

  updateMathObt(){
    this.mathJaxObject = this.cs.nativeGlobal()['MathJax'];
  }

  // tslint:disable-next-line:typedef
  renderMath() {
    this.updateMathObt();
    const angObj = this;
    setTimeout(() => {
      angObj.mathJaxObject.Hub.Queue(['Typeset', angObj.mathJaxObject.Hub], 'mathContent');
    }, 1000);
  }
  // tslint:disable-next-line:typedef
  loadMathConfig() {
    this.updateMathObt();
    this.mathJaxObject.Hub.Config({
      showMathMenu: false,
      tex2jax: { inlineMath: [["$", "$"]],displayMath:[["$$", "$$"]] },
      menuSettings: { zoom: "Double-Click", zscale: "150%" },
      CommonHTML: { linebreaks: { automatic: true } },
      "HTML-CSS": { linebreaks: { automatic: true } },
      SVG: { linebreaks: { automatic: true } }
    });
  }
}
