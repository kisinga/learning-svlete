<script lang="ts">
	import Modal from "./Modal.svelte";
	import AddPersonForm from "./AddPersonForm.svelte";

	type Person = {
		name: string;
		belt: string;
		id: number;
	};
	let showModal = false;
	let people: Person[] = [
		{
			belt: "blue",
			name: "Kamana",
			id: 0,
		},
		{
			belt: "blue",
			name: "Sam",
			id: 1,
		},
		{
			belt: "black",
			name: "Francis",
			id: 2,
		},
	];

	const deletePerson = (id) => {
		console.log(id);
		people = people.filter((p) => p.id != id);
	};
	const toggleModal = () => {
		showModal = !showModal;
	};
	const addPerson = (e) => {
		const person = e.detail;
		people = [person, ...people];
		showModal = false;
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

<Modal
	isPromo={false}
	{showModal}
	on:click={() => {
		toggleModal();
	}}>
	<AddPersonForm on:addPerson={addPerson} />
</Modal>
<main>
	<button
		on:click={() => {
			toggleModal();
		}}>Open Modal</button>
	{#each people as person (person.id)}
		<div>
			<h4>{person.name}</h4>
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
