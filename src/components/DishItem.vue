<template>
    <div class="dishItem">
        <div class="dishInfo" style="width: 70%; margin-right: 3px">
            <p>{{ dishData.name }} х{{ dishData.amount }}: {{ dishData.price }}р</p>
            <div v-for="person in dishData.whoChoosed"><i>{{ person }}</i></div>
        </div>
        <CustomButton style="width: 30%; margin-left: 3px" @click="removeDish">Удалить</CustomButton>
    </div>
</template>

<script>
import CustomButton from '@/ui/CustomButton.vue';

export default {
    props: {
        dishData: {
            type: Object,
            required: true
        }
    },

    components: { CustomButton },

    methods: {
        removeDish() {
            this.$store.dispatch('decreaseMoney', this.dishData);
        }
    }
}
</script>

<style lang="scss" scoped>
$marginTopBottom: 5px;
.dishItem {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 1em;
    margin-top: $marginTopBottom;
    margin-bottom: $marginTopBottom;
    padding: 5px;
    border: 1px solid red;
    border-radius: 5px;
}
</style>