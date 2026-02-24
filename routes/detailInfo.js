//json array met detail informatie behorende bij de GPX files
//format = naam van de gpx file (zonder .gpx extensie) : { naam, lengte, parkeren, instap, overige info}
var routeInfo = {
    "westzaan":'{ "naam":"Westzaan","lengte": "10km","parkeren":"langs de weg vlakbij de instap","instap":"mooie kanosteiger","overig":"ook een boothelling"}',
"eilandspolder":'{ "naam":"Eilandspolder","lengte": "14,3km","parkeren":"De Rijp, Het Ouweland","instap":"lage slootkant met beschoeiing", "overig":"officiele kano aanlegplaats"}',
"eilandspolder_10_km":'{ "naam":"Eilandspolder","lengte": "10km","parkeren":"De Rijp, Het Ouweland","instap":"lage slootkant met beschoeiing", "overig":"officiele kano aanlegplaats"}',
"nieuwe_meer_schinkel_sloterplas":'{ "naam":"Nieuwe Meer, Schinkel Sloterplas","lengte": "16,9km","parkeren":"Akersluis","instap":"kanosteigers aan beide zijden van de sluis", "overig":"2x overdragen, Cramersluis en Nieuwemeersluis"}',
"slotervaart_schinkel_nieuwe_meer":'{ "naam":"Slotervaart - Schinkel - Nieuwe meer","lengte": "15,3m","parkeren":"Akersluis","instap":"kanosteigers aan beide zijden van de sluis", "overig":"2x overdragen, Westlandgrachtsluis en Nieuwemeersluis"}',
"adam_nieuw_west_12k":'{"naam":"Amsterdam Nieuw West","lengte": "11,8km","parkeren":"Akersluis","instap":"kanosteigers aan beide zijden van de sluis", "overig":"afwisselende route via de grachten van Osdorp en Geuzenveld en door het Sloterpark"}',
"hompelvoet":'{"naam":"Grevelingen, rond Hompelvoet","lengte": "16km","parkeren":"G.C. Schellingerweg","instap":"recreatiestrandje", "overig":"Grootwatertocht, let op met wind en golven en bij het kruisen van de vaargeulen"}',
"biesbosch":'{"naam":"Biesbosch","lengte": "18km","parkeren":"Vissershang","instap":"kleine 100m lopen naar een kanosteiger", "overig":"afhankelijk van jaargetijde kan het druk zijn"}',
"akersloot":'{"naam":"Akersloot","lengte": "10km","parkeren":"Van de Valk Akersloot, helemaal aan de achterkant","instap":"kanosteiger", "overig":"zo hier en daar ondiep, sloot langs Akersloot was behoorlijk dichtgegroeid"}',
"muiderberg-pampus":'{"naam":"Muiderberg - Pampus - Ijburg - Muiden","lengte": "25km","parkeren":"Zeeweg","instap":"strandje met betonnen rand", "overig":"Groot watertocht, let op met wind en golven en bij het kruisen van de vaargeulen. Kitesurf gebied bij Muiderberg."}',
}