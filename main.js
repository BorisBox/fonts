
/*jslint regexp: true, nomen: true, sloppy: true */
/*global require, applicationConfig, window, applicationConfig */
require.config({
    baseUrl: appBaseUrl,
    urlArgs: "v=" + appVersion,
    paths: {
        jquery: 'https://www.bertholdwebfonts.com/libs/jquery1.10.2.min',
        jqueryUI: 'https://www.bertholdwebfonts.com/libs/jquery-ui-1.9.2.min',
        site: 'https://www.bertholdwebfonts.com/modules/site',
        validation: 'https://www.bertholdwebfonts.com/plugins/jquery.validate',
        colorpicker: 'https://www.bertholdwebfonts.com/plugins/type-tester',
        colorpickerUi: 'https://www.bertholdwebfonts.com/plugins/type-tester.ui',
        splitter: 'https://www.bertholdwebfonts.com/plugins/jquery.splitter-0.9.0',
        fancybox: 'https://www.bertholdwebfonts.com/plugins/fancybox/jquery.fancybox.pack',
        browserCompatability: 'https://www.bertholdwebfonts.com/modules/outdatedBrowser'
    },
    shim: {
        site: {
            deps: ['jquery', 'jqueryUI', 'colorpicker', 'colorpickerUi']
        },
        jqueryUI: {
            deps: ['jquery']
        },
        validation: {
            deps: ['jquery']
        },
        browserCompatability: {
            deps: ['jquery']
        },
        colorpicker: {
            deps: ['jquery', 'jqueryUI', 'colorpickerUi']
        },
        colorpickerUi: {
            deps: ['jquery', 'jqueryUI']
        },
        fancybox: {
            deps: ['jquery']
        },
        splitter: {
            deps: ['jquery', 'jqueryUI']
        }
    }
});
require(['jquery', 'site', 'jqueryUI', 'colorpicker', 'colorpickerUi', 'splitter', 'fancybox'], function ($, site) {
    var console = window.console || { log: $.noop, error: $.noop },
        maxData = [];
    if (typeof applicationConfig != 'undefined') {
        var config = applicationConfig;
    }
    if (typeof site != 'undefined') {
        site.init();
    }
});
