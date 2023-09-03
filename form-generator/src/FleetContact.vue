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
                    label: "Email",
                    name: 'from',
                    as: 'input',
                    rules: Yup.string().required(),
                },
                {
                    label: "Point Of Contact",
                    name: 'contact',
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
                    label: "Company",
                    name: 'company',
                    as: 'input',
                    rules: Yup.string().min(2).required(),
                },
                {
                    label: "Summarize Your Needs",
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
