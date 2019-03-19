import { Component, OnInit } from "@angular/core";
import { morseToText } from "../../assets/functions/converter";
import { plainToMorse } from "../../assets/functions/converter";

@Component({
  selector: "app-morse-text",
  templateUrl: "morse-text.html",
  styleUrls: ["./morse-text.css"]
})
export class MorseTextComponent implements OnInit {
  constructor() {}
  str: string;
  public otText = "";
  public selectedOperation = "toMorse";
  selectOperation(operation) {
    this.selectedOperation = operation;
  }
  submit() {
    // this.otText = "";
    let out = "";
    console.log(this.selectedOperation);
    if (this.selectedOperation === "toText") {
      out = morseToText(this.str);
    } else {
      out = plainToMorse(this.str);
    }

    console.log("the code :" + this.str + ":" + out);
    this.otText = out;
    this.str = "";
  }

  ngOnInit() {}
}
