<script lang="ts">
	type Person = {
		firstName: string;
		lastName: string;
		belt: string;
	};

	let person: Person = {
		belt: "black",
		firstName: "Kamana",
		lastName: "Kisinga",
	};
	$: fullName = `${person.firstName} ${person.lastName}`;
	$: console.log(person.firstName);

	const handleClick = () => {
		if (person.belt == "black") {
			person.belt = "blue";
			return;
		}
		person.belt = "black";
	};
	const handleInput = function (e) {
		person.belt = e.target.value;
	};
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Hello {fullName}!</h1>
	<p style="color:{person.belt}">{person.belt} Belt</p>
	<button on:click={handleClick}>Update belt</button>
	<input type="text" bind:value={person.belt} />
	<input type="text" bind:value={person.firstName} />
	<input type="text" bind:value={person.lastName} />
</main>
