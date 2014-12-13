HomIOT.Mobile
=============

UI for HomIOT System. Used to watch HomIOT events in browser or on your mobile device.

Works with [HomIOT.Arduino](https://github.com/vladkosarev/HomIOT.Arduino) and [HomIOT.Server](https://github.com/vladkosarev/HomIOT.Server).

Make sure to change server info in /www/js/app.js to point to your HomIOT.Server -
<pre>var myIoSocket = io.connect('http://192.168.0.21:9999');</pre>