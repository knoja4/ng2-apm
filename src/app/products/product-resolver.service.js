"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ProductResolver = (function () {
    function ProductResolver() {
    }
    ProductResolver.prototype.resolve = function (route, state) {
        // tslint:disable-next-line:indent
        var id = +route.params['id'];
        return null;
    };
    return ProductResolver;
}());
ProductResolver = __decorate([
    core_1.Injectable()
], ProductResolver);
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=product-resolver.service.js.map