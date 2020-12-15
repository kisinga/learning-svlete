<script type="ts">
    import type { poll } from "../shared/Models.svelte";
    export let polls: poll[] = [];
</script>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>

<div class="poll-list">
    {#each polls as pollItem (pollItem.id)}
        <div>{pollItem.question}</div>
    {/each}
</div>
