<template>
	<div>
		<h1>Products</h1>
		<div class="row">
			<div class="col col-sm-4"
				v-for="(product) in products"
				:key="product.id_product">
				<h3>{{ product.title }}</h3>
				<div>{{ product.price }}</div>
				<button class="btn btn-primary">Add to cart</button>
				<button class="btn btn-warning">Remove to cart</button>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		computed: {
			...mapGetters('products', {
				products: 'items'
			})
		}
	}
</script>

<style scoped>
	.row{
		padding-left: 15px;
	}
</style>