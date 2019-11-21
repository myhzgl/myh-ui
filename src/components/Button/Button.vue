<template>
    <button class="m-button">
        按钮
    </button>
</template>
<script>
export default {
    name: 'Button'
}
</script>
<style lang="scss">
    .m-button {
        color: var(--button-color);
        font-size: var(--button-font-size);
        height: var(--button-height);
        padding: 0 1rem;
        border-radius: var(--button-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        &:hover {
            border-color: var(--button-border-color-hover);
            color: var(--button-color-hover);
            background-color: var(--button-bg-hover)
        }
        &:active {
            border-color: var(--button-border-color-active);
            color: var(--button-color-active)
        }
        &:focus {
            outline: none;
        }
    }
</style>