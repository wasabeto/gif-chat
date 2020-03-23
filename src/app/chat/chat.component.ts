import { Component, OnInit } from "@angular/core";
import { ChatModel } from "./chat.model";
import { GifService } from "../gif.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  text: string;
  messageList: ChatModel[];
  constructor(private gifService: GifService) {
    this.messageList = [];
    this.text = "";
  }

  ngOnInit(): void {
    this.messageList.push({
      id: 1,
      content: "This is a premade, hardcoded received me Text",
      own: false
    });
    this.getAllGif();
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

  getAllGif(): void {
    this.gifService.getAll().subscribe(res => {
      console.log(res);
    })
  }
}
