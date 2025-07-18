const courses = [
  // PRIMERO
  { code: "ET1001", name: "Álgebra", year: 1, unlocks: ["ET1016"] },
  { code: "ET1002", name: "Cálculo I", year: 1, unlocks: ["ET1011"] },
  { code: "ET1003", name: "Informática", year: 1, unlocks: ["ET1018"] },
  { code: "ET1004", name: "Física I", year: 1, unlocks: ["ET1012"] },
  { code: "ET1005", name: "Inglés Científico-Técnico", year: 1, unlocks: ["ET1015"] },
  { code: "ET1006", name: "Química", year: 1, unlocks: ["ET1013"] },
  { code: "ET1007", name: "Cálculo II", year: 1, unlocks: ["ET1014"] },
  { code: "ET1008", name: "Física II", year: 1, unlocks: ["ET1020"] },
  { code: "ET1009", name: "Expresión Gráfica", year: 1, unlocks: ["ET1019"] },
  { code: "ET1010", name: "Historia de la Ciencia y la Tecnología", year: 1, unlocks: ["ET1017"] },

  // SEGUNDO
  { code: "ET1011", name: "Estadística y Optimización", year: 2, unlocks: ["ET1023"] },
  { code: "ET1012", name: "Mecánica de Máquinas y Estructuras", year: 2, unlocks: ["ET1027"] },
  { code: "ET1013", name: "Electrotecnia", year: 2, unlocks: ["ET1025"] },
  { code: "ET1014", name: "Ingeniería Térmica", year: 2, unlocks: ["ET1024"] },
  { code: "ET1015", name: "Ciencia y Tecnología de Materiales", year: 2, unlocks: ["ET1029"] },
  { code: "ET1016", name: "Mecánica de Fluidos", year: 2, unlocks: ["ET1022"] },
  { code: "ET1017", name: "Empresa", year: 2, unlocks: ["ET1033"] },
  { code: "ET1018", name: "Electrónica", year: 2, unlocks: ["ET1030"] },
  { code: "ET1019", name: "Elasticidad y Resistencia de Materiales", year: 2, unlocks: ["ET1028"] },
  { code: "ET1020", name: "Teoría de Máquinas y Mecanismos", year: 2, unlocks: ["ET1032"] },

  // TERCERO
  { code: "ET1022", name: "Métodos Matemáticos", year: 3, unlocks: ["ET1035"] },
  { code: "ET1023", name: "Sistemas Automáticos", year: 3, unlocks: ["ET1031"] },
  { code: "ET1024", name: "Sistemas de Producción Industrial", year: 3, unlocks: ["ET1037"] },
  { code: "ET1025", name: "Máquinas Eléctricas", year: 3, unlocks: ["ET1021"] },
  { code: "ET1027", name: "Ampliación de Física", year: 3, unlocks: ["ET1038"] },
  { code: "ET1028", name: "Dibujo Industrial", year: 3, unlocks: ["ET1036"] },
  { code: "ET1029", name: "Tecnologías de Fabricación", year: 3, unlocks: ["ET1034"] },
  { code: "ET1030", name: "Automatización Industrial", year: 3, unlocks: ["ET1039"] },
  { code: "ET1032", name: "Informática Industrial", year: 3, unlocks: ["ET1040"] },
  { code: "ET1033", name: "Tecnologías del Medio Ambiente y Seguridad Industrial", year: 3, unlocks: ["ET1026"] },

  // CUARTO
  { code: "ET1021", name: "Instalaciones Eléctricas", year: 4, unlocks: [] },
  { code: "ET1026", name: "Teoría de Estructuras", year: 4, unlocks: [] },
  { code: "ET1031", name: "Proyectos de Ingeniería", year: 4, unlocks: [] },
  { code: "ET1034", name: "Prácticas Externas", year: 4, unlocks: [] },
  { code: "ET1035", name: "Ingeniería de Fluidos", year: 4, unlocks: [] },
  { code: "ET1036", name: "Tecnología de Materiales", year: 4, unlocks: [] },
  { code: "ET1037", name: "Calor y Frío Industrial", year: 4, unlocks: [] },
  { code: "ET1038", name: "Computational Methods", year: 4, unlocks: [] },
  { code: "ET1039", name: "Nanotechnology", year: 4, unlocks: [] },
  { code: "ET1040", name: "Trabajo de Fin de Grado", year: 4, unlocks: [] },
];

const state = {};

function render() {
  for (let year = 1; year <= 4; year++) {
    const grid = document.querySelector(`#year-${year} .grid`);
    grid.innerHTML = "";
    courses
      .filter((c) => c.year === year)
      .forEach((course) => {
        const div = document.createElement("div");
        div.className = "course";

        if (!state[course.code] && course.year > 1) {
          const prerequisites = courses.filter((c) =>
            c.unlocks.includes(course.code)
          );
          const allUnlocked = prerequisites.every((p) => state[p.code]);
          if (!allUnlocked) {
            div.classList.add("locked");
          }
        }

        if (state[course.code]) div.classList.add("completed");

        div.textContent = `${course.code} - ${course.name}`;
        div.onclick = () => {
          if (div.classList.contains("locked")) return;
          state[course.code] = !state[course.code];
          render();
        };

        grid.appendChild(div);
      });
  }
}

document.querySelectorAll(".toggle").forEach((h2) => {
  h2.addEventListener("click", () => {
    const grid = h2.nextElementSibling;
    grid.style.display = grid.style.display === "block" ? "none" : "block";
  });
});

render();
  approved = new Set();
  render();
}
