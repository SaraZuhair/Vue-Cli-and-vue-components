<template>
    <li>
        <h2>{{name}}</h2>
        <button @click="toggle">Show Details</button>

        <ul v-if="visibleData">
            <li> <strong>Phone:</strong> {{phoneNumber}}</li>
            <li> <strong>Email:</strong> {{emailAddress}} </li>
        </ul>
    </li>
</template>


<script>
    export default{
        props:[
            'name',
            'phoneNumber',
            'emailAddress'
        ],

        data() {
            return{
                visibleData: false,
            }
        },

        methods: {
            toggle() {
                this.visibleData = ! this.visibleData;
            }
        }
    };
</script>