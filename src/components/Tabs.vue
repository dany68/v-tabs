<template lang="html">
    <div>
        <ul class="tabs" :class="css">
            <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                <a :href="tab.hash"
                :id="tab.id"
                @click="select(tab)"
                v-text="tab.name"
                ></a>
            </li>
        </ul>

        <div class="tab-detail">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {

    props: ['css'],

    data() {
        return {
            tabs: []
        }
    },

    created() {
        this.tabs = this.$children;
    },

    mounted() {
        const hash = window.location.hash;

        if (hash) {
            this.select(hash);
        }
    },

    methods: {
        find(hash) {
            return this.tabs.find(tab => tab.hash == hash);
        },

        select(selectedTab) {
            if (typeof selectedTab === 'string') {
                selectedTab = this.find(selectedTab);
            }

            this.tabs.forEach(tab => {
                tab.isActive = (tab.hash === selectedTab.hash);
            });
        }
    }
}
</script>
