angular
    .module('demoApp', ['sp-pie'])
    .controller('demoCtrl', ['$scope', function ($scope) {
        $scope.slices = [
            {value: 14, color: '#f06'},
            {value: 60, color: 'yellowgreen'},
            {value: 26, color: 'navy'}
        ];
    }])
;