<template>
	<div>
		<h1>Cart</h1>
		<hr>
		<div v-if="empty"
			class="alert alert-warning">
			Your cart is empty
		</div>
		<template v-else>
			<table class="table table-bordered table-hover">
				<thead>
					<tr>
						<th>Title</th>
						<th>Price</th>
						<th>Действия</th>
					</tr>
				</thead>	
				<tbody>
					<tr v-for="product in products" :key="product.title">
						<td>{{ product.title }}</td>
						<td>{{ product.price }}</td>
						<td><img style="cursor: pointer;" 
								width="35px" 
								src="../images/iconfinder_basket_1814090.png" alt=""
								@click="removeFromCart(product.id_product)">
						</td>
					</tr>
				</tbody>	
			</table>
			<button @click="onOrder"
					class="btn btn-success">
				Order Now
			</button>
		</template>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'
	import {mapGetters} from 'vuex'
	export default {
		computed: {
			...mapGetters('products', {
				productsAll: 'items'
			}),
			...mapGetters('cart', {
				productsInCart: 'products'
			}),
			products() {
				return this.productsAll.filter((elem) => {
					return this.productsInCart.indexOf(elem.id_product) !== -1
				})
			},
			empty() {
				return this.products.length === 0;
			}
		},
		methods: {
			...mapActions('cart', {
				removeFromCart: 'remove'
			}),
			onOrder() {
				this.$router.push('/checkout')
			}
		}
	}
</script>