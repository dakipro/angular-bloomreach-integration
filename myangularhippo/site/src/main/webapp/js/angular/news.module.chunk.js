webpackJsonp(["news.module"],{

/***/ "../../../../../src/app/news/news-root/news-root.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/news-root/news-root.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  news-root works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/news/news-root/news-root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsRootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsRootComponent = (function () {
    function NewsRootComponent() {
    }
    NewsRootComponent.prototype.ngOnInit = function () {
    };
    return NewsRootComponent;
}());
NewsRootComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-news-root',
        template: __webpack_require__("../../../../../src/app/news/news-root/news-root.component.html"),
        styles: [__webpack_require__("../../../../../src/app/news/news-root/news-root.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NewsRootComponent);

//# sourceMappingURL=news-root.component.js.map

/***/ }),

/***/ "../../../../../src/app/news/news.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_root_news_root_component__ = __webpack_require__("../../../../../src/app/news/news-root/news-root.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewsModule = (function () {
    function NewsModule() {
    }
    return NewsModule;
}());
NewsModule.entry = __WEBPACK_IMPORTED_MODULE_2__news_root_news_root_component__["a" /* NewsRootComponent */];
NewsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__news_root_news_root_component__["a" /* NewsRootComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__news_root_news_root_component__["a" /* NewsRootComponent */]]
    })
], NewsModule);

//# sourceMappingURL=news.module.js.map

/***/ })

});
//# sourceMappingURL=news.module.chunk.js.map