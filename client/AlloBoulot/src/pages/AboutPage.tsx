import { Link } from "react-router";
import Header from "@/components/header/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Rocket,
  Users,
  Building2,
  Search,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function AboutAlloBoulotPage() {
  return (
    <>
      <Header />
      <main className="min-h-[90vh] bg-primary/10 pb-10">
        <section className="container mx-auto px-5 py-10 md:py-15">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                AlloBoulot — le job board simple, clair, efficace.
              </h1>
              <p className="mt-4 text-muted-foreground">
                Plateforme de mise en relation entre talents et entreprises.
                Nous visons l’essentiel : des offres de qualité, des
                candidatures fluides, et des outils pratiques pour les
                recruteurs.
              </p>
              <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
                <ShieldCheck className="h-4 w-4" />
                Données protégées • Pas de spam • Candidature en 2 minutes
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/">Voir les offres</Link>
                </Button>
              </div>
            </div>

            <Card className="border bg-white/70 backdrop-blur">
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">+120</div>
                    <div className="text-xs text-muted-foreground">
                      entreprises
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">+950</div>
                    <div className="text-xs text-muted-foreground">
                      candidats
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-xs text-muted-foreground">
                      satisfaction
                    </div>
                  </div>
                </div>
                <div className="mt-6 rounded-xl border p-4">
                  <p className="text-sm">
                    <span className="font-semibold">AlloBoulot</span> aide les
                    PME et scale-ups à recruter vite, sans complexité. Des
                    outils clairs pour publier, trier, et suivre vos
                    candidatures.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-5 py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <Rocket className="h-6 w-6" />
                <h3 className="mt-3 font-semibold">Rapide à prendre en main</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Publiez une offre en quelques clics, suivez les candidatures,
                  gagnez du temps au quotidien.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="h-6 w-6" />
                <h3 className="mt-3 font-semibold">Pensé pour les candidats</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Candidature simple, profil clair, et communication
                  transparente.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Building2 className="h-6 w-6" />
                <h3 className="mt-3 font-semibold">
                  Efficace pour les entreprises
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Centralisez les offres, filtrez, et collaborez avec votre
                  équipe RH.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-5 py-10">
          <h2 className="text-2xl font-bold mb-6">Comment ça marche ?</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <Search className="h-6 w-6" />
                <h3 className="mt-3 font-semibold">1. Cherchez / Publiez</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Les candidats explorent les postes. Les entreprises publient
                  avec toutes les infos utiles (contrat, localisation, niveau…).
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="h-6 w-6" />
                <h3 className="mt-3 font-semibold">2. Postulez / Triez</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Postulez en 2 minutes. Côté RH : filtrez par statut,
                  mots-clés, niveau d’étude, etc.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <ArrowRight className="h-6 w-6" />
                <h3 className="mt-3 font-semibold">3. Avancez</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Organisez entretiens, suivez l’avancement et transformez vos
                  candidatures en embauches.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-5 py-10">
          <h2 className="text-2xl font-bold mb-6">Nos engagements</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold">Simplicité</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  UI claire, actions rapides, zéro friction.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold">Transparence</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Offres détaillées, suivi des candidatures, communication
                  nette.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold">Confiance</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Sécurité des données, privacy by design, anti-spam.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-5 10">
          <Card className="bg-white">
            <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold">
                  Prêt à démarrer avec AlloBoulot ?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Rejoignez la plateforme et publiez votre première offre
                  aujourd’hui.
                </p>
              </div>
              <div className="flex gap-3">
                <Button asChild>
                  <Link to="/">Parcourir les jobs</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
