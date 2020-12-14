<script>
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();

    let name;
    let belt;
    let age;
    // let fighting = false;
    // let sneaking = false;
    // let running = false;
    let skills = [];
    const handleSubmit = () => {
        const person = { name, belt, age, skills };
        dispatch("addPerson", person);
    };
</script>

<style>
</style>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={name} />
    <!-- <input type="text" placeholder="belt" bind:value={belt} /> -->
    <input type="number" placeholder="age" bind:value={age} />
    <label>Skills:</label>
    <input type="checkbox" bind:group={skills} value="fighting" />fighting<br />
    <input type="checkbox" bind:group={skills} value="sneaking" />sneaking<br />
    <input type="checkbox" bind:group={skills} value="running" />running<br />
    <label>Belt colour:</label>
    <select name="beltcolour" id="" bind:value={belt}>
        <option value="black">black</option>
        <option value="blue">blue</option>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="yellow">yellow</option>
        <option value="white">white</option>
    </select>
    <button type="submit">Add person</button>
</form>
