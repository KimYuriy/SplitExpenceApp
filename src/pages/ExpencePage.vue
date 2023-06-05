<template>
    <div class="outerDiv">
        <ModalMenu v-model:shown="addNewDishMenuShown">
            <h2 style="align-self: center;">Добавление нового блюда</h2>
            <EditDishInfo @addNewDish="addNewDish"/>
        </ModalMenu>
        <ModalMenu v-model:shown="addNewPersonMenuShown">
            <h2 style="align-self: center;">Добавление нового человека</h2>
            <NewPersonInput/>
        </ModalMenu>
        <ModalMenu v-model:shown="currentTipShown">
            <h2 style="align-self: center;">Текущий счет</h2>
            <p style="font-size: 1.1em" v-for="person in $store.getters.getPeople" :key="person.ID">{{ person.name }}: {{ person.money }}р</p>
            <b>Итого: {{ $store.getters.getTotalSum }}р</b>
        </ModalMenu>
        <div class="startPage">
            <h2 style="align-self: center;">Выбор блюд и напитков</h2>
            <div class="buttons">
                <CustomButton id="id1" @click="addNewDishMenuShown = true">Добавить блюдо</CustomButton>
                <CustomButton id="id2" @click="addNewPersonMenuShown = true;">Добавить человека</CustomButton>
                <CustomButton id="id3" @click="currentTipShown = true">Показать результат</CustomButton> 
            </div>
            <DishesList class="dishesList" />
        </div>
    </div>
</template>

<script>
import DishesList from '@/components/DishesList.vue';
import EditDishInfo from '@/components/EditDishInfo.vue';
import ModalMenu from '@/components/ModalMenu.vue';
import NewPersonInput from '@/components/NewPersonInput.vue';
import CustomButton from '@/ui/CustomButton.vue';

export default {
    components: { CustomButton, DishesList, ModalMenu, NewPersonInput, EditDishInfo },

    data() {
        return {
            addNewDishMenuShown: false,
            addNewPersonMenuShown: false,
            currentTipShown: false,
            buttonTitle: "Добавить"
        }
    },

    methods: {
        addNewDish(dish) {
            this.$store.dispatch('addMoney', dish);
            this.addNewDishMenuShown = false;
        }
    }
}
</script>

<style lang="scss" scoped>
$widthPercent: 100%;
.startPage, .buttons {
    display: flex;
}

.startPage {
    width: 500px;
    margin: 0 auto;
    align-items: center;
    flex-direction: column;
}

.buttons {
    width: $widthPercent;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

#id1, #id2, #id3 {
    width: 30%;
}

#id1, #id2 {
    margin-right: 3px;
}

#id2, #id3 {
    margin-left: 3px;
}

@media screen and (max-width: 500px) {
    .buttons {
        flex-direction: column;
    }

    #id1, #id2, #id3 {
        width: 50%;
        margin: 3px 0;
    }
}
</style>