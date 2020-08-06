<template>
	<div>
		<h1>Order now</h1>
		<hr>
		<form @submit.prevent="formSubmit" v-if="!formSubmited">
			<div class="progress">
				<div class="progress-bar" :style="progressWidth"></div>
			</div>
			<div>
				<app-input v-for="(item, index) in  info"
						:name="item.name"
						:value="item.value"
						:pattern="item.pattern"
						:key="index"
						@changedata="onChangeData(index, $event)"
				>
				</app-input>
			</div>
			<button class="btn" :class="loading ? 'btn-default' : 'btn-primary'" 
					:disabled="done < info.length || loading == true">
				{{loading == false ? 'Send Data' : 'Loading...'}}
			</button>
		</form>
		<transition name="fade" mode="out-in">
			<div v-if="formSubmited">
				<table class="table table-bordered">
					<tbody>
						<tr v-for="(item, index) in  info" :key="index">
							<td>{{ item.name }}</td>
							<td>{{ item.value }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</transition>
	</div>
</template>

<script>
	import AppInput from './Input'
	import {mapGetters} from 'vuex'
	
	export default {
		created(){
			for(let i = 0; i < this.info.length; i++){
				this.controls.push(false);
			}
		},
		methods: {
			onChangeData(index, data){
				this.info[index].value = data.value;
				this.controls[index] = data.valid;

				let done = 0;

				for(let i = 0; i < this.controls.length; i++){
					if(this.controls[i]){
						done++;
					}
				}

				this.$store.commit('doneState', done)
			},
			formSubmit() {
				this.$store.dispatch('sendOrder')
			}
		},
		computed: {
			...mapGetters([
				'info',
				'controls',
				'done',
				'formSubmited',
				'loading'
			]),
			progressWidth(){
				return {
					width: (this.done / this.info.length * 100) + '%'
				}
			}
		},
		components: {
			AppInput
		}
	}
</script>