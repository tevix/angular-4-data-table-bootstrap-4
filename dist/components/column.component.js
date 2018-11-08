var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive, Input, ContentChild } from '@angular/core';
var DataTableColumn = /** @class */ (function () {
    function DataTableColumn() {
        this.sortable = false;
        this.resizable = false;
        this.visible = true;
        this.styleClassObject = {}; // for [ngClass]
    }
    DataTableColumn.prototype.getCellColor = function (row, index) {
        if (this.cellColors !== undefined) {
            return this.cellColors(row.item, row, this, index);
        }
    };
    DataTableColumn.prototype.ngOnInit = function () {
        this._initCellClass();
    };
    DataTableColumn.prototype._initCellClass = function () {
        var _a;
        if (!this.styleClass && this.property) {
            if (/^[a-zA-Z0-9_]+$/.test(this.property)) {
                this.styleClass = 'column-' + this.property;
            }
            else {
                this.styleClass = 'column-' + this.property.replace(/[^a-zA-Z0-9_]/g, '');
            }
        }
        if (this.styleClass != null) {
            this.styleClassObject = (_a = {},
                _a[this.styleClass] = true,
                _a);
        }
    };
    __decorate([
        Input()
    ], DataTableColumn.prototype, "header", void 0);
    __decorate([
        Input()
    ], DataTableColumn.prototype, "sortable", void 0);
    __decorate([
        Input()
    ], DataTableColumn.prototype, "resizable", void 0);
    __decorate([
        Input()
    ], DataTableColumn.prototype, "property", void 0);
    __decorate([
        Input()
    ], DataTableColumn.prototype, "styleClass", void 0);
    __decorate([
        Input()
    ], DataTableColumn.prototype, "cellColors", void 0);
    __decorate([
        Input()
    ], DataTableColumn.prototype, "width", void 0);
    __decorate([
        Input()
    ], DataTableColumn.prototype, "visible", void 0);
    __decorate([
        ContentChild('dataTableCell')
    ], DataTableColumn.prototype, "cellTemplate", void 0);
    __decorate([
        ContentChild('dataTableHeader')
    ], DataTableColumn.prototype, "headerTemplate", void 0);
    DataTableColumn = __decorate([
        Directive({
            selector: 'data-table-column'
        })
    ], DataTableColumn);
    return DataTableColumn;
}());
export { DataTableColumn };
//# sourceMappingURL=column.component.js.map