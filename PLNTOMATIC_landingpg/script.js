// Smooth scroll to sections
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.offsetTop - 70,
    behavior: "smooth",
  });
}

// Demo planting calculator (simple approximation)
function initDemoCalculator() {
  const form = document.getElementById("demoForm");
  const plantCountEl = document.getElementById("plantCount");
  const demoNoteEl = document.getElementById("demoNote");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const system = document.getElementById("systemSelect").value;
    const length = parseFloat(document.getElementById("lengthInput").value);
    const width = parseFloat(document.getElementById("widthInput").value);
    const rowSpacing = parseFloat(
      document.getElementById("rowSpacingInput").value
    );
    const plantSpacing = parseFloat(
      document.getElementById("plantSpacingInput").value
    );

    if (!length || !width || !rowSpacing || !plantSpacing) {
      plantCountEl.textContent = "–";
      demoNoteEl.textContent =
        "Please fill in all the fields with valid values.";
      return;
    }

    const area = length * width;
    const baseAreaPerPlant = rowSpacing * plantSpacing || 1;
    let plants = area / baseAreaPerPlant;

    // Simple adjustments per system (illustrative only)
    if (system === "triangular") {
      plants *= 1.15; // ~15% more plants
    } else if (system === "quincunx") {
      plants *= 1.25; // ~25% more plants
    }

    const rounded = Math.max(1, Math.floor(plants));
    plantCountEl.textContent = rounded.toLocaleString();

    let systemLabel = "square";
    if (system === "triangular") systemLabel = "triangular";
    if (system === "quincunx") systemLabel = "quincunx";

    demoNoteEl.textContent =
      "Example only. The full Plant-o-matic will apply proper formulas and let you save or export this " +
      systemLabel +
      " layout.";
  });
}

// CTA form (mock submission)
function initCtaForm() {
  const ctaForm = document.getElementById("ctaForm");
  const ctaNote = document.getElementById("ctaNote");

  if (!ctaForm) return;

  ctaForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("nameInput").value.trim();

    ctaNote.textContent =
      (name ? `Thanks, ${name}. ` : "Thank you. ") +
      "You’ve been added to the Plant-o-matic early access list.";
    ctaNote.style.color = "#16a34a";
  });
}

// Footer year
function setCurrentYear() {
  const yearEl = document.getElementById("year");
  if (!yearEl) return;
  yearEl.textContent = new Date().getFullYear();
}

// Init
document.addEventListener("DOMContentLoaded", function () {
  initDemoCalculator();
  initCtaForm();
  setCurrentYear();
});