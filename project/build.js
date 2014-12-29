({
	baseUrl: './www/',
    paths: {
		//exclude modules -- "module":'empty:',
        "angular": 'bower_components/angular/angular',
        "angular-cookies":'bower_components/angular-cookies/angular-cookies',
        "angular-route":'bower_components/angular-route/angular-route',
        "angular-translate":'bower_components/angular-translate/angular-translate',
        "angular-translate-handler-log":'bower_components/angular-translate-handler-log/angular-translate-handler-log',
        "angular-translate-loader-static-files":'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files',
        "angular-translate-loader-url":'bower_components/angular-translate-loader-url/angular-translate-loader-url',
        "angular-translate-storage-cookie":'bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie',
        "angular-translate-storage-local":'bower_components/angular-translate-storage-local/angular-translate-storage-local',
        "bootstrap":'bower_components/bootstrap/dist/js/bootstrap',
        "jquery":'bower_components/jquery/dist/jquery',
        "ng-grid":'bower_components/ng-grid/ng-grid-2.0.12.debug',
		"requireLib":"bower_components/requirejs/require",
        "app":"js/app"
    },

	include:"requireLib",
	name:"js/config",
	out:"../js/app-compiled.js"
})
