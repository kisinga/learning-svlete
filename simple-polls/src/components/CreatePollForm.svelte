<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import PollStore from "../stores/PollStore";

    let dispatch = createEventDispatcher();

    import Button from "../shared/Button.svelte";
    import type { Poll } from "../shared/Models";

    let fields: Poll = {
        question: "",
        answerA: "",
        answerB: "",
        votesA: 0,
        votesB: 0,
        id: Math.random(),
    };
    let errors = {
        question: "",
        answerA: "",
        answerB: "",
    };
    let valid = false;
    const submitHandler = () => {
        valid = true;
        //validate question
        if (fields.question.trim().length < 5) {
            valid = false;
            errors.question = "Question must be at least 5 char long";
        } else {
            errors.question = "";
        }

        // validate anser a
        if (fields.answerA.trim().length < 1) {
            valid = false;
            errors.answerA = "answer a cannot be empty";
        } else {
            errors.answerA = "";
        }

        // validate anser b
        if (fields.answerB.trim().length < 1) {
            valid = false;
            errors.answerB = "answer b cannot be empty";
        } else {
            errors.answerB = "";
        }

        if (valid) {
            let poll = { ...fields };
            // save poll to store
            PollStore.update((current) => {
                return [poll, ...current];
            });
            dispatch("add");
        }
    };
</script>

<style>
    form {
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .form-field {
        margin: 18px auto;
    }
    input {
        width: 100%;
        border-radius: 6px;
    }
    label {
        margin: 10px auto;
        text-align: left;
    }
    .error {
        font-weight: bold;
        font-size: 12px;
        color: #d91b42;
    }
</style>

<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Poll question</label>
        <input type="text" id="question" bind:value={fields.question} />
        <div class="error">{errors.question}</div>
    </div>
    <div class="form-field">
        <label for="anser-a">Answer A</label>
        <input type="text" id="anser-a" bind:value={fields.answerA} />
        <div class="error">{errors.answerA}</div>
    </div>
    <div class="form-field">
        <label for="anser-b">Answer b</label>
        <input type="text" id="anser-b" bind:value={fields.answerB} />
        <div class="error">{errors.answerB}</div>
    </div>
    <Button type="secondary" flat={true}>Add Poll</Button>
</form>
