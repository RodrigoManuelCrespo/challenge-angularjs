(function () {
    'use strict';

    angular
        .module('miApp')
        .factory('ProfesionalesService', ProfesionalesService);

    ProfesionalesService.$inject = ['$http', '$q'];

    function ProfesionalesService($http, $q) {
        var apiBaseUrl = `${window.location.origin}/data/form.json`;

        return {
            obtenerProfesionales: obtenerProfesionales
        };

        function obtenerProfesionales(especialidadId) {
            var defer = $q.defer();

            $http.get(apiBaseUrl)
                .then(function (response) {
                    console.log(response);

                    var profesionales = response.data.profesionales[especialidadId] || [];
                    defer.resolve(profesionales);
                })
                .catch(function (error) {
                    console.error('Error al obtener profesionales:', error);
                    defer.reject(error);
                });

            return defer.promise;
        }
    }
})();
