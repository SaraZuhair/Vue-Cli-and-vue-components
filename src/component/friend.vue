<template>
    <li>
        <h2>{{name}} {{isFavorite ? '(my fvorite contact)' : ''}}</h2>
        <button @click="toggle">Show Details</button> <div class="space"></div>
        <button @click="togglefavorite">Favorite</button>

        <ul v-if="visibleData">
            <li> <strong>Phone:</strong> {{phoneNumber}}</li>
            <li> <strong>Email:</strong> {{emailAddress}} </li>
        </ul>
        <button @click="$emit('delete', id)">delete</button>
    </li>
</template>


<script>

 
    export default{
        // props:[
        //     'id',
        //     'name',
        //     'phoneNumber',
        //     'emailAddress',
        //     'isFavorite'
        // ],

        props: {
            id:{
                type: String,
                required: true
            },

            name:{
                type: String,
                required: true
            },

            phoneNumber: {
                type: String,
                required: true
            },

            emailAddress: {
                type: String,
                required: true
            },

            isFavorite: {
                type: Boolean,
                required: false,
            },

            
        },

        data() {
            return{
                visibleData: false,
            }
        },

        methods: {
            toggle() {
                this.visibleData = ! this.visibleData;
            },

            togglefavorite() {
                this.$emit('toggle-fav', this.id);
            }
        }
    };
</script>


<style>
    .space {
        width: 10px;
        height: 2px;
    }

</style>