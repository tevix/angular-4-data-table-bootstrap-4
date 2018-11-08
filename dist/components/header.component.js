var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject, forwardRef } from '@angular/core';
import { DataTable } from './table.component';
import { HEADER_TEMPLATE } from './header.template';
import { HEADER_STYLE } from "./header.style";
var DataTableHeader = /** @class */ (function () {
    function DataTableHeader(dataTable) {
        this.dataTable = dataTable;
        this.columnSelectorOpen = false;
    }
    DataTableHeader.prototype._closeSelector = function () {
        this.columnSelectorOpen = false;
    };
    DataTableHeader = __decorate([
        Component({
            selector: 'data-table-header',
            template: HEADER_TEMPLATE,
            styles: [HEADER_STYLE],
            host: {
                '(document:click)': '_closeSelector()'
            }
        }),
        __param(0, Inject(forwardRef(function () { return DataTable; })))
    ], DataTableHeader);
    return DataTableHeader;
}());
export { DataTableHeader };
//# sourceMappingURL=header.component.js.map