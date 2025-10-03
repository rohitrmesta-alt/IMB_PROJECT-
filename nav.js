document.getElementById("header").innerHTML = `
  <div class="container mx-auto px-6 py-4 flex justify-between items-center">
    <h2 class="text-xl font-bold text-gray-800">Mercedes Portal</h2>
    <nav class="space-x-4">
      <a href="index.html" class="text-gray-700 hover:text-[var(--gold-color)]">Home</a>
      <a href="login.html" class="text-gray-700 hover:text-[var(--gold-color)]">Login</a>
      <a href="about.html" class="text-gray-700 hover:text-[var(--gold-color)]">About</a>
    </nav>
  </div>
`;

document.getElementById("footer").innerHTML = `
  <div class="container mx-auto px-6 text-center">
    <p>&copy; 2025 Mercedes-Benz. All rights reserved.</p>
  </div>
`;