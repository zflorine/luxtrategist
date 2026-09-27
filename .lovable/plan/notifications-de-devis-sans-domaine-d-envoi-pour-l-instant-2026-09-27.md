# Notifications de devis — sans domaine d'envoi pour l'instant

## Décision

Vous n'avez pas de domaine d'envoi pour le moment. Les demandes de devis restent donc **enregistrées dans le site**, sans mail automatique. Le formulaire fonctionne déjà exactement comme ça aujourd'hui.

## Ce qui change maintenant

Rien à modifier dans le site. Le formulaire de devis continue d'enregistrer chaque demande (service choisi, nom, email, société, message) dans la base de données du projet.

## Où consulter les demandes

Depuis votre espace Lovable, dans la vue **Backend** : les demandes apparaissent dans la table `quote_requests`, chacune avec la date d'envoi et le service demandé.

<presentation-actions><presentation-open-backend>View Backend</presentation-open-backend></presentation-actions>

## Ce qui reste en attente (à faire plus tard)

Dès que vous aurez un domaine, l'activation tient en trois étapes, sans reprise du site :

1. Configurer le domaine d'envoi dans les réglages du projet (vous gardez la main sur ses réglages DNS).
2. Créer le modèle de mail de notification, aux couleurs du site.
3. Brancher l'envoi sur le formulaire existant : une nouvelle demande déclenche un mail vers **zhao.partners@gmail.com**.

## Option non retenue pour l'instant

Une page protégée dans le site, réservée à votre compte, listant les demandes avec un statut (nouvelle / contactée / traitée). Utile si vous préférez ne pas consulter la base de données. À commander quand vous le souhaitez.

## Détails techniques

- Aucune file d'attente, aucun tableau de mails, aucune tâche programmée n'est créée : l'envoi est géré entièrement par Lovable le jour où un domaine est configuré.
- `quote_requests` conserve sa protection actuelle (RLS, écriture par le service uniquement) : les visiteurs ne peuvent ni lire ni modifier les demandes.
- La destination `zhao.partners@gmail.com` est mémorisée pour l'activation future.
- Le site, le menu et le pied de page ne bougent pas.
