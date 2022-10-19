<template>

<form @submit.prevent="submit">
    <div>
    <label for="">name</label>
    <input type="text" v-model="enteredname">
    </div>

    <div>
    <label for="">phone</label>
    <input type="tel" v-model="enteredphone">
    </div>

    <div>
    <label for="">e-mail</label>
    <input type="email" v-model="enteredemail">
    </div>

    <div>
        <button>Add Contact</button>
    </div>
</form>


</template>


<script>

export default {
    emits: ['add-contact'],

    data() {
        return{
            enteredname:'',
            enteredphone:'',
            enteredemail:'',
        };
    },

    methods: {
        submit() {
            this.$emit(
            'add-contact',
            this.enteredname,
            this.enteredphone,
            this.enteredemail
            )
        }
    }
}
</script>