if(!getUrlVars) {
    var getUrlVars = function()
    {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }
}

// Init jQuery i18n plugin
if(!loadMessageBundles) {
    var loadMessageBundles = function(lang,fileNameTranslation) {
            if(lang && fileNameTranslation) {
                jQuery.i18n.properties({
                        name:fileNameTranslation,
                        path:'/pentaho/api/repos/pentaho-cdf-dd/resources/custom/components/Internationalization/languages/',
                        mode:'both',
                        language: lang
                });
                Dashboards.setI18nSupport(lang, jQuery.i18n);
            }
    }
}

var InternationalizationComponent = BaseComponent.extend({
  update: function() {

    if(this.languageParameter != ''){
        var paramsUrl = getUrlVars();
        var oknLanguage = (paramsUrl[this.languageParameter]) ? paramsUrl[this.languageParameter] : this.defaultLanguage;
        var fileNameTranslation = (this.fileNameTranslation) ? this.fileNameTranslation : 'default';

        var userLocale = oknLanguage;
        loadMessageBundles(userLocale,fileNameTranslation);
    }

    //alert(oknLanguage);

    if(oknLanguage != this.defaultLanguage ){
        jQuery('.internationalization').each( function( index, element ){
                    $(this).html(jQuery.i18n.prop($( this ).attr('keyi18n') ) );
        });
    }
  }
});
