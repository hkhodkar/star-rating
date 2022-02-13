import { Input, OnInit, Component, ViewChild, AfterViewInit, OnChanges, SimpleChanges, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "star-rating",
  templateUrl: "./star-rating.component.html",
  styleUrls: ["./star-rating.component.scss"]
})
export class StarRatingComponent implements OnInit {
  @ViewChild("starElement") starElement: any | undefined;

  public rateArray: Array<number> = [];
  @Input() size: string = "14";
  @Input() totalstars: number = 1;
  @Input() value!: number;
  @Input() checkedcolor!: string;
  @Input() uncheckedcolor!: string;
  @Input() readonly: string = "true";
  @Output() rate = new EventEmitter<number>();
  public selectedRate!: number;

  constructor() {}

  ngOnInit(): void {
    this.rateArray = Array(+this.totalstars).fill(0);
    this.selectedRate = this.value;
  }

  onMouseEnter(index: number) {
    if (this.readonly === "true") return;
    this.selectedRate = index + 1;
  }

  onMouseLeave() {
    if (this.readonly === "true") return;
     this.selectedRate = this.value;
  }

  emitRate(index: number) {
    if (this.readonly === "true") return;
    this.value = index + 1;
    this.rate.emit(this.value);
  }

  trackByFunction(index: number, item: any) {
    if (!item) return null;
    return index;
  }
}
