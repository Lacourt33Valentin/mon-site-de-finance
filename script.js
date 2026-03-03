let score = 0;
let totalQuestions = 7;

function showSection(id, progressValue){
  document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.getElementById("progress").style.width = progressValue + "%";
}

function checkAnswer(correct,index){
  if(correct){
    document.getElementById("feedback"+index).innerHTML="✅ Bonne réponse !";
    score++;
  } else {
    document.getElementById("feedback"+index).innerHTML="❌ Mauvaise réponse !";
  }
  if(score === totalQuestions){
    document.getElementById("result").innerHTML = "🎉 Félicitations ! Vous avez terminé le quiz !";
    generateCertificate();
  }
}

function generateCertificate(){
  let name = prompt("Entrez votre nom pour le certificat :");
  let date = new Date().toLocaleDateString();
  document.getElementById("certificateContainer").innerHTML = `
    <div class="certificate">
      <h2>Certificat de Réussite</h2>
      <p>Décerné à</p>
      <h3>${name}</h3>
      <p>Pour avoir complété la formation</p>
      <strong>Investir en Bourse pour Débutants</strong>
      <p>Date : ${date}</p>
    </div>`;
}
