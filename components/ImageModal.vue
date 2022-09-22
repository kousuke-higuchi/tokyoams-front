<script setup lang="ts"></script>
<template>
  <div class="modal" @click.self="$emit('close')">
    <div class="modal-wrapper" @click.stop>
      <div class="modal-inner">
        <div class="modal-content">
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  width: 90%;
  height: 100%;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 300px;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.8);
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>