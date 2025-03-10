<script>
  import { goto } from './router.js';
</script>

<style>
  @import url('./writings.css');
</style>

<nav class="navbar">
  <ul class="nav-links">
    <li><a href="index.html" on:click|preventDefault={() => goto('index', 'about')}>ABOUT</a></li>
    <li><a href="index.html" on:click|preventDefault={() => goto('index', 'work')}>WORK</a></li>
    <li><a href="index.html" on:click|preventDefault={() => goto('index', 'writings')}>WRITINGS</a></li>
    <li><a href="/resume.pdf" target="_blank">RESUME</a></li>
  </ul>
</nav>

<main class="detail-container">
  <section id="writingsDetail" class="card">
    <h3>Writings</h3>
    <p>Writing Title goes here.</p>
  </section>
</main>
