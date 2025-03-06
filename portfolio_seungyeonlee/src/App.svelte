<script>
    import { preventDefault } from "svelte/legacy";

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
</script>

<nav class="navbar">
  <ul class="nav-links">
    <li><a href="#home">Seungyeon Lee</a></li>
    <li><a href="#work" on:click|preventDefault={() => scrollToSection('work')}>Work</a></li>
    <li><a href="#writings" on:click|preventDefault={() => scrollToSection('writings')}>Writings</a></li>
    <li><a href="#about" on:click|preventDefault={() => scrollToSection('about')}>About</a></li>
    <li><a href="#resume" on:click|preventDefault={() => scrollToSection('resume')}>Resume</a></li>
    <li><a href="#contact" on:click|preventDefault={() => scrollToSection('contact')}>Contact</a></li>
  </ul>
</nav>

<main>
  <section id="work" class="card">
    <h1>Work</h1>
    <p>Your work content goes here.</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
  </section>

  <section id="writings" class="card">
    <h1>Writings</h1>
    <p>Your writings content goes here.</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
  </section>

  <section id="about" class="card">
    <h1>About</h1>
    <p>Your about content goes here.</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
  </section>

  <section id="resume" class="card">
    <h1>Resume</h1>
    <p>Your resume content goes here.</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
  </section>

  <section id="contact" class="card">
    <h1>Contact</h1>
    <p>Your contact content goes here.</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
  </section>
</main>
