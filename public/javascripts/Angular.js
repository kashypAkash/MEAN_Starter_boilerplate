/**
 * Created by akash on 8/14/16.
 */
"use strict"
  angular.module('spa',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/state1');

        $stateProvider
            .state('state1', {
                url: '/state1',
                views: {
                    'main@':{
                        templateUrl: 'state1.ejs'

                    }
                }
            })
            .state('state2', {
                url: "/state2",
                views:{
                    'main@':{
                        templateUrl: 'state2.ejs'
                    }
                }

            });
        
    });