<template>
    <div class="nameItem">
        <p id="id1">{{ person.name }}</p>
        <CustomButton id="id2" class="customButton" v-if="shown" @click="removePerson">Удалить</CustomButton>
    </div>
</template>

<script>
import CustomButton from '@/ui/CustomButton.vue';

export default {
    components: { CustomButton },

    props: {
        person: {
            type: Object,
            required: true
        },
        shown: {
            type: Boolean,
            required: true
        }
    },

    methods: {
        removePerson() {
            this.$store.commit('removePerson', this.person);
        }
    }
}
</script>

<style lang="scss" scoped>
$marginTopBottom: 5px;

.nameItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: $marginTopBottom 0;
    font-size: 1em;
}

#id1 {
    width: 80%;
    margin-right: 3px;
}

#id2 {
    width: 20%;
    margin-left: 3px;
}

@media screen and (max-width: 500px) {
    .nameItem {
        flex-direction: column;
        border: 1px solid red;
        border-radius: 5px;
    }

    #id1, #id2 {
        width: 100%;
        margin: $marginTopBottom 0;
    }
}
</style>