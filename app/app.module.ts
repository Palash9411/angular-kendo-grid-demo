import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { GridModule } from '@progress/kendo-angular-grid';
import { LabelModule } from '@progress/kendo-angular-label';

import { AppComponent } from './app.component';

@NgModule({
    imports: [FormsModule, BrowserModule, BrowserAnimationsModule, GridModule, DropDownsModule, InputsModule, LabelModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
