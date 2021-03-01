"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportModule = void 0;
const common_1 = require("@nestjs/common");
const message_service_1 = require("./message.service");
const greet_service_1 = require("./greet.service");
let ExportModule = class ExportModule {
};
ExportModule = __decorate([
    common_1.Module({
        providers: [message_service_1.MessageService, greet_service_1.GreetService],
        exports: [greet_service_1.GreetService]
    })
], ExportModule);
exports.ExportModule = ExportModule;
//# sourceMappingURL=export.module.js.map