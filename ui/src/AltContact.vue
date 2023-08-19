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
                    label: "Company",
                    name: 'company',
                    as: 'input',
                    rules: Yup.string().required(),
                },
                {
                    label: "Name",
                    name: 'name',
                    as: 'input',
                    rules: Yup.string().required(),
                },
                {
                    label: "Email",
                    name: 'email',
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
                    label: "Message",
                    name: 'message',
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
