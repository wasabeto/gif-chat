import { Component, OnInit } from "@angular/core";
import { ChatModel } from "./chat.model";
import { GifService } from "../gif.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { GifFinderComponent } from "../gif-finder/gif-finder.component";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  text: string;
  messageList: ChatModel[];
  constructor(public gifService: GifService, private dialog: MatDialog) {
    this.messageList = [];
    this.text = "";
  }

  ngOnInit(): void {
    this.messageList.push({
      id: 1,
      content: "This is a premade, hardcoded received me Text",
      own: false,
      isGif: false
    });
  }

  postTextChat(): void {
    if (this.text !== "") {
      this.messageList.push({
        id: this.messageList.length + 1,
        content: this.text,
        own: true,
        isGif: false
      });
      this.text = "";
    }
  }

  postGifChatOnDialog(): void {
    const dialogRef = this.dialog.open(GifFinderComponent, {
      width: '60%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      console.log(result);
      this.messageList.push({
        id: this.messageList.length + 1,
        content: result.image,
        own: true,
        isGif: true
      })
    });
  }
}
