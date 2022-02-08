# Kanoroutes
Repository met gpx tracks van kanoroutes en aanvullende informatie.

De routes worden geserveerd via github pages en zijn dus te raadplegen op:
-  [github.io](https://nielshoffmann.github.io/kanoroutes)

# opzet

- leaflet
- leaflet-omnivore
- gpx tracks geexporteerd van strava/garmin
- csv poi's 
- json met aanvullende gegevens

de lijst met routes die op de kaart getoond wordt is gedefinieerd in routes.js.

de folder /tracks bevat de geschoonde gpx tracks. de \<name> tag wordt gebruikt in de popup op de kaart. De \<desc> tag kan gebruikt worden om de afstand in vast te leggen. De \<link> tag wordt gebruikt om de download link mee te genereren.

de folder /poi bevat een csv met interessante punten. kanosteigers, overdraagplaatsen, verenigingen etc...

de folder /routes bevat een detail pagina en een detailInfo.js file waar de aanvullende informatie in staat.

de folder /gpx-tools bevat een python scriptje om gpx tracks op te schonen. (garmin gpx files bevatten bv ook temperatuur, hartslag e.d. Deze informatie kan uit privacy overwegingen het beste verwijderd worden)


# disclaimer

er kunnen geen rechten ontleend worden aan deze informatie. routes kunnen inmiddels niet meer mogelijk zijn of anderszins foutief of onvolledig zijn.
