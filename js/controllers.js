angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('CategoriasCtrl', function($scope,$location,$rootScope) {

  $scope.aceptar= function () {

    $rootScope.idC = document.getElementById("categoria").value;
    //console.log($rootScope.idC);
    $location.path( "tab/encuestas" );
  }
})



.controller('EncuestasCtrl', function($scope,$rootScope,$location) {
 
  $scope.encuestas=[
    {id:1, nombre: "Examen de gestion de redes"}
  ];

  $scope.verEncuesta = function(id){
    console.log(id);
    $rootScope.id = id;
    $location.path( "tab/detalles" );
  }

})

.controller('detallesCtrl', function($scope,$rootScope,$location) {
 
  $scope.continuar = function(){
    $location.path( "tab/ver" );
  }

})
.controller('VerCtrl', function($scope,$rootScope,$location,$ionicScrollDelegate) {
 document.getElementById("btncontinuar").style.display="none";
 document.getElementById("btnterminar").style.display="none";
 
 
 var msg = 1;
 if (msg = 1) {
  document.getElementById("msgfinal").style.display="none";
  document.getElementById("msginicial").style.display="inline";
 }
 else
 {
  document.getElementById("msgfinal").style.display="inline";
  document.getElementById("msginicial").style.display="none";
 }
 var id = $rootScope.id;

 if (id = 1) {
  $scope.examen = [
    {
      pregunta:"Se conoce como el despliegue, integración y coordinación del hardware, software y los elementos humanos para monitorizar, probar, sondear, configurar, analizar, evaluar y controlar los recursos de la red a:",
      id:1,
      respuesta: [
        {name:"SNMP",correcta:0,id:0,idu:1},
        {name:"NOC",correcta:0,id:1,idu:2},
        {name:"Gestión De Redes",correcta:1,id:2,idu:3},
        {name:"Ninguna De Las Anteriores",correcta:0,id:3,idu:4}
      ]
    },

    {
      pregunta:"Se encargan de controlar el acceso a los recursos de la red de acuerdo a unas políticas bien definidas.",
      id:2,
      respuesta: [
        {name:"Gestión de seguridad",correcta:1,id:0,idu:5},
        {name:"Gestión de contabilidad",correcta:0,id:1,idu:6},
        {name:"Gestión de redes",correcta:0,id:2,idu:7},
        {name:"Gestión Humana",correcta:0,id:3,idu:8}
      ]
    },
     {
      pregunta:"Es responsable de detectar y controlar el estado de la red desde el punto de vista de las configuraciones lógicas y físicas.",
      id:3,
      respuesta: [
        {name:"Gestión de seguridad",correcta:0,id:0,idu:9},
        {name:"Gestión de contabilidad",correcta:0,id:1,idu:10},
        {name:"Gestión de redes",correcta:0,id:2,idu:11},
        {name:"Gestión de configuraciones",correcta:1,id:3,idu:12}
      ]
    },
     {
      pregunta:"Es el sitio en donde los administradores, ingenieros y técnicos, supervisan, monitorean y mantienen la red de telecomunicaciones en excelentes condiciones.",
      id:4,
      respuesta: [
        {name:"SNMP",correcta:0,id:0,idu:13},
        {name:"NOC",correcta:1,id:1,idu:14},
        {name:"Gestión De Redes",correcta:0,id:2,idu:15},
        {name:"Ninguna De Las Anteriores",correcta:0,id:3,idu:16}
      ]
    },
     {
      pregunta:"Es uno o más sitios desde los cuales se efectúa el control de las redes de computación, transmisión de televisión o telecomunicaciones como enlaces satelitales y fibra óptica.",
      id:5,
      respuesta: [
        {name:"SNMP",correcta:0,id:0,idu:17},
        {name:"NOC",correcta:1,id:1,idu:18},
        {name:"Gestión De Redes",correcta:0,id:2,idu:19},
        {name:"Ninguna De Las Anteriores",correcta:0,id:3,idu:20}
      ]
    },
     {
      pregunta:"Dentro del SNMP es quien ejecuta aplicaciones que supervisan y controlan a los dispositivos administrados.",
      id:6,
      respuesta: [
        {name:"NOC",correcta:0,id:0,idu:21},
        {name:"Agente",correcta:0,id:1,idu:22},
        {name:"Sistemas administradores de red (NMS)",correcta:1,id:2,idu:23},
        {name:"Ninguno de los anteriores",correcta:0,id:3,idu:24}
      ]
    },
     {
      pregunta:"Es quien posee un conocimiento local de información de administración, la cual es traducida a un formato compatible con SNMP y organizada en jerarquías.",
      id:7,
      respuesta: [
        {name:"Sistemas administradores de red (NMS)",correcta:0,id:0,idu:25},
        {name:"Agente",correcta:1,id:1,idu:26},
        {name:"Ninguno de los anteriores",correcta:0,id:2,idu:27},
        {name:"Traceroute",correcta:0,id:3,idu:28}
      ]
    },
     {
      pregunta:"Dirige las operaciones de los agentes",
      id:8,
      respuesta: [
        {name:"Agente",correcta:0,id:0,idu:29},
        {name:"Sistemas administradores de red (NMS)",correcta:1,id:1,idu:30},
        {name:"Base de Datos de Información de Gestión (MIB)",correcta:0,id:2,idu:31},
        {name:"SNMP",correcta:0,id:3,idu:32}
      ]
    },
     {
      pregunta:"Controlar acceso a los recursos de la red de acuerdo a unas políticas bien definidas",
      id:9,
      respuesta: [
        {name:"Gestión de configuración",correcta:0 ,id:0,idu:33},
        {name:"Gestión de seguridad",correcta:1,id:1,idu:34},
        {name:"Gestión de contabilidad",correcta:0,id:2,idu:35},
        {name:"Ninguna de las anteriores",correcta:0,id:3,idu:36}
      ]
    }
  ];
 }
$scope.res=[];

 $scope.respuestaChange = function(examen,id) {
  var a = 0;
    var tam = $scope.res.length;
   
    if (tam == 0) {
   
      $scope.res.push(
    {
      id_pregunta : examen.id,
      correcta : examen.respuesta[id].correcta,
      id: examen.respuesta[id].idu
    });
         

    }else{

      for (var i = 0; i < tam ; i++) {
     
      if(examen.id == $scope.res[i].id_pregunta ){
          
  
         
          $scope.res.splice(i,1);
          $scope.res.push(
          {
          id_pregunta : examen.id,
          correcta : examen.respuesta[id].correcta,
          id: examen.respuesta[id].idu
           });
          a=1;
      }
       }

       if (a==0) {
         $scope.res.push(
          {
          id_pregunta : examen.id,
          correcta : examen.respuesta[id].correcta,
          id: examen.respuesta[id].idu
           });
     
       }
   }
   } 

  $scope.aceptar = function (){




  if ($scope.res.length == $scope.examen.length) {
    

    if($scope.examen.length == 0)
  {
    document.getElementById("btnaceptar").style.display="none";
    document.getElementById("btnterminar").style.display="inline";
  }
  else
  {
    console.log($scope.res);
    //console.log($scope.res);
    var tam1 = $scope.res.length;
    var v = 0;
    var f = 0;
 $scope.examen1 = [];
    for (var k = 0; k < tam1 ; k++) {

      if ($scope.res[k].correcta == 1 ) {
        
        var cod = $scope.res[k].id;
        console.log(cod);
        v = v + 1;
        document.getElementById(cod).style.color="green";

       

      }
      else{
      f = f + 1;
       var cod = $scope.res[k].id;
      
        document.getElementById(cod).style.color="red";
        var tam2 = $scope.examen.length;
        for (var j = 0; j < tam2 ; j++) {

            if($scope.res[k].id_pregunta == $scope.examen[j].id ){
              console.log($scope.examen[j].pregunta);
              $scope.examen1.push({
                 pregunta:$scope.examen[j].pregunta,
                 id:$scope.examen[j].id,
                 respuesta: [
                    {name:$scope.examen[j].respuesta[0].name,correcta:$scope.examen[j].respuesta[0].correcta ,id:$scope.examen[j].respuesta[0].id,idu:$scope.examen[j].respuesta[0].idu},
                    {name:$scope.examen[j].respuesta[1].name,correcta:$scope.examen[j].respuesta[1].correcta ,id:$scope.examen[j].respuesta[1].id,idu:$scope.examen[j].respuesta[1].idu},
                    {name:$scope.examen[j].respuesta[2].name,correcta:$scope.examen[j].respuesta[2].correcta ,id:$scope.examen[j].respuesta[2].id,idu:$scope.examen[j].respuesta[2].idu},
                    {name:$scope.examen[j].respuesta[3].name,correcta:$scope.examen[j].respuesta[3].correcta ,id:$scope.examen[j].respuesta[3].id,idu:$scope.examen[j].respuesta[3].idu}
                  ]
                });

              
            }
        }
      }
    }

//console.log($scope.examen1);
  alert("Usted acerto en "+v+" Preguntas y fallo en "+f+" Preguntas");

   document.getElementById("btnaceptar").style.display="none";
   document.getElementById("btncontinuar").style.display="inline";
    
    $rootScope.examen2 = $scope.examen1;
    console.log($rootScope.examen2);
    console.log($scope.examen);
  }
}
else{
  alert("Aun faltan preguntas por resolver, por vavor verifique")
}

}


  $scope.continuar = function () {

      $scope.examen = $rootScope.examen2;
       if($scope.examen.length == 0)
      {
        document.getElementById("btnaceptar").style.display="none";
        document.getElementById("btnterminar").style.display="inline";
        document.getElementById("btncontinuar").style.display="none";
        document.getElementById("msgfinal").style.display="inline";
        document.getElementById("msginicial").style.display="none";
     }
     else
     {
      $scope.res=[];
      document.getElementById("btnaceptar").style.display="inline";
      document.getElementById("btncontinuar").style.display="none";
      document.getElementById("btnterminar").style.display="none";
    }

    //s$ionicScrollDelegate.$getByHandle('mainScroll').scrollBottom();
    $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();

  }

  $scope.terminar = function () {

      $location.path( "tab/encuestas" );

  }

});