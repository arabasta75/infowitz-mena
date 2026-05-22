# ⬡ 3IFRIT

### Plateforme de Renseignement MENA & Afrique — OSINT Temps Réel

**3IFRIT** est un dashboard d'intelligence opérationnelle centré sur le MENA et l'Afrique subsaharienne. Construit sur Next.js 16 et MapLibre GL (rendu WebGL), il agrège en temps réel les données de vol, maritimes, sismiques, conflits, cyber-menaces et flux médias.

---

## Fonctionnalités

| Domaine | Sources |
|---------|---------|
| **Aviation** | OpenSky Network |
| **Maritime** | Ports stratégiques, détroits |
| **Séismes** | USGS Live (M2.5+) |
| **Incendies** | NASA FIRMS |
| **Zones de conflit** | OSINT statique (Sahel, Gaza, Soudan, Yémen...) |
| **Médias live** | 25+ chaînes mondiales + arabes |
| **Cyber** | NVD CVE, scanner réseau |
| **RECON** | Port scan, DNS, WHOIS, SSL, IP Intel |
| **Météo** | NASA EONET |
| **Espace** | NOAA SWPC, N2YO |

---

## Stack technique

- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript 5
- **Carte** : MapLibre GL JS (WebGL)
- **Animations** : Framer Motion
- **Deploy** : Railway (Docker)

---

## Démarrage rapide

```bash
git clone https://github.com/arabasta75/3ifrit.git
cd 3ifrit
npm install
cp .env.example .env.local
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Variables d'environnement

```env
# Optionnel — améliore les données de vol
OPENSKY_USERNAME=
OPENSKY_PASSWORD=

# Optionnel — tracking satellitaire
N2YO_API_KEY=
```

La majorité des fonctionnalités opèrent sans clé API.

---

## Deploy Railway

```bash
railway up
```

Ou connecter le repo GitHub dans Railway et laisser le build Dockerfile se faire automatiquement.

---

**Built by [La Warroom](https://github.com/arabasta75)**
