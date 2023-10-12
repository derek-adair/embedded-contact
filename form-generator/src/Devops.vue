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
                    label: "Point Of Contact",
                    name: 'point_of_contact',
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
                    rules: Yup.number().min(10),
                },
                {
                    label: "Description of your company",
                    name: 'company_description',
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
