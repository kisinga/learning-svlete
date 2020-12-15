<script lang="ts">
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";
	import PollList from "./components/PollList.svelte";
	import type { Poll } from "./shared/Models.svelte";
	// tabs
	export let items = ["Current Polls", "Add New Poll"];
	let activeItem = items[0];

	const tabChange = (e) => {
		activeItem = e.detail;
	};

	let polls: Poll[] = [
		{
			question: "Golang or Rust",
			answerA: "Golang",
			answerB: "Rust",
			id: 0,
			votesA: 15,
			votesB: 17,
		},
	];
	const handleAdd = (e) => {
		polls = [e.detail, ...polls];
		console.log(polls);
		activeItem = items[0];
	};
</script>

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>

<Header />

<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange} />
	{#if activeItem === items[0]}
		<PollList {polls} />
	{:else if activeItem === items[1]}
		<CreatePollForm on:add={handleAdd} />
	{/if}
</main>
<Footer />
