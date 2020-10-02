(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'tic-tac-toe-connect-four';
        // router.navigate(['/'])
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing.module */ "./src/app/routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _title_screen_title_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./title-screen/title-screen.component */ "./src/app/title-screen/title-screen.component.ts");
/* harmony import */ var _lobby_lobby_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lobby/lobby.component */ "./src/app/lobby/lobby.component.ts");
/* harmony import */ var _lobby_host_game_host_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lobby/host-game/host-game.component */ "./src/app/lobby/host-game/host-game.component.ts");
/* harmony import */ var _lobby_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lobby/join-game/join-game.component */ "./src/app/lobby/join-game/join-game.component.ts");
/* harmony import */ var _game_quit_game_quit_game_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./game/quit-game/quit-game.component */ "./src/app/game/quit-game/quit-game.component.ts");
/* harmony import */ var _game_not_valid_not_valid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./game/not-valid/not-valid.component */ "./src/app/game/not-valid/not-valid.component.ts");
/* harmony import */ var _lobby_against_pc_against_pc_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lobby/against-pc/against-pc.component */ "./src/app/lobby/against-pc/against-pc.component.ts");
/* harmony import */ var _lobby_waiting_waiting_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lobby/waiting/waiting.component */ "./src/app/lobby/waiting/waiting.component.ts");
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var _game_confirm_move_confirm_move_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./game/confirm-move/confirm-move.component */ "./src/app/game/confirm-move/confirm-move.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
// modules






//components













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _routing_module__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _title_screen_title_screen_component__WEBPACK_IMPORTED_MODULE_7__["TitleScreenComponent"],
        _lobby_lobby_component__WEBPACK_IMPORTED_MODULE_8__["LobbyComponent"],
        _game_game_component__WEBPACK_IMPORTED_MODULE_17__["GameComponent"],
        _lobby_host_game_host_game_component__WEBPACK_IMPORTED_MODULE_9__["HostGameComponent"],
        _lobby_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_10__["JoinGameComponent"],
        _game_quit_game_quit_game_component__WEBPACK_IMPORTED_MODULE_11__["QuitGameComponent"],
        _game_confirm_move_confirm_move_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmMoveComponent"],
        _lobby_against_pc_against_pc_component__WEBPACK_IMPORTED_MODULE_13__["AgainstPcComponent"],
        _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"],
        _lobby_waiting_waiting_component__WEBPACK_IMPORTED_MODULE_14__["WaitingComponent"],
        _game_not_valid_not_valid_component__WEBPACK_IMPORTED_MODULE_12__["NotValidComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _routing_module__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _title_screen_title_screen_component__WEBPACK_IMPORTED_MODULE_7__["TitleScreenComponent"],
                    _lobby_lobby_component__WEBPACK_IMPORTED_MODULE_8__["LobbyComponent"],
                    _game_game_component__WEBPACK_IMPORTED_MODULE_17__["GameComponent"],
                    _lobby_host_game_host_game_component__WEBPACK_IMPORTED_MODULE_9__["HostGameComponent"],
                    _lobby_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_10__["JoinGameComponent"],
                    _game_quit_game_quit_game_component__WEBPACK_IMPORTED_MODULE_11__["QuitGameComponent"],
                    _game_confirm_move_confirm_move_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmMoveComponent"],
                    _lobby_against_pc_against_pc_component__WEBPACK_IMPORTED_MODULE_13__["AgainstPcComponent"],
                    _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"],
                    _lobby_waiting_waiting_component__WEBPACK_IMPORTED_MODULE_14__["WaitingComponent"],
                    _game_not_valid_not_valid_component__WEBPACK_IMPORTED_MODULE_12__["NotValidComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _routing_module__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
                entryComponents: [
                    _lobby_host_game_host_game_component__WEBPACK_IMPORTED_MODULE_9__["HostGameComponent"],
                    _lobby_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_10__["JoinGameComponent"],
                    _game_quit_game_quit_game_component__WEBPACK_IMPORTED_MODULE_11__["QuitGameComponent"],
                    _lobby_against_pc_against_pc_component__WEBPACK_IMPORTED_MODULE_13__["AgainstPcComponent"],
                    _lobby_waiting_waiting_component__WEBPACK_IMPORTED_MODULE_14__["WaitingComponent"],
                    _game_not_valid_not_valid_component__WEBPACK_IMPORTED_MODULE_12__["NotValidComponent"],
                    _game_confirm_move_confirm_move_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmMoveComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/game/confirm-move/confirm-move.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/game/confirm-move/confirm-move.component.ts ***!
  \*************************************************************/
/*! exports provided: ConfirmMoveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmMoveComponent", function() { return ConfirmMoveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_game_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/game-manager.service */ "./src/app/shared/game-manager.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






var ConfirmMoveComponent = /** @class */ (function () {
    function ConfirmMoveComponent(move, gameManager) {
        this.move = move;
        this.gameManager = gameManager;
    }
    ConfirmMoveComponent.prototype.ngOnInit = function () {
    };
    ConfirmMoveComponent.prototype.yes = function () {
        this.gameManager.confirmMove(this.move[0], this.move[1]);
    };
    ConfirmMoveComponent.ɵfac = function ConfirmMoveComponent_Factory(t) { return new (t || ConfirmMoveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_game_manager_service__WEBPACK_IMPORTED_MODULE_2__["GameManagerService"])); };
    ConfirmMoveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmMoveComponent, selectors: [["app-confirm-move"]], decls: 11, vars: 0, consts: [["mat-dialog-title", ""], ["id", "buttons"], ["mat-flat-button", "", "mat-dialog-close", "", "color", "primary", "type", "button"], ["mat-flat-button", "", "color", "accent", "type", "button", 3, "click"]], template: function ConfirmMoveComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Are you sure you about your move?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmMoveComponent_Template_button_click_9_listener() { return ctx.yes(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Yes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["main[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n#buttons[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n    margin: auto\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9jb25maXJtLW1vdmUvY29uZmlybS1tb3ZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2NvbmZpcm0tbW92ZS9jb25maXJtLW1vdmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2J1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luOiBhdXRvXG59Il19 */"] });
    return ConfirmMoveComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmMoveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm-move',
                templateUrl: './confirm-move.component.html',
                styleUrls: ['./confirm-move.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _shared_game_manager_service__WEBPACK_IMPORTED_MODULE_2__["GameManagerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _quit_game_quit_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quit-game/quit-game.component */ "./src/app/game/quit-game/quit-game.component.ts");
/* harmony import */ var _not_valid_not_valid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-valid/not-valid.component */ "./src/app/game/not-valid/not-valid.component.ts");
/* harmony import */ var _confirm_move_confirm_move_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-move/confirm-move.component */ "./src/app/game/confirm-move/confirm-move.component.ts");
/* harmony import */ var _shared_game_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/game-manager.service */ "./src/app/shared/game-manager.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










var _c0 = ["canvas"];
var _c1 = function (a0) { return { turn: a0 }; };
var GameComponent = /** @class */ (function () {
    function GameComponent(gameManager, dialog, router) {
        this.gameManager = gameManager;
        this.dialog = dialog;
        this.router = router;
        this.hostName = "host";
        this.opponentName = "opponent";
        this.turnBool = false;
        var gInfo = gameManager.getGameInfo();
        this.hostName = gInfo.hostName;
        this.opponentName = gInfo.opponentPC ? "Computer" : gInfo.opponentName;
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        //subscriptions
        this.gameInfoSubscription = this.gameManager.gameInfoSubject.subscribe(function (gameInfo) {
            // this.hostName = gameInfo.hostName
            // this.opponentName = gameInfo.opponentName;
            if (!gameInfo) {
                _this.router.navigate(['/lobby']);
            }
            _this.dialogRef.close();
        });
        this.turnSubsription = this.gameManager.playerTurnSubject.subscribe(function (turn) {
            _this.clickedSpot = null;
            if (_this.dialogRef) {
                _this.dialogRef.close();
                _this.dialogRef = null;
            }
            _this.turnBool = turn === _this.playerPiece ? true : false;
        });
        this.computerPieceSubscription = this.gameManager.computerPieceSubject.subscribe(function (piece) {
            _this.playerPiece = piece;
        });
    };
    GameComponent.prototype.ngOnDestroy = function () {
        this.gameInfoSubscription.unsubscribe();
        this.canvasSubscription.unsubscribe();
        this.turnSubsription.unsubscribe();
        this.computerPieceSubscription.unsubscribe();
        this.clickedSpot = null;
    };
    GameComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.canvas = this.canvasElRef.nativeElement;
        this.canvas.width = window.innerWidth * 0.7;
        this.canvas.height = window.innerHeight * 0.8;
        this.gameManager.startGame(this.canvas);
        //subscriptions
        this.canvasSubscription = this.gameManager.board.canvasSubject.subscribe(function (canvas) {
            _this.canvas = canvas;
        });
    };
    GameComponent.prototype.onResize = function (event) {
        this.gameManager.board.setCanvasDimensions(window.innerWidth * 0.7, window.innerHeight * 0.8);
        this.gameManager.board.drawBoardAndPieces();
    };
    GameComponent.prototype.onCanvasClick = function (event) {
        //do nothing if it is not the player's turn
        if (!this.turnBool) {
            return;
        }
        var rect = this.canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        //get the board piece where user clicked
        var boardPiece = this.gameManager.board.clickBoard(x, y);
        if (boardPiece.piece != "" && boardPiece.piece != this.playerPiece || boardPiece.set) {
            this.dialog.open(_not_valid_not_valid_component__WEBPACK_IMPORTED_MODULE_2__["NotValidComponent"]);
            return;
        }
        if (this.clickedSpot === boardPiece.index && boardPiece.piece === this.playerPiece) {
            this.gameManager.removePiece(this.clickedSpot);
            this.clickedSpot = null;
        }
        else if (!this.clickedSpot) {
            this.clickedSpot = boardPiece.index;
            this.gameManager.notFinalMove(this.clickedSpot, this.playerPiece);
        }
    };
    GameComponent.prototype.onConfirmMove = function () {
        this.dialogRef = this.dialog.open(_confirm_move_confirm_move_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmMoveComponent"], { data: [this.clickedSpot, this.playerPiece] });
        this.clickedSpot = null;
    };
    GameComponent.prototype.onQuitGame = function () {
        this.dialogRef = this.dialog.open(_quit_game_quit_game_component__WEBPACK_IMPORTED_MODULE_1__["QuitGameComponent"]);
    };
    GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_game_manager_service__WEBPACK_IMPORTED_MODULE_4__["GameManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
    GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], viewQuery: function GameComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasElRef = _t.first);
        } }, hostBindings: function GameComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function GameComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, decls: 14, vars: 9, consts: [["id", "banner"], [3, "ngClass"], ["id", "canvasContainer"], [2, "border", "5px inset indigo", 3, "click"], ["canvas", ""], ["id", "buttons"], ["mat-flat-button", "", "color", "accent", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "disabled", "click"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "canvas", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_canvas_click_7_listener($event) { return ctx.onCanvasClick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_10_listener() { return ctx.onQuitGame(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quit Game");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_12_listener() { return ctx.onConfirmMove(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Confirm Move");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.turnBool === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Host : ", ctx.hostName, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.turnBool === false));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Opponent : ", ctx.opponentName, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.turnBool || !ctx.clickedSpot);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["main[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n#canvasContainer[_ngcontent-%COMP%]  {\n    display: flex;\n    justify-content: center;\n    height: 80%;\n}\n\n#buttons[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-evenly;\n    height: 20%;\n}\n\nbutton[_ngcontent-%COMP%] {\n    margin: auto;\n}\n\n#banner[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-around;\n}\n\n#banner[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin: auto;\n}\n\n.turn[_ngcontent-%COMP%] {\n    border: 3px solid blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jY2FudmFzQ29udGFpbmVyICB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDgwJTtcbn1cblxuI2J1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgaGVpZ2h0OiAyMCU7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4jYmFubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4jYmFubmVyIGg2IHtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi50dXJuIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibHVlO1xufSJdfQ== */"] });
    return GameComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.css']
            }]
    }], function () { return [{ type: _shared_game_manager_service__WEBPACK_IMPORTED_MODULE_4__["GameManagerService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { canvasElRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas', { static: false }]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/game/not-valid/not-valid.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/game/not-valid/not-valid.component.ts ***!
  \*******************************************************/
/*! exports provided: NotValidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotValidComponent", function() { return NotValidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




var NotValidComponent = /** @class */ (function () {
    function NotValidComponent() {
    }
    NotValidComponent.prototype.ngOnInit = function () {
    };
    NotValidComponent.ɵfac = function NotValidComponent_Factory(t) { return new (t || NotValidComponent)(); };
    NotValidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotValidComponent, selectors: [["app-not-valid"]], decls: 9, vars: 0, consts: [["mat-dialog-title", ""], ["id", "buttons"], ["mat-flat-button", "", "mat-dialog-close", "", "color", "primary", "type", "button"]], template: function NotValidComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Error");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Invalid move");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Okay");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["main[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9ub3QtdmFsaWQvbm90LXZhbGlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2dhbWUvbm90LXZhbGlkL25vdC12YWxpZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufSJdfQ== */"] });
    return NotValidComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotValidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-valid',
                templateUrl: './not-valid.component.html',
                styleUrls: ['./not-valid.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/game/quit-game/quit-game.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/game/quit-game/quit-game.component.ts ***!
  \*******************************************************/
/*! exports provided: QuitGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuitGameComponent", function() { return QuitGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_game_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/game-manager.service */ "./src/app/shared/game-manager.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





var QuitGameComponent = /** @class */ (function () {
    function QuitGameComponent(gameManager) {
        this.gameManager = gameManager;
    }
    QuitGameComponent.prototype.ngOnInit = function () {
    };
    QuitGameComponent.prototype.yes = function () {
        this.gameManager.quitGame();
    };
    QuitGameComponent.ɵfac = function QuitGameComponent_Factory(t) { return new (t || QuitGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_game_manager_service__WEBPACK_IMPORTED_MODULE_1__["GameManagerService"])); };
    QuitGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuitGameComponent, selectors: [["app-quit-game"]], decls: 11, vars: 0, consts: [["mat-dialog-title", ""], ["id", "buttons"], ["mat-flat-button", "", "mat-dialog-close", "", "color", "primary", "type", "button"], ["mat-flat-button", "", "color", "accent", "type", "button", 3, "click"]], template: function QuitGameComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Are you sure you want to quit?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuitGameComponent_Template_button_click_9_listener() { return ctx.yes(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Yes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: ["main[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n#buttons[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n    margin: auto\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9xdWl0LWdhbWUvcXVpdC1nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9nYW1lL3F1aXQtZ2FtZS9xdWl0LWdhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2J1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luOiBhdXRvXG59Il19 */"] });
    return QuitGameComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuitGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quit-game',
                templateUrl: './quit-game.component.html',
                styleUrls: ['./quit-game.component.css']
            }]
    }], function () { return [{ type: _shared_game_manager_service__WEBPACK_IMPORTED_MODULE_1__["GameManagerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/lobby/against-pc/against-pc.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/lobby/against-pc/against-pc.component.ts ***!
  \**********************************************************/
/*! exports provided: AgainstPcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgainstPcComponent", function() { return AgainstPcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_game_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/game-manager.service */ "./src/app/shared/game-manager.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









var AgainstPcComponent = /** @class */ (function () {
    function AgainstPcComponent(gameManager) {
        this.gameManager = gameManager;
    }
    AgainstPcComponent.prototype.ngOnInit = function () {
    };
    AgainstPcComponent.prototype.onSubmit = function (form) {
        var gInfo = {
            gameName: "name",
            gameType: form.value.gameType,
            hostName: this.gameManager.playerName,
            opponentPC: true,
            difficulty: form.value.gameDiff
        };
        this.gameManager.againstPC(gInfo);
    };
    AgainstPcComponent.ɵfac = function AgainstPcComponent_Factory(t) { return new (t || AgainstPcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_game_manager_service__WEBPACK_IMPORTED_MODULE_1__["GameManagerService"])); };
    AgainstPcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgainstPcComponent, selectors: [["app-against-pc"]], decls: 27, vars: 1, consts: [["mat-dialog-title", ""], [3, "ngSubmit"], ["f", "ngForm"], ["required", "", "ngModel", "", "name", "gameType", "apperance", "fill"], ["value", "TTT"], ["value", "CF"], ["required", "", "ngModel", "", "name", "gameDiff", "apperance", "fill"], ["value", "easy"], ["value", "med"], ["value", "hard"], ["mat-flat-button", "", "mat-dialog-close", "", "color", "acccent", "type", "button"], ["mat-flat-button", "", "color", "primary", 3, "disabled"]], template: function AgainstPcComponent_Template(rf, ctx) { if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Against PC");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AgainstPcComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.onSubmit(_r0); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Game Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Tic-Tac-Toe ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Connect 4 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Game Difficulty ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Easy ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Medium ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Hard ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Back ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Okay ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid || _r0.pristine);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: ["form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\nsection[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n    margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9iYnkvYWdhaW5zdC1wYy9hZ2FpbnN0LXBjLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbG9iYnkvYWdhaW5zdC1wYy9hZ2FpbnN0LXBjLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbnNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuIl19 */"] });
    return AgainstPcComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgainstPcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-against-pc',
                templateUrl: './against-pc.component.html',
                styleUrls: ['./against-pc.component.css']
            }]
    }], function () { return [{ type: src_app_shared_game_manager_service__WEBPACK_IMPORTED_MODULE_1__["GameManagerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/lobby/host-game/host-game.component.ts":
/*!********************************************************!*\
  !*** ./src/app/lobby/host-game/host-game.component.ts ***!
  \********************************************************/
/*! exports provided: HostGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostGameComponent", function() { return HostGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_game_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/game-manager.service */ "./src/app/shared/game-manager.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












var HostGameComponent = /** @class */ (function () {
    function HostGameComponent(hostName, router, gameManager) {
        this.hostName = hostName;
        this.router = router;
        this.gameManager = gameManager;
    }
    HostGameComponent.prototype.ngOnInit = function () {
    };
    HostGameComponent.prototype.onStart = function (form) {
        var gInfo = {
            gameName: form.value.gameName,
            gameType: form.value.gameType,
            hostName: this.hostName,
            host: true,
            opponentPC: false
        };
        this.gameManager.hostGame(gInfo);
    };
    HostGameComponent.ɵfac = function HostGameComponent_Factory(t) { return new (t || HostGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_game_manager_service__WEBPACK_IMPORTED_MODULE_3__["GameManagerService"])); };
    HostGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HostGameComponent, selectors: [["app-host-game"]], decls: 19, vars: 1, consts: [["mat-dialog-title", ""], [3, "ngSubmit"], ["f", "ngForm"], ["matNativeControl", "", "required", "", "ngModel", "", "name", "gameName", "minlength", "10", "placeholder", "Game Name", "type", "text"], ["required", "", "ngModel", "", "name", "gameType", "apperance", "fill"], ["value", "TTT"], ["value", "CF"], ["mat-flat-button", "", "mat-dialog-close", "", "color", "accent", "type", "button"], ["mat-flat-button", "", "color", "primary", 3, "disabled"]], template: function HostGameComponent_Template(rf, ctx) { if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Host Game");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HostGameComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.onStart(_r0); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Game Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Tic-Tac-Toe ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Connect 4 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Start");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid || _r0.pristine);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\ndiv[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-evenly;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9iYnkvaG9zdC1nYW1lL2hvc3QtZ2FtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvbG9iYnkvaG9zdC1nYW1lL2hvc3QtZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgLyogYm9yZGVyOiA1cHggc29saWQgYmx1ZTsgKi9cbn0iXX0= */"] });
    return HostGameComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HostGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-host-game',
                templateUrl: './host-game.component.html',
                styleUrls: ['./host-game.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _shared_game_manager_service__WEBPACK_IMPORTED_MODULE_3__["GameManagerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/lobby/join-game/join-game.component.ts":
/*!********************************************************!*\
  !*** ./src/app/lobby/join-game/join-game.component.ts ***!
  \********************************************************/
/*! exports provided: JoinGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinGameComponent", function() { return JoinGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_game_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/game-manager.service */ "./src/app/shared/game-manager.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






var JoinGameComponent = /** @class */ (function () {
    function JoinGameComponent(gameInfo, gameManager) {
        this.gameInfo = gameInfo;
        this.gameManager = gameManager;
    }
    JoinGameComponent.prototype.ngOnInit = function () {
        console.log(this.gameInfo);
    };
    JoinGameComponent.prototype.onJoin = function () {
        this.gameManager.joinGame(this.gameInfo);
    };
    JoinGameComponent.ɵfac = function JoinGameComponent_Factory(t) { return new (t || JoinGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_game_manager_service__WEBPACK_IMPORTED_MODULE_2__["GameManagerService"])); };
    JoinGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoinGameComponent, selectors: [["app-join-game"]], decls: 15, vars: 3, consts: [["mat-dialog-title", ""], ["mat-flat-button", "", "mat-dialog-close", "", "color", "accent", "type", "button"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"]], template: function JoinGameComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Join Game");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Back");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinGameComponent_Template_button_click_13_listener() { return ctx.onJoin(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Join");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gameInfo.hostName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gameInfo.gameType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gameInfo.gameName);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["main[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    \n}\nsection[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\n    width: 100%;\n}\ndiv[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-evenly;\n    \n}\nbutton[_ngcontent-%COMP%] {\n    margin: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9iYnkvam9pbi1nYW1lL2pvaW4tZ2FtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCOztBQUUxQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xvYmJ5L2pvaW4tZ2FtZS9qb2luLWdhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4sIHNlY3Rpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG59XG5zZWN0aW9uLCBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgLyogYm9yZGVyOiA1cHggc29saWQgYmx1ZTsgKi9cbn1cblxuYnV0dG9uIHtcbiAgICBtYXJnaW46IDFyZW07XG59XG4iXX0= */"] });
    return JoinGameComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-join-game',
                templateUrl: './join-game.component.html',
                styleUrls: ['./join-game.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_shared_game_manager_service__WEBPACK_IMPORTED_MODULE_2__["GameManagerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/lobby/lobby.component.ts":
/*!******************************************!*\
  !*** ./src/app/lobby/lobby.component.ts ***!
  \******************************************/
/*! exports provided: LobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobbyComponent", function() { return LobbyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _host_game_host_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./host-game/host-game.component */ "./src/app/lobby/host-game/host-game.component.ts");
/* harmony import */ var _join_game_join_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./join-game/join-game.component */ "./src/app/lobby/join-game/join-game.component.ts");
/* harmony import */ var _against_pc_against_pc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./against-pc/against-pc.component */ "./src/app/lobby/against-pc/against-pc.component.ts");
/* harmony import */ var _waiting_waiting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./waiting/waiting.component */ "./src/app/lobby/waiting/waiting.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/manager.service */ "./src/app/shared/manager.service.ts");
/* harmony import */ var _shared_game_manager_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/game-manager.service */ "./src/app/shared/game-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");


//components











function LobbyComponent_mat_header_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Game Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LobbyComponent_mat_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r8.gameName, " ");
} }
function LobbyComponent_mat_header_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Game Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LobbyComponent_mat_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.gameType, " ");
} }
function LobbyComponent_mat_header_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Player Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LobbyComponent_mat_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.hostName, " ");
} }
function LobbyComponent_mat_header_row_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function LobbyComponent_mat_row_15_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-row", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LobbyComponent_mat_row_15_Template_mat_row_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var row_r11 = ctx.$implicit; var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onClickRow(row_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var LobbyComponent = /** @class */ (function () {
    function LobbyComponent(dialog, manager, gameManager, router) {
        this.dialog = dialog;
        this.manager = manager;
        this.gameManager = gameManager;
        this.router = router;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.displayedColumns = ["gameName", "hostName", "gameType"];
    }
    LobbyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.data = [
            { hostName: "funkMaster100", gameType: "TicTacToe", gameName: "You cant beat", opponentPC: false },
            { hostName: "connect4Mstr", gameType: "Connect4", gameName: "Casual", opponentPC: false }
        ]; //dummy data
        this.gameInfoSubscription = this.gameManager.gameInfoSubject.subscribe(function (gameInfo) {
            //check close the dialog
            if (_this.dialogRef) {
                _this.dialogRef.close();
                _this.dialogRef = null;
            }
            if (gameInfo.opponentPC) {
                _this.router.navigate(['/game']);
            }
            if (gameInfo.host) {
                _this.dialogRef = _this.dialog.open(_waiting_waiting_component__WEBPACK_IMPORTED_MODULE_5__["WaitingComponent"], { data: "Waiting for opponent." });
                setTimeout(function () {
                    _this.dialogRef.close();
                    _this.dialogRef = null;
                    _this.router.navigate(['/game']);
                }, 4000);
            }
        });
    };
    LobbyComponent.prototype.ngOnDestroy = function () {
        this.gameInfoSubscription.unsubscribe();
    };
    LobbyComponent.prototype.onHostGame = function () {
        var hostName = this.gameManager.playerName;
        this.dialogRef = this.dialog.open(_host_game_host_game_component__WEBPACK_IMPORTED_MODULE_2__["HostGameComponent"], { data: hostName });
    };
    LobbyComponent.prototype.onAgainstPC = function () {
        this.dialogRef = this.dialog.open(_against_pc_against_pc_component__WEBPACK_IMPORTED_MODULE_4__["AgainstPcComponent"]);
    };
    LobbyComponent.prototype.onClickRow = function (row) {
        this.dialogRef = this.dialog.open(_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_3__["JoinGameComponent"], { data: row });
    };
    LobbyComponent.prototype.getUserName = function () {
        return this.gameManager.playerName;
    };
    LobbyComponent.ɵfac = function LobbyComponent_Factory(t) { return new (t || LobbyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_manager_service__WEBPACK_IMPORTED_MODULE_7__["ManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_game_manager_service__WEBPACK_IMPORTED_MODULE_8__["GameManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
    LobbyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LobbyComponent, selectors: [["app-lobby"]], decls: 24, vars: 4, consts: [[2, "margin-left", "1rem"], ["id", "table"], [3, "dataSource"], ["matColumnDef", "gameName"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "gameType"], ["matColumnDef", "hostName"], [4, "matHeaderRowDef"], [3, "click", 4, "matRowDef", "matRowDefColumns"], ["id", "form"], ["mat-flat-button", "", "color", "accent", "type", "button", "routerLink", "/"], ["mat-flat-button", "", "color", "secondary", "type", "button", 2, "border", "1px grey inset", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "click"], [3, "click"]], template: function LobbyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-table", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LobbyComponent_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LobbyComponent_mat_cell_7_Template, 2, 1, "mat-cell", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LobbyComponent_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LobbyComponent_mat_cell_10_Template, 2, 1, "mat-cell", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LobbyComponent_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LobbyComponent_mat_cell_13_Template, 2, 1, "mat-cell", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LobbyComponent_mat_header_row_14_Template, 1, 0, "mat-header-row", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LobbyComponent_mat_row_15_Template, 1, 0, "mat-row", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Exit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LobbyComponent_Template_button_click_20_listener() { return ctx.onAgainstPC(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Against PC");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LobbyComponent_Template_button_click_22_listener() { return ctx.onHostGame(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Host Game");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx.getUserName(), " !");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["#form[_ngcontent-%COMP%], #table[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 100%;\n}\n\n\ndiv[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n\n#table[_ngcontent-%COMP%] {\n    \n    height: 80%;\n}\n\n\n#form[_ngcontent-%COMP%] {\n    \n    height: 20%;\n}\n\n\n@media (min-width: 501px) {\n    div[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n        justify-content: center;\n        height: 100%;\n        \n    }\n\n    div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        margin: auto;\n    }\n    \n\n    #table[_ngcontent-%COMP%], #form[_ngcontent-%COMP%]{\n        \n        height: 100%;\n    }\n    \n    #form[_ngcontent-%COMP%] {\n        width: 20%;\n    }\n    #table[_ngcontent-%COMP%] {\n        width: 80%;\n        \n    }\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9iYnkvbG9iYnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsV0FBVztBQUNmOzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLFlBQVk7O0lBRWhCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7O0lBR0E7UUFDSSw0QkFBNEI7UUFDNUIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTs7SUFFZDs7O0FBR0oiLCJmaWxlIjoic3JjL2FwcC9sb2JieS9sb2JieS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvcm0sICN0YWJsZSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbmRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuI3RhYmxlIHtcbiAgICAvKiBib3JkZXI6IDVweCBzb2xpZCBibHVlOyAqL1xuICAgIGhlaWdodDogODAlO1xufVxuXG4jZm9ybSB7XG4gICAgLyogYm9yZGVyOiA1cHggc29saWQgcmVkOyAqL1xuICAgIGhlaWdodDogMjAlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTAxcHgpIHtcbiAgICBkaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRpdiBidXR0b24ge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIFxuXG4gICAgI3RhYmxlLCAjZm9ybXtcbiAgICAgICAgLyogYm9yZGVyOiA1cHggc29saWQgYmx1ZTsgKi9cbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAjZm9ybSB7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgfVxuICAgICN0YWJsZSB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIFxuICAgIH1cblxuXG59Il19 */"] });
    return LobbyComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LobbyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lobby',
                templateUrl: './lobby.component.html',
                styleUrls: ['./lobby.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _shared_manager_service__WEBPACK_IMPORTED_MODULE_7__["ManagerService"] }, { type: _shared_game_manager_service__WEBPACK_IMPORTED_MODULE_8__["GameManagerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/lobby/waiting/waiting.component.ts":
/*!****************************************************!*\
  !*** ./src/app/lobby/waiting/waiting.component.ts ***!
  \****************************************************/
/*! exports provided: WaitingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingComponent", function() { return WaitingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






var WaitingComponent = /** @class */ (function () {
    function WaitingComponent(message) {
        this.message = message;
    }
    WaitingComponent.prototype.ngOnInit = function () {
    };
    WaitingComponent.prototype.onBack = function () {
    };
    WaitingComponent.ɵfac = function WaitingComponent_Factory(t) { return new (t || WaitingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    WaitingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WaitingComponent, selectors: [["app-waiting"]], decls: 11, vars: 1, consts: [["mat-dialog-title", ""], ["id", "spinner"], ["mat-flat-button", "", "mat-dialog-close", "", "color", "accent", "type", "button", 3, "click"]], template: function WaitingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Join Game");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WaitingComponent_Template_button_click_9_listener() { return ctx.onBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Back");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["main[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n#spinner[_ngcontent-%COMP%] {\n    width: 50%;\n    height: 50%;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9iYnkvd2FpdGluZy93YWl0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7O0FBRWYiLCJmaWxlIjoic3JjL2FwcC9sb2JieS93YWl0aW5nL3dhaXRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI3NwaW5uZXIge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgXG59Il19 */"] });
    return WaitingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WaitingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-waiting',
                templateUrl: './waiting.component.html',
                styleUrls: ['./waiting.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"]
            ], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"]] });
    return MaterialModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"]
                ],
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lobby_lobby_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lobby/lobby.component */ "./src/app/lobby/lobby.component.ts");
/* harmony import */ var _title_screen_title_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title-screen/title-screen.component */ "./src/app/title-screen/title-screen.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");







var routes = [
    { path: "", redirectTo: "title", pathMatch: 'full' },
    { path: "title", component: _title_screen_title_screen_component__WEBPACK_IMPORTED_MODULE_3__["TitleScreenComponent"] },
    { path: "lobby", component: _lobby_lobby_component__WEBPACK_IMPORTED_MODULE_2__["LobbyComponent"] },
    { path: "game", component: _game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoutingModule });
    RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoutingModule_Factory(t) { return new (t || RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return RoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/board/abstract.board.ts":
/*!************************************************!*\
  !*** ./src/app/shared/board/abstract.board.ts ***!
  \************************************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

var Board = /** @class */ (function () {
    function Board(canvas, numberOfRows, numberOfCols) {
        this.canvasSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.lengthOfCol = numberOfRows;
        this.lengthOfRow = numberOfCols;
        this.emptyBoard();
        this.setCanvasDimensions(this.canvas.width, this.canvas.height);
    }
    Board.prototype.clearBoard = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvasSubject.next(this.canvas);
    };
    Board.prototype.placePiece = function (index, playerPiece, isFinal) {
        var boardPiece = this.boardArray[index[0]][index[1]];
        boardPiece.piece = playerPiece;
        if (isFinal) {
            this.unsetAndEmptySpots -= 1;
            boardPiece.set = true;
        }
        this.boardArray[index[0]][index[1]] = boardPiece;
        this.emptySpots = this.emptySpots - 1 <= 0 ? 0 : this.emptySpots - 1;
    };
    Board.prototype.removePiece = function (index) {
        var bp = this.boardArray[index[0]][index[1]];
        if (!bp.set) {
            console.log("piece is set. cannot be removed!");
            return;
        }
        this.boardArray[index[0]][index[1]] = { set: false, piece: "", index: index };
        this.emptySpots++;
    };
    Board.prototype.drawBoardAndPieces = function () {
        this.clearBoard();
        this.drawBoard();
        this.drawPieces();
        this.canvasSubject.next(this.canvas);
    };
    Board.prototype.emptyBoard = function () {
        this.emptySpots = this.lengthOfRow * this.lengthOfCol;
        this.boardArray = new Array(this.lengthOfCol);
        for (var i = 0; i < this.lengthOfCol; i++) {
            this.boardArray[i] = new Array(this.lengthOfRow);
            for (var j = 0; j < this.lengthOfRow; j++) {
                this.boardArray[i][j] = { piece: "", index: [i, j], set: false };
            }
        }
    };
    Board.prototype.resetBoard = function () {
        this.emptyBoard();
        this.drawBoard();
    };
    Board.prototype.setCanvasDimensions = function (width, height) {
        if (width === void 0) { width = this.canvas.width; }
        if (height === void 0) { height = this.canvas.height; }
        this.canvas.width = width;
        this.canvas.height = height;
    };
    return Board;
}());



/***/ }),

/***/ "./src/app/shared/board/cf-board.ts":
/*!******************************************!*\
  !*** ./src/app/shared/board/cf-board.ts ***!
  \******************************************/
/*! exports provided: ConnectFourBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectFourBoard", function() { return ConnectFourBoard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abstract_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.board */ "./src/app/shared/board/abstract.board.ts");


var ConnectFourBoard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConnectFourBoard, _super);
    function ConnectFourBoard(canvas) {
        return _super.call(this, canvas, 7, 6) || this;
    }
    ConnectFourBoard.prototype.checkForWinner = function () {
        return "";
    };
    ConnectFourBoard.prototype.getBoardPiece = function (r, c) {
        return { index: [], set: false, piece: "" };
    };
    ConnectFourBoard.prototype.drawBoard = function () {
    };
    ConnectFourBoard.prototype.drawPieces = function () {
    };
    ConnectFourBoard.prototype.clickBoard = function (x, y) {
        return { index: [], set: false, piece: "" };
    };
    ConnectFourBoard.prototype.rowColToString = function (rc) {
        return "";
    };
    return ConnectFourBoard;
}(_abstract_board__WEBPACK_IMPORTED_MODULE_1__["Board"]));



/***/ }),

/***/ "./src/app/shared/board/ttt-board.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/board/ttt-board.ts ***!
  \*******************************************/
/*! exports provided: TicTacToeBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicTacToeBoard", function() { return TicTacToeBoard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abstract_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.board */ "./src/app/shared/board/abstract.board.ts");


var TicTacToeBoard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TicTacToeBoard, _super);
    function TicTacToeBoard(canvas) {
        var _this = _super.call(this, canvas, 3, 3) || this;
        _this.emptySpots = 9;
        _this.unsetAndEmptySpots = 9;
        _this.drawBoardAndPieces();
        console.log(_this.boardArray);
        return _this;
    }
    TicTacToeBoard.prototype.checkForWinner = function () {
        var checkDiag1 = this.boardArray[0][0].piece === this.boardArray[1][1].piece &&
            this.boardArray[1][1].piece === this.boardArray[2][2].piece;
        var checkDiag2 = this.boardArray[2][0].piece === this.boardArray[1][1].piece &&
            this.boardArray[1][1].piece === this.boardArray[0][2].piece;
        if (checkDiag1) {
            return this.boardArray[0][0].piece;
        }
        else if (checkDiag2) {
            return this.boardArray[2][0].piece;
        }
        //check rows
        for (var r = 0; r < 3; r++) {
            var currentRow = this.boardArray[r];
            var str = this.rowColToString(currentRow);
            if (str === "xxx") {
                return "x";
            }
            else if (str == "ooo") {
                return "o";
            }
        }
        //check cols 
        var row0 = this.boardArray[0];
        var row1 = this.boardArray[1];
        var row2 = this.boardArray[2];
        for (var c = 0; c < 3; c++) {
            var currentCol = [row0[c], row1[c], row2[c]];
            var str = this.rowColToString(currentCol);
            if (str === "xxx") {
                return "x";
            }
            else if (str == "ooo") {
                return "o";
            }
        }
        return "";
    };
    TicTacToeBoard.prototype.drawBoard = function () {
        console.log(this.canvas.width, this.canvas.height);
        //draw columns
        var i = this.canvas.width / this.lengthOfRow;
        while (i < this.canvas.width) {
            this.context.beginPath();
            this.context.moveTo(i, 0);
            this.context.lineTo(i, this.canvas.height);
            i += this.canvas.width / this.lengthOfRow;
            this.context.stroke();
        }
        i = this.canvas.height / this.lengthOfCol;
        //draw rows
        while (i < this.canvas.height) {
            this.context.beginPath();
            this.context.moveTo(0, i);
            this.context.lineTo(this.canvas.width, i);
            i += this.canvas.height / this.lengthOfCol;
            this.context.stroke();
        }
    };
    TicTacToeBoard.prototype.drawPieces = function () {
        var i = 0;
        var j = 0;
        var widthOfOneSpot = this.canvas.width / this.lengthOfCol;
        var heightOfOneSpot = this.canvas.height / this.lengthOfRow;
        this.context.lineWidth = 5;
        while (true) {
            var piece = this.boardArray[i][j];
            this.context.beginPath();
            if (piece.piece === "x") {
                this.context.moveTo(widthOfOneSpot * (j + 0.5), heightOfOneSpot * (i + 0.5));
                this.context.lineTo(widthOfOneSpot * (j + 0.25), heightOfOneSpot * (i + 0.25));
                this.context.moveTo(widthOfOneSpot * (j + 0.5), heightOfOneSpot * (i + 0.5));
                this.context.lineTo(widthOfOneSpot * (j + 0.75), heightOfOneSpot * (i + 0.25));
                this.context.moveTo(widthOfOneSpot * (j + 0.5), heightOfOneSpot * (i + 0.5));
                this.context.lineTo(widthOfOneSpot * (j + 0.25), heightOfOneSpot * (i + 0.75));
                this.context.moveTo(widthOfOneSpot * (j + 0.5), heightOfOneSpot * (i + 0.5));
                this.context.lineTo(widthOfOneSpot * (j + 0.75), heightOfOneSpot * (i + 0.75));
            }
            else if (piece.piece === "o") {
                this.context.ellipse(widthOfOneSpot * (j + 0.5), heightOfOneSpot * (i + 0.5), widthOfOneSpot * 0.25, heightOfOneSpot * 0.25, 0, 0, Math.PI * 2);
            }
            this.context.stroke();
            j++;
            if (j > this.lengthOfCol - 1) {
                j = 0;
                i++;
            }
            if (i > this.lengthOfRow - 1) {
                break;
            }
        }
        this.context.lineWidth = 1;
    };
    TicTacToeBoard.prototype.getBoardPiece = function (r, c) {
        return this.boardArray[r][c];
    };
    TicTacToeBoard.prototype.clickBoard = function (x, y) {
        var i = 0;
        var j = 0;
        var widthOfOneSpot = this.canvas.width / this.lengthOfCol;
        var heightOfOneSpot = this.canvas.height / this.lengthOfRow;
        //check if click is in cell boundaries
        while (i < this.lengthOfCol && j < this.lengthOfRow) {
            var checkCol = x > widthOfOneSpot * j && x < widthOfOneSpot * (j + 1);
            var checkRow = y > heightOfOneSpot * i && y < heightOfOneSpot * (i + 1);
            if (checkRow && checkCol) {
                break;
            }
            j++;
            if (j === this.lengthOfCol) {
                j = 0;
                i++;
            }
            if (i == this.lengthOfRow) {
                break;
            }
        }
        var piece = this.getBoardPiece(i, j);
        return piece;
    };
    TicTacToeBoard.prototype.rowColToString = function (rc) {
        return rc.map(function (rc) {
            return rc.piece;
        }).join("");
    };
    return TicTacToeBoard;
}(_abstract_board__WEBPACK_IMPORTED_MODULE_1__["Board"]));



/***/ }),

/***/ "./src/app/shared/game-manager.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/game-manager.service.ts ***!
  \************************************************/
/*! exports provided: GameManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameManagerService", function() { return GameManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _board_ttt_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board/ttt-board */ "./src/app/shared/board/ttt-board.ts");
/* harmony import */ var _board_cf_board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board/cf-board */ "./src/app/shared/board/cf-board.ts");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player/player */ "./src/app/shared/player/player.ts");






var GameManagerService = /** @class */ (function () {
    function GameManagerService() {
        this.gameInfoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.playerTurnSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.computerPieceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.board = null;
    }
    GameManagerService.prototype.hostGame = function (gameInfo) {
        this.setGameInfo(gameInfo);
    };
    GameManagerService.prototype.againstPC = function (gameInfo) {
        this.setGameInfo(gameInfo);
    };
    GameManagerService.prototype.joinGame = function (gameInfo) {
        this.setGameInfo(gameInfo);
    };
    GameManagerService.prototype.quitGame = function () {
        this.clearGameInfo();
        this.board.clearBoard();
        this.board.emptyBoard();
        delete this.board;
        delete this.pc;
        this.turn = "";
    };
    GameManagerService.prototype.startGame = function (canvas) {
        var ginfo = this.gameInfo;
        this.computerPiece = Math.floor(Math.random() * 2) === 0 ? "o" : "x";
        if (ginfo.opponentPC) {
            this.pc = new _player_player__WEBPACK_IMPORTED_MODULE_4__["ComputerPlayer"](this.computerPiece, false, ginfo.difficulty, this);
            this.computerPieceSubject.next(this.computerPiece === "x" ? "o" : "x");
        }
        if (ginfo.gameType === "TTT") {
            this.board = new _board_ttt_board__WEBPACK_IMPORTED_MODULE_2__["TicTacToeBoard"](canvas);
        }
        else if (ginfo.gameType === "CF") {
            this.board = new _board_cf_board__WEBPACK_IMPORTED_MODULE_3__["ConnectFourBoard"](canvas);
        }
        this.turn = Math.floor(Math.random() * 2) === 0 ? "o" : "x";
        this.playerTurnSubject.next(this.turn);
    };
    GameManagerService.prototype.confirmMove = function (move, piece) {
        this.board.placePiece(move, piece, true);
        this.board.drawBoardAndPieces();
        this.nextTurn();
    };
    GameManagerService.prototype.notFinalMove = function (move, piece) {
        this.board.placePiece(move, piece, false);
        this.board.drawBoardAndPieces();
    };
    GameManagerService.prototype.removePiece = function (move) {
        this.board.removePiece(move);
        this.board.drawBoardAndPieces();
    };
    GameManagerService.prototype.nextTurn = function () {
        this.turn = this.turn === "x" ? "o" : "x";
        this.playerTurnSubject.next(this.turn);
    };
    GameManagerService.prototype.setGameInfo = function (gameInfo) {
        this.gameInfo = gameInfo;
        this.gameInfoSubject.next(gameInfo);
    };
    GameManagerService.prototype.getGameInfo = function () {
        return this.gameInfo;
    };
    GameManagerService.prototype.clearGameInfo = function () {
        this.gameInfo = null;
        this.gameInfoSubject.next(this.gameInfo);
    };
    GameManagerService.ɵfac = function GameManagerService_Factory(t) { return new (t || GameManagerService)(); };
    GameManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameManagerService, factory: GameManagerService.ɵfac, providedIn: 'root' });
    return GameManagerService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/loading/loading.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/loading/loading.component.ts ***!
  \*****************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
    LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 10, vars: 0, consts: [[1, "loadingio-spinner-blocks-3112n02kcmk"], [1, "ldio-3flzva71sn7"], [2, "left", "38px", "top", "38px", "animation-delay", "0s"], [2, "left", "80px", "top", "38px", "animation-delay", "0.125s"], [2, "left", "122px", "top", "38px", "animation-delay", "0.25s"], [2, "left", "38px", "top", "80px", "animation-delay", "0.875s"], [2, "left", "122px", "top", "80px", "animation-delay", "0.375s"], [2, "left", "38px", "top", "122px", "animation-delay", "0.75s"], [2, "left", "80px", "top", "122px", "animation-delay", "0.625s"], [2, "left", "122px", "top", "122px", "animation-delay", "0.5s"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["@keyframes ldio-3flzva71sn7 {\n    0% { background: #5699d2 }\n    12.5% { background: #5699d2 }\n    12.625% { background: #1d3f72 }\n    100% { background: #1d3f72 }\n  }\n  .ldio-3flzva71sn7[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    background: #1d3f72;\n    animation: ldio-3flzva71sn7 1s linear infinite;\n  }\n  .loadingio-spinner-blocks-3112n02kcmk[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    display: inline-block;\n    overflow: hidden;\n    background: #ffffff;\n  }\n  .ldio-3flzva71sn7[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform: translateZ(0) scale(1);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transform-origin: 0 0; \n  }\n  .ldio-3flzva71sn7[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: content-box; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksS0FBSyxvQkFBb0I7SUFDekIsUUFBUSxvQkFBb0I7SUFDNUIsVUFBVSxvQkFBb0I7SUFDOUIsT0FBTyxvQkFBb0I7RUFDN0I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw4Q0FBOEM7RUFDaEQ7RUFDQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLHFCQUFxQixFQUFFLG1CQUFtQjtFQUM1QztFQUNBLHdCQUF3Qix1QkFBdUIsRUFBRTtFQUNqRCxxQ0FBcUMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIGxkaW8tM2ZsenZhNzFzbjcge1xuICAgIDAlIHsgYmFja2dyb3VuZDogIzU2OTlkMiB9XG4gICAgMTIuNSUgeyBiYWNrZ3JvdW5kOiAjNTY5OWQyIH1cbiAgICAxMi42MjUlIHsgYmFja2dyb3VuZDogIzFkM2Y3MiB9XG4gICAgMTAwJSB7IGJhY2tncm91bmQ6ICMxZDNmNzIgfVxuICB9XG4gIC5sZGlvLTNmbHp2YTcxc243IGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMWQzZjcyO1xuICAgIGFuaW1hdGlvbjogbGRpby0zZmx6dmE3MXNuNyAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgLmxvYWRpbmdpby1zcGlubmVyLWJsb2Nrcy0zMTEybjAya2NtayB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgfVxuICAubGRpby0zZmx6dmE3MXNuNyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgc2NhbGUoMSk7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDsgLyogc2VlIG5vdGUgYWJvdmUgKi9cbiAgfVxuICAubGRpby0zZmx6dmE3MXNuNyBkaXYgeyBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgfVxuICAvKiBnZW5lcmF0ZWQgYnkgaHR0cHM6Ly9sb2FkaW5nLmlvLyAqLyJdfQ== */"] });
    return LoadingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/manager.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/manager.service.ts ***!
  \*******************************************/
/*! exports provided: ManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerService", function() { return ManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var ManagerService = /** @class */ (function () {
    function ManagerService() {
    }
    ManagerService.ɵfac = function ManagerService_Factory(t) { return new (t || ManagerService)(); };
    ManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ManagerService, factory: ManagerService.ɵfac, providedIn: 'root' });
    return ManagerService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/player/abstract.player.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/player/abstract.player.ts ***!
  \**************************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player(piece, isHuman, mode, gameManager) {
        if (mode === void 0) { mode = "easy"; }
        if (gameManager === void 0) { gameManager = null; }
        this.piece = piece;
        this.isHuman = isHuman;
        this.mode = mode;
        this.gameManager = gameManager;
        this.boardArray = [];
        this.mode = mode;
    }
    Player.prototype.getIsHuman = function () {
        return this.isHuman;
    };
    Player.prototype.getPiece = function () {
        return this.piece;
    };
    return Player;
}());



/***/ }),

/***/ "./src/app/shared/player/player.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/player/player.ts ***!
  \*****************************************/
/*! exports provided: ComputerPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputerPlayer", function() { return ComputerPlayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abstract_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.player */ "./src/app/shared/player/abstract.player.ts");


var ComputerPlayer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ComputerPlayer, _super);
    function ComputerPlayer(piece, isHuman, mode, gm) {
        if (isHuman === void 0) { isHuman = false; }
        if (mode === void 0) { mode = "easy"; }
        if (gm === void 0) { gm = null; }
        var _this = _super.call(this, piece, isHuman, mode, gm) || this;
        _this.playerTurnSubscription = _this.gameManager.playerTurnSubject.subscribe(function (turn) {
            if (turn === _this.piece) {
                var result = _this.play();
                _this.decideOnMove(result);
            }
        });
        return _this;
    }
    ComputerPlayer.prototype.decideOnMove = function (choice) {
        this.gameManager.confirmMove(choice, this.piece);
    };
    ComputerPlayer.prototype.play = function () {
        if (this.mode === "easy") {
            return this.playEasy();
        }
        else if (this.mode === "medium") {
            return this.playMedium();
        }
        else {
            return this.playHard();
        }
    };
    ComputerPlayer.prototype.playEasy = function () {
        var r = Math.floor(Math.random() * 3);
        var c = Math.floor(Math.random() * 3);
        var piece = this.gameManager.board.getBoardPiece(r, c);
        while (piece.piece != "") {
            piece = this.gameManager.board.getBoardPiece(r, c);
        }
        return [r, c];
    };
    ComputerPlayer.prototype.playMedium = function () {
        var decision = Math.floor(Math.random() * 100);
        if (decision >= 60) {
            return this.playEasy();
        }
        else {
            return this.playMiniMax();
        }
    };
    ComputerPlayer.prototype.playHard = function () {
        var decision = Math.floor(Math.random() * 100);
        if (decision >= 80) {
            return this.playEasy();
        }
        else {
            return this.playMiniMax();
        }
    };
    ComputerPlayer.prototype.playMiniMax = function () {
        return this.findBestMove();
    };
    ComputerPlayer.prototype.findBestMove = function () {
        var board = this.gameManager.board;
        var bestVal = this.piece === "x" ? -1000 : 1000;
        var bestMove = [-1, -1];
        for (var r = 0; r < 3; r++) {
            for (var c = 0; c < 3; c++) {
                if (board.getBoardPiece(r, c).piece === "") {
                    board.placePiece([r, c], this.piece, false);
                    var isMaximizer = this.piece === "x" ? true : false;
                    var moveVal = this.miniMax(board, 0, !isMaximizer);
                    board.removePiece([r, c]);
                    var check = this.piece === "x" ? moveVal > bestVal : moveVal < bestVal;
                    if (check) {
                        bestMove = [r, c];
                        bestVal = moveVal;
                    }
                }
            }
        }
        return bestMove;
    };
    ComputerPlayer.prototype.miniMax = function (board, depth, isMax) {
        var winner = board.checkForWinner();
        if (winner === "x") {
            return 10 - depth;
        }
        else if (winner === "o") {
            return -10 + depth;
        }
        var movesLeft = board.emptySpots;
        if (movesLeft <= 0) {
            return 0;
        }
        if (isMax) {
            var bestVal = -10000;
            for (var r = 0; r < 3; r++) {
                for (var c = 0; c < 3; c++) {
                    if (board.getBoardPiece(r, c).piece === "") {
                        board.placePiece([r, c], "x", false);
                        var value = this.miniMax(board, depth + 1, !isMax);
                        value = !!value ? value : 0;
                        bestVal = Math.max(bestVal, value);
                        board.removePiece([r, c]);
                    }
                }
            }
            return bestVal;
        }
        else {
            var bestVal = 10000;
            for (var r = 0; r < 3; r++) {
                for (var c = 0; c < 3; c++) {
                    if (board.getBoardPiece(r, c).piece === "") {
                        board.placePiece([r, c], "o", false);
                        var value = this.miniMax(board, depth + 1, !isMax);
                        value = !!value ? value : 0;
                        bestVal = Math.min(bestVal, value);
                        board.removePiece([r, c]);
                    }
                }
            }
            return bestVal;
        }
    };
    return ComputerPlayer;
}(_abstract_player__WEBPACK_IMPORTED_MODULE_1__["Player"]));



/***/ }),

/***/ "./src/app/title-screen/title-screen.component.ts":
/*!********************************************************!*\
  !*** ./src/app/title-screen/title-screen.component.ts ***!
  \********************************************************/
/*! exports provided: TitleScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleScreenComponent", function() { return TitleScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_game_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/game-manager.service */ "./src/app/shared/game-manager.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








var TitleScreenComponent = /** @class */ (function () {
    function TitleScreenComponent(router, gameManager) {
        this.router = router;
        this.gameManager = gameManager;
    }
    TitleScreenComponent.prototype.ngOnInit = function () {
    };
    TitleScreenComponent.prototype.onOkay = function (form) {
        this.gameManager.playerName = form.value.username;
        this.router.navigate(['/lobby']);
    };
    TitleScreenComponent.ɵfac = function TitleScreenComponent_Factory(t) { return new (t || TitleScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_game_manager_service__WEBPACK_IMPORTED_MODULE_2__["GameManagerService"])); };
    TitleScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleScreenComponent, selectors: [["app-title-screen"]], decls: 12, vars: 1, consts: [["id", "title"], ["id", "form"], [3, "ngSubmit"], ["f", "ngForm"], ["matNativeControl", "", "ngModel", "", "name", "username", "required", "", "placeholder", "Enter Username"], ["mat-raised-button", "", "color", "primary", 3, "disabled"]], template: function TitleScreenComponent_Template(rf, ctx) { if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tic Tac Toe & Connect 4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TitleScreenComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.onOkay(_r0); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-error");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Okay");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid || _r0.pristine);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["main[_ngcontent-%COMP%] {\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n    \n    \n}\nsection[_ngcontent-%COMP%] {\n    margin: auto;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n\n    \n}\n#title[_ngcontent-%COMP%] {\n    height: 60%;\n    border-bottom: 1px \n}\n#form[_ngcontent-%COMP%] {\n    height: 40%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n#title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0;\n    position: absolute;\n    top: 35%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\nform[_ngcontent-%COMP%] {\n    display: flex;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    margin: auto;\n    margin-left: 2rem;\n    \n}\n@media (max-width: 500px) {\n    form[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n    }\n\n    form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        margin: 0px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGl0bGUtc2NyZWVuL3RpdGxlLXNjcmVlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7O0lBRXRCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTs7SUFFWiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLFdBQVc7SUFDWDtBQUNKO0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFHQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7O0FBRXJCO0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3RpdGxlLXNjcmVlbi90aXRsZS1zY3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgLyogYm9yZGVyOiA1cHggc29saWQgcmVkOyAqL1xufVxuc2VjdGlvbiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAvKiBib3JkZXI6IDEwcHggc29saWQgYmx1ZTsgKi9cbn1cblxuI3RpdGxlIHtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggXG59XG5cbiNmb3JtIHtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuI3RpdGxlIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzUlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbmZvcm0gYnV0dG9ue1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICBcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgZm9ybSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgZm9ybSBidXR0b24ge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG59Il19 */"] });
    return TitleScreenComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-title-screen',
                templateUrl: './title-screen.component.html',
                styleUrls: ['./title-screen.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _shared_game_manager_service__WEBPACK_IMPORTED_MODULE_2__["GameManagerService"] }]; }, null); })();


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tbz/Desktop/workbench/tic-tac-toe-connect-four/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map