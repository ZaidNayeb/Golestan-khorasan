# Local Development Guide

## Starting the Dev Server

```bash
npm run dev
```

The terminal will show output like:

```
▲ Next.js 15.x
- Local:        http://localhost:3000
- Network:      http://<some-ip>:3000
```

- **Local** — access from your own machine only
- **Network** — access from other devices on the same network (see below)

---

## Accessing from Other Devices (Same WiFi)

To open the app on another phone or device connected to the same WiFi, you need your **WiFi IP address**, not the one Next.js shows in the terminal (which may be incorrect if you are using a VPN).

### Find your WiFi IP

Run this in a terminal:

```bash
ipconfig
```

Look for the **Wireless LAN adapter Wi-Fi** section:

```
Wireless LAN adapter Wi-Fi:
   IPv4 Address. . . . . . . . . . . : 192.168.1.x   <-- this is your IP
```

Then visit `http://192.168.1.x:3000` on any device connected to the same WiFi.

---

## VPN Users

If you are running a VPN (e.g., ProtonVPN), Next.js will likely display the **VPN tunnel IP** as the Network address instead of your local WiFi IP. That VPN IP is **not reachable** by other devices on your network.

Always use the **Wi-Fi adapter IP** from `ipconfig` for local network access.

---

## Firewall

If other devices cannot connect, Windows Firewall may be blocking port 3000. You can allow it by:

1. Open **Windows Defender Firewall** > Advanced Settings
2. Add an **Inbound Rule** for port `3000` (TCP)
3. Allow it on **Private** networks

---

## Notes

- Your local IP (e.g. `192.168.1.x`) is assigned by your router and **can change**. Re-run `ipconfig` if the connection stops working.
- This setup is for **local development only** and is not a production deployment.
