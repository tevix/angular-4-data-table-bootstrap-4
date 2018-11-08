var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, Inject, forwardRef, Output, EventEmitter } from '@angular/core';
import { DataTable } from './table.component';
import { ROW_TEMPLATE } from './row.template';
import { ROW_STYLE } from "./row.style";
var DataTableRow = /** @class */ (function () {
    function DataTableRow(dataTable) {
        this.dataTable = dataTable;
        this.selectedChange = new EventEmitter();
        this._this = this; // FIXME is there no template keyword for this in angular 2?
    }
    Object.defineProperty(DataTableRow.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (selected) {
            this._selected = selected;
            this.selectedChange.emit(selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableRow.prototype, "displayIndex", {
        // other:
        get: function () {
            if (this.dataTable.pagination) {
                return this.dataTable.displayParams.offset + this.index + 1;
            }
            else {
                return this.index + 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    DataTableRow.prototype.getTooltip = function () {
        if (this.dataTable.rowTooltip) {
            return this.dataTable.rowTooltip(this.item, this, this.index);
        }
        return '';
    };
    DataTableRow.prototype.ngOnDestroy = function () {
        this.selected = false;
    };
    __decorate([
        Input()
    ], DataTableRow.prototype, "item", void 0);
    __decorate([
        Input()
    ], DataTableRow.prototype, "index", void 0);
    __decorate([
        Output()
    ], DataTableRow.prototype, "selectedChange", void 0);
    DataTableRow = __decorate([
        Component({
            selector: '[dataTableRow]',
            template: ROW_TEMPLATE,
            styles: [ROW_STYLE]
        }),
        __param(0, Inject(forwardRef(function () { return DataTable; })))
    ], DataTableRow);
    return DataTableRow;
}());
export { DataTableRow };
//# sourceMappingURL=row.component.js.map