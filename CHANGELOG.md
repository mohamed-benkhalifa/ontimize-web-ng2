## 1.1.1 (2017-01-11)

### Features
* **o-table**: adding remote pagination ([#22](https://github.com/OntimizeWeb/ontimize-web-ng2/issues/22)) ([6593db8](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/6593db8))
* **o-table-option**: adding icon position parameter ([1c65a80](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/1c65a80))
* **ontimize.service**: adding advancedQuery method.
* **o-list-picker**: adding new parameter (static-data) ([1d0f2cc](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/1d0f2cc))

### Bug Fixes
* **minor bugs**: Fixing minor bugs in components.

## 1.1.0 (2016-11-24)

### Features
* **angular2:** update to official version 2.1.2
* **angular/material:** v2.0.0-alpha.10 ([#1](https://github.com/OntimizeWeb/ontimize-web-ng2/issues/1))
* **container components:** New container components: 'o-row' and 'o-column'. ([c055f59](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/c055f59))
* **o-list:** enhancements on 'o-list' component ([8fe285a](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/8fe285a))
* **creating pipes**: adding o-integer.pipe and o-real.pipe to o-integer-input, o-real-input, o-currency-input and o-percent-input([#23](https://github.com/OntimizeWeb/ontimize-web-ng2/issues/23)) ([cc74967](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/cc74967))

### PEER-DEPENDENCY UPDATES ###
* **Removed**: angular2-material@v2.0.0-alpha.8-2
* **Added**:   angular/material@v2.0.0-alpha.10

### BREAKING CHANGES
* **tabs components:** see new definition mode ([2.0.0-alpha.10 mithril-hoverboard](https://github.com/angular/material2/blob/master/CHANGELOG.md#breaking-changes))
* **o-table:** show-header-buttons-text attribute changed to show-table-buttons-text ([fc96884](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/fc96884))
* **o-table-button:** text attribute changed to label ([fc96884](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/fc96884))
* **o-table-option:** text attribute changed to label ([fc96884](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/fc96884))

### Bug Fixes
* **i18n:** Fixing core translations. ([ecb38ca](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/ecb38ca)) ([796f613](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/796f613))
* **o-form:** Fixing minor bugs. ([ecb38ca](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/ecb38ca))
* **disable state:** Fixing errors when setting 'disabled' state on input components. ([bd04120](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/bd04120))
* **o-image:** Fixing errors ([2c12065](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/2c12065))


## 1.0.2 (2016-11-07)

### Bug Fixes
* **i18n:** Fixing configuration path for i18n files. ([47aaeff](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/47aaeff))
* **Table:** Fixing columns width calculation ([f19e19e](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/f19e19e))
* **Table:** Fixing columns visibility options ([f19e19e](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/f19e19e))
* **Table:** Fixing columns definition ([f19e19e](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/f19e19e))
* **Table:** Fixing form reference bug ([f19e19e](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/f19e19e))

## 1.0.1 (2016-11-03)

### Features
* **o-table-cell-renderer-action:** Allowing to set edition type using 'editionMode' (inline or not)
* **Table:** Set parent-key values on detail form ([#9](https://github.com/OntimizeWeb/ontimize-web-ng2/issues/9)) ([7967481](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/7967481))
* **Table:** Material style ([#4](https://github.com/OntimizeWeb/ontimize-web-ng2/issues/4))
* **Table:** Customizing options: rows height, options, buttons and header visibility.
* **Form:** Change styling of form buttons panel ([#18](https://github.com/OntimizeWeb/ontimize-web-ng2/issues/18)) ([5ebe4ba](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/5ebe4ba))
* **Form:** Adding custom buttons to form buttons panel ([#19](https://github.com/OntimizeWeb/ontimize-web-ng2/issues/19)) ([6cf8f37](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/6cf8f37))
* **Menu:** Implementing 'locale-item' on 'o-side-menu' ([#21](https://github.com/OntimizeWeb/ontimize-web-ng2/issues/21)) ([82166a5](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/82166a5))

### Bug Fixes
* **Table:**  Configuration parameter for navigate detail mode ([#3](https://github.com/OntimizeWeb/ontimize-web-ng2/issues/3)) ([cb9821d](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/cb9821d))
* **Menu:** "o-bar-menu" is not hidden when navigating ([#16](https://github.com/OntimizeWeb/ontimize-web-ng2/issues/16)) ([9e38304](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/9e38304))
* **Menu:** "o-bar-menu" responsive menu icon ([#17](https://github.com/OntimizeWeb/ontimize-web-ng2/issues/17)) ([9e38304](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/9e38304))
* **Currency-input:** allowing negative values ([04c53ab](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/04c53ab))


## 1.0.0-rc.1 (2016-10-21)

### Features

* **Components:** it is no longer necessary to set 'data' attribute parameter on form data components, the form will set values automatically.
- Example:
  * Before: `<o-text-input attr="NAME" flex  [data]="oForm.getDataValue('NAME')"></o-text-input>`
  * After: `<o-text-input attr="NAME" flex  ></o-text-input>`
* **Components:** new parameter *'automatic-binding'* for specifying custom data value on form data components.
- Example:
  `<o-text-input attr="NAME" flex automatic-binding="yes" [data]="myCustomFn()" ></o-text-input>`

### Bug Fixes

* **Form:** refresh does not work from all tabs  ([#10](https://github.com/OntimizeWeb/ontimize-web-ng2/issues/10)) ([811e642](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/811e642))
* **HTMLInput:** component is editable in a detial form  ([#11](https://github.com/OntimizeWeb/ontimize-web-ng2/issues/11)) ([65bdcb8](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/65bdcb8))
* **Combo:** selected value is lost when move between tabs  ([#13](https://github.com/OntimizeWeb/ontimize-web-ng2/issues/13)) ([b6b7151](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/b6b7151))
* **Styling:** validation errors styling fixings  ([#14](https://github.com/OntimizeWeb/ontimize-web-ng2/issues/14)) ([fe1e144](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/fe1e144))
* **BarMenu:** tooltip translation  ([#15](https://github.com/OntimizeWeb/ontimize-web-ng2/issues/15)) ([1f5dea6](https://github.com/OntimizeWeb/ontimize-web-ng2/commit/1f5dea6))

## 1.0.0-rc.0 (2016-09-30)

### Features
* **angular2:** update to official version 2.0.0
* **angular2 router:** update to 3.0.0-rc.2.
* **angular2 forms:** update to 2.0.0.
* **angular2-material:** update to v2.0.0-alpha.8-2.
* **services**: services of data components now must implement IDataService interface. (see Breaking changes)
* **services**: services configuration parameters (SERVICE_CONF) now is easier to configure.

### PEER-DEPENDENCY UPDATES ###

* **Updated**: zone.js@0.6.23
* **Updated**: rxjs@5.0.0-beta.12
* **Updated**: systemjs@0.19.38
* **Updated**: ng2-translate@2.5.0
* **Removed**: es6-module-loader@0.17.11
* **Removed**: es6-promise@3.2.1
* **Removed**: es6-shim@0.35.1
* **Added**:   core-js@2.4.1


### BREAKING CHANGES

* **configuration** application configuration parameters (app.config) perform camelCase standard.
* **services** IDataService interface change the 'entity' argument position in CRUD methods (query, insert, delete, update).
  Now it is not always necessary to pass 'entity' argument, simply configure it once in service.
- Example:
  * Before: `query('ECustomers', filter, columns)`
  * After: `query(filter, columns, 'ECustomers')`



## 0.0.4 (2016-08-24)

### Features

* **angular2:** update to release candidate 5.
* **angular2 router:** update to 3.0.0-rc.1.
* **angular2 forms:** update to 0.3.0.
* **angular2-material:** update to v2.0.0-alpha.7-3.


## 0.0.3 (2016-08-02)

### Features

* **angular2:** update to release candidate 4.
* **angular2 router:** update to 3.0.0-beta.2.
* **angular2-material:** update to v2.0.0-alpha.6.


## 0.0.2 (2016-04-08)

### Features

* **angular2:** update to beta 13 (adapt code to version changes).


## 0.0.1 (2016-04-06)

### Features

* **build:** first commit


