# 🎯 **Objectif de l'exercice**

Dans les modules précédents, tu as manipulé des objets intégrés comme `String`, `Number`, ou encore `Array`. Ces objets, que tu utilises quotidiennement, sont des instances de classes prédéfinies. Par exemple :
- `"Hello!"` est une instance de l'objet intégré `String`.
- `[1, 2, 3]` est une instance de l'objet intégré `Array`.

L'objectif de cet exercice est de créer ta propre **classe** ! Aujourd'hui, tu apprendras à concevoir un **modèle** d'objet, ici une classe nommée **`OrangeTree`**, qui simule la vie d'un arbre à oranges (sa naissance, sa croissance, sa production de fruits, et sa mort). 🚀

---

## ✏️ **Spécifications de la classe `OrangeTree`**

### 1️⃣ **Cycle de vie de l'arbre**

- **Naissance** : L'arbre naît avec un âge de 0 an.
- **Vieillissement** : Chaque année, l'arbre vieillit d'un an.
  - Il ne peut pas mourir avant d'atteindre 50 ans.
  - Après 50 ans, sa probabilité de mourir augmente chaque année.
  - Aucun arbre ne vit au-delà de 100 ans.
- **Méthodes** :
  - Tu dois pouvoir connaître l'âge de l'arbre.
  - Une méthode **`isDead()`** doit indiquer si l'arbre est mort.

### 2️⃣ **Croissance en hauteur**

- L'arbre grandit de 1 mètre par an jusqu'à atteindre 10 ans.
- Après 10 ans, il cesse de grandir.
- **Méthode** :
  - Une méthode doit permettre de mesurer la hauteur actuelle de l'arbre.

### 3️⃣ **Production de fruits**

- L'arbre produit :
  - 100 fruits par an lorsqu'il a plus de 5 ans (strictement).
  - 200 fruits par an à partir de 10 ans.
- L'arbre cesse de produire des fruits après ses 15 ans.
- **Méthodes** :
  - Une méthode **`pickAFruit()`** permet de cueillir un fruit de l'arbre si des fruits sont encore disponibles.
  - Une méthode doit indiquer combien de fruits restent sur l'arbre.

### 4️⃣ **Simuler le passage du temps**

- Une méthode **`oneYearPasses()`** doit être implémentée pour :
  - Faire vieillir l'arbre.
  - Le faire grandir si nécessaire.
  - Déterminer s'il produit des fruits.
  - Vérifier s'il est toujours vivant.

---

## 💡 **Questions clés à considérer**

1. **Qu'est-ce qu'une variable d'instance ?**
   - Les variables d'instance représentent les **propriétés** uniques d'un objet créé à partir de ta classe. Quelles propriétés sont nécessaires pour modéliser l'arbre ? (Exemple : âge, hauteur, nombre de fruits, etc.)

2. **Qu'est-ce que l'état d'un objet ?**
   - L'état d'un objet correspond à l'ensemble de ses propriétés à un moment donné. Comment décrirais-tu l'état de l'arbre ? Par exemple : son âge, sa hauteur, et s'il est mort ou non.

3. **Quelles méthodes modifient l'objet ?**
   - Identifie les méthodes qui changent l'état de l'objet. Par exemple, **`oneYearPasses()`** modifie plusieurs aspects de l'arbre. Quels noms donner à ces méthodes pour qu'elles soient intuitives ?

---

## 🚀 **Plan d'action pour coder la classe**

Voici une suggestion pour organiser ton code étape par étape :

### Étape 1 : Définir la classe et les propriétés de base
- Initialise la classe **`OrangeTree`**.
- Crée un constructeur qui définit les variables d'instance : âge, hauteur, fruits, etc.

### Étape 2 : Gérer l'âge et la mortalité
- Implémente la méthode **`isDead()`** qui détermine si l'arbre est mort.
- Ajoute la méthode **`oneYearPasses()`** pour gérer le vieillissement.

### Étape 3 : Gérer la hauteur
- Ajoute une propriété pour la hauteur de l'arbre.
- Implémente la logique de croissance dans **`oneYearPasses()`**.

### Étape 4 : Gérer les fruits
- Ajoute une propriété pour le nombre de fruits disponibles.
- Implémente les règles de production de fruits.
- Crée la méthode **`pickAFruit()`**.

---

## 🌟 **Conseils pour réussir**

- **Commence simple** : Implémente une chose à la fois (par exemple, commence par gérer l'âge et la mortalité avant d'ajouter la hauteur et les fruits).
- **Teste fréquemment** : Après chaque étape, teste ton code pour t'assurer qu'il fonctionne comme prévu.
- **Nommes tes variables et méthodes clairement** : Un bon nom rend ton code plus facile à comprendre.

---

## 📚 **Ressources utiles**

- [MDN : La référence sur `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [JavaScript.info : Introduction aux classes](https://javascript.info/classes)

---

Dis-moi si tu souhaites que je t'accompagne dans l’une des étapes ! 😊
