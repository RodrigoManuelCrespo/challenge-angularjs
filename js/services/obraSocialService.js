(function () {
    'use strict';

    angular
        .module('miApp')
        .service('ObrasSocialesService', ObrasSocialesService);

    ObrasSocialesService.$inject = ['$q']; // Inyectamos el servicio $q para manejar promesas

    function ObrasSocialesService($q) {
        this.obtenerObrasSociales = function () {
            var deferred = $q.defer();

            // Simular una respuesta asincrónica usando $timeout o puedes usar AJAX para obtener datos reales
            var obrasSociales = [
                { nombre: 'Particular' },
                { nombre: 'IAPOS (Instituto Autárquico Provincial de Obra Social)' },
                { nombre: 'OSDE (Organización de Servicios Directos Empresarios)' },
                { nombre: 'Swiss Medical' },
                { nombre: 'Galeno' },
                { nombre: 'Sancor Salud' },
                { nombre: 'AMR Salud (Asociación Médica de Rosario)' },
                { nombre: 'Medifé' },
                { nombre: 'OSECAC (Obra Social de los Empleados de Comercio y Actividades Civiles)' },
                { nombre: 'Unión Personal' },
                { nombre: 'OSDOP (Obra Social para el Personal Docente Privado)' }
            ];

            // Resolver la promesa con los datos
            deferred.resolve(obrasSociales);

            // Retornar la promesa
            return deferred.promise;
        };
    }
})();
