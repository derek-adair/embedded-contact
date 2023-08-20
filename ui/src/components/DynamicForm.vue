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
      axios(evt.target.action, {
        headers: {
          'Access-Control-Allow-Origin': evt.target.action 
        },
        method: 'POST',
        data: {
          'name': this.name,
          'subject': [this.name, this.phone].join(" "),
          'text': [
            "Name: " + this.name,
            "Number: " + this.phone,
            "Year: " + this.year,
            "Make: " + this.make,
            "Model: " + this.model,
            "Summary: " + this.summary,
          ].join("\n"),
          'from': this.from
        }	
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
