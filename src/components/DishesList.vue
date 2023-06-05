<template>
    <div class="dishesList">
        <DishItem v-for="dish in $store.getters.getDishes" :dishData="dish" />
    </div>
</template>

<script>
import DishItem from '@/components/DishItem.vue';

export default {
    components: { DishItem }
}
</script>

<style lang="scss" scoped>
$marginTopBottom: 5px;
.dishesList {
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: $marginTopBottom;
    margin-bottom: $marginTopBottom;
}

@media screen and (max-width: 500px) {
    .dishesList {
        width: 80%;
    }    
}
</style>