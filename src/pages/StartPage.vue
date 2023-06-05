<template>
    <div class="outerDiv">
        <div class="startPage">
            <h2>Ввод имен людей</h2>
            <NewPersonInput />
            <NamesList/>
            <CustomButton id="id1" v-if="$store.getters.getPeopleLength >= 2" @click="$router.push('/expence')">Далее</CustomButton>
        </div>
    </div>
</template>

<script>
import NamesList from '@/components/NamesList.vue';
import NewPersonInput from '@/components/NewPersonInput.vue';
import CustomButton from '@/ui/CustomButton.vue';
import CustomInput from '@/ui/CustomInput.vue';

export default {
    components: { CustomInput, CustomButton, NamesList, NewPersonInput }
}
</script>

<style lang="scss" scoped>
.startPage {
    display: flex;
    width: 500px;
    margin: 0 auto;
    align-items: center;
    flex-direction: column;
}

#id1 {
    width: 100%;
}

@media screen and (max-width: 500px) {
    #id1 {
        width: 50%;
    }
}
</style>