var app = angular.module('aplicacion',[]);

app.controller('PrincipalCtrl', function($scope, $http){
    //$scope.ejemplo ="hola mundo"; $http.get("https://worldcup.sfg.io/matches/today")
    $http.get("data/data.json").then(function (response){
        $scope.datos = response.data;
        
        $scope.mostrarPais=[];
        $scope.Banderas=[];
      
        
        for (var posicion = 0; posicion< $scope.datos.length ; posicion++){
            $scope.mostrarPais.push($scope.datos[posicion].home_team_country);
            $scope.mostrarPais.push($scope.datos[posicion].away_team_country);
            $scope.Banderas.push("http://www.countryflags.io/"+$scope.datos[posicion].code_Home+"/flat/64.png");
            $scope.Banderas.push("http://www.countryflags.io/"+$scope.datos[posicion].code_visi+"/flat/64.png");

         
    }
    console.log($scope.Banderas);
    })
    
})
