'use strict';

/**
 * @ngdoc function
 * @name medblockApp.controller:PrescripCtrl
 * @description
 * # PrescripCtrl
 * Controller of the medblockApp
 */
angular.module('medblockApp')
  .controller('PrescripCtrl', function ($scope) {
  	$scope.prescription = {};
  });

  function toggle()
{
    var presc = document.getElementById("presc");
    var info = document.getElementById("info");
    var but1 = document.getElementById("but1");
    var conf = document.getElementById("conf");
    var nam = document.getElementById("nam");
    var doc = document.getElementById("doc");
    var med = document.getElementById("med");
    var exp = document.getElementById("exp");
    var but2 = document.getElementById("but2");

    if (presc.style.display == "none")
    {
        presc.style.display = "block";
        info.style.display = "block";
        but1.style.display = "block";
        conf.style.display = "none";
        nam.style.display = "none";
        doc.style.display = "none";
        med.style.display = "none";
        exp.style.display = "none";
        but2.style.display = "none";
    }
    else
    {
        presc.style.display = "none";
        info.style.display = "none";
        but1.style.display = "none";
        conf.style.display = "block";
        nam.style.display = "block";
        doc.style.display = "block";
        med.style.display = "block";
        exp.style.display = "block";
        but2.style.display = "block";
    }
}
