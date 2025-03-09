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
    <li><a href="#about" on:click|preventDefault={() => scrollToSection('about')}>About</a></li>
    <li><a href="#work" on:click|preventDefault={() => scrollToSection('work')}>Work</a></li>
    <li><a href="#writings" on:click|preventDefault={() => scrollToSection('writings')}>Writings</a></li>
    <li><a href="/resume.pdf" target="_blank">Resume</a></li>
  </ul>
</nav>

<main>
  <section id="about" class="card">
    <h3>ABOUT</h3>
    <p>Hi, I am Seungyeon Lee.<p>
    <p>Thanks for visiting my website.</p>

  </section>

  <section id="work" class="card">
    <h3>WORK</h3>
    <p>Archives of my UX work</p>
    <p>&nbsp;</p>
    <img src="/images/ex_img.jpg" width="300">
  </section>

  <section id="writings" class="card">
    <h3>WRITINGS</h3>
    <p>Archives of my blog posts</p>
    <p>&nbsp;</p>
    <img src="/images/ex_img.jpg" width="300">
  </section>
</main>
