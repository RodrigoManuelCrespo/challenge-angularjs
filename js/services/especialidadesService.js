(function () {
    'use strict';

    angular
        .module('miApp')
        .factory('EspecialidadesService', EspecialidadesService);

    EspecialidadesService.$inject = ['$http', '$q'];

    function EspecialidadesService($http, $q) {
        var apiBaseUrl = `${window.location.origin}/data/form.json`;

        return {
            obtenerEspecialidades: obtenerEspecialidades
        };

        function obtenerEspecialidades() {
            var defer = $q.defer();

            $http.get(apiBaseUrl)
                .then(function (response) {
                    defer.resolve(response.data.especialidades);
                })
                .catch(function (error) {
                    console.error('Error al obtener especialidades:', error);
                    defer.reject(error);
                });

            return defer.promise;
        }
    }
})();
