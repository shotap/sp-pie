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
 * § Version: 0.0.1
 * § Author: Shota Papiashvili
 * § Repo: https://github.com/shotap/sp-pie
 *
 */

angular
    .module('sp-pie', [])
    .directive('spPie', [ function(){
        var tmpl='<svg viewBox="0 0 64 64" class="sp-pie"></svg>';

        return {
            restrict: 'AE',
            type: 'svg',
            replace: 'true',
            scope: true,
            template: tmpl,
            link: function(scope, elem, attr){
                var circle = angular.element(document.createElementNS('http://www.w3.org/2000/svg', 'circle'))
                    .attr('r', '25%')
                    .attr('cx', '50%')
                    .attr('cy', '50%')
                    .attr('class', 'sp-pie-slice-1');
                elem.append(circle);
            }
        };
    } ])
;
