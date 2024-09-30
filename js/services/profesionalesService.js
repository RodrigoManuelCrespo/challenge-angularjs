(function () {
    'use strict';

    angular
        .module('miApp')
        .service('ProfesionalesService', ProfesionalesService);

    ProfesionalesService.$inject = ['$q'];

    function ProfesionalesService($q) {
        var service = {
            obtenerProfesionales: obtenerProfesionales
        };

        return service;

        // Simulamos una llamada a una API que obtiene los profesionales y horarios
        function obtenerProfesionales(especialidadId) {
            var defer = $q.defer();
            var profesionales = [];

            if (especialidadId === 1) { // Cardiología
                profesionales = [
                    {
                        id: 1,
                        nombre: 'Dr. Juan Pérez',
                        img: "img/doctor-1.png",
                        turnosDisponibles: [
                            { id: 1, fechaHora: '26-09-2024 09:00' },
                            { id: 2, fechaHora: '26-09-2024 10:00' },
                            { id: 3, fechaHora: '26-09-2024 11:00' },
                            { id: 4, fechaHora: '27-09-2024 14:00' },
                            { id: 5, fechaHora: '27-09-2024 15:00' }
                        ]
                    },
                    {
                        id: 2,
                        nombre: 'Dra. María López',
                        img: "img/doctor-2.png",
                        turnosDisponibles: [
                            { id: 1, fechaHora: '26-09-2024 12:00' },
                            { id: 2, fechaHora: '26-09-2024 13:00' },
                            { id: 3, fechaHora: '28-09-2024 10:00' },
                            { id: 4, fechaHora: '28-09-2024 11:00' }
                        ]
                    }
                ];
            } else if (especialidadId === 2) { // Dermatología
                profesionales = [
                    {
                        id: 3,
                        nombre: 'Dr. Carlos García',
                        img: "img/doctor-4.png",
                        turnosDisponibles: [
                            { id: 1, fechaHora: '26-09-2024 14:00' },
                            { id: 2, fechaHora: '26-09-2024 15:00' },
                            { id: 3, fechaHora: '27-09-2024 16:00' },
                            { id: 4, fechaHora: '27-09-2024 17:00' }
                        ]
                    },
                    {
                        id: 4,
                        nombre: 'Dra. Ana Méndez',
                        img: "img/doctor-3.png",
                        turnosDisponibles: [
                            { id: 1, fechaHora: '27-09-2024 16:00' },
                            { id: 2, fechaHora: '27-09-2024 17:00' }
                        ]
                    }
                ];
            } else if (especialidadId === 3) { // Pediatría
                profesionales = [
                    {
                        id: 5,
                        nombre: 'Dr. Pablo Fernández',
                        img: "img/doctor-1.png",
                        turnosDisponibles: [
                            { id: 1, fechaHora: '28-09-2024 09:00' },
                            { id: 2, fechaHora: '28-09-2024 10:30' }
                        ]
                    }
                ];
            }

            defer.resolve(profesionales);
            return defer.promise;
        }


    }

})();
