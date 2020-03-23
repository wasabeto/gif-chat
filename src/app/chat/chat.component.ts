import { Component, OnInit } from "@angular/core";
import { ChatModel } from "./chat.model";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  text: string;
  messageList: ChatModel[];
  constructor() {
    this.messageList = [];
    this.text = "";
  }

  ngOnInit(): void {
    this.messageList.push({
      id: 1,
      content: "This is a premade, hardcoded received me Text",
      own: false
    });
  }

  postTextChat(): void {
    if (this.text !== "") {
      this.messageList.push({
        id: this.messageList.length + 1,
        content: this.text,
        own: true
      });
      this.text = "";
    }
  }
}
