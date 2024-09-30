(function () {
    'use strict';

    angular
        .module('miApp')
        .controller('FormController', FormController);

    FormController.$inject = ['EspecialidadesService', 'ProfesionalesService', 'EnvioDatosService', 'ObrasSocialesService'];

    function FormController(EspecialidadesService, ProfesionalesService, EnvioDatosService, ObrasSocialesService) {
        var vm = this;

        vm.especialidades = [];
        vm.profesionales = [];
        vm.obrasSociales = [];
        vm.selectedEspecialidad = null;
        vm.selectedObraSocial = null;
        vm.selectedTurno = null;
        vm.formularioActivo = false;
        vm.formulario = {};

        cargarEspecialidades();
        cargarObraSocial();

        function cargarEspecialidades() {
            EspecialidadesService.obtenerEspecialidades()
                .then(function (response) {
                    vm.especialidades = response;
                })
                .catch(function (error) {
                    console.log('Error al cargar especialidades:', error);
                });
        }

        function cargarObraSocial() {
            ObrasSocialesService.obtenerObrasSociales()
                .then(function (response) {
                    vm.obrasSociales = response;
                })
                .catch(function (error) {
                    console.log('Error al obtener las obras sociales:', error);
                });
        }

        vm.cargarProfesionales = function () {
            if (vm.selectedEspecialidad && vm.selectedObraSocial) {
                ProfesionalesService.obtenerProfesionales(vm.selectedEspecialidad.id)
                    .then(function (response) {
                        vm.profesionales = response;
                    })
                    .catch(function (error) {
                        console.log('Error al cargar profesionales:', error);
                    });
            } else {
                window.alert("Completar los campos antes de continuar.");
            }
        };

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
