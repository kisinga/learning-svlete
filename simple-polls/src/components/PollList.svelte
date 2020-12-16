<script type="ts">
    import PollDetails from "./PollDetails.svelte";
    import PollStore from "../stores/PollStore";
</script>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>

<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
        <div>
            <PollDetails {poll} />
        </div>
    {/each}
</div>
