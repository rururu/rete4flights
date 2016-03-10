# rete4flights

Air traffic control system - a test example for the [rete4frames] (http://github.com/rururu/rete4frames) expert system shell.
It uses [Flightradar24] (http://www.flightradar24.com) web service and [Leaflet] (http://leafletjs.com) JavaScript library.

![screenshot](screenshot.jpg)

## Start

1. Simple start:
```
$ cd <..>/rete4flights
$ lein run
```
2. Start for developers with automatic start of a browser client:
```
$ cd <..>/rete4flights
$ lein repl
...
rete4flight.core=> (-main)
```
3. Start for developers for hand start of a browser client:
```
$ cd <..>/rete4flights
$ lein repl
...
rete4flight.core=> (start-server)
```
And open address http://localhost:3000 in a browser.

## Usage

First select in a "Commands" selector an item "Watch visible area". Then select an item "State of flights". This begins a process of collection and display information of flights in the visible area. Black icons means aircrafts on the ground, green ones are descending, blue ones are climbing and purple - on level flight. Subsequent changes or shifts of a window do not change of the area under control.
To do this execute the "Watch visible area" command again in needed place.

Command "Intersection" calculates aircrafts that intersect in 6 minutes on a distance less then 400 meters (altitude differense less than 10000 feet). If you click on a link between aircrafts you know accurate values.

Click on an aircraft icon brings up a popup with general data of a flight and 4 buttons. Button "Inform" provides a popup with detailed information of the flight. Button "Trail" draws a current way of the aircraft. Button "Follow" starts moving of the visible area along this flight and periodically displays a trail of the flight. Button "Stop" ends up this moving.

Using the command "Move to Airport" you can instantly shift to some other airport. First select a country and then an airport in this country.

You can plan your own flights. To do this, use the command "Shedule Flight". Input a call sign of your flight, time of departure, select a country and an airport of departure and a country and an airport of arrival. That's all. When your flight starts you can follow it...

Stay tuned. Soon you can come on board and enjoy 3D view from a cockpit..

Expert system handling this process is in the file es.clj.

Copyright and license
----

Copyright © 2016 Ruslan Sorokin.

Licensed under the EPL (see the file epl.html).
# rete4flights
