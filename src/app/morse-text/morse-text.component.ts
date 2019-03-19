import { Component, OnInit } from "@angular/core";
import { morseToText } from "../../assets/functions/converter";
import { plainToMorse } from "../../assets/functions/converter";

@Component({
  selector: "app-morse-text",
  template: `
    <div class="maindiv">
      <div>
        <p>Write your text</p>
        <textarea
          cols="50"
          rows="8"
          (input)="str = $event.target.value"
        ></textarea>
        <p>
          <label>Operation : </label>
          <select (change)="selectOperation($event.target.value)">
            <option value="toText">--Morse to Text--</option>
            <option value="toMorse">--Text to Morse--</option>
          </select>
        </p>
        <p>
          <button class="convert-button" (click)="submit()">
            Submit
          </button>
        </p>
        <p>
          <textarea class="out-class" cols="50" rows="8" readonly>{{
            otText
          }}</textarea>
        </p>
      </div>
    </div>
  `,
  styles: [
    ".maindiv { display: flex; justify-content: center } .out-class {background-color: #ddd} .convert-button {background-color: #4CAF50; border: none; color: white}"
  ]
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
