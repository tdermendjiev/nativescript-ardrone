"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = require("tns-core-modules/ui/page");
var main_view_model_1 = require("./main-view-model");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel();
    if (page_1.isIOS) {
        var slider = page.getViewById("heightSlider");
        slider.nativeView.transform = CGAffineTransformMakeRotation(Math.PI * 0.5);
    }
}
exports.pageLoaded = pageLoaded;
function updateDistance(scene) {
    var distanceLabel = scene.parent.getViewById("distanceLabel");
    var distance = calculateDistanceFromCamera(scene, scene.helicopterNode);
    if (distance && distanceLabel) {
        distanceLabel.text = distance.toFixed(2);
    }
}
function arLoaded(args) {
    var scene = args.object;
    scene.setupDrone();
}
exports.arLoaded = arLoaded;
function onSliderLoaded(args) {
    var sliderComponent = args.object;
    sliderComponent.value = sliderComponent.parent.parent.sceneView.scene.rootNode.childNodes[0].position.y;
    sliderComponent.on("valueChange", function (sargs) {
        var scene = sargs.object.parent.parent;
        scene.changeAltitude(sargs.object.value);
    });
}
exports.onSliderLoaded = onSliderLoaded;
function calculateDistanceFromCamera(scene, to) {
    var camera = scene.sceneView.session.currentFrame.camera;
    var transform = camera.transform;
    var dx = to.position.x - transform.columns[3][0];
    var dy = to.position.y - transform.columns[3][1];
    var dz = to.position.z - transform.columns[3][2];
    var meters = Math.sqrt(dx * dx + dy * dy + dz * dz);
    return meters;
}
function moveForward(args) {
    var scene = args.object.parent.parent.parent;
    scene.moveForward();
    updateDistance(scene);
}
exports.moveForward = moveForward;
function moveBack(args) {
    var scene = args.object.parent.parent.parent;
    scene.moveBack();
    updateDistance(scene);
}
exports.moveBack = moveBack;
function moveLeft(args) {
    var scene = args.object.parent.parent.parent;
    scene.moveLeft();
    updateDistance(scene);
}
exports.moveLeft = moveLeft;
function moveRight(args) {
    var scene = args.object.parent.parent.parent;
    scene.moveRight();
    updateDistance(scene);
}
exports.moveRight = moveRight;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsaURBQWlEO0FBQ2pELHFEQUFvRDtBQUVwRCxvQkFBMkIsSUFBMEI7SUFDbkQsSUFBSSxJQUFJLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0lBRTVDLEVBQUUsQ0FBQyxDQUFDLFlBQUssQ0FBQyxDQUFDLENBQUM7UUFDVixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLDZCQUE2QixDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDN0UsQ0FBQztBQUVILENBQUM7QUFURCxnQ0FTQztBQUVELHdCQUF3QixLQUFVO0lBQ2hDLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzlELElBQUksUUFBUSxHQUFHLDJCQUEyQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFdEUsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDOUIsYUFBYSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7QUFDTCxDQUFDO0FBRUQsa0JBQXlCLElBQVM7SUFDaEMsSUFBSSxLQUFLLEdBQW1CLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFeEMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBRXJCLENBQUM7QUFMRCw0QkFLQztBQUVELHdCQUErQixJQUFTO0lBQ3RDLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFcEMsZUFBZSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUV2RyxlQUFlLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFDLEtBQUs7UUFDdEMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFURCx3Q0FTQztBQUVELHFDQUFxQyxLQUFLLEVBQUUsRUFBRTtJQUMxQyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO0lBQ3pELElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDakMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pELElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVELHFCQUE0QixJQUFTO0lBQ25DLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDN0MsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN4QixDQUFDO0FBSkQsa0NBSUM7QUFFRCxrQkFBeUIsSUFBUztJQUNoQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzdDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEIsQ0FBQztBQUpELDRCQUlDO0FBRUQsa0JBQXlCLElBQVM7SUFDaEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM3QyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hCLENBQUM7QUFKRCw0QkFJQztBQUNELG1CQUEwQixJQUFTO0lBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDN0MsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN4QixDQUFDO0FBSkQsOEJBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBvYnNlcnZhYmxlIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCAqIGFzIHBhZ2VzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XG5pbXBvcnQge0Ryb25lU2NlbmVWaWV3fSBmcm9tICcuL0Ryb25lU2NlbmVWaWV3JztcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IEhlbGxvV29ybGRNb2RlbCB9IGZyb20gJy4vbWFpbi12aWV3LW1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJnczogb2JzZXJ2YWJsZS5FdmVudERhdGEpIHtcbiAgbGV0IHBhZ2UgPSA8cGFnZXMuUGFnZT5hcmdzLm9iamVjdDtcbiAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBIZWxsb1dvcmxkTW9kZWwoKTtcblxuICBpZiAoaXNJT1MpIHtcbiAgICBjb25zdCBzbGlkZXIgPSBwYWdlLmdldFZpZXdCeUlkKFwiaGVpZ2h0U2xpZGVyXCIpO1xuICAgIHNsaWRlci5uYXRpdmVWaWV3LnRyYW5zZm9ybSA9IENHQWZmaW5lVHJhbnNmb3JtTWFrZVJvdGF0aW9uKE1hdGguUEkgKiAwLjUpO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gdXBkYXRlRGlzdGFuY2Uoc2NlbmU6IGFueSkge1xuICBsZXQgZGlzdGFuY2VMYWJlbCA9IHNjZW5lLnBhcmVudC5nZXRWaWV3QnlJZChcImRpc3RhbmNlTGFiZWxcIik7XG4gIHZhciBkaXN0YW5jZSA9IGNhbGN1bGF0ZURpc3RhbmNlRnJvbUNhbWVyYShzY2VuZSwgc2NlbmUuaGVsaWNvcHRlck5vZGUpO1xuXG4gICAgaWYgKGRpc3RhbmNlICYmIGRpc3RhbmNlTGFiZWwpIHtcbiAgICAgIGRpc3RhbmNlTGFiZWwudGV4dCA9IGRpc3RhbmNlLnRvRml4ZWQoMik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJMb2FkZWQoYXJnczogYW55KTogdm9pZCB7XG4gIHZhciBzY2VuZSA9IDxEcm9uZVNjZW5lVmlldz5hcmdzLm9iamVjdDtcblxuICBzY2VuZS5zZXR1cERyb25lKCk7XG4gIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25TbGlkZXJMb2FkZWQoYXJnczogYW55KTogdm9pZCB7XG4gIGNvbnN0IHNsaWRlckNvbXBvbmVudCA9IGFyZ3Mub2JqZWN0O1xuXG4gIHNsaWRlckNvbXBvbmVudC52YWx1ZSA9IHNsaWRlckNvbXBvbmVudC5wYXJlbnQucGFyZW50LnNjZW5lVmlldy5zY2VuZS5yb290Tm9kZS5jaGlsZE5vZGVzWzBdLnBvc2l0aW9uLnlcbiAgXG4gIHNsaWRlckNvbXBvbmVudC5vbihcInZhbHVlQ2hhbmdlXCIsIChzYXJncykgPT4ge1xuICAgIHZhciBzY2VuZSA9IHNhcmdzLm9iamVjdC5wYXJlbnQucGFyZW50O1xuICAgIHNjZW5lLmNoYW5nZUFsdGl0dWRlKHNhcmdzLm9iamVjdC52YWx1ZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVEaXN0YW5jZUZyb21DYW1lcmEoc2NlbmUsIHRvKSB7XG4gICAgdmFyIGNhbWVyYSA9IHNjZW5lLnNjZW5lVmlldy5zZXNzaW9uLmN1cnJlbnRGcmFtZS5jYW1lcmE7XG4gICAgdmFyIHRyYW5zZm9ybSA9IGNhbWVyYS50cmFuc2Zvcm07XG4gICAgdmFyIGR4ID0gdG8ucG9zaXRpb24ueCAtIHRyYW5zZm9ybS5jb2x1bW5zWzNdWzBdO1xuICAgIHZhciBkeSA9IHRvLnBvc2l0aW9uLnkgLSB0cmFuc2Zvcm0uY29sdW1uc1szXVsxXTtcbiAgICB2YXIgZHogPSB0by5wb3NpdGlvbi56IC0gdHJhbnNmb3JtLmNvbHVtbnNbM11bMl07XG4gICAgdmFyIG1ldGVycyA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSArIGR6ICogZHopO1xuICAgIHJldHVybiBtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlRm9yd2FyZChhcmdzOiBhbnkpIHtcbiAgbGV0IHNjZW5lID0gYXJncy5vYmplY3QucGFyZW50LnBhcmVudC5wYXJlbnQ7XG4gIHNjZW5lLm1vdmVGb3J3YXJkKCk7XG4gIHVwZGF0ZURpc3RhbmNlKHNjZW5lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVCYWNrKGFyZ3M6IGFueSkge1xuICBsZXQgc2NlbmUgPSBhcmdzLm9iamVjdC5wYXJlbnQucGFyZW50LnBhcmVudDtcbiAgc2NlbmUubW92ZUJhY2soKTtcbiAgdXBkYXRlRGlzdGFuY2Uoc2NlbmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW92ZUxlZnQoYXJnczogYW55KSB7XG4gIGxldCBzY2VuZSA9IGFyZ3Mub2JqZWN0LnBhcmVudC5wYXJlbnQucGFyZW50O1xuICBzY2VuZS5tb3ZlTGVmdCgpO1xuICB1cGRhdGVEaXN0YW5jZShzY2VuZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gbW92ZVJpZ2h0KGFyZ3M6IGFueSkge1xuICBsZXQgc2NlbmUgPSBhcmdzLm9iamVjdC5wYXJlbnQucGFyZW50LnBhcmVudDtcbiAgc2NlbmUubW92ZVJpZ2h0KCk7XG4gIHVwZGF0ZURpc3RhbmNlKHNjZW5lKTtcbn1cbiJdfQ==