(function () {
    'use strict';

    angular
        .module('miApp')
        .service('EspecialidadesService', EspecialidadesService);

    EspecialidadesService.$inject = ['$q'];

    function EspecialidadesService($q) {
        var service = {
            obtenerEspecialidades: obtenerEspecialidades
        };

        return service;

        // Simulamos una llamada a una API que obtiene las especialidades
        function obtenerEspecialidades() {
            var defer = $q.defer();
            var especialidades = [
                { id: 1, nombre: 'Cardiología' },
                { id: 2, nombre: 'Dermatología' },
                { id: 3, nombre: 'Pediatría' }
            ];

            defer.resolve(especialidades);
            return defer.promise;
        }
    }

})();
