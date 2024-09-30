(function () {
    'use strict';

    angular
        .module('miApp')
        .factory('ProfesionalesService', ProfesionalesService);

    ProfesionalesService.$inject = ['$http'];

    function ProfesionalesService($http) {
        var apiBaseUrl = `${window.location.origin}/data/form.json`;
        var service = {
            obtenerProfesionales: obtenerProfesionales
        };

        function obtenerProfesionales(especialidadId) {
            return $http.get(apiBaseUrl)
                .then(function (response) {
                    console.log(response);
                    return response.data.profesionales[especialidadId] || [];
                })
                .catch(function (error) {
                    console.error('Error al obtener profesionales:', error);
                    throw error;
                });
        }

        return service;
    }
})();
