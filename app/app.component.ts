import { PageChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { Component } from '@angular/core';
import { products } from './products';

@Component({
    selector: 'my-app',
    template: `
        <div class="example-config">
            <div class="inputs-row">
                <div class="input-wrapper">
                    <kendo-label [for]="pagerType" text="Type of the pager:"></kendo-label>
                    <kendo-dropdownlist #pagerType [data]="pagerTypes" [(value)]="type"></kendo-dropdownlist>
                </div>
                <div class="input-wrapper">
                    <kendo-label [for]="count" text="Maximum number of buttons:"></kendo-label>
                    <kendo-numerictextbox #count format="n0" [(value)]="buttonCount"></kendo-numerictextbox>
                </div>
            </div>
            <div class="inputs-row">
                <div class="input-wrapper">
                    <input #showinfo type="checkbox" kendoCheckBox [(ngModel)]="info" />
                    <kendo-label [for]="showinfo" text="Show info"></kendo-label>
                </div>
                <div class="input-wrapper">
                    <input #size type="checkbox" kendoCheckBox [(ngModel)]="pageSizes" />
                    <kendo-label [for]="size" text="Show page sizes"></kendo-label>
                </div>
                <div class="input-wrapper">
                    <input #buttons type="checkbox" kendoCheckBox [(ngModel)]="previousNext" />
                    <kendo-label [for]="buttons" text="Show previous / next buttons"></kendo-label>
                </div>
            </div>
            <div class="inputs-row">
                <div class="input-wrapper">Position:</div>
                <div class="input-wrapper">
                    <input #positionTop type="radio" kendoRadioButton name="position" value="top" [(ngModel)]="position" />
                    <kendo-label [for]="positionTop" text="Top"></kendo-label>
                </div>
                <div class="input-wrapper">
                    <input #positionBottom type="radio" kendoRadioButton name="position" value="bottom" [(ngModel)]="position" />
                    <kendo-label [for]="positionBottom" text="Bottom"></kendo-label>
                </div>
                <div class="input-wrapper">
                    <input #positionBoth type="radio" kendoRadioButton name="position" value="both" [(ngModel)]="position" />
                    <kendo-label [for]="positionBoth" text="Both"></kendo-label>
                </div>
            </div>
        </div>
        <kendo-grid
            [data]="gridView"
            [pageSize]="pageSize"
            [skip]="skip"
            [pageable]="{
                buttonCount: buttonCount,
                info: info,
                type: type,
                pageSizes: pageSizes,
                previousNext: previousNext,
                position: position
            }"
            [height]="270"
            (pageChange)="pageChange($event)"
        >
            <kendo-grid-column field="ProductID" title="ID"> </kendo-grid-column
            ><kendo-grid-column field="ProductName" title="Product Name"> </kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" title="Units in stock"> </kendo-grid-column>
        </kendo-grid>
    `,
    styles: [`
        .inputs-row {
            display: flex;
            height: 2em;
            align-items: center;
        }

        .inputs-row:not(:last-of-type) {
            margin-bottom: 1em;
        }

        .input-wrapper, h4 {
            margin-right: 1em;
        }

        .input-wrapper .k-radio,
        .input-wrapper .k-checkbox,
        .input-wrapper kendo-label {
            display: inline-block;
            margin-right: 8px;
        }

        kendo-numerictextbox,
        kendo-dropdownlist {
            width: 170px;
        }
    `]
})
export class AppComponent {
    public gridView: GridDataResult;
    private items: any[] = products;

    public pagerTypes = ['numeric', 'input'];

    public type = 'numeric';
    public buttonCount = 5;
    public info = true;
    public pageSizes = true;
    public previousNext = true;
    public position = 'bottom';

    public pageSize = 5;
    public skip = 0;

    constructor() {
        this.loadItems();
    }

    protected pageChange({ skip, take }: PageChangeEvent): void {
        this.skip = skip;
        this.pageSize = take;
        this.loadItems();
    }

    private loadItems(): void {
        console.log(this.items)
        this.gridView = {
            data: this.items.slice(this.skip, this.skip + this.pageSize),
            total: this.items.length
        };
    }
}
