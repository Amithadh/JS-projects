<!DOCTYPE html>
<html>
   <title>USER MANAGEMENT APPLICATION</title>
   <head>
<script type="text/javascript"
src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js">
  </script>
  <script>
    var app=angular.module("userMgmtApp",[]);
   app.controller("userMgmtAppCntrl",function($scope){
     $scope.users=[
        { 'name':"Dr.Harish Kumar B T",'email':'harish.bitcse82@gmail.com','editing':false},
          {'name':'ABC','email':'abc@gmail.com','editing':false},
          {'name':'XYZ','email':'xyz@gmail.com','editing':false},
        
    ];
     $scope.createUser=function()
     {
        if($scope.newUserName&&$scope.newUserEmail)
        {
            var u={'name':$scope.newUserName,
                   'email':$scope.newUserEmail,
                    'editing':false
                };
                $scope.users.push(u);
                $scope.newUserName="";
                $scope.newUserEmail="";
        }
        else
        {
            alert("please provide the user name and email id")
        }
     };
     $scope.readUser=function(user)
     {
        user.editing=true
     }
     $scope.updateUser=function(user){
        user.editing=false
     }
     $scope.deleteUser=function(user)
     {
        var Yes=confirm("Are you sure you want to delete")
        if(Yes==true)
        {
            var index=$scope.users.indexOf(user)
            $scope.users.splice(index,1)
        
        }
     };
    });
    </script>
    </head>
    <body ng-app="userMgmtApp">
        <h1> USER MANAGEMENT APPLICATION</h1>
        <div ng-controller="userMgmtAppCntrl">

            Enter the UserName:<input type="text" ng-model="newUserName">
            Enter the UserEmail:<input type="text" ng-model="newUserEmail">
            <button ng-click="createuser()">Create</button>
            <br/>
            <br/>
            <table border ="1">
                <tr>
                     <th>SLNO</th>
                     <th>NAME</th>
                     <th>EMAIL</th>
                     <th>READ</th>
                     <th>UPDATE</th>
                     <th>DELETE</th>
                </tr>
                <tr ng-repeat="users in users">
                <td>{{$index+1}}</td>
                <td>
                    <span ng-how="!user.editing">{{user.name}}</span>&nbsp;&nbsp;&nbsp;&nbsp
                    <input type="text"ng -show ="user.editing"
                    ng-model="user.name">
                </td>
                <td>
                    <span ng-show="user.editing">{{user.email}}</span>
                    <input type="text" ng-show="user.editing"
                    ng-model="user.email">
                    </td>
                    <td>
                        <button ng-click="readUser(user)">Read</button>
                    </td>
                    <td>
                        <button ng-click="updateUser(user)">update</button> 
                    </td>
                    <td>
                        <button ng-click="deleteUser(user)">delete</button>
                    </td>
                </td>
                </tr>
            </table>
        </div>
    </body>
</html>
