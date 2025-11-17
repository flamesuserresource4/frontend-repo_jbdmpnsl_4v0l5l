import Navbar from '../components/Navbar'

export default function Datenschutz() {
  return (
    <div className="bg-white text-blue-900 min-h-screen">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-blue-950 mb-6">Datenschutzerklärung</h1>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold text-blue-950">Allgemeine Hinweise</h2>
          <p>Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO, BDSG) sowie dieser Datenschutzerklärung.</p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold text-blue-950">Verantwortliche Stelle</h2>
          <p>Albert Transport, Musterstraße 1, 12345 Musterstadt</p>
          <p>E-Mail: info@albert-transport.de | Telefon: +49 123 456 789</p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold text-blue-950">Erfassung von Daten</h2>
          <p>Beim Besuch dieser Website werden automatisch Server-Log-Dateien erfasst (z. B. IP-Adresse, Datum/Uhrzeit, Browser, besuchte Seiten). Diese Daten sind nicht bestimmten Personen zuordenbar und dienen ausschließlich der technischen Administration und Sicherheit.</p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold text-blue-950">Cookies</h2>
          <p>Unsere Website verwendet gegebenenfalls Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie richten keinen Schaden an und dienen dazu, unser Angebot nutzerfreundlicher und sicherer zu machen. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben.</p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold text-blue-950">Kontaktformular</h2>
          <p>Wenn Sie uns per Formular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold text-blue-950">Server-Log-Dateien</h2>
          <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold text-blue-950">Rechte der Nutzer</h2>
          <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold text-blue-950">SSL/TLS-Verschlüsselung</h2>
          <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-blue-950">Plugins und Tools</h2>
          <p>Sofern auf dieser Website Drittanbieter-Plugins verwendet werden (z. B. Karten), erfolgt dies zur ansprechenden Darstellung unserer Online-Angebote. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Es können hierbei personenbezogene Daten an den Anbieter übertragen werden. Details entnehmen Sie den Datenschutzhinweisen des jeweiligen Anbieters.</p>
        </section>
      </main>
    </div>
  )
}
