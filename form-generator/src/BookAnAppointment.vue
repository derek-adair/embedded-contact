<template>
    <DynamicForm :schema="formSchema" />
</template>

<script>
import DynamicForm from '@/components/DynamicForm.vue';
import * as Yup from 'yup';

export default {
    components: {
        DynamicForm
    },
    data: () => {
        const formSchema = {
            fields: [
                {
                    label: "Name",
                    name: 'name',
                    as: 'input',
                    rules: Yup.string().required(),
                },
                {
                    label: "Email",
                    name: 'from',
                    as: 'input',
                    rules: Yup.string().required(),
                },
                {
                    label: "Phone",
                    name: 'phone',
                    as: 'input',
                    rules: Yup.number().min(10).required(),
                },
                {
                    label: "year",
                    name: 'year',
                    as: 'input',
                    rules: Yup.number().min(2).required(),
                },
                {
                    label: "make",
                    name: 'make',
                    as: 'input',
                    rules: Yup.string().required(),
                },
                {
                    label: "model",
                    name: 'model',
                    as: 'input',
                    rules: Yup.string().required(),
                },
                {
                    label: "Summary",
                    name: 'summary',
                    as: 'textarea',
                    rules: Yup.string().required(),
                },
            ]
        }

        return {
            formSchema
        }
    }
}; 

</script>
