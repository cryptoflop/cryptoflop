<script lang="ts">
	import web from "./assets/images/web.webp";
	import github from "./assets/images/github.webp";
	import fetchable from "./fetchable";

	const GH_STATIC_ENDPOINT =
		"https://raw.githack.com/cryptoflop/cryptoflop/main/static";

	let LINKS = fetchable(
		GH_STATIC_ENDPOINT + "/links/links.json",
		[] as { alt: string; url: string; icon: string }[],
	);

	let PROJECTS = fetchable(
		GH_STATIC_ENDPOINT + "/projects/projects.json",
		[] as {
			title: string;
			links: {
				web?: string;
				git?: string;
			};
			desc: string;
			path: string;
			images: { size: number; offx: number; offy: number }[];
		}[],
	);

	let fullscreenImage: string | undefined;
</script>

<main class="h-screen w-screen relative flex flex-col overflow-y-scroll pb-8">
	<div class="mx-auto mt-12 text-8xl sticky">
		{#each Array(5) as _, i}
			<h1
				class="absolute select-none {i == 0
					? 'text-blue-50'
					: 'text-blue-300'} "
				style="transform: translateY({i * 12 - 2}px); opacity: 0.{5 - i - 1}"
			>
				Cryptoflop
			</h1>
		{/each}
		<h1>Cryptoflop</h1>
	</div>

	<h2 class="text-3xl mx-auto mt-20 underline">About</h2>

	<div
		class="mx-auto mt-2 max-w-[360px] bg-black/0 px-3 py-1 text-xl/6 text-center"
	>
		A spacefaring developer with a curiosity spanning various domains.
	</div>

	<h2 class="mx-auto text-3xl mt-12 underline">Links</h2>

	<div class="mx-auto mt-2 flex space-x-2">
		{#each $LINKS as link}
			<a
				href={link.url}
				target="_blank"
				class="relative group button p-2 w-16 flex bg-blue-200/5 rounded-xl"
				aria-label="Link to {link.alt}"
			>
				<img
					src={GH_STATIC_ENDPOINT + "/links/" + link.icon + ".webp"}
					class="h-8 w-8 mx-auto group-hover:scale-105 filter drop-shadow-[0_0_6px_rgba(96,165,250,0.6)] pointer-events-none"
					alt="{link.alt} logo"
				/>
				<div
					class="absolute inset-0 bg-blue-200/10 opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl"
				/>
			</a>
		{/each}
	</div>

	<h2 class="mx-auto text-3xl mt-12 underline">Projects</h2>

	<div class="mx-auto flex flex-col space-y-8 mt-4 mb-24">
		{#each $PROJECTS as project}
			<div class="min-w-[338px] max-w-[338px]">
				<div class="flex items-center">
					<h3 class="text-2xl mr-auto">{project.title}</h3>
					{#if project.links.web}
						<a
							class="block button ml-2"
							href={project.links.web}
							target="_blank"
						>
							<img src={web} class="h-4 w-4" alt="website logo" />
						</a>
					{/if}
					{#if project.links.git}
						<a
							class="block button ml-2"
							href={project.links.git}
							target="_blank"
						>
							<img src={github} class="h-4 w-4" alt="github logo" />
						</a>
					{/if}
				</div>
				<div class="text-base/5">
					{project.desc}
				</div>
				<div class="flex justify-between mt-2">
					{#each project.images as image, i}
						<button
							on:click={() =>
								(fullscreenImage = `${GH_STATIC_ENDPOINT}/projects/${project.path}/${i + 1}.webp`)}
							class="h-16 w-[6.75rem] rounded-xl overflow-hidden group relative cursor-pointer border-2 border-blue-200/20"
							style="background-image: url({`${GH_STATIC_ENDPOINT}/projects/${project.path}/${i + 1}.webp`}); 
										 background-size: {image.size}px; background-position-x: {image.offx}px; 
										 background-position-y: {image.offy}px;"
						>
							<div
								class="group-hover:bg-blue-200/20 absolute inset-0 pointer-events-none"
							/>
						</button>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	{#if fullscreenImage}
		<button
			class="fixed inset-0 flex bg-black/40 p-2"
			on:click={() => (fullscreenImage = undefined)}
		>
			<img
				class="m-auto border-2 border-blue-200/20"
				src={fullscreenImage}
				alt="fullsceen"
			/>
		</button>
	{/if}
</main>
