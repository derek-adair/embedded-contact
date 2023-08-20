<template>
    <Form @submit="onSubmit" action="http://localhost:8888">
        <div
            v-for="{ as, name, label, ...attrs } in schema.fields" 
            :key="name"
            >
            <label :for="name">{{ label }}</label>
            <Field :as="as" :id="name" :name="name" v-bind="attrs"/>
            <ErrorMessage :name="name" />
        </div>

        <button>Submit</button>
    </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import axios from 'axios';

export default {
    name: 'DynamicForm',
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    props: {
        schema: {
            type: Object,
            required: true,
        },
    },
    methods: {
        onSubmit(values, {evt}) {
            let post_data = {
                    'from': values.from,
                    'text': [
                        "Name: " + values.name,
                        "Number: " + values.phone,
                        "Message: " + values.message,
                    ].join("\n")
                }	

            axios(evt.target.action, {
                headers: {
                    'Access-Control-Allow-Origin': evt.target.action 
                },
                method: 'POST',
                data: post_data
            })
                .then(function(response){
                    app.showForm = false
                })
                .catch(function(error){
                    console.log(error)
                })

        }
    }
};
</script>
