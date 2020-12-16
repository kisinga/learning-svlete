<script type="ts">
    import { createEventDispatcher } from "svelte";
    import type { Poll } from "../shared/Models.svelte";
    import Card from "../shared/Card.svelte";
    const dispatch = createEventDispatcher();

    export let poll: Poll;
    $: totalVotes = poll.votesA + poll.votesB;

    const handleVote = (option, id) => {
        dispatch("vote", { option, id });
    };
</script>

<style>
    .poll {
    }
    h3 {
        margin: 0 auto;
        color: #555;
    }
    p {
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }
    .answer {
        background: #fafafa;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }
    .answer:hover {
        opacity: 0.6;
    }
    span {
        display: inline-block;
        padding: 10px 20px;
    }
</style>

<Card>
    <div class="poll">
        <h3>{poll.question}</h3>
        <p>Total Votes: {totalVotes}</p>
        <div class="answer" on:click={() => handleVote('a', poll.id)}>
            <div class="percent percent-a" />
            <span>{poll.answerA} ({poll.votesA})</span>
        </div>
        <div class="answer" on:click={() => handleVote('b', poll.id)}>
            <div class="percent percent-b" />
            <span>{poll.answerB} ({poll.votesB})</span>
        </div>
    </div>
</Card>
