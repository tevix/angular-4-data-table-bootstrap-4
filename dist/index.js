var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTable } from './components/table.component';
import { DataTableColumn } from './components/column.component';
import { DataTableRow } from './components/row.component';
import { DataTablePagination } from './components/pagination.component';
import { DataTableHeader } from './components/header.component';
import { PixelConverter } from './utils/px';
import { Hide } from './utils/hide';
import { MinPipe } from './utils/min';
export * from './components/types';
export * from './tools/data-table-resource';
export { DataTable, DataTableColumn, DataTableRow, DataTablePagination, DataTableHeader };
export var DATA_TABLE_DIRECTIVES = [DataTable, DataTableColumn];
var DataTableModule = /** @class */ (function () {
    function DataTableModule() {
    }
    DataTableModule = __decorate([
        NgModule({
            imports: [CommonModule, FormsModule],
            declarations: [
                DataTable, DataTableColumn,
                DataTableRow, DataTablePagination, DataTableHeader,
                PixelConverter, Hide, MinPipe
            ],
            exports: [DataTable, DataTableColumn]
        })
    ], DataTableModule);
    return DataTableModule;
}());
export { DataTableModule };
//# sourceMappingURL=index.js.map