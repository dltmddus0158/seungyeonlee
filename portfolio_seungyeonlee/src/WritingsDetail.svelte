<script>
    import { goto } from './router.js';
  </script>
  
  <main class="card">
    <h3>Writings Detail</h3>
    <p>This is a detailed page about my blog posts.</p>
    <button class="back-button" on:click={() => goto('writings')}>Back</button>
  </main>
  
  <style>
    .back-button {
      margin-top: 20px;
      padding: 10px 15px;
      background-color: #646cff;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }
  
    .back-button:hover {
      background-color: #4a4eff;
    }
  </style>
  