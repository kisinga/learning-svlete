<script type="ts">
    import type { Poll } from "../shared/Models.svelte";

    export let poll: Poll;
</script>

<style>
    .poll {
    }
</style>

<div class="poll">
    <h3>{poll.question}</h3>
    <div class="ansers">
        <div class="percent percent-a" />
        <span>{poll.answerA} ({poll.votesA})</span>
        <div class="percent percent-b" />
        <span>{poll.answerB} ({poll.votesB})</span>
    </div>
</div>
