<script lang="ts">
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();

    import Button from "../shared/Button.svelte";

    let fields = {
        question: "",
        anserA: "",
        anserB: "",
    };
    let errors = {
        question: "",
        anserA: "",
        anserB: "",
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
        if (fields.anserA.trim().length < 1) {
            valid = false;
            errors.anserA = "answer a cannot be empty";
        } else {
            errors.anserA = "";
        }

        // validate anser b
        if (fields.anserB.trim().length < 1) {
            valid = false;
            errors.anserB = "answer b cannot be empty";
        } else {
            errors.anserB = "";
        }

        if (valid) {
            let poll = { ...fields, votesA: 0, votesB: 0, id: Math.random() };
            dispatch("add", poll);
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
        <input type="text" id="anser-a" bind:value={fields.anserA} />
        <div class="error">{errors.anserA}</div>
    </div>
    <div class="form-field">
        <label for="anser-b">Answer b</label>
        <input type="text" id="anser-b" bind:value={fields.anserB} />
        <div class="error">{errors.anserB}</div>
    </div>
    <Button type="secondary" flat={true}>Add Poll</Button>
</form>
