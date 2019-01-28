(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _open_open_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./open/open.component */ "./src/app/open/open.component.ts");
/* harmony import */ var _formulariologin_formulariologin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formulariologin/formulariologin.component */ "./src/app/formulariologin/formulariologin.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _proyecto_proyecto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proyecto/proyecto.component */ "./src/app/proyecto/proyecto.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _info_contenedores_info_contenedores_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info-contenedores/info-contenedores.component */ "./src/app/info-contenedores/info-contenedores.component.ts");
/* harmony import */ var _trivial_trivial_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./trivial/trivial.component */ "./src/app/trivial/trivial.component.ts");
/* harmony import */ var _reciclatu_reciclatu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reciclatu/reciclatu.component */ "./src/app/reciclatu/reciclatu.component.ts");
/* harmony import */ var _puntuacion_puntuacion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./puntuacion/puntuacion.component */ "./src/app/puntuacion/puntuacion.component.ts");
/* harmony import */ var _panelreg_panelreg_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./panelreg/panelreg.component */ "./src/app/panelreg/panelreg.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//This is my case 
var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'open', component: _open_open_component__WEBPACK_IMPORTED_MODULE_2__["OpenComponent"], children: [
            { path: '', component: _formulariologin_formulariologin_component__WEBPACK_IMPORTED_MODULE_3__["FormulariologinComponent"] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] }
        ] },
    { path: 'colores', component: _info_contenedores_info_contenedores_component__WEBPACK_IMPORTED_MODULE_8__["InfoContenedoresComponent"] },
    { path: 'trivial', component: _trivial_trivial_component__WEBPACK_IMPORTED_MODULE_9__["TrivialComponent"] },
    { path: 'reciclatu', component: _reciclatu_reciclatu_component__WEBPACK_IMPORTED_MODULE_10__["ReciclatuComponent"] },
    { path: 'proyecto', component: _proyecto_proyecto_component__WEBPACK_IMPORTED_MODULE_5__["ProyectoComponent"] },
    { path: 'registro', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'puntuacion', component: _puntuacion_puntuacion_component__WEBPACK_IMPORTED_MODULE_11__["PuntuacionComponent"] },
    { path: 'usuario', component: _panelreg_panelreg_component__WEBPACK_IMPORTED_MODULE_12__["PanelregComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.cuerpo{\n\theight:100vh;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsYUFBYTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jdWVycG97XG5cdGhlaWdodDoxMDB2aDtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-0\">\n\t<div class=\"cabecero\">\n\t\t<app-header></app-header>\n\t</div>\n\t<div class=\"cuerpo\">\n\t\n\t\t\t<router-outlet></router-outlet>\n        \n            <app-footer></app-footer>\n\n\t</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Proyecto-Recicla';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hero/hero.component */ "./src/app/hero/hero.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _open_open_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./open/open.component */ "./src/app/open/open.component.ts");
/* harmony import */ var _panelreg_panelreg_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./panelreg/panelreg.component */ "./src/app/panelreg/panelreg.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _formulariologin_formulariologin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formulariologin/formulariologin.component */ "./src/app/formulariologin/formulariologin.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _recicla_recicla_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./recicla/recicla.component */ "./src/app/recicla/recicla.component.ts");
/* harmony import */ var _proyecto_proyecto_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./proyecto/proyecto.component */ "./src/app/proyecto/proyecto.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _info_contenedores_info_contenedores_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./info-contenedores/info-contenedores.component */ "./src/app/info-contenedores/info-contenedores.component.ts");
/* harmony import */ var _info_contenedores_contenedores_contenedores_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./info-contenedores/contenedores/contenedores.component */ "./src/app/info-contenedores/contenedores/contenedores.component.ts");
/* harmony import */ var _info_contenedores_principal_principal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./info-contenedores/principal/principal.component */ "./src/app/info-contenedores/principal/principal.component.ts");
/* harmony import */ var _info_contenedores_informacion_informacion_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./info-contenedores/informacion/informacion.component */ "./src/app/info-contenedores/informacion/informacion.component.ts");
/* harmony import */ var _trivial_trivial_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./trivial/trivial.component */ "./src/app/trivial/trivial.component.ts");
/* harmony import */ var _puntuacion_puntuacion_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./puntuacion/puntuacion.component */ "./src/app/puntuacion/puntuacion.component.ts");
/* harmony import */ var _reciclatu_reciclatu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./reciclatu/reciclatu.component */ "./src/app/reciclatu/reciclatu.component.ts");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _hero_hero_component__WEBPACK_IMPORTED_MODULE_6__["HeroComponent"],
                _open_open_component__WEBPACK_IMPORTED_MODULE_8__["OpenComponent"],
                _panelreg_panelreg_component__WEBPACK_IMPORTED_MODULE_9__["PanelregComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _formulariologin_formulariologin_component__WEBPACK_IMPORTED_MODULE_11__["FormulariologinComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _recicla_recicla_component__WEBPACK_IMPORTED_MODULE_13__["ReciclaComponent"],
                _proyecto_proyecto_component__WEBPACK_IMPORTED_MODULE_14__["ProyectoComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _info_contenedores_info_contenedores_component__WEBPACK_IMPORTED_MODULE_17__["InfoContenedoresComponent"],
                _info_contenedores_contenedores_contenedores_component__WEBPACK_IMPORTED_MODULE_18__["ContenedoresComponent"],
                _info_contenedores_principal_principal_component__WEBPACK_IMPORTED_MODULE_19__["PrincipalComponent"],
                _info_contenedores_informacion_informacion_component__WEBPACK_IMPORTED_MODULE_20__["InformacionComponent"],
                _trivial_trivial_component__WEBPACK_IMPORTED_MODULE_21__["TrivialComponent"],
                _puntuacion_puntuacion_component__WEBPACK_IMPORTED_MODULE_22__["PuntuacionComponent"],
                _reciclatu_reciclatu_component__WEBPACK_IMPORTED_MODULE_23__["ReciclatuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_24__["DragAndDropModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_25__["HttpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contenedores.service.ts":
/*!*****************************************!*\
  !*** ./src/app/contenedores.service.ts ***!
  \*****************************************/
/*! exports provided: ContenedoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContenedoresService", function() { return ContenedoresService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_contenedor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/contenedor.model */ "./src/app/model/contenedor.model.ts");
/* harmony import */ var _model_contenedore_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/contenedore.model */ "./src/app/model/contenedore.model.ts");
/* harmony import */ var _app_data_preguntas_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/data/preguntas.db */ "./src/app/data/preguntas.db.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContenedoresService = /** @class */ (function () {
    function ContenedoresService() {
        //componente contenedor
        this.arrContenedores = [
            new _model_contenedor_model__WEBPACK_IMPORTED_MODULE_1__["Contenedor"]({
                nombre: 'amarillo',
                informacion: '',
                residuos: [
                    'Botellas de plástico',
                    'Latas',
                    'Bolsas de plástico',
                    'Papel de aluminio'
                ],
                errores: [
                    'Envases de cartón',
                    'Chicles'
                ]
            }),
            new _model_contenedor_model__WEBPACK_IMPORTED_MODULE_1__["Contenedor"]({
                nombre: 'verde',
                informacion: '',
                residuos: [
                    'Botellas de cristal',
                    'Botes de cristal',
                    'Frascos de colonia'
                ],
                errores: [
                    'Envases de cristal con partes de plástico (se debe separar antes de reciclar)',
                    'Vasos',
                    'Restos de cerámica'
                ]
            }),
            new _model_contenedor_model__WEBPACK_IMPORTED_MODULE_1__["Contenedor"]({
                nombre: 'azul',
                informacion: '',
                residuos: [
                    'Hojas de papel',
                    'Cajas de cartón',
                    'Envases alimenticios de cartón'
                ],
                errores: [
                    'Cuadernos con tapa de plástico (se debe separar antes de reciclar)',
                    'Folios plastificados'
                ]
            }),
            new _model_contenedor_model__WEBPACK_IMPORTED_MODULE_1__["Contenedor"]({
                nombre: 'naranja',
                informacion: '',
                residuos: [
                    'Restos de comida',
                    'Pañales',
                    'Vasos',
                    'Cerámica'
                ],
                errores: [
                    ''
                ]
            }),
            new _model_contenedor_model__WEBPACK_IMPORTED_MODULE_1__["Contenedor"]({
                nombre: 'marron',
                informacion: '',
                residuos: [
                    'Restos de comida',
                    'Servilletas',
                    'Huesos'
                ],
                errores: [
                    'Toallitas faciales',
                    'Tampones'
                ]
            })
        ];
        //componente trivial
        this.preguntaActiva = 0;
        //componente reciclatu
        //ARRAY CONTENEDORES OBJETO CONTENEDOR
        this.contenedores = [
            new _model_contenedore_model__WEBPACK_IMPORTED_MODULE_2__["Contenedore"](0, 'organico', 'brown', '../../assets/images/c_marron.png'),
            new _model_contenedore_model__WEBPACK_IMPORTED_MODULE_2__["Contenedore"](1, 'residuo', 'orange', '../../assets/images/c_naranja.png'),
            new _model_contenedore_model__WEBPACK_IMPORTED_MODULE_2__["Contenedore"](2, 'vidrio', 'green', '../../assets/images/c_verde.png'),
            new _model_contenedore_model__WEBPACK_IMPORTED_MODULE_2__["Contenedore"](3, 'plastico', 'yellow', '../../assets/images/c_amarillo.png'),
            new _model_contenedore_model__WEBPACK_IMPORTED_MODULE_2__["Contenedore"](4, 'papel', 'azul', '../../assets/images/c_azul.png')
        ];
        //ARRAY OBJETO RESIDUOS
        this.residuos = [
            {
                id: 0,
                nombre: 'platano',
                tipo: 'organico',
                imagen: '../../assets/images/platano.png'
            },
            {
                id: 1,
                nombre: 'botella',
                tipo: 'vidrio',
                imagen: '../../assets/images/vino.png'
            },
            {
                id: 2,
                nombre: 'cartones',
                tipo: 'papel',
                imagen: '../../assets/images/cartones.png'
            },
            {
                id: 3,
                nombre: 'pollo',
                tipo: 'organico',
                imagen: 'ruta'
            },
            {
                id: 4,
                nombre: 'lejia',
                tipo: 'plastico',
                imagen: '../../assets/images/lejia.png'
            },
            {
                id: 5,
                nombre: 'algodon',
                tipo: 'residuo',
                imagen: '../../assets/images/algodon.png'
            },
            {
                id: 6,
                nombre: 'folio',
                tipo: 'papel',
                imagen: 'ruta'
            },
            {
                id: 7,
                nombre: 'chicle',
                tipo: 'residuo',
                imagen: 'ruta'
            },
            {
                id: 8,
                nombre: 'bolsa',
                tipo: 'plastico',
                imagen: 'ruta'
            },
        ];
    }
    //componente trivial
    ContenedoresService.prototype.getPreguntaActiva = function () {
        this.preguntaActiva += 1;
        return _app_data_preguntas_db__WEBPACK_IMPORTED_MODULE_3__["PREGUNTAS"][this.preguntaActiva];
    };
    ContenedoresService.prototype.resetPreguntaActiva = function () {
        this.preguntaActiva = 0;
    };
    ContenedoresService.prototype.getPreguntas = function () {
        return _app_data_preguntas_db__WEBPACK_IMPORTED_MODULE_3__["PREGUNTAS"];
    };
    //componente reciclatu
    ContenedoresService.prototype.getContenedores = function () {
        return this.contenedores;
    };
    ContenedoresService.prototype.getObjectContenedor = function (idx) {
        return this.contenedores[idx];
    };
    ContenedoresService.prototype.getResiduos = function () {
        return this.residuos;
    };
    ContenedoresService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ContenedoresService);
    return ContenedoresService;
}());



/***/ }),

/***/ "./src/app/data/preguntas.db.ts":
/*!**************************************!*\
  !*** ./src/app/data/preguntas.db.ts ***!
  \**************************************/
/*! exports provided: PREGUNTAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREGUNTAS", function() { return PREGUNTAS; });
var PREGUNTAS = [
    {
        id: 0,
        texto: '¿Cuál es la capital de España?',
        respuestas: [
            'Madrid',
            'Barcelona',
            'Valencia',
            'Sevilla'
        ],
        respCorrecta: 'Madrid'
    },
    {
        id: 1,
        texto: 'Tienes cuatro pilas gastadas de un juguete electrónico, ¿Donde las arrojarías?',
        respuestas: [
            'Al contenedor marrón.',
            '¡Esta claro! Al de los plásticos.',
            'Las llevaría al punto limpio más cercano.',
            'Las tiraría a una alcantarilla.'
        ],
        respCorrecta: 'Las llevaría al punto limpio más cercano.'
    },
    {
        id: 2,
        texto: 'Te acabas de comer un helado y no sabes que hacer con su envoltorio.',
        respuestas: [
            'Al contenedor amarillo.',
            'Si no está mirando nadie lo puedo tirar al suelo.',
            'El contenedor de residuos orgánicos junto con el palito.',
            'Ante un residuo tan peligroso lo mejor es llevarlo al punto limpio.'
        ],
        respCorrecta: 'Al contenedor amarillo.'
    },
    {
        id: 3,
        texto: '¿Qué material creado por el ser humano se calcula que habrá más elementos que peces en el oceano?',
        respuestas: [
            'las algas.',
            'La resina.',
            'El chapapote.',
            'El plástico.'
        ],
        respCorrecta: 'El plástico.'
    },
    {
        id: 4,
        texto: 'Acabas de usar una toallita de limpieza facial ¿Donde la puedes tirar?',
        respuestas: [
            'A la taza del retrete.',
            'Al contenedor amarillo.',
            'Al contenedor de resto de residuos orgánicos.',
            'Al contenedor de otros residuos (el naranja).'
        ],
        respCorrecta: 'Al contenedor de otros residuos (el naranja).'
    },
    {
        id: 5,
        texto: '¿Qué debes hacer con el papel de aluminio que envolvía tu bocadillo?',
        respuestas: [
            'Al contenedor de papel y cartón',
            '¡Al punto limpio cuanto antes!',
            'Al contendor amarillo',
            'Al contenedor de vídrio'
        ],
        respCorrecta: 'Al contendor amarillo'
    },
    {
        id: 6,
        texto: '¿Dónde debes tirar el bote de pintura de tus acuarelas?',
        respuestas: [
            'Al contenedor marrón',
            'Al contenedor amarillo',
            'Lo tiras a la puerta del cole',
            'Al contenedor verde'
        ],
        respCorrecta: 'Al contenedor amarillo'
    },
    {
        id: 7,
        texto: 'Has cenado pizza, ¿dónde tiramos la caja de la pizza?',
        respuestas: [
            'Al contendor de plásticos y latas',
            'Al contenedor azul',
            'Al punto limpio lo antes posible',
            'Se lo devuelves al pizzero'
        ],
        respCorrecta: 'Al contenedor azul'
    },
    {
        id: 8,
        texto: 'Se te acaba la tinta del bolígrafo ¿dónde lo tienes que tirar?',
        respuestas: [
            'En el punto limpio',
            'Al contendor azul',
            'Al contenedor amarillo',
            'Al contenedor de otros residuos'
        ],
        respCorrecta: 'Al contenedor de otros residuos'
    },
    {
        id: 9,
        texto: 'Acabas de comer tu plato favorito, ¿dónde debes tirar la servilleta que has utilizado?',
        respuestas: [
            'Al contenedor marrón',
            'Al contenedor azul',
            'Al contenedor amarillo',
            'Al contenedor verde'
        ],
        respCorrecta: 'Al contenedor marrón'
    }
];


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\n    background-color: #4FB99F;\n    width: 100%;\n    height: 50px;\n    text-align: center;\n    color: white;\n    /*text-shadow: 1px 1px black;\n    border-top: 2px solid black;*/\n}\n\n.footer p{\n    padding: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYjtrQ0FDOEI7Q0FDakM7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEZCOTlGO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8qdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrOyovXG59XG5cbi5mb290ZXIgcHtcbiAgICBwYWRkaW5nOiA3cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n<p class=\"mb-0\">Copyright@ 2018</p>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/formulariologin/formulariologin.component.css":
/*!***************************************************************!*\
  !*** ./src/app/formulariologin/formulariologin.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-personal{\n    background-color: #112F41\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXVsYXJpb2xvZ2luL2Zvcm11bGFyaW9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0NBQzVCIiwiZmlsZSI6InNyYy9hcHAvZm9ybXVsYXJpb2xvZ2luL2Zvcm11bGFyaW9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLXBlcnNvbmFse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTJGNDFcbn0iXX0= */"

/***/ }),

/***/ "./src/app/formulariologin/formulariologin.component.html":
/*!****************************************************************!*\
  !*** ./src/app/formulariologin/formulariologin.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"bg-personal\">\n  <form class=\"px-4 py-3 row\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"inicioSesion(form.value)\">\n    <div class=\"form-group col-md-6\">\n      <label class=\"text-light\" for=\"exampleDropdownFormEmail1\">Usuario</label>\n      <input type=\"email\" class=\"form-control\" id=\"exampleDropdownFormEmail1\" placeholder=\"ej: Usuario12\" formControlName=\"usuario\">\n    </div>\n    <div class=\"form-group col-md-6\">\n      <label class=\"text-light\" for=\"exampleDropdownFormPassword1\">Contraseña</label>\n      <input type=\"password\" class=\"form-control\" id=\"exampleDropdownFormPassword1\" placeholder=\"Contraseña\" formControlName=\"contrasena\">\n    </div>\n    <div *ngIf=\"error\" class=\"col-12 text-danger\"><p>El usuario o contraseña son incorrectos</p></div>\n    <div class=\"col-6\">\n      <button type=\"submit\" class=\"btn btn-outline-light \">Entrar</button>\n    </div>\n    <div class=\"col-6\">\n      <p class=\"text-info text-right\">¿Aún no tienes cuenta? <u><a class=\"text-info\" [routerLink]=\"['../registro']\">¡Registrate!</a></u></p>\n      \n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/formulariologin/formulariologin.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/formulariologin/formulariologin.component.ts ***!
  \**************************************************************/
/*! exports provided: FormulariologinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulariologinComponent", function() { return FormulariologinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../peticiones.service */ "./src/app/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormulariologinComponent = /** @class */ (function () {
    function FormulariologinComponent(peticionesService, router) {
        this.peticionesService = peticionesService;
        this.router = router;
        this.error = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            usuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            contrasena: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    FormulariologinComponent.prototype.ngOnInit = function () {
    };
    FormulariologinComponent.prototype.inicioSesion = function (data) {
        var _this = this;
        //console.log(data); //USUARIO Y SU PASSWORD (DATOS ESCRITOS EN EL LOGIN)
        this.peticionesService.usuarioLogueado(data).then(function (res) {
            console.log(res.json()); //TODA LA INFORMACIÓN DEL USUARIO QUE ESTÁ LOGIN
            var response = res.json();
            if (response.error) {
                console.log('El usuario no existe');
                _this.error = true;
            }
            else {
                _this.usuario = res.json();
                localStorage.setItem("usuario", JSON.stringify(_this.usuario));
                console.log('El usuario existe');
                setTimeout(function () {
                    _this.router.navigate(['open/profile']);
                }, 300);
            }
        });
    };
    FormulariologinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-formulariologin',
            template: __webpack_require__(/*! ./formulariologin.component.html */ "./src/app/formulariologin/formulariologin.component.html"),
            styles: [__webpack_require__(/*! ./formulariologin.component.css */ "./src/app/formulariologin/formulariologin.component.css")]
        }),
        __metadata("design:paramtypes", [_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FormulariologinComponent);
    return FormulariologinComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cabeceropersonalizado{\n\tbackground-color: #4FB99F;\n\tcolor: white;\n\t/*border-bottom:2px solid black;*/\n}\n\n.cabeceropersonalizado a{\n\tbackground-color: #4FB99F;\n\tcolor: white;\n}\n\na{\n\ttransition: 1s;\n}\n\n.activa,a:hover{\n\tcolor: #112F41 !important;\n}\n\nimg{\n\tmax-width: 50px;\n\tmax-height: 50px;\n}\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYixrQ0FBa0M7Q0FDbEM7O0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiOztBQUVEO0NBQ0MsZUFBZTtDQUNmOztBQUVEO0NBQ0MsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWJlY2Vyb3BlcnNvbmFsaXphZG97XG5cdGJhY2tncm91bmQtY29sb3I6ICM0RkI5OUY7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Lypib3JkZXItYm90dG9tOjJweCBzb2xpZCBibGFjazsqL1xufVxuXG4uY2FiZWNlcm9wZXJzb25hbGl6YWRvIGF7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0RkI5OUY7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuYXtcblx0dHJhbnNpdGlvbjogMXM7XG59XG5cbi5hY3RpdmEsYTpob3Zlcntcblx0Y29sb3I6ICMxMTJGNDEgIWltcG9ydGFudDtcbn1cblxuaW1ne1xuXHRtYXgtd2lkdGg6IDUwcHg7XG5cdG1heC1oZWlnaHQ6IDUwcHg7XG59XG5cblxuXG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"cabeceropersonalizado navbar navbar-expand-lg\">\n  <div class=\"mr-3\"><img src=\"../../assets/images/logo.png\"/></div>\n  <a class=\"navbar-brand\" href=\"#\">Recicla hoy</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <!--<span class=\"navbar-toggler-icon\">--</span>-->\n    <img class=\"navbar-toggler-icon\" src=\"../../assets/images/iconmenu.png\"/>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav pl-5 pr-3 text-right\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link pl-5\" [routerLink]=\"['./home']\" [routerLinkActive]=\"['activa']\">INICIO <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link pl-5\" [routerLink]=\"['./open']\" [routerLinkActive]=\"['activa']\">¿JUGAMOS?</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link pl-5\" [routerLink]=\"['./puntuacion']\" [routerLinkActive]=\"['activa']\">PUNTUACIÓN</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link pl-5\" [routerLink]=\"['./proyecto']\" [routerLinkActive]=\"['activa']\">PROYECTO</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link pl-5\" [routerLink]=\"['./registro']\" [routerLinkActive]=\"['activa']\">REGISTRATE</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/hero/hero.component.css":
/*!*****************************************!*\
  !*** ./src/app/hero/hero.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin{\n    margin-top: 17%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby9oZXJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9oZXJvL2hlcm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW57XG4gICAgbWFyZ2luLXRvcDogMTclO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/hero/hero.component.html":
/*!******************************************!*\
  !*** ./src/app/hero/hero.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card text-white\">\n  <img class=\"card-img\" src=\"../../assets/images/cascada.jpg\" alt=\"Card image\">\n  <div class=\"card-img-overlay\">\n    <h2 class=\"card-title text-center display-4 margin\">Recicla hoy</h2>\n    <h5 class=\"card-text text-center\">¿Jugamos?</h5>\n    \n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/hero/hero.component.ts":
/*!****************************************!*\
  !*** ./src/app/hero/hero.component.ts ***!
  \****************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero',
            template: __webpack_require__(/*! ./hero.component.html */ "./src/app/hero/hero.component.html"),
            styles: [__webpack_require__(/*! ./hero.component.css */ "./src/app/hero/hero.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-hero></app-hero>\n<app-recicla></app-recicla>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/info-contenedores/contenedores/contenedores.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/info-contenedores/contenedores/contenedores.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".size-1{\n    width: 300px;\n    text-decoration: none !important;\n}\n.imagen:hover {\n    -webkit-filter: opacity(.5);\n            filter: opacity(.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby1jb250ZW5lZG9yZXMvY29udGVuZWRvcmVzL2NvbnRlbmVkb3Jlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztDQUNwQztBQUNEO0lBQ0ksNEJBQW9CO1lBQXBCLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2luZm8tY29udGVuZWRvcmVzL2NvbnRlbmVkb3Jlcy9jb250ZW5lZG9yZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXplLTF7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLmltYWdlbjpob3ZlciB7XG4gICAgZmlsdGVyOiBvcGFjaXR5KC41KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/info-contenedores/contenedores/contenedores.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/info-contenedores/contenedores/contenedores.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-3 mt-3\">\n  <div class=\"col-lg-2 col-md-2 col-sm-2 col-4 mb-4 imagen\" *ngFor=\"let cont of contenedores\" (click)=\"handleClick(cont)\"><img src=\"../../../assets/images/contenedores/contenedor_{{cont.nombre}}_xs-01.png\" class=\" img-fluid\" alt=\"\"></div>\n  <div class=\"col-lg-2 col-md-2 col-sm-2 col-4\"><img src=\"\" alt=\"\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/info-contenedores/contenedores/contenedores.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/info-contenedores/contenedores/contenedores.component.ts ***!
  \**************************************************************************/
/*! exports provided: ContenedoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContenedoresComponent", function() { return ContenedoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_contenedores_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/contenedores.service */ "./src/app/contenedores.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContenedoresComponent = /** @class */ (function () {
    function ContenedoresComponent(contenedoresService) {
        this.contenedoresService = contenedoresService;
        this.envioArrContenedor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contenedores = this.contenedoresService.arrContenedores;
    }
    ContenedoresComponent.prototype.ngOnInit = function () {
    };
    ContenedoresComponent.prototype.handleClick = function (data) {
        //console.log(data)
        this.envioArrContenedor.emit(data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContenedoresComponent.prototype, "envioArrContenedor", void 0);
    ContenedoresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contenedores',
            template: __webpack_require__(/*! ./contenedores.component.html */ "./src/app/info-contenedores/contenedores/contenedores.component.html"),
            styles: [__webpack_require__(/*! ./contenedores.component.css */ "./src/app/info-contenedores/contenedores/contenedores.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_contenedores_service__WEBPACK_IMPORTED_MODULE_1__["ContenedoresService"]])
    ], ContenedoresComponent);
    return ContenedoresComponent;
}());



/***/ }),

/***/ "./src/app/info-contenedores/info-contenedores.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/info-contenedores/info-contenedores.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ciudad{\n    position: relative;\n}\n@-webkit-keyframes miAnimación {\n    0% { margin-left: -1350px}\n    100%{ margin-left: 200px }\n  }\n@keyframes miAnimación {\n    0% { margin-left: -1350px}\n    100%{ margin-left: 200px }\n  }\n.size-camion { -webkit-animation: miAnimación 8s cubic-bezier(0, 0, 1, 1) infinite normal both; animation: miAnimación 8s cubic-bezier(0, 0, 1, 1) infinite normal both;}\n.size-camion{\n    width: 150px;\n    position: absolute;\n    margin-left: -900px;\n    margin-top: 13%;\n    -webkit-transform: translate(30px, 7px);\n            transform: translate(30px, 7px);\n}\n.bg-fondo{\n    background-color: #BEEB9F;\n}\n@media only screen and (max-width: 1000px) {\n    .size-camion{\n        margin-top: 10%;\n    }\n}\n@media only screen and (max-width: 750px) {\n    .size-camion{\n        margin-top: 8%;\n    }\n}\n@media only screen and (max-width: 500px) {\n    .size-camion{\n        width: 100px;\n        margin-top: 6%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby1jb250ZW5lZG9yZXMvaW5mby1jb250ZW5lZG9yZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksS0FBSyxvQkFBb0IsQ0FBQztJQUMxQixNQUFNLGtCQUFrQixFQUFFO0dBQzNCO0FBSEg7SUFDSSxLQUFLLG9CQUFvQixDQUFDO0lBQzFCLE1BQU0sa0JBQWtCLEVBQUU7R0FDM0I7QUFFSCxlQUFlLGdGQUF3RSxDQUF4RSx3RUFBd0UsQ0FBQztBQUN4RjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQix3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0NBQ25DO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJO1FBQ0ksZ0JBQWdCO0tBQ25CO0NBQ0o7QUFDRDtJQUNJO1FBQ0ksZUFBZTtLQUNsQjtDQUNKO0FBQ0Q7SUFDSTtRQUNJLGFBQWE7UUFDYixlQUFlO0tBQ2xCO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9pbmZvLWNvbnRlbmVkb3Jlcy9pbmZvLWNvbnRlbmVkb3Jlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpdWRhZHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5Aa2V5ZnJhbWVzIG1pQW5pbWFjacOzbiB7XG4gICAgMCUgeyBtYXJnaW4tbGVmdDogLTEzNTBweH1cbiAgICAxMDAleyBtYXJnaW4tbGVmdDogMjAwcHggfVxuICB9XG4gICBcbi5zaXplLWNhbWlvbiB7IGFuaW1hdGlvbjogbWlBbmltYWNpw7NuIDhzIGN1YmljLWJlemllcigwLCAwLCAxLCAxKSBpbmZpbml0ZSBub3JtYWwgYm90aDt9XG4uc2l6ZS1jYW1pb257XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogLTkwMHB4O1xuICAgIG1hcmdpbi10b3A6IDEzJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCA3cHgpO1xufVxuXG4uYmctZm9uZG97XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JFRUI5Rjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuc2l6ZS1jYW1pb257XG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgLnNpemUtY2FtaW9ue1xuICAgICAgICBtYXJnaW4tdG9wOiA4JTtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLnNpemUtY2FtaW9ue1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDYlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/info-contenedores/info-contenedores.component.html":
/*!********************************************************************!*\
  !*** ./src/app/info-contenedores/info-contenedores.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <img src=\"../../assets/images/ciudad/ciudad.png\" class=\"img-fluid \" alt=\"\">\n      <img src=\"../../assets/images/ciudad/camion.png\" class=\"img-fluid size-camion\" alt=\"\">\n    </div>\n    <div class=\"col-lg-8 col-md-12 col-xs-12 mt-3 mb-3 bg-fondo\">\n      <app-contenedores (envioArrContenedor)=\"handleEnvioArr($event)\"></app-contenedores>\n      <app-principal [contenedor]=\"arrContenedroSeleccionado\"></app-principal>\n    </div>\n\n    <div class=\"col-lg-4 col-md-12 col-xs-12 mt-3 mb-3 bg-fondo\">\n      <app-informacion [contenedor]=\"arrContenedroSeleccionado\"></app-informacion>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/info-contenedores/info-contenedores.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/info-contenedores/info-contenedores.component.ts ***!
  \******************************************************************/
/*! exports provided: InfoContenedoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoContenedoresComponent", function() { return InfoContenedoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoContenedoresComponent = /** @class */ (function () {
    function InfoContenedoresComponent() {
    }
    InfoContenedoresComponent.prototype.ngOnInit = function () {
    };
    InfoContenedoresComponent.prototype.handleEnvioArr = function (arrRecibido) {
        console.log(arrRecibido);
        this.arrContenedroSeleccionado = arrRecibido;
    };
    InfoContenedoresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-contenedores',
            template: __webpack_require__(/*! ./info-contenedores.component.html */ "./src/app/info-contenedores/info-contenedores.component.html"),
            styles: [__webpack_require__(/*! ./info-contenedores.component.css */ "./src/app/info-contenedores/info-contenedores.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoContenedoresComponent);
    return InfoContenedoresComponent;
}());



/***/ }),

/***/ "./src/app/info-contenedores/informacion/informacion.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/info-contenedores/informacion/informacion.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".naranja{\n    background-color: #F38626;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby1jb250ZW5lZG9yZXMvaW5mb3JtYWNpb24vaW5mb3JtYWNpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtDQUM3QiIsImZpbGUiOiJzcmMvYXBwL2luZm8tY29udGVuZWRvcmVzL2luZm9ybWFjaW9uL2luZm9ybWFjaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFyYW5qYXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjM4NjI2O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/info-contenedores/informacion/informacion.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/info-contenedores/informacion/informacion.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"naranja p-4 mt-3 text-light\" *ngIf=\"contenedor\">\n  <h2>Contenedor {{contenedor?.nombre}}</h2>\n  <hr>\n  <p>Descripción {{contenedor?.informacion}}</p>\n  <section>\n    <h3>Lo que debes tirar</h3>\n    <ul *ngFor=\"let ej of contenedor?.residuos\">\n      <li>{{ej}}</li>\n    </ul>\n\n  </section>\n\n  <section>\n    <h3>Lo que no debes tirar</h3>\n    <ul *ngFor=\"let err of contenedor?.errores\">\n        <li>{{err}}</li>\n      </ul>\n\n  </section>\n</div>\n\n<div class=\"naranja p-4 mt-3 text-light\" *ngIf=\"!contenedor\">\n  ELIGE UN CONTENEDOR \n</div>"

/***/ }),

/***/ "./src/app/info-contenedores/informacion/informacion.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/info-contenedores/informacion/informacion.component.ts ***!
  \************************************************************************/
/*! exports provided: InformacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionComponent", function() { return InformacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InformacionComponent = /** @class */ (function () {
    function InformacionComponent() {
    }
    InformacionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], InformacionComponent.prototype, "contenedor", void 0);
    InformacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-informacion',
            template: __webpack_require__(/*! ./informacion.component.html */ "./src/app/info-contenedores/informacion/informacion.component.html"),
            styles: [__webpack_require__(/*! ./informacion.component.css */ "./src/app/info-contenedores/informacion/informacion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InformacionComponent);
    return InformacionComponent;
}());



/***/ }),

/***/ "./src/app/info-contenedores/principal/principal.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/info-contenedores/principal/principal.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".size{\n    width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby1jb250ZW5lZG9yZXMvcHJpbmNpcGFsL3ByaW5jaXBhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2luZm8tY29udGVuZWRvcmVzL3ByaW5jaXBhbC9wcmluY2lwYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXple1xuICAgIHdpZHRoOiAzMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/info-contenedores/principal/principal.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/info-contenedores/principal/principal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3\" *ngIf=\"contenedor\">\n  <img src=\"../../../assets/images/contenedores/contenedor_{{contenedor.nombre}}_xs-01.png\" class=\"img-fluid size mx-auto d-block\" alt=\"\">\n</div>\n<div class=\"p-3\" *ngIf=\"!contenedor\">\n  \n</div>\n\n"

/***/ }),

/***/ "./src/app/info-contenedores/principal/principal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/info-contenedores/principal/principal.component.ts ***!
  \********************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent() {
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PrincipalComponent.prototype, "contenedor", void 0);
    PrincipalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-principal',
            template: __webpack_require__(/*! ./principal.component.html */ "./src/app/info-contenedores/principal/principal.component.html"),
            styles: [__webpack_require__(/*! ./principal.component.css */ "./src/app/info-contenedores/principal/principal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "./src/app/model/contenedor.model.ts":
/*!*******************************************!*\
  !*** ./src/app/model/contenedor.model.ts ***!
  \*******************************************/
/*! exports provided: Contenedor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contenedor", function() { return Contenedor; });
var Contenedor = /** @class */ (function () {
    function Contenedor(values) {
        this.nombre = values.nombre;
        this.informacion = values.informacion;
        this.residuos = values.residuos;
        this.errores = values.errores;
    }
    return Contenedor;
}());



/***/ }),

/***/ "./src/app/model/contenedore.model.ts":
/*!********************************************!*\
  !*** ./src/app/model/contenedore.model.ts ***!
  \********************************************/
/*! exports provided: Contenedore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contenedore", function() { return Contenedore; });
var Contenedore = /** @class */ (function () {
    function Contenedore(pId, pNombre, pColor, pImagen) {
        this.id = pId;
        this.nombre = pNombre;
        this.color = pColor;
        this.imagen = pImagen;
    }
    return Contenedore;
}());



/***/ }),

/***/ "./src/app/open/open.component.css":
/*!*****************************************!*\
  !*** ./src/app/open/open.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n    background-color: white;\n}\n\n.container{\n    background-color: white;\n}\n\n.bg-personal{\n    background-color: #112F41\n}\n\nh3{\n    text-align: center;\n    padding-top: 20px;\n}\n\n.presentacion{\n    /*padding-left:20%;\n    padding-right: 20%;*/\n\n}\n\n/*.carta{\n    float:left;\n    padding:30px;\n    text-align: center;\n}*/\n\n.sombra:hover img{\n    opacity: 0.6;\n    transition:1s; \n}\n\n/*.row:after{\n    clear: both;\n}*/\n\n/*img{\n    border-radius: 10px;\n}*/\n\na{\n    text-decoration: none;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blbi9vcGVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0k7eUJBQ3FCOztDQUV4Qjs7QUFFRDs7OztHQUlHOztBQUVIO0lBQ0ksYUFBYTtJQUNiLGNBQWM7Q0FDakI7O0FBRUQ7O0dBRUc7O0FBRUg7O0dBRUc7O0FBRUg7SUFDSSxzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9vcGVuL29wZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5iZy1wZXJzb25hbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyRjQxXG59XG5cbmgze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnByZXNlbnRhY2lvbntcbiAgICAvKnBhZGRpbmctbGVmdDoyMCU7XG4gICAgcGFkZGluZy1yaWdodDogMjAlOyovXG5cbn1cblxuLyouY2FydGF7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICBwYWRkaW5nOjMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSovXG5cbi5zb21icmE6aG92ZXIgaW1ne1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICB0cmFuc2l0aW9uOjFzOyBcbn1cblxuLyoucm93OmFmdGVye1xuICAgIGNsZWFyOiBib3RoO1xufSovXG5cbi8qaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Ki9cblxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/open/open.component.html":
/*!******************************************!*\
  !*** ./src/app/open/open.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"container\">\n        <div class=\"bg-personal\">\n            <router-outlet></router-outlet>\n        </div>\n        <h3>Mini-juegos</h3>\n\n        \n        <div class=\"row\">\n            <div class=\"col-12 col-xs-6 col-md-6 col-lg-4\">\n                <a [routerLink]=\"['../colores']\">\n                    <div class=\"sombra p-5\">\n                        <img class=\"img-fluid\" src=\"../../assets/images/trash-truck.png\"/>\n                    </div>\n                    <h5 class=\"text-center\">Los contenedores</h5>\n                </a>\n            </div>\n            <div class=\"col-12 col-xs-6 col-md-6 col-lg-4\">\n                <a [routerLink]=\"['../trivial']\">\n                    <div class=\"sombra p-5\">\n                        <img class=\"img-fluid\" src=\"../../assets/images/trivial.png\"/>\n                    </div>\n                <h5 class=\"text-center\">Trivial</h5>\n                </a>\n            </div>\n            <div class=\"col-12 col-xs-6 col-md-6 col-lg-4\">\n                <a [routerLink]=\"['../reciclatu']\">\n                    <div class=\"sombra p-5\">\n                        <img class=\"img-fluid\" src=\"../../assets/images/reciclar-signo.png\"/>\n                    </div>\n                <h5 class=\"text-center\">Reciclatu</h5>\n                </a>\n            </div>\n            <div class=\"col-12 col-xs-6 col-md-6 col-lg-4\">\n                <div class=\"sombra p-5\">\n                    <img class=\"img-fluid\" src=\"../../assets/images/mundo.png\"/>\n                </div>\n                <h5 class=\"text-center\">Cuida del mundo</h5>\n            </div>\n            <div class=\"col-12 col-xs-6 col-md-6 col-lg-4\">\n                <div class=\"sombra p-5\">\n                    <img class=\"img-fluid\" src=\"../../assets/images/agua.png\"/>\n                </div>\n                <h5 class=\"text-center\">Pescando residuos</h5>\n            </div>\n            \n\n        </div>\n        \n       \n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/open/open.component.ts":
/*!****************************************!*\
  !*** ./src/app/open/open.component.ts ***!
  \****************************************/
/*! exports provided: OpenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenComponent", function() { return OpenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpenComponent = /** @class */ (function () {
    function OpenComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.usuario = userService.usuarioLog;
        if (JSON.parse(localStorage.getItem("usuario"))) {
            this.router.navigate(['open/profile']);
        }
    }
    OpenComponent.prototype.ngOnInit = function () {
    };
    OpenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open',
            template: __webpack_require__(/*! ./open.component.html */ "./src/app/open/open.component.html"),
            styles: [__webpack_require__(/*! ./open.component.css */ "./src/app/open/open.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]])
    ], OpenComponent);
    return OpenComponent;
}());



/***/ }),

/***/ "./src/app/panelreg/panelreg.component.css":
/*!*************************************************!*\
  !*** ./src/app/panelreg/panelreg.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n\tmin-height: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWxyZWcvcGFuZWxyZWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscmVnL3BhbmVscmVnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xuXHRtaW4taGVpZ2h0OiA0NTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/panelreg/panelreg.component.html":
/*!**************************************************!*\
  !*** ./src/app/panelreg/panelreg.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"container\">\n        <p class=\"text-center mt-5\">El usuario ha sido registrado con éxito.</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/panelreg/panelreg.component.ts":
/*!************************************************!*\
  !*** ./src/app/panelreg/panelreg.component.ts ***!
  \************************************************/
/*! exports provided: PanelregComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelregComponent", function() { return PanelregComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PanelregComponent = /** @class */ (function () {
    function PanelregComponent(router) {
        this.router = router;
    }
    PanelregComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['open']);
        }, 4000);
    };
    PanelregComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-panelreg',
            template: __webpack_require__(/*! ./panelreg.component.html */ "./src/app/panelreg/panelreg.component.html"),
            styles: [__webpack_require__(/*! ./panelreg.component.css */ "./src/app/panelreg/panelreg.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PanelregComponent);
    return PanelregComponent;
}());



/***/ }),

/***/ "./src/app/peticiones.service.ts":
/*!***************************************!*\
  !*** ./src/app/peticiones.service.ts ***!
  \***************************************/
/*! exports provided: PeticionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeticionesService", function() { return PeticionesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeticionesService = /** @class */ (function () {
    function PeticionesService(http) {
        this.http = http;
        // this.baseUrl = 'http://localhost:3000/api';
        this.baseUrl = 'https://proyecto-recicla.herokuapp.com/api';
    }
    //componente puntuaciones
    PeticionesService.prototype.getPartidas = function () {
        return this.http.get(this.baseUrl + "/partidas/json").toPromise();
    };
    //componente registro de usuarios
    PeticionesService.prototype.nuevoUsuario = function (values) {
        return this.http.post(this.baseUrl + "/usuarios/json", values).toPromise();
    };
    //componente login
    PeticionesService.prototype.usuarioLogueado = function (values) {
        return this.http.post(this.baseUrl + "/usuarios/login", values).toPromise();
    };
    //peticion agregar partidas
    PeticionesService.prototype.agregarPartidas = function (data) {
        console.log(data);
        return this.http.post(this.baseUrl + "/partidas/enter", data).toPromise();
    };
    PeticionesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], PeticionesService);
    return PeticionesService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-personal{\n    background-color: #112F41\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7Q0FDNUIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1wZXJzb25hbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyRjQxXG59Il19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-personal text-light p-3 row media\">\n  <div class=\"col-6 media-body\">\n    <h2 class=\"text-light\">Hola {{usuario.username}}</h2>\n    <p>{{usuario.email}}</p>\n  </div>\n  <div class=\"col-6 align-self-center\">\n    <button (click)=\"logout()\" class=\"btn float-right\">Logout</button>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.usuario = this.userService.usuarioLog;
        console.log(this.usuario);
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.logout = function () {
        localStorage.removeItem("usuario");
        this.router.navigate(['/open']);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/proyecto/proyecto.component.css":
/*!*************************************************!*\
  !*** ./src/app/proyecto/proyecto.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n    background-color: white;\n}\n\n.container{\n    background-color: white;\n}\n\n.proyecto{\n    padding:25px;\n    color: #444;\n    text-align: center;\n    font-size: 1.3em;\n    font-family: 'Varela Round', sans-serif;\n}\n\n.promotores{\n   \n    margin:0px auto;\n    padding:25px;\n    color: #444;\n    text-align: center;\n    font-size: 1.3em;\n    font-family: 'Varela Round', sans-serif;\n}\n\nhr{\n   \n    margin-bottom: 30px;\n}\n\np{\n    padding: 2%;\n}\n\nimg{\n    max-width: 200px;\n    max-height: 200px;\n}\n\n\n    \n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJveWVjdG8vcHJveWVjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix3Q0FBd0M7Q0FDM0M7O0FBRUQ7O0lBRUksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix3Q0FBd0M7Q0FDM0M7O0FBRUQ7O0lBRUksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Byb3llY3RvL3Byb3llY3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucHJveWVjdG97XG4gICAgcGFkZGluZzoyNXB4O1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJywgc2Fucy1zZXJpZjtcbn1cblxuLnByb21vdG9yZXN7XG4gICBcbiAgICBtYXJnaW46MHB4IGF1dG87XG4gICAgcGFkZGluZzoyNXB4O1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJywgc2Fucy1zZXJpZjtcbn1cblxuaHJ7XG4gICBcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5we1xuICAgIHBhZGRpbmc6IDIlO1xufVxuXG5pbWd7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuXG4gICAgXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/proyecto/proyecto.component.html":
/*!**************************************************!*\
  !*** ./src/app/proyecto/proyecto.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"container\">\n    <div class=\"proyecto\">\n      <h3>Proyecto</h3>\n      <hr/>\n      <p>El proyecto Recicla hoy da sus primeros pasos como una solución a la gran necesidad social de educar a nuestros hijos en valores tan importantes como el reciclaje de residuos.</p>\n      <p>Hoy día, nadie es capaz de negar los importantes daños que el ser humano con su acción está haciendo al medio ambiente. Por ello, es también nuestra responsabilidad contribuir de forma activa a paliar los efectos nocivos de la acción contaminante.</p>\n      <p>El proyecto tiene como base enseñar a los más pequeños, a través de sencillos juegos apoyados por una infografía temática, aquellas cosas que pueden hacer en su vida cotidiana para hacer más efectiva la importante labor del reciclaje  </p>\n    </div>\n    <div class=\"promotores\">\n      <h3>Promotores</h3>\n      <hr/>\n      <div class=\"card-columns\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\".../100px160/\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Card title that wraps to a new line</h5>\n            <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n          </div>\n        </div>\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\".../100px160/\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Marcos Agudo Prieto</h5>\n            <p class=\"card-text\">Desarrollador web.Full-stack.MEAN-stack.Diseñador gráfico</p>\n            \n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/proyecto/proyecto.component.ts":
/*!************************************************!*\
  !*** ./src/app/proyecto/proyecto.component.ts ***!
  \************************************************/
/*! exports provided: ProyectoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectoComponent", function() { return ProyectoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProyectoComponent = /** @class */ (function () {
    function ProyectoComponent() {
    }
    ProyectoComponent.prototype.ngOnInit = function () {
    };
    ProyectoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-proyecto',
            template: __webpack_require__(/*! ./proyecto.component.html */ "./src/app/proyecto/proyecto.component.html"),
            styles: [__webpack_require__(/*! ./proyecto.component.css */ "./src/app/proyecto/proyecto.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProyectoComponent);
    return ProyectoComponent;
}());



/***/ }),

/***/ "./src/app/puntuacion/puntuacion.component.css":
/*!*****************************************************!*\
  !*** ./src/app/puntuacion/puntuacion.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thead-color{\n    background-color: #112F41;\n    color: white;\n}\n/*.bg-img{\nbackground-image: url('../../assets/images/ciudad/ciudad.png');\nbackground-position: center;\nbackground-repeat: no-repeat;\nbackground-size: cover;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVudHVhY2lvbi9wdW50dWFjaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtDQUNoQjtBQUNEOzs7OztHQUtHIiwiZmlsZSI6InNyYy9hcHAvcHVudHVhY2lvbi9wdW50dWFjaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhlYWQtY29sb3J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMkY0MTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4vKi5iZy1pbWd7XG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2l1ZGFkL2NpdWRhZC5wbmcnKTtcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSovIl19 */"

/***/ }),

/***/ "./src/app/puntuacion/puntuacion.component.html":
/*!******************************************************!*\
  !*** ./src/app/puntuacion/puntuacion.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-img\">\n  <div class=\"container mt-3 mb-3\">\n    <h1 class=\"text-center text-warning\">LAS MEJORES PUNTUACIONES</h1>\n    <table class=\"table table-hover\">\n      <thead class=\"thead-color\">\n        <tr>\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Nombre</th>\n          <th scope=\"col\">Juego</th>\n          <th scope=\"col\">Puntuación</th>\n          <th scope=\"col\">Fecha</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let partida of partidas; let i = index\">\n          <th scope=\"row\">{{i+1}}</th>\n          <td>{{partida.username}}</td>\n          <td>{{partida.nombre}}</td>\n          <td>{{partida.puntuacion}}</td>\n          <td>{{partida.fecha}}</td>\n        </tr>\n        \n      </tbody>\n    </table>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/puntuacion/puntuacion.component.ts":
/*!****************************************************!*\
  !*** ./src/app/puntuacion/puntuacion.component.ts ***!
  \****************************************************/
/*! exports provided: PuntuacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuntuacionComponent", function() { return PuntuacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../peticiones.service */ "./src/app/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PuntuacionComponent = /** @class */ (function () {
    //EN EL FUTURO HACER UN ARRAY SOLO CON LAS 10 MEJORES PUNTUACIONES
    //EN EL FUTURO MODIFICAR LA PETICION PARA QUE DEVUELVA POR ORDEN DE RANKEO
    function PuntuacionComponent(peticionesService) {
        this.peticionesService = peticionesService;
    }
    PuntuacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.peticionesService.getPartidas().then(function (res) {
            console.log(res.json());
            _this.partidas = res.json();
            console.log(_this.partidas);
        });
    };
    PuntuacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-puntuacion',
            template: __webpack_require__(/*! ./puntuacion.component.html */ "./src/app/puntuacion/puntuacion.component.html"),
            styles: [__webpack_require__(/*! ./puntuacion.component.css */ "./src/app/puntuacion/puntuacion.component.css")]
        }),
        __metadata("design:paramtypes", [_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], PuntuacionComponent);
    return PuntuacionComponent;
}());



/***/ }),

/***/ "./src/app/recicla/recicla.component.css":
/*!***********************************************!*\
  !*** ./src/app/recicla/recicla.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .container-fluid{\n    background-color: lightblue;\n} */\n\n.container{\n    background-color: white;\n}\n\nimg{\n    width: 250px;\n    margin: auto;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaWNsYS9yZWNpY2xhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7O0FBRUo7SUFDSSx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL3JlY2ljbGEvcmVjaWNsYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNvbnRhaW5lci1mbHVpZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG59ICovXG5cbi5jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmltZ3tcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/recicla/recicla.component.html":
/*!************************************************!*\
  !*** ./src/app/recicla/recicla.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-warning\">\n  <div class=\"container-fluid bg-warning\">\n    <div class=\"container bg-warning text-light pt-5 pb-5\">\n      <h2>¿CÓMO FUNCIONA?</h2>\n      <h5>Diviertete aprendiendo a reciclar</h5>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"container\">\n    <div class=\"row\">\n          <div class=\"col-12 col-xs-12 col-md-4 col-lg-4 mb-4\">\n            <a [routerLink]=\"['../registro']\">\n              <img class=\"img-fluid\" src=\"../../assets/images/registro.png\" alt=\"\">\n            </a>\n          </div>\n          <div class=\"col-12 col-xs-12 col-md-8 col-lg-8 mb-4 mt-4 pt-4\">\n            <h2><a [routerLink]=\"['../registro']\">¡Registrate!</a></h2>\n            <p>Registrarse en <strong>Recicla hoy</strong> es muy sencillo, solo necesitarás un email, un nickname y una contraseña. Recuerda que la contraseña la necesitarás para poder acceder a tu perfil. Además puedes añadir otra información como tu curso o edad.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<div class=\"container-fluid\">\n  <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12 col-xs-12 col-md-4 col-lg-4 mb-4 mt-4\">\n          <a [routerLink]=\"['../open']\">\n            <img class=\"img-fluid\" src=\"../../assets/images/promocion.png\">\n          </a>\n        </div>\n        <div class=\"col-12 col-xs-12 col-md-8 col-lg-8 mb-4 mt-4 pt-4\">\n          <h2><a [routerLink]=\"['../open']\">¡A jugar!</a></h2>\n          <p>Antes de empezar a jugar recuerda que debes acceder a tu perfil. Elige de entre los juegos que tenemos disponibles el que más te guste y difruta aprendiendo a reciclar. No olvides que puedes jugar cuantas veces quieras.</p>\n        </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"container\">\n      <div class=\"row\">  \n        <div class=\"col-12 col-xs-12 col-md-4 col-lg-4 mb-4 mt-4\">\n          <a [routerLink]=\"['../puntuacion']\">\n            <img class=\"img-fluid\" src=\"../../assets/images/puntuacion.png\" alt=\"\">\n          </a>\n        </div>\n        <div class=\"col-12 col-xs-12 col-md-8 col-lg-8 mb-4 mt-4 pt-4\">\n          <h2><a [routerLink]=\"['../puntuacion']\">Echale un vistazo a las puntuaciones</a></h2>\n          <p>Puedes acceder en cualquier momento a las puntuaciones y ver el ranking de las mejores puntuaciones. Para que tus puntuaciones se muestren en el ranking tienes que acceder a tu perfil antes de comenzar el juego.</p>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/recicla/recicla.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recicla/recicla.component.ts ***!
  \**********************************************/
/*! exports provided: ReciclaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReciclaComponent", function() { return ReciclaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReciclaComponent = /** @class */ (function () {
    function ReciclaComponent() {
    }
    ReciclaComponent.prototype.ngOnInit = function () {
    };
    ReciclaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recicla',
            template: __webpack_require__(/*! ./recicla.component.html */ "./src/app/recicla/recicla.component.html"),
            styles: [__webpack_require__(/*! ./recicla.component.css */ "./src/app/recicla/recicla.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReciclaComponent);
    return ReciclaComponent;
}());



/***/ }),

/***/ "./src/app/reciclatu/reciclatu.component.css":
/*!***************************************************!*\
  !*** ./src/app/reciclatu/reciclatu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".canvas{\n    width: 100%;\n    height: 100%;\n    background-image: url('bosque.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    min-height: 550px;\n}\n.bg{\n    background-color: lightcyan;\n}\n.container{\n    min-height: 550px;\n    height: 100vh;\n}\n.containerDos{\n    position: fixed;\n    width: 100%;\n    min-height: 600px;\n    height: 100%;\n    background-color: #4FB99F;\n    top:0px;\n    left: 0px;\n}\n.containerDos p{\n    position: relative;\n    top:40%;\n    font-size: 2em;\n    color:white;\n}\n.boton{\n    position: absolute;\n    top:50%;\n    left:45%;\n}\n.caja{\n\n    width: 90px;\n    height: 90px;\n    background-color: yellowgreen;\n    border: 4px solid yellowgreen;\n    border-radius: 50%;\n    position: absolute;\n    top:350px;\n    left:450px;\n    display: block;\n}\n/*.box{\n    max-width: 100px;\n    max-height: 150px;\n    \n}*/\n.organico{\n    background-color: brown;\n}\n.otrosresiduos{\n    background-color: orange;\n}\n.plasticos{\n    background-color: yellow;\n}\n.vidrios{\n    background-color: green;\n}\n.papeles{\n    background-color: blue;\n}\n.alturaMarcadores{\n    min-height: 60px;\n\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaWNsYXR1L3JlY2ljbGF0dS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixvQ0FBd0Q7SUFDeEQsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLDRCQUE0QjtDQUMvQjtBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7Q0FDakI7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsUUFBUTtJQUNSLFVBQVU7Q0FDYjtBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixlQUFlO0lBQ2YsWUFBWTtDQUNmO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFNBQVM7Q0FDWjtBQUlEOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtDQUNsQjtBQUdEOzs7O0dBSUc7QUFJSDtJQUNJLHdCQUF3QjtDQUMzQjtBQUVEO0lBQ0kseUJBQXlCO0NBQzVCO0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUI7QUFFRDtJQUNJLHdCQUF3QjtDQUMzQjtBQUVEO0lBQ0ksdUJBQXVCO0NBQzFCO0FBRUQ7SUFDSSxpQkFBaUI7O0NBRXBCIiwiZmlsZSI6InNyYy9hcHAvcmVjaWNsYXR1L3JlY2ljbGF0dS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbnZhc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2Jvc3F1ZS5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWluLWhlaWdodDogNTUwcHg7XG59XG4uYmd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xufVxuXG4uY29udGFpbmVye1xuICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5jb250YWluZXJEb3N7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEZCOTlGO1xuICAgIHRvcDowcHg7XG4gICAgbGVmdDogMHB4O1xufVxuXG4uY29udGFpbmVyRG9zIHB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDo0MCU7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbi5ib3RvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjUwJTtcbiAgICBsZWZ0OjQ1JTtcbn1cblxuXG5cbi5jYWphe1xuXG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHllbGxvd2dyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjM1MHB4O1xuICAgIGxlZnQ6NDUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuLyouYm94e1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgXG59Ki9cblxuXG5cbi5vcmdhbmljb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcbn1cblxuLm90cm9zcmVzaWR1b3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4ucGxhc3RpY29ze1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuLnZpZHJpb3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5wYXBlbGVze1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5hbHR1cmFNYXJjYWRvcmVze1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG5cbn1cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/reciclatu/reciclatu.component.html":
/*!****************************************************!*\
  !*** ./src/app/reciclatu/reciclatu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"canvas container-fluid m-0\">\n  \n  <div class=\"container bg text-light\">\n\n      <div class=\"row alturaMarcadores\">\n  \n        <div class=\"marcador col-12 col-md-6 text-center mt-0\">\n          <p> </p>\n          <p *ngIf=\"acierto == 'true'\" class=\"text-dark\">¡Enhorabuena! Has acertado.</p>\n          <p *ngIf=\"acierto == 'false'\" class=\"text-dark\">Lo siento mucho. Te has equivocado.</p>\n        </div>\n        <div class=\"puntos col-12 col-md-6 text-center pt-3\">\n          <p class=\"text-dark\">Tu puntuación es: {{contador}}</p>\n        </div>\n      </div>\n        <!--Contenedores-->\n            \n       \n            <div class=\"contenedores row\">\n\n              <div class=\"col-6 col-md-2 p-auto\" *ngFor=\"let contenedor of contenedores\" mwlDroppable (drop)=\"onDrop($event, contenedor)\" [id]=\"contenedor.nombre\">\n                  <img class=\"img-fluid\" src=\"{{contenedor.imagen}}\"/>\n                  <!--<span [hidden]=\"droppedData\">Drop here</span>\n                  <span [hidden]=\"!droppedData\">Datos arrastrados: \"{{ droppedData }}\"!</span>-->\n              </div>\n                <!--{{droppedData}}-->\n            </div>\n        \n        \n          <!--Residuos-->\n        <div *ngFor=\"let residuo of residuos; let i = index\"  mwlDraggable class=\"caja\" dropData=\"{{residuo.tipo}}\" (dragEnd)=\"dragEnd($event,residuo)\">\n          <!--<img src=\"{{residuo.imagen}}\"/>-->\n          <p class=\"text-center\">{{residuo.nombre}}</p>\n        </div>\n  </div>\n</div>\n<div *ngIf=\"fin\" class=\"containerDos text-center\">\n  <p class=\"ml-5 mr-5 text-white\">¡Fin!. Tu puntuación es de: {{contador}} puntos.</p>\n  <button class=\"btn btn-primary-light boton mt-5\" (click)=\"rutaOpen()\">Regresar</button>\n</div>"

/***/ }),

/***/ "./src/app/reciclatu/reciclatu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/reciclatu/reciclatu.component.ts ***!
  \**************************************************/
/*! exports provided: ReciclatuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReciclatuComponent", function() { return ReciclatuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contenedores_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contenedores.service */ "./src/app/contenedores.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var _peticiones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../peticiones.service */ "./src/app/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReciclatuComponent = /** @class */ (function () {
    function ReciclatuComponent(preguntasService, router, user, peticionesService) {
        this.preguntasService = preguntasService;
        this.router = router;
        this.user = user;
        this.peticionesService = peticionesService;
        this.contenedores = this.preguntasService.getContenedores();
        this.residuos = this.preguntasService.getResiduos();
        this.acierto = '';
        this.contador = 0;
        this.fin = false;
        this.usuario = JSON.parse(localStorage.getItem("usuario")).id;
    }
    ReciclatuComponent.prototype.ngOnInit = function () {
    };
    ReciclatuComponent.prototype.dropped = function ($event) {
        console.log($event);
    };
    ReciclatuComponent.prototype.dragEnd = function ($event, presiduo) {
        console.log('Element was dragged', $event);
        this.residuo = presiduo;
    };
    ReciclatuComponent.prototype.onDrop = function ($event, pcontenedor) {
        var _this = this;
        //Esta instrucción igual a la prop droppedData el string con el nombre del residuo arrojado
        //this.droppedData = $event.dropData
        this.droppedData = $event.id;
        console.log($event.dropData);
        //Esta instruccion iguala a la prop tipoContenedor el string con el nombre del objeto contenedor concreto
        this.contenedor = pcontenedor;
        console.log(this.contenedor.nombre);
        console.log(this.residuo.tipo);
        //Ahora hay que igualar
        if (this.contenedor.nombre == this.residuo.tipo) {
            this.acierto = 'true';
            this.residuos.pop();
            this.contador += 50;
            setTimeout(function () {
                _this.acierto = '';
            }, 2000);
        }
        else {
            this.acierto = 'false';
            this.residuos.pop();
            setTimeout(function () {
                _this.acierto = '';
            }, 2000);
        }
        if (this.residuos.length == 0) {
            console.log('el juego ha terminado');
            this.fin = true;
        }
    };
    ReciclatuComponent.prototype.rutaOpen = function () {
        var datosNode = {
            puntos: this.contador,
            id_juego: 3,
            id_usuario: this.usuario
        };
        this.peticionesService.agregarPartidas(datosNode).then(function (res) {
        });
        //Reinicializar el array residuos
        this.contador = 0;
        this.router.navigate(['/open']);
    };
    ReciclatuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reciclatu',
            template: __webpack_require__(/*! ./reciclatu.component.html */ "./src/app/reciclatu/reciclatu.component.html"),
            styles: [__webpack_require__(/*! ./reciclatu.component.css */ "./src/app/reciclatu/reciclatu.component.css")]
        }),
        __metadata("design:paramtypes", [_contenedores_service__WEBPACK_IMPORTED_MODULE_1__["ContenedoresService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"],
            _peticiones_service__WEBPACK_IMPORTED_MODULE_4__["PeticionesService"]])
    ], ReciclatuComponent);
    return ReciclatuComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n    background-color: white;\n}\n.container{\n    background-color: white;\n}\n.bg-personal{\n    background-color: #112F41;\n    padding: 20px;\n    border-radius:20px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\np{\n    margin-top: 20px; \n    color:#444;\n    font-size: 1.3em;\n    font-family: 'Varela Round', sans-serif;\n}\nh3{\n    text-align: center;\n    margin-top:20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtDQUMzQjtBQUNEO0lBQ0ksd0JBQXdCO0NBQzNCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0NBQ3ZCO0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix3Q0FBd0M7Q0FDM0M7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5iZy1wZXJzb25hbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyRjQxO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxucHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyBcbiAgICBjb2xvcjojNDQ0O1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xufVxuXG5oM3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"container\">\n   \n      <!--Titulo-->\n\n    <h3>Regístrate con nosotros</h3>\n     <p>\n      Completa este sencillo formulario, y disfruta aprendiendo mientras juegas, buenos hábitos de reciclaje.\n    </p>\n\n    <div class=\"formulario border border-primary p-3 mb-4\">\n      <form [formGroup]=\"form\"\n      (ngSubmit)=\"usuarioRegistrado(form.value)\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <!--mail-->\n            <label for=\"inputEmail4\" class=\"text-dark\">Correo electrónico</label>\n            <input type=\"email\" name=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"example@mail.com\" formControlName=\"email\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <!--contraseña-->\n            <label for=\"inputPassword4\" class=\"text-dark\">Contraseña</label>\n            <input type=\"password\" name=\"contrasena\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\" formControlName=\"contrasena\">\n          </div>\n        </div>\n       <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <!--nombre-->\n          <label for=\"username\" class=\"text-dark\">Nombre de usuario</label>\n          <input type=\"text\" name=\"nombre\" class=\"form-control\" id=\"username\" formControlName=\"nombre\">\n        </div>\n        <div class=\"form-group col-md-6\">\n          <!--edad-->\n          <label for=\"edad\" class=\"text-dark\">Edad</label>\n          <input type=\"text\" name=\"edad\" class=\"form-control\" id=\"edad\" formControlName=\"edad\">\n        </div>\n      </div>\n        <div class=\"form-row mb-3\">\n          <div class=\"form-group col-md-6\">\n            <!--municipio-->\n            <label for=\"inputCity\" class=\"text-dark\">Municipio</label>\n            <input type=\"text\" name=\"municipio\" class=\"form-control\" id=\"inputCity\" formControlName=\"municipio\">\n          </div>\n          <div class=\"form-group col-md-4\">\n            <!--provincia-->\n            <label for=\"inputState\" class=\"text-dark\">Provincia</label>\n            <select name=\"provincia\" id=\"inputState\" class=\"form-control\" formControlName=\"provincia\">\n              <option selected>Elige...</option>\n              <option>Alaba</option>\n              <option>Alicante</option>\n              <option>Albacete</option>\n              <option>Almeria</option>\n              <option>Asturias</option>\n              <option>Ávila</option>\n              <option>Badajoz</option>\n              <option>Barcelona</option>\n              <option>Burgos</option>\n              <option>Cáceres</option>\n              <option>Cádiz</option>\n              <option>Cantabria</option>\n              <option>Castellón</option>\n              <option>Ciudad Real</option>\n              <option>Córdoba</option>\n              <option>Cuenca</option>\n              <option>Gerona</option>\n              <option>Granada</option>\n              <option>Guadalajara</option>\n              <option>Guipúzcua</option>\n              <option>Huelva</option>\n              <option>Huesca</option>\n              <option>Islas Baleares</option>\n              <option>Jaén</option>\n              <option>La Rioja</option>\n              <option>La Coruña</option>\n              <option>Las Palmas</option>\n              <option>León</option>\n              <option>Lérida</option>\n              <option>Lugo</option>\n              <option>Madrid</option>\n              <option>Málaga</option>\n              <option>Murcia</option>\n              <option>Navarra</option>\n              <option>Ourense</option>\n              <option>Palencia</option>\n              <option>Pontevedra</option>\n              <option>Salamanca</option>\n              <option>Segovia</option>\n              <option>Sevilla</option>\n              <option>Soria</option>\n              <option>Tarragona</option>\n              <option>Tenerife</option>\n              <option>Teruel</option>\n              <option>Toledo</option>\n              <option>Valencia</option>\n              <option>Valladolid</option>\n              <option>Vizcaya</option>\n              <option>Zamora</option>\n              <option>Zaragoza</option>\n\n\n              \n            </select>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <!--codigo postal-->\n            <label for=\"inputZip\" class=\"text-dark\">Código Postal</label>\n            <input type=\"text\" name=\"postal\" class=\"form-control\" id=\"inputZip\" formControlName=\"postal\">\n          </div>\n            <!--Curso-->\n            <div class=\"col-md-3\">\n              <label for=\"curso\" class=\"text-dark\">Curso</label>\n              <select class=\"form-control\" formControlName=\"curso\">\n                <option>Selecciona...</option>\n                <option>1º Primaria</option>\n                <option>2º Primaria</option>\n                <option>3º Primaria</option>\n                <option>4º Primaria</option>\n                <option>5º Primaria</option>\n                <option>6º Primaria</option>\n                <option>1º ESO</option>\n                <option>2º ESO</option>\n                <option>3º ESO</option>\n                <option>4º ESO</option>\n                <option>Bachiller</option>\n              </select>\n            </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\">\n            <label class=\"form-check-label\" for=\"gridCheck\">\n              He leido y acepto la <a href=\"#\">política de privacidad</a>\n            </label>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-outline-dark\" value=\"enviar\" [disabled]=\"!form.valid\">Enviar</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../peticiones.service */ "./src/app/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(peticionesService, router) {
        this.peticionesService = peticionesService;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40)]),
            /*Minimo 8 caracteres Maximo 15 Al menos una letra mayúscula Al menos una letra minucula Al menos un dígito No espacios en blanco Al menos 1 caracter especial*/
            contrasena: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('' /*,[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/)]*/),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
            edad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            municipio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            provincia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            postal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)]),
            curso: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.usuarioRegistrado = function (values) {
        //En este método hay que ordenar al servicio que envie los datos de form al servicio.
        //console.log(values);
        this.peticionesService.nuevoUsuario(values).then(function (res) {
            //console.log(res.json());
            var response = res.json();
            if (response.error) {
                alert(response.error);
            }
        });
        //con la siguiente instrucción redireccionamos a la oag de creación de usuario
        this.router.navigate(['usuario']);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/trivial/trivial.component.css":
/*!***********************************************!*\
  !*** ./src/app/trivial/trivial.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bosque{\n    background-image: url('bosque.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    min-height: 600px;\n}\n\n.curs{\n    cursor: pointer;\n}\n\n.bg{\n    background-color: rgb(190, 109, 51);\n}\n\n.containerDos{\n    position: fixed;\n    width: 100%;\n    min-height: 600px;\n    height: 100%;\n    background-color: #4FB99F;\n    top:0px;\n    left: 0px;\n}\n\n.containerDos p{\n    position: relative;\n    top:40%;\n    font-size: 2em;\n    color:white;\n}\n\n.boton{\n    position: absolute;\n    top:50%;\n    left:45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpdmlhbC90cml2aWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBd0Q7SUFDeEQsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxvQ0FBb0M7Q0FDdkM7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLFFBQVE7SUFDUixVQUFVO0NBQ2I7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGVBQWU7SUFDZixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFNBQVM7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL3RyaXZpYWwvdHJpdmlhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvc3F1ZXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYm9zcXVlLmpwZycpO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbn1cblxuLmN1cnN7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgMTA5LCA1MSk7XG59XG5cbi5jb250YWluZXJEb3N7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEZCOTlGO1xuICAgIHRvcDowcHg7XG4gICAgbGVmdDogMHB4O1xufVxuXG4uY29udGFpbmVyRG9zIHB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDo0MCU7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbi5ib3RvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjUwJTtcbiAgICBsZWZ0OjQ1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/trivial/trivial.component.html":
/*!************************************************!*\
  !*** ./src/app/trivial/trivial.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    \n  <div class=\"container-fluid bosque\">  \n    \n\n      <div class=\"row justify-content-around\">\n        <div class=\"col-4 col-md-2 m-auto text-center text-white bg-warning rounded\"><p>Puntuación: {{contPuntos}}</p></div>\n\n        \n      </div>\n\n      <div class=\"row justify-content-around my-4 bg\">\n        <div class=\"col-12 text-center text-white my-5\">\n          <h2>{{pregunta?.texto}}</h2>\n        </div>\n      </div>\n\n      <div class=\"row justify-content-around\">\n        <div class=\"col-10 col-md-5 bg-success rounded text-center text-white p-3 mt-5 curs border-5\" *ngFor=\"let preg of pregunta?.respuestas\" (click)=\"handleClick($event)\">\n          <p>{{preg}}</p>\n        </div>\n      </div>\n    \n    \n  </div>\n\n\n\n  <div *ngIf=\"mostrar\" class=\"containerDos text-center\">\n  \n    <p *ngIf=\"acierto\">¡Enhorabuena! Has acertado.</p>\n    <p *ngIf=\"!acierto\">¡Oh, que lastima! Te has equivocado</p>\n    \n    <button class=\"btn btn-primary-light boton mt-5\" (click)=\"cerrarPantalla()\">Continuar</button>\n  \n  </div>\n\n\n<div *ngIf=\"fin\" class=\"containerDos text-center\">\n    <p class=\"ml-5 mr-5\">¡Fin!. Tu puntuación es de: {{contPuntos}} puntos.</p>\n    <button class=\"btn btn-primary-light boton mt-5\" (click)=\"rutaOpen()\">Regresar</button>\n</div>\n"

/***/ }),

/***/ "./src/app/trivial/trivial.component.ts":
/*!**********************************************!*\
  !*** ./src/app/trivial/trivial.component.ts ***!
  \**********************************************/
/*! exports provided: TrivialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrivialComponent", function() { return TrivialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contenedores_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contenedores.service */ "./src/app/contenedores.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _peticiones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../peticiones.service */ "./src/app/peticiones.service.ts");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrivialComponent = /** @class */ (function () {
    function TrivialComponent(preguntasService, router, peticionesService, userService) {
        this.preguntasService = preguntasService;
        this.router = router;
        this.peticionesService = peticionesService;
        this.userService = userService;
        this.title = 'Trivial';
        this.usuario = JSON.parse(localStorage.getItem("usuario")).id;
    }
    TrivialComponent.prototype.ngOnInit = function () {
        this.preguntasService.resetPreguntaActiva();
        this.pregunta = this.preguntasService.getPreguntaActiva();
        this.arrPreguntas = this.preguntasService.getPreguntas();
        this.contPuntos = 0;
        this.contTiempo = 60;
        this.mostrar = false;
        this.acierto = true;
        this.fin = false;
    };
    //QUEDA PENDIENTE EL CONTADOR DE TIEMPO
    /*Mecánica principal del juego. Tras responder llama al método para
    pasar a la siguiente pregunta y dependiendo de si es respuesta
    correcto o no se le suman puntos*/
    TrivialComponent.prototype.handleClick = function ($event) {
        console.log($event.target.textContent);
        if (this.pregunta.id < this.arrPreguntas.length - 1) {
            if ($event.target.textContent == this.pregunta.respCorrecta) {
                this.mostrar = true;
                this.acierto = true;
                this.contPuntos += 50;
                this.pregunta = this.preguntasService.getPreguntaActiva();
            }
            else {
                this.mostrar = true;
                this.acierto = false;
                this.pregunta = this.preguntasService.getPreguntaActiva();
            }
        }
        else {
            this.fin = true;
        }
    };
    //cierra la pantalla entre respuestas para pasar a la siguiente pregunta
    TrivialComponent.prototype.cerrarPantalla = function () {
        console.log(this.mostrar);
        this.mostrar = !this.mostrar;
        console.log(this.mostrar);
    };
    //Al hacer click volvemos al open
    //QUEDA PENDIENTE ESTABLECER LA RUTA UNA VEZ QUE SE ENSAMBLE
    TrivialComponent.prototype.rutaOpen = function () {
        //PENDIENTE hacer una petición para ingresar la puntuación al usuario
        var datosNode = {
            puntos: this.contPuntos,
            id_juego: 2,
            id_usuario: this.usuario
        };
        this.peticionesService.agregarPartidas(datosNode).then(function (res) {
        });
        console.log(datosNode);
        this.contPuntos = 0;
        this.router.navigate(['/open']);
    };
    TrivialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trivial',
            template: __webpack_require__(/*! ./trivial.component.html */ "./src/app/trivial/trivial.component.html"),
            styles: [__webpack_require__(/*! ./trivial.component.css */ "./src/app/trivial/trivial.component.css")]
        }),
        __metadata("design:paramtypes", [_contenedores_service__WEBPACK_IMPORTED_MODULE_1__["ContenedoresService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _peticiones_service__WEBPACK_IMPORTED_MODULE_3__["PeticionesService"],
            _user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserServiceService"]])
    ], TrivialComponent);
    return TrivialComponent;
}());



/***/ }),

/***/ "./src/app/user-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/user-service.service.ts ***!
  \*****************************************/
/*! exports provided: UserServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceService", function() { return UserServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserServiceService = /** @class */ (function () {
    function UserServiceService() {
        this.currentUser();
    }
    UserServiceService.prototype.currentUser = function () {
        this.usuarioLog = JSON.parse(localStorage.getItem("usuario"));
        //console.log(this.usuarioLog);
    };
    UserServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserServiceService);
    return UserServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/claralopezbenito/Desktop/proyecto_final/proyecto_recicla/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map