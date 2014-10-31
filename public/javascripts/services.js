var services = angular.module('services', ['ngResource'])

services.factory('API', ['$http', '$rootScope',
    function ($http, $rootScope) {
        var doRequest = function (path, query, data, method) {
            if (!path) return;

            var _method = method || 'GET'
                , _query = query || null
                , _data = data || null
            return $http({
                method: _method,
                url: path,
                query: _query,
                data: _data
            })
        }
        return {
            request: function(path, query, data, method){
                return doRequest.apply(this, arguments);
            },userLoad: function(cb){
                this.request('/user/').success(cb)
            }
        }
    }
])
