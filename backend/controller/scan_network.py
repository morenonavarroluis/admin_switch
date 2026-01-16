from scapy.all import ARP, Ether, srp

def scan_network(ip_range):
    # Crear un paquete ARP para preguntar por las IPs en el rango
    # Ether(dst="ff:ff:ff:ff:ff:ff") asegura que sea un broadcast
    arp = ARP(pdst=ip_range)
    ether = Ether(dst="ff:ff:ff:ff:ff:ff")
    packet = ether/arp

    # Enviar el paquete y recibir respuestas (timeout de 2 segundos)
    result = srp(packet, timeout=2, verbose=False)[0]

    devices = []
    for sent, received in result:
        # Por cada respuesta, guardamos la IP y la dirección MAC
        devices.append({"ip": received.psrc, "mac": received.hwsrc})
    
    return devices