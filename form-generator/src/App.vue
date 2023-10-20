<template>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>

<script>
export default {
    name: 'App',
    data: () => {
        const nav = [
        ]

        return {
            nav
        }
    }
}
</script>
