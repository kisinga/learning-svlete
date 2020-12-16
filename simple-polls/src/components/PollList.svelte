<script type="ts">
    import PollDetails from "./PollDetails.svelte";
    import type { Poll } from "../shared/Models.svelte";
    export let polls: Poll[] = [];
</script>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>

<div class="poll-list">
    {#each polls as poll (poll.id)}
        <div>
            <PollDetails {poll} on:vote />
        </div>
    {/each}
</div>
