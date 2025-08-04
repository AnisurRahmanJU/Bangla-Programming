(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const l={ধরি:"let",কাজ:"function",অব্দি:"while",যদি:"if",নাহলে:"else","নাহলে যদি":"else if",ফল:"return",লুপ:"for"};function u(t){for(let n in l){let o=n,i=l[n],e=new RegExp(`([^"]|^)${o}([^"]|$)`,"g");t=t.replace(e,`$1${i}$2`)}return t}function a(t){const n=u(t);new Function(`${n}
  function লিখি(str) {
  const terminal = document.getElementById("terminal");
  const div = document.createElement("div");
  div.innerText = typeof str === "object" ? JSON.stringify(str) : str;
  terminal.appendChild(div);
}
function বলো(str) {
  speakText(str);
}

function speakText(text) {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  } else {
    alert(
      "Text-to-speech not supported in your browser. Please use a different browser."
    );
  }
}
function ইনপুট(str) {
  return prompt(str);
}
function রান্ডম(Max) {
  return Math.ceil(Math.random() * Max);
}
 `)()}const s=document.getElementById("editor"),f=document.getElementById("runButton"),d=document.getElementById("terminal"),m=document.getElementById("clearTerminal"),p=document.getElementById("clearButton");s.focus();f.addEventListener("click",()=>{try{a(s.innerText)}catch(t){y(t.message)}});function y(t){const n=document.createElement("div");n.innerText=typeof t=="object"?JSON.stringify(t):t,d.appendChild(n)}m.addEventListener("click",()=>{d.innerHTML=""});p.addEventListener("click",()=>{s.textContent=""});



/* 
 <script>
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver(e => {
    for (const r of e)
      if (r.type === "childList")
        for (const c of r.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && i(c);
  }).observe(document, { childList: !0, subtree: !0 });

  function o(e) {
    const r = {};
    return (
      e.integrity && (r.integrity = e.integrity),
      e.referrerPolicy && (r.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }

  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const r = o(e);
    fetch(e.href, r);
  }
})();

const l = {
  ধরি: "let",
  কাজ: "function",
  অব্দি: "while",
  যদি: "if",
  নাহলে: "else",
  "নাহলে যদি": "else if",
  ফল: "return",
  লুপ: "for"
};

function u(t) {
  for (let n in l) {
    let o = n,
      i = l[n],
      e = new RegExp(`([^"]|^)${o}([^"]|$)`, "g");
    t = t.replace(e, `$1${i}$2`);
  }
  return t;
}

function a(t) {
  const translated = u(t);
  const lines = translated.split("\n");

  const MAX_LINES = 200;
  const activeLines = lines.slice(0, MAX_LINES).join("\n");
  const commentedLines = lines
    .slice(MAX_LINES)
    .map(line => "// " + line)
    .join("\n");

  const finalCode = `${activeLines}\n${commentedLines}

function লিখি(str) {
  const terminal = document.getElementById("terminal");
  const div = document.createElement("div");
  div.innerText = typeof str === "object" ? JSON.stringify(str) : str;
  terminal.appendChild(div);
}
function বলো(str) {
  speakText(str);
}

function speakText(text) {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  } else {
    alert("Text-to-speech not supported in your browser.");
  }
}
function ইনপুট(str) {
  return prompt(str);
}
function রান্ডম(Max) {
  return Math.ceil(Math.random() * Max);
}
`;
  new Function(finalCode)();
}

const s = document.getElementById("editor"),
  f = document.getElementById("runButton"),
  d = document.getElementById("terminal"),
  m = document.getElementById("clearTerminal"),
  p = document.getElementById("clearButton");

s.focus();

f.addEventListener("click", () => {
  try {
    a(s.innerText);
  } catch (t) {
    y(t.message);
  }
});

function y(t) {
  const n = document.createElement("div");
  n.innerText = typeof t == "object" ? JSON.stringify(t) : t;
  d.appendChild(n);
}

m.addEventListener("click", () => {
  d.innerHTML = "";
});
p.addEventListener("click", () => {
  s.textContent = "";
});
</script>

*/
