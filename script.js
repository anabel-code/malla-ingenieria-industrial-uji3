const subjects = [
  { code: "ET1001", name: "Álgebra", year: 1, unlocks: ["ET1016"] },
  { code: "ET1002", name: "Cálculo I", year: 1, unlocks: ["ET1017"] },
  { code: "ET1003", name: "Física I", year: 1, unlocks: [] },
  { code: "ET1004", name: "Física II", year: 2, unlocks: [] },
  { code: "ET1016", name: "Cálculo II", year: 2, unlocks: ["ET2010"] },
  { code: "ET1017", name: "Termodinámica", year: 2, unlocks: [] },
  { code: "ET2010", name: "Electrotecnia", year: 3, unlocks: [] },
  { code: "ET3001", name: "Mecánica de Fluidos", year: 3, unlocks: [] },
  { code: "ET4001", name: "Trabajo Final de Grado", year: 4, unlocks: [] }
];

let completed = [];

function toggleComplete(code) {
  const index = completed.indexOf(code);
  if (index > -1) {
    completed.splice(index, 1); // desmarcar
  } else {
    completed.push(code); // marcar
  }
  render();
}

function isUnlocked(code) {
  if (code === "ET1003" || code === "ET1004") return true; // Físicas siempre desbloqueadas
  const subject = subjects.find(s => s.code === code);
  if (!subject) return false;
  return subjects.some(s =>
    s.unlocks.includes(code) && completed.includes(s.code)
  );
}

function render() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  for (let year = 1; year <= 4; year++) {
    const h2 = document.createElement("h2");
    h2.textContent = `${year}º Curso`;
    const content = document.createElement("div");
    content.className = "course-content";

    h2.addEventListener("click", () => {
      content.style.display = content.style.display === "block" ? "none" : "block";
    });

    subjects
      .filter(s => s.year === year)
      .forEach(subject => {
        const div = document.createElement("div");
        div.className = "subject";
        div.textContent = subject.name;
        if (!isUnlocked(subject.code)) {
          div.classList.add("locked");
        }
        if (completed.includes(subject.code)) {
          div.classList.add("completed");
        }

        div.addEventListener("click", () => toggleComplete(subject.code));
        content.appendChild(div);
      });

    grid.appendChild(h2);
    grid.appendChild(content);
  }
}

render();
