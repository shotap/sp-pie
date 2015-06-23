/**
 *
 * ███████╗██████╗       ██████╗ ██╗███████╗
 * ██╔════╝██╔══██╗      ██╔══██╗██║██╔════╝
 * ███████╗██████╔╝█████╗██████╔╝██║█████╗
 * ╚════██║██╔═══╝ ╚════╝██╔═══╝ ██║██╔══╝
 * ███████║██║           ██║     ██║███████╗
 * ╚══════╝╚═╝           ╚═╝     ╚═╝╚══════╝
 *
 *
 * § Version: 1.0.0
 * § Author: Shota Papiashvili
 * § Repo: https://github.com/shotap/sp-pie
 *
 */

angular.module('sp-pie', []);

angular
    .module('sp-pie')
    .service('$spSlicer', [function(){
        return {
            cutMeASlice: function(slice, total, elem){
                var ci = angular
                    .element(document.createElementNS('http://www.w3.org/2000/svg', 'circle'))
                    .attr('r', '25%').attr('cx', '50%').attr('cy', '50%')
                    .attr('style', 'fill:transparent;stroke:' + slice.color + ';stroke-width:32;stroke-dasharray:0,' + total + ',' + v.value + ', 100;transform-origin:center;transform:rotate(-90deg);');

                elem.append(ci);
                return total + slice.value;
            }
        }
    }])
;

angular
    .module('sp-pie')
    .directive('spPie', ['$spSlicer', function($spSlicer){
        var tmpl='<svg viewBox="0 0 64 64" class="sp-pie"></svg>';

        return {
            restrict: 'AE',
            type: 'svg',
            replace: 'true',
            scope: true,
            template: tmpl,
            link: function(scope, elem, attr){
                elem.attr('style', 'width:' + attr.size + 'px');

                if (attr.slices) {
                    var slices = scope.$parent[attr.slices];
                    var total = 0;

                    angular.forEach(slices, function (v) {
                        total = $spSlicer.cutMeASlice(v, total, elem);
                    }, total);
                }
            }
        };
    }])
;


angular
    .module('sp-pie')
    .directive('spSlice', [ function(){

    }])
;