"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var users_service_1 = require('./users.service');
var UsersComponent = (function () {
    function UsersComponent(userService) {
        this.userService = userService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (res) { return _this.users = res; });
    };
    ;
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users',
            template: "\n     <table class=\"table\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th>Email</th>\n          <th>Company</th>\n          <th>Edit</th>\n          <th>Delete</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of users\">\n          <th scope=\"row\">{{user.id}}</th>\n          <td>{{user.name}}</td>\n          <td>{{user.email}}</td>\n          <td>{{user.company.name}}</td>\n          <td><span class=\"glyphicon glyphicon-edit\"></span></td>\n          <td><span class=\"glyphicon glyphicon-remove\"></span></td>\n        </tr>\n  ",
            styles: ["\n     table{\n       margin-left: 50px;\n     }\n\n     td{\n       width:300px;\n     }\n  "],
            providers: [users_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [users_service_1.UserService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map