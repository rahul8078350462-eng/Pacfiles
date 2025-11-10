function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.game-server.com")) {
        return "PROXY 192.168.1.1:8080"; // 
    }
    return "DIRECT";
}
