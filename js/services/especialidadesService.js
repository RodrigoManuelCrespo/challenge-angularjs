(function () {
    'use strict';

    angular
        .module('miApp')
        .factory('EspecialidadesService', EspecialidadesService);

    EspecialidadesService.$inject = ['$http'];

    function EspecialidadesService($http) {
        var apiBaseUrl = `${window.location.origin}/data/form.json`;
        var service = {
            obtenerEspecialidades: obtenerEspecialidades
        };

        function obtenerEspecialidades() {
            return $http.get(apiBaseUrl)
                .then(function (response) {
                    return response.data.especialidades;
                })
                .catch(function (error) {
                    console.error('Error al obtener especialidades:', error);
                    throw error;
                });
        }

        return service;
    }
})();
