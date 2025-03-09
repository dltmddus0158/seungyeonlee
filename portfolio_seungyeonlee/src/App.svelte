<script>
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
</script>

<nav class="navbar">
  <ul class="nav-links">
    <li><a href="#about" on:click|preventDefault={() => scrollToSection('about')}>ABOUT</a></li>
    <li><a href="#work" on:click|preventDefault={() => scrollToSection('work')}>WORK</a></li>
    <li><a href="#writings" on:click|preventDefault={() => scrollToSection('writings')}>WRITINGS</a></li>
    <li><a href="/resume.pdf" target="_blank">RESUME</a></li>
  </ul>
</nav>

<main>
  <section id="about" class="card">
    <h3>ABOUT</h3>
    <p>Hi, I am Seungyeon Lee.<p>
    <p>I am a current CS undergraduate student at Georgia Institute of Technology.</p>
    <p>I am pursuing my career in UX research and design in the future after I graduate.</p>
    <p>This space is where I put my work and what I learned from them.</p>
    <p>Love to share my ideas and thoughts with you!</p>
    <p>If you want to contact with me, please refer to the links at the bottom of the page.</p>

  </section>

  <section id="work" class="card">
    <h3>WORK</h3>
    <p>Archives of my UX work</p>
    <p>&nbsp;</p>
    <img src="/images/ex_img.jpg" width="300" alt="Work">
    <img src="/images/ex_img.jpg" width="300" alt="Work">
    <img src="/images/ex_img.jpg" width="300" alt="Work">
  </section>

  <section id="writings" class="card">
    <h3>WRITINGS</h3>
    <p>Archives of my blog posts</p>
    <p>&nbsp;</p>
    <img src="/images/ex_img.jpg" width="300" alt="Writings">
    <img src="/images/ex_img.jpg" width="300" alt="Writings">
    <img src="/images/ex_img.jpg" width="300" alt="Writings">
  </section>
</main>

<footer>
  <img src="/images/linkedin_logo.png" class="logo" alt="LinkedIn Profile">
</footer>