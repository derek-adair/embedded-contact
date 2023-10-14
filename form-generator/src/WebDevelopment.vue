<template>
    <DynamicForm :schema="formSchema" /> </template>

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
                    label: "Product Details",
                    name: 'product_details',
                    as: 'textarea',
                    placeholder: 'Tell us about your product/project',
                    rules: Yup.string().required(),
                },
                {
                    label: "Project Goals",
                    name: 'project_goals',
                    as: 'textarea',
                    placeholder: 'Your business objective, project goal, a problem you want to solve.',
                    rules: Yup.string().required(),
                },
                {
                    label: "Technology",
                    name: 'technology',
                    as: 'textarea',
                    placeholder: 'What tech are you using?',
                    rules: Yup.string().required()
                },
                {
                    label: "Timeline",
                    name: 'timeline',
                    as: 'textarea',
                    placeholder: 'Are there any strict deadlines?  What pace are you looking to set? This will directly affect cost.',
                    rules: Yup.string().required()
                },
                {
                    label: "NDA?",
                    name: 'nda',
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
