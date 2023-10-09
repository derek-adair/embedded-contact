<template>
    <p>This is the initial view</p>
  <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/contact">Contact</router-link>
    <router-link to="/alt">Alt Contact</router-link>
  </p>
</template>

