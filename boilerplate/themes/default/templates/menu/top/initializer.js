Caramel.initializer("menu/top", {

    preInitialize:function (data) {
        var Carameli = {
            context:site.context
        };
        Caramel.addHeaderJS("page/base", "Caramel", "templates/page/base/js/Caramel.js");
        Caramel.addHeaderJS("page/base", "base", "templates/page/base/js/base.js");
    }
});
