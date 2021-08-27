<template>
	<div>
		<div class="container">
			<!-- this line is used by starport scaffolding # 4 -->
			<h3>
				Voter Module
			</h3>
			<CustomMessageForm />
            <TheMessage />
		</div>
	</div>
</template>

<script>
import CustomMessageForm from "../components/CustomMessageForm";
import TheMessage from "../components/TheMessage";

export default {
  name: 'Custom',
  components: { CustomMessageForm, TheMessage },
}
</script>
