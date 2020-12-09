<script lang="ts">
	type Person = {
		firstName: string;
		lastName: string;
		belt: string;
	};

	let people: [Person] = [
		{
			belt: "blue",
			firstName: "Kamana",
			lastName: "Kisinga",
		},
		{
			belt: "blue",
			firstName: "Sam",
			lastName: "Champee",
		},
		{
			belt: "black",
			firstName: "Francis",
			lastName: "Maish",
		},
	];
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
	{#each people as person}
		<div>
			<h4>{person.firstName}</h4>
			<p>{person.belt}</p>
		</div>
	{/each}
</main>
