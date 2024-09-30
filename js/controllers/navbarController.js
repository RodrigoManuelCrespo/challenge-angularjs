(function () {
    'use strict';

    angular
        .module('miApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state'];

    function NavbarController($state) {
        var vm = this;

        vm.pressButton = function () {
            $state.go('formulario');
        };

        vm.isFormularioPage = function () {
            return $state.current.name === 'formulario';
        };
    }
})();
