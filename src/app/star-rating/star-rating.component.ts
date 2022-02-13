import {
  Input,
  OnInit,
  Component,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit, AfterViewInit {
  @ViewChild('starElement') starElement: any | undefined;

  public rate: number = 1;
  public rateArray: Array<number> = [];

  @Input() size: string = '14';
  @Input() max: number = 1;
  @Input() value: number = 1;
  @Input() uncheckedcolor!: string;
  @Input() readonly: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.rateArray = Array(this.max).fill(0);
  }

  ngAfterViewInit(): void {}

  onMouseEnter(index: number) {
    if (this.readonly) return;
    this.value = index + 1;
  }

  onMouseLeave() {
    if (this.readonly) return;
    this.value = this.rate;
  }

  saveRate(index: number) {
    if (this.readonly) return;
    this.value = index + 1;
    this.rate = this.value;
  }

  setColor(e: any) {
    return this.uncheckedcolor;
  }

  trackByFunction(index: number, item: any) {
    if (!item) return null;
    return index;
  }
}
