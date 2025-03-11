<template>
    <button 
      @click="handleClick" 
      :class="[
        'edit-button transition-all duration-300 ease-in-out focus:outline-none',
        size === 'small' ? 'p-2' : size === 'large' ? 'p-4' : 'p-3',
        variant === 'primary' ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700' : 
          variant === 'secondary' ? 'bg-gray-100 text-indigo-600 hover:bg-gray-200' : 
          'bg-white text-indigo-600 border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50',
        shape === 'circle' ? 'rounded-full' : 'rounded-lg',
        position === 'absolute' ? 'absolute z-10' : 'relative',
        position === 'absolute' && placement === 'top-right' ? 'top-2 right-2' :
        position === 'absolute' && placement === 'top-left' ? 'top-2 left-2' :
        position === 'absolute' && placement === 'bottom-right' ? 'bottom-2 right-2' :
        position === 'absolute' && placement === 'bottom-left' ? 'bottom-2 left-2' : '',
        withShadow ? 'shadow-md hover:shadow-lg' : '',
        withTooltip ? 'group' : '',
        className
      ]"
      :aria-label="tooltip"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        :class="[
          size === 'small' ? 'h-4 w-4' : size === 'large' ? 'h-6 w-6' : 'h-5 w-5'
        ]" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
      
      <!-- Tooltip -->
      <span 
        v-if="withTooltip" 
        class="absolute whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        :class="[
          tooltipPlacement === 'top' ? 'bottom-full mb-2 left-1/2 transform -translate-x-1/2' :
          tooltipPlacement === 'bottom' ? 'top-full mt-2 left-1/2 transform -translate-x-1/2' :
          tooltipPlacement === 'left' ? 'right-full mr-2 top-1/2 transform -translate-y-1/2' :
          'left-full ml-2 top-1/2 transform -translate-y-1/2'
        ]"
      >
        {{ tooltip }}
      </span>
    </button>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    // Button size: 'small', 'medium', 'large'
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    // Button variant: 'default', 'primary', 'secondary'
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'primary', 'secondary'].includes(value)
    },
    // Button shape: 'circle', 'rounded'
    shape: {
      type: String,
      default: 'circle',
      validator: (value) => ['circle', 'rounded'].includes(value)
    },
    // Position: 'relative', 'absolute'
    position: {
      type: String,
      default: 'relative',
      validator: (value) => ['relative', 'absolute'].includes(value)
    },
    // Placement when position is absolute: 'top-right', 'top-left', 'bottom-right', 'bottom-left'
    placement: {
      type: String,
      default: 'top-right',
      validator: (value) => ['top-right', 'top-left', 'bottom-right', 'bottom-left'].includes(value)
    },
    // With shadow
    withShadow: {
      type: Boolean,
      default: true
    },
    // With tooltip
    withTooltip: {
      type: Boolean,
      default: false
    },
    // Tooltip text
    tooltip: {
      type: String,
      default: 'Bearbeiten'
    },
    // Tooltip placement: 'top', 'bottom', 'left', 'right'
    tooltipPlacement: {
      type: String,
      default: 'top',
      validator: (value) => ['top', 'bottom', 'left', 'right'].includes(value)
    },
    // Item ID to edit
    itemId: {
      type: [String, Number],
      default: null
    },
    // Additional CSS classes
    className: {
      type: String,
      default: ''
    }
  });
  
  const emit = defineEmits(['click', 'edit']);
  
  const handleClick = () => {
    emit('click');
    emit('edit', props.itemId);
  };
  </script>
  
  <style scoped>
  .edit-button {
    transition: all 0.3s ease;
  }
  
  .edit-button:hover {
    transform: translateY(-2px);
  }
  
  .edit-button:active {
    transform: translateY(0);
  }
  </style>
  
  