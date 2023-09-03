<template>
    <div v-if="formSubmitted">
        <h2>Thank you for reaching out</h2>
    </div>
    <Form v-else  @submit="onSubmit" action="http://localhost:8888">
        <div
            v-for="{ as, name, label, ...attrs } in schema.fields" 
            :key="name"
            class="form-group"
            >
            <label :for="name">{{ label }}</label>
            <Field :as="as" :id="name" :name="name" v-bind="attrs" class="form-control" />
            <ErrorMessage :name="name" />
        </div>

        <button class="btn btn--primary">Submit</button>
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
    data: () => {
        return {
            formSubmitted: false
        }
    },
    props: {
        schema: {
            type: Object,
            required: true,
        },
    },
    methods: {
        markFormSubmitted() {
            this.$data.formSubmitted = true;
        },
        onSubmit(values, {evt}) {
            let 
                text_arr = [],
                post_data,
                cmp = this
            ;


            for (const property in values) {
                text_arr.push(`${property}: ${values[property]}`) 
            }

            post_data = {
                'from': values.from,
                'text': text_arr.join("\n")
            }	
            axios(evt.target.action, {
                headers: {
                    'Access-Control-Allow-Origin': evt.target.action 
                },
                method: 'POST',
                data: post_data
            }).then(function(response){
                cmp.markFormSubmitted();
            }).catch(function(error){
                console.log(error)
            })

        }
    }
};
</script>
