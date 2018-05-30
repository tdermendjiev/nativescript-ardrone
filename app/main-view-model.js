"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var nativescript_ar_1 = require("nativescript-ar");
var HelloWorldModel = /** @class */ (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        var supported = nativescript_ar_1.AR.isSupported();
        _this.message = "AR supported? " + supported;
        return _this;
    }
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBQzlELG1EQUFpRDtBQUVqRDtJQUFxQyxtQ0FBVTtJQUc3QztRQUFBLFlBQ0UsaUJBQU8sU0FJUjtRQUZDLElBQU0sU0FBUyxHQUFHLG9CQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxtQkFBaUIsU0FBVyxDQUFDOztJQUM5QyxDQUFDO0lBRUgsc0JBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBcUMsdUJBQVUsR0FVOUM7QUFWWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBBUiwgQVJNYXRlcmlhbCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hcic7XG5cbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgY29uc3Qgc3VwcG9ydGVkID0gQVIuaXNTdXBwb3J0ZWQoKTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBgQVIgc3VwcG9ydGVkPyAke3N1cHBvcnRlZH1gO1xuICB9XG5cbn1cbiJdfQ==