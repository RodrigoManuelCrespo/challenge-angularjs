(function () {
    'use strict';

    angular
        .module('miApp')
        .service('EnvioDatosService', EnvioDatosService);

    EnvioDatosService.$inject = ['$q'];

    function EnvioDatosService($q) {
        var service = {
            enviarDatos: enviarDatos
        };

        return service;

        function enviarDatos(usuario) {
            var defer = $q.defer();

            defer.resolve({ mensaje: 'Consulta enviada exitosamente' });

            return defer.promise;
        }
    }

})();
