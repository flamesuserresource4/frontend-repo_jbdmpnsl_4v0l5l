import Navbar from '../components/Navbar'

export default function Impressum() {
  return (
    <div className="bg-white text-blue-900 min-h-screen">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-blue-950 mb-6">Impressum</h1>

        <section className="space-y-1 mb-8">
          <p><strong>Firmenname:</strong> Albert Transport</p>
          <p><strong>Inhaber:</strong> Albert</p>
          <p><strong>Adresse:</strong> Musterstraße 1, 12345 Musterstadt, Deutschland</p>
          <p><strong>Telefon:</strong> +49 123 456 789</p>
          <p><strong>E-Mail:</strong> info@albert-transport.de</p>
          <p><strong>Umsatzsteuer-ID:</strong> DE000000000 (falls vorhanden)</p>
          <p><strong>Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV:</strong> Albert</p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold text-blue-950">Haftungsausschluss</h2>
          <p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
          <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
          <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-blue-950">Haftung für Links</h2>
          <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
          <p>Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
        </section>
      </main>
    </div>
  )
}
