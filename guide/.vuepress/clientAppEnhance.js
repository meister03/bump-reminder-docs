import { defineClientAppEnhance } from '@vuepress/client';
import Command from './components/Command.vue';
import Button from './components/Button.vue';


export default defineClientAppEnhance(({ app }) => {
	app.component('command', Command);
	app.component('btn', Button);
});