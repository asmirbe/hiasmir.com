<script>
	import Projects from "../components/Projects.svelte";
	import Header from "../components/Header.svelte";
	export let data;
</script>

<Header />
<Projects posts={data.posts}/>
