import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-morse-output",
  template: `
    <p>Output</p>
    <textarea cols="30" rows="4" readonly></textarea>
  `,
  styles: []
})
export class MorseOutputComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
