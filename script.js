"use strict";
/* ===== Configuración: edita aquí tus datos ===== */
const CONFIG = {
  email: "al3jandro.est@gmail.com",
  github: "",    // ej.: "https://github.com/tu-usuario"
  linkedin: "",  // ej.: "https://www.linkedin.com/in/tu-perfil"
  cv: "assets/CV_Alejandro_Romero_Rodriguez.pdf"
};
/* Proyectos reales: añade objetos {title:{es,en}, desc:{es,en}, url:"https://..."} */
const PROJECTS = [];

const I18N = {
es: {
  skip:"Saltar al contenido", nav_about:"Sobre mí", nav_skills:"Habilidades", nav_edu:"Formación", nav_prac:"Prácticas", nav_contact:"Contacto", nav_cv:"Currículum",
  status:"Buscando prácticas", role:"Estudiante de 2.º curso de Sistemas Microinformáticos y Redes",
  lead:"Formándome en el Grado Medio SMR en modalidad Dual. Busco aplicar lo que he aprendido en un entorno profesional y seguir creciendo.",
  btn_about:"Conóceme", btn_cv:"Ver currículum", btn_write:"Escríbeme",
  photo_alt:"Retrato de Alejandro Romero Rodríguez", term_aria:"Terminal con un resumen de mi perfil",
  about_t:"Sobre mí",
  about_p1:"Soy Alejandro, estudiante de segundo curso del Grado Medio de Sistemas Microinformáticos y Redes, en modalidad Dual. Combino la formación en el centro con experiencia real en un equipo TIC.",
  about_p2:"Soy responsable y puntual, trabajo bien en equipo y me gusta crear buen ambiente.",
  about_p3:"Mi objetivo es aplicar mis conocimientos en un entorno profesional y seguir aprendiendo.",
  f_study:"Estudios", f_study_v:"CFGM Sistemas Microinformáticos y Redes (Dual)", f_center:"Centro", f_year:"Curso", f_year_v:"Segundo año", f_lang:"Idiomas", f_lang_v:"Español, inglés",
  sk_t:"Habilidades", sk_mod:"Módulos del ciclo", m1:"Montaje y mantenimiento de equipos", m2:"Sistemas operativos", m3:"Redes locales", m4:"Aplicaciones ofimáticas", m5:"Seguridad informática", m6:"Servicios en red",
  sk_tools:"Herramientas", t_social:"Redes sociales", sk_soft:"Competencias",
  s1:"Trabajo en equipo", s2:"Comunicación", s3:"Interacción social", s4:"Orientación a resultados", s5:"Proactividad", s6:"Adaptabilidad",
  ed_t:"Formación académica", ed1:"Grado Medio en Sistemas Microinformáticos y Redes (Dual)", ed1_d:"2025 – actualidad", ed1_b:"En curso",
  ed2:"Educación Secundaria Obligatoria (ESO)", ed2_b:"Finalizada",
  pr_t:"Prácticas", pr1:"Equipo TIC · Lasalle Arucas", pr1_d:"Prácticas FP Dual · abril – junio 2026",
  pr1_p:"Participé en las actividades del equipo TIC del colegio, entre otras actividades variadas.",
  pj_t:"Proyectos", pj_empty_t:"Próximamente", pj_empty_p:"Aquí aparecerán mis proyectos cuando los publique.", pj_open:"Ver proyecto",
  ct_t:"Contacto", ct_p:"Si tu empresa ofrece prácticas, estaré encantado de hablar.", ct_mail:"Correo",
  cv_t:"Currículum", cv_p:"Consulta o descarga mi currículum en PDF.", cv_view:"Ver", cv_dl:"Descargar",
  a_theme:"Cambiar entre modo claro y oscuro", a_lang:"Cambiar idioma a inglés", a_menu:"Abrir menú",
  title:"Alejandro Romero Rodríguez · Portfolio",
  desc:"Portfolio de Alejandro Romero Rodríguez, estudiante de Sistemas Microinformáticos y Redes.",
  term:[["whoami","Alejandro Romero Rodríguez"],["cat estudios.txt","CFGM Sistemas Microinformáticos y Redes (Dual)\n2.º curso · San Juan Bosco"],["cat objetivo.txt","Prácticas para aplicar lo aprendido\ny seguir creciendo"],["status","● disponible para prácticas"]]
},
en: {
  skip:"Skip to content", nav_about:"About", nav_skills:"Skills", nav_edu:"Education", nav_prac:"Internship", nav_contact:"Contact", nav_cv:"Résumé",
  status:"Looking for an internship", role:"Second-year student in Microcomputer Systems and Networks",
  lead:"Studying the Intermediate Vocational Degree in Microcomputer Systems and Networks (Dual track). I want to apply what I've learned in a professional setting and keep growing.",
  btn_about:"Get to know me", btn_cv:"View résumé", btn_write:"Get in touch",
  photo_alt:"Portrait of Alejandro Romero Rodríguez", term_aria:"Terminal showing a summary of my profile",
  about_t:"About me",
  about_p1:"I'm Alejandro, a second-year student of the Intermediate Vocational Degree in Microcomputer Systems and Networks, on the Dual track. I combine classroom training with hands-on experience in an IT team.",
  about_p2:"I'm responsible and punctual, I work well in a team and I enjoy creating a good atmosphere.",
  about_p3:"My goal is to apply my knowledge in a professional environment and keep learning.",
  f_study:"Studies", f_study_v:"Vocational Degree in Microcomputer Systems and Networks (Dual)", f_center:"School", f_year:"Year", f_year_v:"Second year", f_lang:"Languages", f_lang_v:"Spanish, English",
  sk_t:"Skills", sk_mod:"Course modules", m1:"Computer assembly and maintenance", m2:"Operating systems", m3:"Local area networks", m4:"Office applications", m5:"IT security", m6:"Network services",
  sk_tools:"Tools", t_social:"Social media", sk_soft:"Soft skills",
  s1:"Teamwork", s2:"Communication", s3:"Social skills", s4:"Results-driven", s5:"Proactive", s6:"Adaptability",
  ed_t:"Education", ed1:"Intermediate Vocational Degree in Microcomputer Systems and Networks (Dual)", ed1_d:"2025 – present", ed1_b:"In progress",
  ed2:"Compulsory Secondary Education (ESO)", ed2_b:"Completed",
  pr_t:"Internship", pr1:"ICT Team · Lasalle Arucas", pr1_d:"Dual vocational internship · April – June 2026",
  pr1_p:"I took part in the school's ICT team activities, among other varied tasks.",
  pj_t:"Projects", pj_empty_t:"Coming soon", pj_empty_p:"My projects will appear here once I publish them.", pj_open:"View project",
  ct_t:"Contact", ct_p:"If your company offers internships, I'd be glad to talk.", ct_mail:"Email",
  cv_t:"Résumé", cv_p:"View or download my résumé as a PDF.", cv_view:"View", cv_dl:"Download",
  a_theme:"Switch between light and dark mode", a_lang:"Switch language to Spanish", a_menu:"Open menu",
  title:"Alejandro Romero Rodríguez · Portfolio",
  desc:"Portfolio of Alejandro Romero Rodríguez, Microcomputer Systems and Networks student.",
  term:[["whoami","Alejandro Romero Rodríguez"],["cat studies.txt","Microcomputer Systems and Networks (Dual)\n2nd year · San Juan Bosco"],["cat goal.txt","An internship to apply what I've learned\nand keep growing"],["status","● open to internships"]]
}};

const $ = (s, r = document) => r.querySelector(s);
const root = document.documentElement;
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
};
let lang = I18N[store.get("lang")] ? store.get("lang") : (navigator.language || "es").startsWith("en") ? "en" : "es";
let runId = 0;

function applyTheme(t) {
  root.dataset.theme = t; store.set("theme", t);
  $("#themeBtn").setAttribute("aria-label", I18N[lang].a_theme);
}

function renderTerminal() {
  const id = ++runId, out = $("#termOut"), lines = I18N[lang].term;
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const cur = '<span class="c"></span>';
  (async () => {
    let html = "";
    for (const [cmd, res] of lines) {
      let typed = "";
      for (const ch of cmd) {
        typed += ch;
        out.innerHTML = html + '<span class="p">$ </span>' + esc(typed) + cur;
        if (!still) await wait(32);
        if (id !== runId) return;
      }
      html += '<span class="p">$ </span>' + esc(cmd) + "\n" + '<span class="o">' + esc(res) + "</span>\n";
      out.innerHTML = html + cur;
      if (!still) await wait(280);
      if (id !== runId) return;
    }
  })();
}

function renderDynamic() {
  const d = I18N[lang];
  $("#mail").textContent = CONFIG.email;
  const links = $("#links"); links.textContent = "";
  [["GitHub", CONFIG.github], ["LinkedIn", CONFIG.linkedin]].forEach(([n, u]) => {
    if (!u) return;
    const li = document.createElement("li"), a = document.createElement("a");
    a.className = "btn"; a.href = u; a.target = "_blank"; a.rel = "noopener noreferrer"; a.textContent = n;
    li.append(a); links.append(li);
  });
  const box = $("#projects"); box.textContent = "";
  if (!PROJECTS.length) {
    const c = document.createElement("article"); c.className = "card empty";
    c.innerHTML = "<h3></h3><p></p>"; c.firstChild.textContent = d.pj_empty_t; c.lastChild.textContent = d.pj_empty_p;
    box.append(c); return;
  }
  PROJECTS.forEach(p => {
    const c = document.createElement("article"); c.className = "card";
    c.innerHTML = "<h3></h3><p></p>"; c.firstChild.textContent = p.title[lang]; c.lastChild.textContent = p.desc[lang];
    if (p.url) { const a = document.createElement("a"); a.className = "txt"; a.href = p.url; a.target = "_blank"; a.rel = "noopener noreferrer"; a.textContent = d.pj_open; c.append(a); }
    box.append(c);
  });
}

function applyLang(l) {
  lang = l; store.set("lang", l);
  const d = I18N[l];
  root.lang = l; document.title = d.title;
  $('meta[name="description"]').content = d.desc;
  document.querySelectorAll("[data-i18n]").forEach(e => { e.textContent = d[e.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-alt]").forEach(e => { e.alt = d[e.dataset.i18nAlt]; });
  document.querySelectorAll("[data-i18n-aria]").forEach(e => { e.setAttribute("aria-label", d[e.dataset.i18nAria]); });
  $("#langLbl").textContent = l === "es" ? "EN" : "ES";
  $("#langBtn").setAttribute("aria-label", d.a_lang);
  $("#themeBtn").setAttribute("aria-label", d.a_theme);
  $("#menuBtn").setAttribute("aria-label", d.a_menu);
  $("#cvView").href = CONFIG.cv; $("#cvDl").href = CONFIG.cv;
  renderDynamic(); renderTerminal();
}

$("#themeBtn").addEventListener("click", () => applyTheme(root.dataset.theme === "dark" ? "light" : "dark"));
$("#langBtn").addEventListener("click", () => applyLang(lang === "es" ? "en" : "es"));
$("#menuBtn").addEventListener("click", e => {
  const open = $("#nav").classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", open);
});
$("#nav").addEventListener("click", e => { if (e.target.closest("a")) { $("#nav").classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded", "false"); } });

applyLang(lang);
