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

        // Simulamos el envío de datos a un servidor
        function enviarDatos(usuario) {
            var defer = $q.defer();

            // Simulamos que los datos fueron enviados correctamente
            console.log('Datos enviados:', usuario);
            defer.resolve({ mensaje: 'Consulta enviada exitosamente' });

            return defer.promise;
        }
    }

})();
