import { defineClientAppEnhance } from '@vuepress/client';
import Command from './components/Command.vue';


export default defineClientAppEnhance(({ app }) => {
	app.component('command', Command);
});