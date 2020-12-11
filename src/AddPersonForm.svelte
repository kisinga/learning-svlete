<script>
    let name;
    let belt;
    let age;
    const handleSubmit = () => {
        console.log(name, belt, age);
    };
</script>

<style>
</style>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={name} />
    <input type="text" placeholder="belt" bind:value={belt} />
    <input type="number" placeholder="age" bind:value={age} />
    <button type="submit">Add person</button>
</form>
