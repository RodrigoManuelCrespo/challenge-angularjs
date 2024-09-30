(function () {
    'use strict';

    angular
        .module('miApp')
        .controller('FormController', FormController);

    FormController.$inject = ['EspecialidadesService', 'ProfesionalesService', 'EnvioDatosService', 'ObrasSocialesService'];

    function FormController(EspecialidadesService, ProfesionalesService, EnvioDatosService, ObrasSocialesService) {
        var vm = this;

        // Variables del controlador
        vm.especialidades = [];
        vm.profesionales = [];
        vm.obrasSociales = [];
        vm.selectedEspecialidad = null;
        vm.selectedObraSocial = null;
        vm.selectedTurno = null;
        vm.formularioActivo = false;
        vm.formulario = {};  // Contendrá los datos del usuario

        // Cargar especialidades y obras sociales al iniciar
        cargarEspecialidades();
        cargarObraSocial();

        // Función para cargar especialidades
        function cargarEspecialidades() {
            EspecialidadesService.obtenerEspecialidades()
                .then(function (response) {
                    vm.especialidades = response;
                })
                .catch(function (error) {
                    console.log('Error al cargar especialidades:', error);
                });
        }

        // Función para cargar obras sociales
        function cargarObraSocial() {
            ObrasSocialesService.obtenerObrasSociales()
                .then(function (response) {
                    vm.obrasSociales = response;
                })
                .catch(function (error) {
                    console.log('Error al obtener las obras sociales:', error);
                });
        }

        // Cargar profesionales según la especialidad seleccionada
        vm.cargarProfesionales = function () {
            if (vm.selectedEspecialidad && vm.selectedObraSocial) {
                ProfesionalesService.obtenerProfesionales(vm.selectedEspecialidad.id)
                    .then(function (response) {
                        console.log(response);

                        vm.profesionales = response;
                    })
                    .catch(function (error) {
                        console.log('Error al cargar profesionales:', error);
                    });
            } else {
                window.alert("Completar todos los campos");
            }
        };

        // Seleccionar un profesional, una fecha y un horario para habilitar el formulario
        vm.seleccionarConsulta = function (profesional, selectedTurno) {
            if (selectedTurno && profesional) {
                vm.formulario = {
                    turno: selectedTurno,
                    profesional: profesional
                }
                console.log(vm.formulario);

                vm.formularioActivo = true;
            }
        };

        // Enviar formulario con los datos del usuario
        vm.enviarFormulario = function () {
            var datosEnvio = {
                usuario: vm.usuario,
                idProfesional: vm.formulario.profesional.id,
                idTurno: vm.formulario.turno.id,
            };

            EnvioDatosService.enviarDatos(datosEnvio)
                .then(function (response) {
                    window.alert(`Reserva confirmada con ${vm.formulario.profesional.nombre}. La cita está programada para el ${vm.formulario.turno.fechaHora} hs.`);
                    vm.profesionales = [];
                    vm.selectedEspecialidad = null;
                    vm.selectedObraSocial = null;
                    vm.selectedTurno = null;
                    vm.formularioActivo = false;
                    vm.formulario = {};
                })
                .catch(function (error) {
                    console.log('Error al enviar los datos:', error);
                });
        };
    }

})();
