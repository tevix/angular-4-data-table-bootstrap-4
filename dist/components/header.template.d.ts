export declare const HEADER_TEMPLATE = "\n<div class=\"data-table-header\">\n    <h4 class=\"title\" [textContent]=\"dataTable.headerTitle\"></h4>\n    <div class=\"button-panel\">\n        <button type=\"button\" class=\"btn btn-default btn-sm refresh-button\"\n            (click)=\"dataTable.reloadItems()\">\n             <i class=\"fa fa-refresh\"></i>\n        </button>\n        <button type=\"button\" class=\"btn btn-default btn-sm column-selector-button\" [class.active]=\"columnSelectorOpen\"\n            (click)=\"columnSelectorOpen = !columnSelectorOpen; $event.stopPropagation()\" >\n            <i class=\"fa fa-list\"></i>\n        </button>\n        <div class=\"column-selector-wrapper\" (click)=\"$event.stopPropagation()\">\n            <div *ngIf=\"columnSelectorOpen\" class=\"column-selector-box card\">\n                <div *ngIf=\"dataTable.expandableRows\" class=\"column-selector-fixed-column checkbox\">\n                    <label>\n                        <input type=\"checkbox\" [(ngModel)]=\"dataTable.expandColumnVisible\"/>\n                        <span>{{dataTable.translations.expandColumn}}</span>\n                    </label>\n                </div>\n                <div *ngIf=\"dataTable.indexColumn\" class=\"column-selector-fixed-column checkbox\">\n                    <label>\n                        <input type=\"checkbox\" [(ngModel)]=\"dataTable.indexColumnVisible\"/>\n                        <span>{{dataTable.translations.indexColumn}}</span>\n                    </label>\n                </div>\n                <div *ngIf=\"dataTable.selectColumn\" class=\"column-selector-fixed-column checkbox\">\n                    <label>\n                        <input type=\"checkbox\" [(ngModel)]=\"dataTable.selectColumnVisible\"/>\n                        <span>{{dataTable.translations.selectColumn}}</span>\n                    </label>\n                </div>\n                <div *ngFor=\"let column of dataTable.columns\" class=\"column-selector-column checkbox\">\n                    <label>\n                        <input type=\"checkbox\" [(ngModel)]=\"column.visible\"/>\n                        <span [textContent]=\"column.header\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
