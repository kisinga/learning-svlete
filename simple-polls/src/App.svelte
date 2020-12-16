<script lang="ts">
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";
	import PollList from "./components/PollList.svelte";

	// tabs
	export let items = ["Current Polls", "Add New Poll"];
	let activeItem = items[0];

	const tabChange = (e) => {
		activeItem = e.detail;
	};

	const handleAdd = () => {
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
		<PollList />
	{:else if activeItem === items[1]}
		<CreatePollForm on:add={handleAdd} />
	{/if}
</main>
<Footer />
