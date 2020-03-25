import { Component, OnInit, HostListener } from "@angular/core";
import { GifService } from "../gif.service";
import { GifModel } from "../gif.model";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-gif-finder",
  templateUrl: "./gif-finder.component.html",
  styleUrls: ["./gif-finder.component.scss"]
})
export class GifFinderComponent implements OnInit {
  gifList: GifModel[];
  searchPhrase: string;
  loading: boolean;

  constructor(
    private gifService: GifService,
    public dialogRef: MatDialogRef<GifFinderComponent>
  ) {
    this.gifList = [];
    this.searchPhrase = "";
    this.loading = false;
  }

  ngOnInit(): void {
    this.loading = true;
    this.gifService.getAll().subscribe(res => {
      this.loading = false;
      this.gifList = res;
    });
  }

  @HostListener("document:keypress", ["$event"])
  handleInputKeyboardEvent(event: KeyboardEvent) {
    if (this.searchPhrase.length >= 3) {
      this.loading = true;
      this.gifService.searchByQuery(this.searchPhrase).subscribe(res => {
        this.loading = false;
        this.gifList = res;
      });
    }
  }

  selectGif(selectedGif: GifModel): void {
    this.dialogRef.close(selectedGif);
  }
}
