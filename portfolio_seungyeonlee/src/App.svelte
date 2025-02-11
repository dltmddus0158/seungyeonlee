<script>
  import { onMount } from "svelte";

  let darkMode = false;
  let animating = false;

  onMount(() => {
    darkMode = localStorage.getItem("theme") === "dark";
    updateTheme();
  });

  function toggleDarkMode() {
    animating = true;
    darkMode = !darkMode;
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    updateTheme();
    setTimeout(() => {
      animating = false;
    }, 700);
  }

  function updateTheme() {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
</script>

<style>
  :global(.dark) {
    background-color: #121212;
    color: white;
  }

  :global(body) {
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* WEBSITE TITLE */
  .site-title {
    position: absolute;
    top: 15px;
    left: 20px;
    font-size: 20px;
    font-weight: bold;
  }

  /* NAVIGATION BAR */
  .navbar-container {
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    top: 15px; /* Adjust to align under title */
  }

  .navbar {
    width: 50%; /* Not full-width, centered */
    min-width: 320px;
    max-width: 700px;
    padding: 5px 5px; /* Reduce height */
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px; /* Rounded corners */
    backdrop-filter: blur(8px);
  }

  .nav-links {
    display: flex;
    gap: 15px;
  }

  .nav-links a {
    padding: 6px 12px;
    border-radius: 8px;
    transition: background 0.3s ease;
  }

  .nav-links a:hover {
    background: rgba(180, 180, 180, 0.6);
  }

  /* DARK MODE BUTTON ANIMATION */
  .dark-mode-btn {
  font-size: 22px;
  cursor: pointer;
  transition: transform 0.9s ease-in-out, opacity 0.2s ease;
  transform-style: preserve-3d;
}

.dark-mode-btn:active {
  transform: rotateY(180deg); /* Flips the button in 3D space */
}
.dark-mode-btn:inactive {
  transform: rotateY(180deg);
}
</style>

<!-- WEBSITE TITLE -->
<h1 class="site-title">Seungyeon Lee</h1>

<!-- NAVIGATION BAR -->
<div class="navbar-container">
  <header class="navbar">
    <nav class="nav-links">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>

      <!-- Dark Mode Toggle -->
      <button 
        class="dark-mode-btn {darkMode ? 'active' : 'inactive'} {animating ? 'active' : ''}" 
        on:click={toggleDarkMode}>
        {darkMode ? "⏾" : "☼"}
      </button>
    </nav>
  </header>
</div>

<!-- MAIN CONTENT -->
<div class="h-full text-center flex flex-col justify-center items-center select-none all:transition-400 mt-20">
  <h2 class="text-5xl fw100">Welcome to my website</h2>
  <p class="op30 text-lg fw300 m1">
    Hi, I am Seungyeon Lee. Thanks for visiting my website.
  </p>
  <div class="m2 flex justify-center text-2xl op30 hover:op80">
    <a
      class="i-carbon-logo-github text-inherit"
      href="https://github.com/dltmddus0158/seungyeonlee"
      target="_blank"
      aria-label="GitHub Profile"
    ></a>
  </div>
</div>

<!-- FOOTER -->
<footer class="absolute bottom-5 right-0 left-0 text-center opacity-50 text-sm">
  © Seungyeon Lee. {new Date().getFullYear()}
</footer>
