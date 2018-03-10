import Tab from './components/Tab';
import Tabs from './components/Tabs';

const Plugin = {
    install(Vue) {
        Vue.component('tab', Tab);
        Vue.component('tabs', Tabs);
    },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Plugin);
}

export default Plugin;
export { Tab, Tabs };
