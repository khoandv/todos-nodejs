var app=angular.module('app.todos',['xeditable']);

app.controller('todoController',['$scope','svTodos',function todoController($scope,svTodos){
  
    
    $scope.appName='Todo Dashboard';
    
    $scope.formData={};
    $scope.todos=[];
    $scope.loading=true;
   
    svTodos.get().then(function(data){
        $scope.todos=data.data;
        console.log($scope.todos);
        
    });
  
    $scope.createTodo=function(){
        $scope.loading=true;
        var todo={
            text:$scope.formData.text,
            isDone:false
        };
        svTodos.create(todo).then(function(data){
            $scope.todos=data.data;
            $scope.formData.text='';
            $scope.loading=false;
        });
       
     
        
    }
    $scope.updateTodo=function(todo){
        $scope.loading=true;
        svTodos.update(todo).then(function(data){
            $scope.todos=data.data;
            $scope.loading=false;
        });

    }
    $scope.deleteTodo=function(todo){
        $scope.loading=true;
        svTodos.delete(todo._id).then(function(data){
            $scope.todos=data.data;
            $scope.loading=false;
        });
    }
}]);
   
    //$scope.loading=true;

    // $scope.todos=[{
    //     text:'khfdsafn ifdidsf knfdkwd hwefrk',
    //     isDone:false
    // }];

    // svTodos.get().then(function(data){
    //     $scope.todos=data;
    // });
   