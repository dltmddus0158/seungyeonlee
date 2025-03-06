import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  // Svelte 전처리기 설정
  preprocess: vitePreprocess(),

  // Svelte 5의 컴포넌트 API 호환성 설정
  compilerOptions: {
    compatibility: {
      componentApi: 4,  // 구버전 API 방식 사용
    }
  }
}
