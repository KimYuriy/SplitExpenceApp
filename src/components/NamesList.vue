<template>
    <div class="namesList">
        <NameItem v-for="person in $store.getters.getPeople" :person="person" :shown="true" :key="person.ID"/>
    </div>
</template>

<script>
import NameItem from '@/components/NameItem.vue';

export default {
    components: { NameItem }
}
</script>

<style lang="scss" scoped>
$marginTopBottom: 5px;

.namesList {
    width: 100%;
    margin: $marginTopBottom 0;
}

@media screen and (max-width: 500px) {
    .namesList {
        width: 50%;
    }
}
</style>