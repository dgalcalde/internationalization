# Internationalization

This component can translate any Dashboard made with Pentaho CDE. This component can be used to translate Dashboards already made.

## How to work

The component has a default language, for this language will not apply any changes. With this we obtain that do not influence the performance and the content is indexed. If the language is different, it will search all instances of a class, and apply translations that appear in the file properties ( using a translation i18n applied by jquery ).
The application rewrite html content,

## Installation

To install the component , simply put it in the folder CDE , in custom components, and restart the server.

(biserver-ce/pentaho-solutions/system/pentaho-cdf-dd/resources/custom/components/<this_plugin>).


## Configure component

There are parameters that are not used , we will focus on the following:

Name: Name we give to the component (required but irrelevant in this case)

Default Language: Default language (en,es)

Default name file translate: Name of file in "languages" folder.

Name Parameter: Name of parameter.

## Files
Note: You need create a fail without language.

Note2: The application rewrites the html , it can sometimes be necessary to include small fragments in the translation files.

```properties
helloWorld=Hola mundo
```

## How to use

Bebore Internationalization component
```html
<span>
	Total connected users last 5 minutes
</span>
```
After Internationalization component
```html
<span class="internationalization" keyi18n="oneKeyOfFileProperties">
	Total connected users last 5 minutes
</span>
```

## Test

You only need install the component, and upload dashboard (internationalization.zip).
When you put the url, only add: &language=es

## Tip

If you want create a dynamic content from other component, you can use this:

```javascript
Dashboards.i18nSupport.prop('other_key');
```

or

```javascript
jQuery.i18n.prop('other_key');
```
