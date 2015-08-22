var app = angular.module('wizWebClipper', ['ngTagsInput']);
app.controller('ClipperCtrl', function($scope) {
    $scope.tags = [];

    $scope.tagsNameStr = function() {
        var length = $scope.tags.length;
        var result = '';
        if (length > 0) {
            for (var i = 0; i < length - 1; i++) {
                result += $scope.tags[i].text + ',';
            }
            result += $scope.tags[i].text;

        }
        return result;
    };
});