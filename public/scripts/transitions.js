// transitions.js

export function initTransitions() {
  if (!document.startViewTransition) {
    console.log('View Transition API is not supported');
    return;
  }

  const links = document.querySelectorAll('a[href]');
  console.log('Transition API is supported');

  links.forEach(link => {
    const url = link.href;

    if (new URL(url).origin !== location.origin || url === location.href) return;

    link.addEventListener('click', e => {
      e.preventDefault();
      console.log('Link clicked, starting view transition');

      // Start the transition
      document.startViewTransition(() => {
        window.location.href = url;
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTransitions(); // Ensures initTransitions only runs after the document is fully loaded
});
