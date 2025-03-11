<template>
    <button 
      @click="handleClick"     
    :class="[
      'back-button flex items-center transition-all duration-300 ease-in-out focus:outline-none mb-4',
      size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-base',
      variant === 'text' ? 'hover:text-indigo-700' : 
        variant === 'filled' ? 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-md hover:shadow-lg' : 
        'bg-white hover:bg-gray-100 text-indigo-600 border border-gray-200 shadow-sm hover:shadow-md',
      variant === 'text' ? 'p-1' : 'px-4 py-2 rounded-full',
      position === 'absolute' ? 'absolute top-4 left-4 z-10' : '',
      className
    ]"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      :class="[
        'transition-transform duration-300',
        size === 'small' ? 'h-4 w-4' : size === 'large' ? 'h-6 w-6' : 'h-5 w-5',
        variant !== 'text' ? 'mr-2' : ''
      ]" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
    <span v-if="showText">{{ text }}</span>
  </button>
</template>

<!-- 
const goBack = () => {
  this.$router.go(-1); // Einen Schritt zurück
}; -->


<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  // Button text
  text: {
    type: String,
    default: 'Zurück'
  },
  // Show or hide text
  showText: {
    type: Boolean,
    default: true
  },
  // Button size: 'small', 'medium', 'large'
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  // Button variant: 'outlined', 'filled', 'text'
  variant: {
    type: String,
    default: 'outlined',
    validator: (value) => ['outlined', 'filled', 'text'].includes(value)
  },
  // Position: 'inline', 'absolute'
  position: {
    type: String,
    default: 'inline',
    validator: (value) => ['inline', 'absolute'].includes(value)
  },
  // Custom route to navigate to
  to: {
    type: [String, Object],
    default: null
  },
  // Additional CSS classes
  className: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
  
  // If a route is provided, navigate to it
  if (props.to) {
    // This would typically use router.push, but we're emitting an event for flexibility
    emit('navigate', props.to);
  } else {
    // Default behavior: go back in history
    window.history.back();
  }
};
</script>

<style scoped>
.back-button:hover svg {
  transform: translateX(-4px);
}


</style>