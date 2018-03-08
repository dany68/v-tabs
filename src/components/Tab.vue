<template lang="html">
    <div v-show="isActive">
        <slot></slot>
    </div>
</template>

<script>
export default {

    props: {
        name: {
            type: String,
            required: true
        },
        selected: {
            default: false
        }
    },

    data() {
        return {
            isActive: this.selected
        }
    },

    computed: {
        id() {
            return this.hash.substr(1);
        },

        hash() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    }
}
</script>
