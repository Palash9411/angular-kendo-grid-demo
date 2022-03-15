import { PageChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { Component } from '@angular/core';
import { products } from './products';

@Component({
    selector: 'my-app',
    template: `
        
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
