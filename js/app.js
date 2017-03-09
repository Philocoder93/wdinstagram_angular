"use strict";

let wdinstagramData = [
  { author: 'Build an app with Rails', body: 'body content', photo_url: "http://i1.kym-cdn.com/photos/images/facebook/000/581/722/7bc.jpg"},
  { author: 'Project 2', body: 'body content', photo_url: "http://i1.kym-cdn.com/photos/images/facebook/000/581/722/7bc.jpg"},
  { author: 'Build an app with Angular', body: 'body content', photo_url: "http://i1.kym-cdn.com/photos/images/facebook/000/581/722/7bc.jpg"},
  { author: 'Project 3', body: 'body content', photo_url: "http://i1.kym-cdn.com/photos/images/facebook/000/581/722/7bc.jpg" },
  { author: 'Build an app with Express', body: 'body content', photo_url: "http://i1.kym-cdn.com/photos/images/facebook/000/581/722/7bc.jpg"},
  { author: 'Build an app with Mongo', body: 'body content', photo_url: "http://i1.kym-cdn.com/photos/images/facebook/000/581/722/7bc.jpg"},
  { author: 'Build an app with React', body: 'body content', photo_url: "http://i1.kym-cdn.com/photos/images/facebook/000/581/722/7bc.jpg"},
  { author: 'Project 4', body: 'body content', photo_url: "http://i1.kym-cdn.com/photos/images/facebook/000/581/722/7bc.jpg"},
  { author: 'Become a Rockstar', body: 'body content', photo_url: "http://i1.kym-cdn.com/photos/images/facebook/000/581/722/7bc.jpg"}
]


angular
.module("wdinstagramApp", ["ui.router"])
.config(["$stateProvider", RouterFunction])
// .factory( "wdinstagramFactory", [
//       wdinstagramFactoryFunction
//     ]);
.controller("wdinstagramIndexController", ["$stateParams", wdinstagramIndexControllerFunction])
.controller("wdinstagramShowController", ["$stateParams", wdinstagramShowControllerFunction])
.controller("wdinstagramCreateController", ["$stateParams", wdinstagramCreateControllerFunction])
.controller("wdinstagramUpdateController", ["$stateParams", wdinstagramUpdateControllerFunction])

function RouterFunction($stateProvider){
  $stateProvider
  .state('wdinstagramIndex', {
  url: '/grams',
  controller: 'wdinstagramIndexController',
  controllerAs: 'vm',
  templateUrl: 'js/index.html'
  })
  .state('wdinstagramCreate', {
    url: '/grams/create',
    controller: 'wdinstagramCreateController',
    controllerAs: 'vm',
    templateUrl: 'js/create.html'
  })
  .state('wdinstagramUpdate', {
    url: '/grams/:id/update',
    controller: 'wdinstagramUpdateController',
    controllerAs: 'vm',
    templateUrl: 'js/update.html'
  })
  .state('wdinstagramShow', {
  url: '/grams/:id',
  controller: 'wdinstagramShowController',
  controllerAs: 'vm',
  templateUrl: 'js/show.html'
  })

}

function wdinstagramIndexControllerFunction ($stateParams) {
  this.data = wdinstagramData
}
function wdinstagramShowControllerFunction ($stateParams) {
  this.datum = wdinstagramData[$stateParams.id]
  this.delete = function () {
    wdinstagramData.splice(wdinstagramData.indexOf(this.datum),1)
  }
}
function wdinstagramCreateControllerFunction ($stateParams) {
  this.create = function () {
    wdinstagramData.push(this.new)
  }
}
function wdinstagramUpdateControllerFunction ($stateParams) {
  this.datum = wdinstagramData[$stateParams.id]

}
