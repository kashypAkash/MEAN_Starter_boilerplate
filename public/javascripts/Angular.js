/**
 * Created by akash on 8/14/16.
 */
"use strict"
  angular.module('spa',['ui.router','tf.metatags'])
      .config(['tfMetaTagsProvider', function (tfMetaTagsProvider) {

          tfMetaTagsProvider.setDefaults({
              title: 'Default Title',
              properties: {
                  keywords: 'keyword1, keyword2'
              }
          });

          tfMetaTagsProvider.setTitleSuffix(' | MetaTags');
          tfMetaTagsProvider.setTitlePrefix('Prefix ');

      }])
    .config(function($stateProvider, $urlRouterProvider, $windowProvider){

        var $window = $windowProvider.$get();

        $urlRouterProvider.otherwise('/state1');

        $stateProvider
            .state('state1', {
                url: '/state1',
                tfMetaTags: {
                    title: 'Home',
                    properties: {
                        description: 'This is the homepage',
                        keywords: 'keyword1, keyword2',
                        'og:title': 'Home',
                        'og:url': function() {
                            return $window.location.href;
                        },
                        'twitter:title': 'Home'
                    }
                },
                views: {
                    'main@':{
                        templateUrl: 'state1.ejs'

                    }
                }
            })
            .state('state2', {
                url: "/state2",
        /*        resolve: {
                    /!* @ngInject *!/
                    movieData: function($q, $timeout) {
                        var deferred = $q.defer();

                        $timeout(function() {
                            deferred.resolve({
                                title: 'The Lord of the Rings: The Fellowship of the Ring',
                                year: 2001,
                                summary: 'A meek hobbit of the Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron.'
                            });
                        }, 1000);

                        return deferred.promise;
                    }
                },*/
                tfMetaTags: {
                    /* @ngInject */
                    title: 'The Lord of the Rings: The Fellowship of the Rings',
                    properties: {
                        description: 'Summary: fuck; Year: suck'
                    }
                },
                views:{
                    'main@':{
                        templateUrl: 'state2.ejs'
                    }
                }

            });
        
    }).config(['$locationProvider', function($location) {
      $location.hashPrefix('!');
  }])