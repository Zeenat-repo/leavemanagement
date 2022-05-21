import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { MatIconModule } from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

import { CommonComponent } from './services/common/common.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [



    ],
    imports: [
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatDividerModule,
        MatDialogModule
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatDividerModule,
        MatDialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class MatModule { }
