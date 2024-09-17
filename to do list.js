<!DOCTYPE html>  
<html>  
<title>TO DO Application</title>  
<head> 
    <script type="text/javascript"    
    src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js">
    </script>  
            <script>             
                var app=angular.module("toDoApp",[]);  
                app.controller("toDoAppCntrl",function($scope){        
                    $scope.tasks=[  
           {'TITLE':'Task-1','COMPLETED':true,'EDITING':false},  
           {'TITLE':'Task-2','COMPLETED':false,'EDITING':false},  
           {'TITLE':'Task-3','COMPLETED':false,'EDITING':false}  
                    ]  
      
                     $scope.addTask=function(){                     
                        if($scope.newTask)  
                        {   
                            var t={  
                            'TITLE':$scope.newTask,  
                            'COMPLETED':false,  
                            'EDITING':false  
                        }  
      
                        $scope.tasks.push(t)  
                    }                 
                    else
                    {                     
                        alert("Please enter the task to add")  
                    }  
                     }  
      
                     $scope.editTask=function(task)  
                     {  
                        task.EDITING=true  
                     }  
      
                     $scope.turnOffEditing=function(task){                     
                        task.EDITING=false  
                    }  
                $scope.deleteTask=function(task)  
                {  
                     
                       var index=$scope.tasks.indexOf(task)  
                        $scope.tasks.splice(index,1)  
                     }   
                }); 
            </script>  
    </head>  
           
    <body ng-app="toDoApp">  
        <h1>TO DO APPLICATION</h1>  
        <div ng-controller="toDoAppCntrl">  
            Enter the name of the Task:   
           <input type="text" ng-model="newTask">  
            <button ng-click="addTask()">Add Task</button>  
            <br/>  
            <br/>  
            <table border="1">  
                <tr>  
                    <th>SLNO</th>  
                    <th>Status</th>  
                    <th>Task</th>  
                    <th>Edit</th>  
                    <th>Delete</th>  
                </tr>  
                <tr ng-repeat="task in tasks">  
                    <td>{{$index+1}}</td>  
                    <td>  
                  <input type="checkbox" ng-model="task.COMPLETED">  
                    </td>  
                    <td>  
                      <span ng-show="!task.EDITING">{{task.TITLE}}</span> 
                      <input type="text" ng-show="task.EDITING"   
                             ng-model="task.TITLE"    ng-blur="turnOffEditing(task)">  
                    </td>  
                    <td>  
                        <button ng-click="editTask(task)">Edit</button>  
                    </td>  
                    <td>  
                        <button ng-click="deleteTask(task)">Delete</button>  
                    </td>  
                </tr>  
            </table>  
            </div>  
    </body>  
</html> 
