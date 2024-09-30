(function () {
    'use strict';

    angular
        .module('miApp')
        .factory('EnvioDatosService', EnvioDatosService);

    EnvioDatosService.$inject = ['$http'];

    function EnvioDatosService($http) {
        return {
            enviarDatos: enviarDatos
        };

        function enviarDatos(usuario) {
            return new Promise((resolve) => {
                resolve({ mensaje: 'Consulta enviada exitosamente' });
            });
        }
    }

})();
