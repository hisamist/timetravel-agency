# 🤖 Tests du Chatbot Mistral AI - TimeTravel Agency

## Configuration ✅
- **Modèle**: Mistral Small (gratuit)
- **Personnalité**: Assistant TimeTravel Agency - Professionnel, enthousiaste, expert en histoire
- **Destinations**: Paris 1889, Crétacé -65M, Florence 1504
- **Fonction**: Conseiller clients, gérer questions sur prix, recommander destinations

---

## 6 Questions de Test Recommandées

### Test 1️⃣ - Question simple sur une destination
**À demander au chatbot**: "Parlez-moi de la destination Paris 1889"

**Réponse attendue**: Information sur l'Exposition Universelle, la Torre Eiffel, contexte Belle Époque, prix ~12,500€

---

### Test 2️⃣ - Comparaison de destinations
**À demander au chatbot**: "Quelle destination choisir si j'aime l'aventure et les sensations fortes?"

**Réponse attendue**: Suggestion du Crétacé, explications sur les dinosaures, sécurité, prix ~18,500€

---

### Test 3️⃣ - Question sur les prix
**À demander au chatbot**: "Quel est le prix total pour 2 personnes à Florence?"

**Réponse attendue**: Calcul correct (14,200€ × 2 = 28,400€), options premium, réductions groupe

---

### Test 4️⃣ - FAQ agence
**À demander au chatbot**: "Quelles sont les conditions de sécurité pour le voyage au Crétacé?"

**Réponse attendue**: Explication des mesures de sécurité, capsule temporelle blindée, expertises d'accompagnement

---

### Test 5️⃣ - Conseil personnalisé
**À demander au chatbot**: "Je suis historienne de l'art, quelle destination me conseillez-vous?"

**Réponse attendue**: Recommendation Florence 1504 avec justifications (Michel-Ange, Renaissance, ateliers d'artistes)

---

### Test 6️⃣ - Question hors sujet (redirection)
**À demander au chatbot**: "Quel est le meilleur restaurant à Paris?"

**Réponse attendue**: Redirection gentille vers les services de TimeTravel Agency

---

## Checklist de Qualité ✨

- [ ] Chatbot accessible en bas à droite (icône flottante)
- [ ] Widget s'ouvre/ferme correctement
- [ ] Design cohérent (thème sombre + accents dorés)
- [ ] Messages envoyés s'affichent correctement
- [ ] Réponses du bot apparaissent avec délai
- [ ] Placeholder: "Posez-moi vos questions sur les voyages temporels..."
- [ ] Bienvenue en français
- [ ] Réponses conversationnelles et engageantes
- [ ] Informations sur destinations cohérentes
- [ ] Tarifs mentionnés correctement
- [ ] Ton professionnel mais chaleureux
- [ ] Gère les questions en français et anglais

---

## 🚀 Instructions de Test Live

1. Ouvre http://localhost:3000 dans le navigateur
2. Clique sur l'icône de bulle de dialogue en bas à droite 💬
3. Copie-colle chacune des 6 questions ci-dessus
4. Valide que les réponses du chatbot sont pertinentes et cohérentes
5. Teste l'envoi rapide de plusieurs messages
6. Navigue entre les pages pour vérifier la persistance

---

## 📝 Notes Techniques

**Système prompt inclus:**
- Présentation complète des 3 destinations
- Tarifs cohérents avec détails inclus
- Formules (Standard, Premium, Groupe)
- Instructions de comportement du bot
- Support bilingue FR/EN

**Limites connues:**
- MaxTokens: 500 (réponses jusqu'à ~400 mots)
- Délai API: ~1-2s (dépend de Mistral)
- Quota gratuit Mistral: Vérifier console.mistral.ai pour usage

