<script lang="ts">
	import Modal from "./Modal.svelte";

	type Person = {
		firstName: string;
		lastName: string;
		belt: string;
		id: number;
	};
	let num = 20;
	let people: Person[] = [
		{
			belt: "blue",
			firstName: "Kamana",
			lastName: "Kisinga",
			id: 0,
		},
		{
			belt: "blue",
			firstName: "Sam",
			lastName: "Champee",
			id: 1,
		},
		{
			belt: "black",
			firstName: "Francis",
			lastName: "Maish",
			id: 2,
		},
	];

	const deletePerson = (id) => {
		console.log(id);
		people = people.filter((p) => p.id != id);
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

<Modal />
<main>
	{#each people as person (person.id)}
		<div>
			<h4>{person.firstName}</h4>
			<p>{person.belt}</p>
			{#if person.belt == 'black'}
				<p>Master ninja</p>
			{:else}
				<p>On the way to greatness</p>
			{/if}
			<button
				on:click={() => {
					deletePerson(person.id);
				}}>delete</button>
		</div>
	{:else}
		<p>There are no people to display</p>
	{/each}
</main>
