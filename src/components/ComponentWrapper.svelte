<script>
	export let title;
</script>

<main>
	<div class="component-wrapper">
		{#if title}
			<div class="component-header">
				<span>{title}</span>
			</div>
		{/if}
		<slot />
	</div>
	{#if $$slots.code}
		<div class="component-code">
			<slot name="code" />
		</div>
	{/if}
</main>

<style lang="scss">
	main {
		--grey: #eee;
		margin-bottom: 1.5rem;
		display: flex;
		flex-direction: column;
		position: relative;
		border-radius: 6px;
		min-height: 180px;
		overflow: hidden;
		box-shadow: 0 0 0 1px inset rgba(0, 0, 0, 0.1);
		background-image: repeating-linear-gradient(45deg, var(--grey) 25%, transparent 25%, transparent 75%, var(--grey) 75%, var(--grey)), repeating-linear-gradient(45deg, var(--grey) 25%, #fafafa 25%, #fafafa 75%, var(--grey) 75%, var(--grey));
		background-position:
			0 0,
			10px 10px;
		background-size: 20px 20px;
	}
	.component-wrapper {
		padding: 20px;
		position: relative;
		flex-grow: 1;
		min-width: 100%;
		box-sizing: border-box;
		outline: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.component-header {
			padding: 0.25rem 0.5rem;
			position: absolute;
			top: 0;
			left: 0;
			margin: 0.5rem;
			line-height: 1;
			border-radius: 6px;
			box-shadow:
				rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
				rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
			background: #fff;
			pointer-events: none;
			span {
				font-size: 0.75rem;
				line-height: 1;
				font-weight: 400;
				color: #737373;
			}
		}
	}
	.component-code {
		padding: 20px;
    min-height: 180px;
		background: #f9f9f9;
		border-top: 1px solid #eee;
		font-size: 0.8rem;
		color: #666;
		overflow: auto;
		pre {
			font-size: 0.875rem;
		}
	}
</style>
