(function () {
    'use strict';

    angular
        .module('miApp')
        .factory('ObrasSocialesService', ObrasSocialesService);

    ObrasSocialesService.$inject = ['$http'];

    function ObrasSocialesService($http) {
        var apiBaseUrl = `${window.location.origin}/data/form.json`;
        var service = {
            obtenerObrasSociales: obtenerObrasSociales
        };

        function obtenerObrasSociales() {
            return $http.get(apiBaseUrl)
                .then(function (response) {
                    return response.data.obrasSociales;
                })
                .catch(function (error) {
                    console.error('Error al obtener obras sociales:', error);
                    throw error;
                });
        }

        return service;
    }
})();
