function FindProxyForURL(url, host) {

    // use proxy for specific domains
    if (shExpMatch(host, "*.heavenlyfood.cn"))
	{
        return "PROXY 116.196.85.150:3128; PROXY 123.55.101.60:9999";
	}
	
	if (dnsDomainIs(host, "*.heavenlyfood.cn"))
	{
        return "PROXY 116.196.85.150:3128; PROXY 123.55.101.60:9999";
	}

    // by default use no proxy
    return "DIRECT";
}