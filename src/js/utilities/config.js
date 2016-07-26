export default function config($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('root', {
            abstract: true,
            templateUrl: 'templates/layout.template.htm'
        })
        .state('root.home', {
            url: '/',
            templateUrl: 'templates/home.template.htm'
        });

    $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
