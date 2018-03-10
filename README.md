# Tabs components for Vue.js 2

## Demo

A live demo is available [here](https://dany68.github.io/elements/docs/components/tabs).


## Installation

You can install the package via npm:

```php
npm install dany68/v-tabs --save
```

Then you will need to register the components globally in you main js file.

```js
// If Vue has been added to the global scope as:
// window.Vue = require('Vue')
import 'v-tabs';

// Otherwise
import Tabs from 'v-tabs';
Vue.use(Tabs);
```

Alternatively you can register v-tabs locally:

```js
//in your Component.vue or similar file
import { Tabs, Tab } from 'v-tabs';

export default {
    components: { Tabs, Tab }
}
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
