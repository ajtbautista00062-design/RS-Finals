// ───────── Boot ─────────
try { Shell.start(); }
catch (e) {
  console.error(e);
  const app = document.getElementById('app');
  if (app) { app.textContent = ''; const d = document.createElement('div'); d.setAttribute('role', 'alert'); d.style.cssText = 'max-width:640px;margin:3rem auto;padding:1rem 1.2rem;border:1px solid #c99;border-radius:12px;font-family:system-ui,sans-serif'; d.textContent = 'UAV Recall could not start: ' + (e && e.message ? e.message : e) + '. Try reloading the page. If saved progress is damaged, open the browser console and run localStorage.removeItem("uavrecall.v1") to start fresh.'; app.appendChild(d); }
}
