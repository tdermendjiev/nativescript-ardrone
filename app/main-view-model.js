"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var nativescript_ar_1 = require("nativescript-ar");
var DroneSceneViewModel = /** @class */ (function (_super) {
    __extends(DroneSceneViewModel, _super);
    function DroneSceneViewModel() {
        var _this = _super.call(this) || this;
        var supported = nativescript_ar_1.AR.isSupported();
        _this.message = "AR supported? " + supported;
        return _this;
    }
    return DroneSceneViewModel;
}(observable_1.Observable));
exports.DroneSceneViewModel = DroneSceneViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBQzlELG1EQUFpRDtBQUVqRDtJQUF5Qyx1Q0FBVTtJQUdqRDtRQUFBLFlBQ0UsaUJBQU8sU0FJUjtRQUZDLElBQU0sU0FBUyxHQUFHLG9CQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxtQkFBaUIsU0FBVyxDQUFDOztJQUM5QyxDQUFDO0lBRUgsMEJBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBeUMsdUJBQVUsR0FVbEQ7QUFWWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgQVIsIEFSTWF0ZXJpYWwgfSBmcm9tICduYXRpdmVzY3JpcHQtYXInO1xuXG5leHBvcnQgY2xhc3MgRHJvbmVTY2VuZVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBjb25zdCBzdXBwb3J0ZWQgPSBBUi5pc1N1cHBvcnRlZCgpO1xuICAgIHRoaXMubWVzc2FnZSA9IGBBUiBzdXBwb3J0ZWQ/ICR7c3VwcG9ydGVkfWA7XG4gIH1cblxufVxuIl19