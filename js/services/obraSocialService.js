(function () {
    'use strict';

    angular
        .module('miApp')
        .factory('ObrasSocialesService', ObrasSocialesService);

    ObrasSocialesService.$inject = ['$http', '$q'];

    function ObrasSocialesService($http, $q) {
        var apiBaseUrl = `${window.location.origin}/data/form.json`;

        return {
            obtenerObrasSociales: obtenerObrasSociales
        };

        function obtenerObrasSociales() {
            var defer = $q.defer();

            $http.get(apiBaseUrl)
                .then(function (response) {
                    defer.resolve(response.data.obrasSociales);
                })
                .catch(function (error) {
                    console.error('Error al obtener obras sociales:', error);
                    defer.reject(error);
                });

            return defer.promise;
        }
    }
})();
