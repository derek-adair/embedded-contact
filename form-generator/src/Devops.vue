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
                {
                    label: "Budget",
                    name: 'budget',
                    as: 'textarea',
                    placeholder: 'How much funding do you have allocated for this project? Do you have a do not exceed figure?',
                    rules: Yup.string().required()
                },
                {
                    label: "Infrastructure",
                    name: 'infrastructure',
                    placeholder: 'What infrastructure do you need help supporting?',
                    as: 'textarea',
                    rules: Yup.string().required(),
                },
                {
                    label: "How many devs?",
                    name: 'dev_count',
                    placeholder: "how many developers are on your team?",
                    as: 'input',
                    rules: Yup.string().required(),
                },
                {
                    label: "Traffic",
                    name: 'traffic',
                    placeholder: 'How much traffic does your platform need to support?',
                    as: 'textarea',
                    rules: Yup.string().required(),
                },
                {
                    label: "Do you need CI/CD maintained?",
                    name: 'cicd',
                    type: 'checkbox',
                },
            ]
        }

        return {
            formSchema
        }
    }
}; 

</script>
