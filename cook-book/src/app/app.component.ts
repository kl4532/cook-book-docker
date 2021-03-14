import {AfterViewInit, ChangeDetectionStrategy, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AuthorInfoDialogComponent} from './shared/author-info-dialog/author-info-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit{
  title = 'cook-book';
  innerWidth = 0;
  @ViewChild('drawer') drawer: any;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 500) {
      this.drawer.close();
      return;
    }
    this.drawer.open();
  }

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit(): void{
    this.innerWidth = window.innerWidth;
    if (this.innerWidth >= 500) {this.drawer.open()};
  }

  openDialog(): void{
    this.dialog.open(AuthorInfoDialogComponent);
  }



}
