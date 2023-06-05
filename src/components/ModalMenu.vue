<template>
    <div class="outer" v-if="shown" @click.stop="hideMenu">
        <div class="inner" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import CustomButton from '@/ui/CustomButton.vue';
import CustomInput from '@/ui/CustomInput.vue';

export default {
    components: { CustomInput, CustomButton },

    props:{
        shown: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        hideMenu() {
            this.$emit('update:shown', false);
        }
    }
}
</script>

<style lang="scss" scoped>
.outer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba($color: #000000, $alpha: 0.5);
    display: flex;
}

.inner {
    margin: auto;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 10px;
    padding: 10px;
}
</style>