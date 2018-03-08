# VueJS components to render tabs.

## Demo

A live demo is available [here](https://dany68.github.io/elements/docs/components/tabs).


## Installation

You can install the package via npm:

```php
npm install dany68/v-tabs --save
```

Then you will need to register the components globally in you main js file.

```js
//in your app.js or similar file
import Vue from 'vue';
import {Tabs, Tab} from 'v-tabs';

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
```

Alternatively you can do this to register the components:

```js
import Tabs from 'v-tabs';

Vue.use(Tabs);
```

## Usage

On your page you can now use html like this to render tabs:

```html
<tabs>
    <tab name="First tab">
        First tab content
    </tab>
    <tab name="Second tab">
        Second tab content
    </tab>
    <tab name="Third tab">
        Third tab content
    </tab>
</tabs>
```

By default it will show the first tab.

If you click on a tab a `href` representation of the name will be append to the url. For example clicking on the tab `Second tab` will append `#second-tab` to the url.

When loading a page with a fragment that matches the `href` of a tab, it will open up that tab. For example visiting `/#third-tab` will open up the tab with name `Third tab`.
