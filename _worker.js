
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'tempsub';
let guestToken = ''; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken = ''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID = ''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 1;//TB
let timestamp = 4102329600000;//2099-12-31

//节点链接 + 订阅链接
let MainData = `
vless://6b7b8f5c-b40b-4aba-acbd-72f7b53a0888@162.159.251.160:443?encryption=none&security=tls&sni=fn.watermatrix.eu.org&fp=random&type=ws&host=fn.watermatrix.eu.org&path=%2F%3Fed%3D2560#Main01
vless://6b7b8f5c-b40b-4aba-acbd-72f7b53a0888@141.101.114.122:443?encryption=none&security=tls&sni=fn.watermatrix.eu.org&fp=random&type=ws&host=fn.watermatrix.eu.org&path=%2F%3Fed%3D2560#Main02
vless://6b7b8f5c-b40b-4aba-acbd-72f7b53a0888@162.159.49.59:443?encryption=none&security=tls&sni=fn.watermatrix.eu.org&fp=random&type=ws&host=fn.watermatrix.eu.org&path=%2F%3Fed%3D2560#Main03
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTphMjY5OWNlYS1jM2JkLTQ4YWItYWUwMi1hYmZiMTU5OWVlNGE%3D@cdn.canhkg.com:20347#HK
hysteria2://fb3df6ad-28aa-4c3d-ac7e-8ae3b8279a67@mg1.jjzcloud.top:57238?sni=mg1.jjzcloud.top&insecure=1#IR-24
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.nyuec.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.nyuec.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-9
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.asbppkg.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.asbppkg.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-21
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2096?encryption=none&security=tls&sni=1757316286.speed.asbppkd.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.asbppkd.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-149
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.asbppke.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.asbppke.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-15
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.asbppkf.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.asbppkf.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-16
vless://6c7a6a6a-6a6a-4000-8000-000000000002@104.20.2.221:8443?encryption=none&security=tls&sni=bycf.lzjnb.shop&type=ws&host=bycf.lzjnb.shop&path=%2Ftel-%40v2rayn5%2F%3Fed%3D2560#US-17
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:8443?encryption=none&security=tls&sni=1757316286.speed.usadalsa.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.usadalsa.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-152
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2083?encryption=none&security=tls&sni=1757316286.speed.usazcjga.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.usazcjga.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-34
vless://59b3242f-6e1b-45f7-a57d-183192cc87fe@172.67.134.196:443?encryption=none&security=tls&sni=avid.gorbe.store&type=ws&host=avid.gorbe.store&path=%2Frandom#US-54
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.nyueb.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.nyueb.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-31
vless://401374e6-df77-41fb-f638-dad8184f175b@45.8.211.71:443?encryption=none&security=tls&sni=pqh24v3.hiddendom.shop&type=grpc#GB-153
vless://401374e6-df77-41fb-f638-dad8184f175b@156.238.19.95:443?encryption=none&security=tls&sni=pqh24v3.hiddendom.shop&type=grpc#JP-87
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2096?encryption=none&security=tls&sni=1757316286.speed.asbppka.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.asbppka.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-40
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2083?encryption=none&security=tls&sni=1757316286.speed.usacapohd.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.usacapohd.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-154
vless://401374e6-df77-41fb-f638-dad8184f175b@94.247.142.103:443?encryption=none&security=tls&sni=pqh23v5.hiddendom.shop&type=grpc#RU-155
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.usazcjgc.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.usazcjgc.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-32
vless://401374e6-df77-41fb-f638-dad8184f175b@103.133.1.227:443?encryption=none&security=tls&sni=pqh24v3.hiddendom.shop&type=grpc#AU-86
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.usazcjgb.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.usazcjgb.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-35
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2083?encryption=none&security=tls&sni=1757316286.speed.asbppkb.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.asbppkb.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-41
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.usacapohc.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.usacapohc.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-56
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.usacapoha.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.usacapoha.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-45
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2096?encryption=none&security=tls&sni=1757316286.speed.usazcjgd.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.usazcjgd.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-33
hysteria2://Yet-Another-Public-Config-1@yapc-1.adamhayward.co.uk:36300?sni=YAPC-1.afshin.ir&obfs=salamander&obfs-password=Yet-Another-Public-Config-1&insecure=1#US-69
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.asbppkc.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.asbppkc.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-36
hysteria2://fb3df6ad-28aa-4c3d-ac7e-8ae3b8279a67@hg.jjzcloud.top:57338?sni=hg.jjzcloud.top&insecure=1#NL-62
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.usacapohb.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.usacapohb.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-53
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.laxusaa.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.laxusaa.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-76
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.nyuea.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.nyuea.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-60
hysteria2://10d1df1f-520e-4c82-a89a-71f510153847@45.11.1.62:50000?sni=www.microsoft.com&insecure=1&mport=50000-55000#JP-1
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.usacapohe.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.usacapohe.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-47
hysteria2://Yet-Another-Public-Config-1@yapc-1.adamhayward.co.uk:36600?sni=YAPC-1.afshin.ir&obfs=salamander&obfs-password=Yet-Another-Public-Config-1&insecure=1#US-74
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.jpkcc.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.jpkcc.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-65
hysteria2://Yet-Another-Public-Config-1@yapc-1.adamhayward.co.uk:35200?sni=YAPC-1.afshin.ir&obfs=salamander&obfs-password=Yet-Another-Public-Config-1&insecure=1#US-75
hysteria2://Yet-Another-Public-Config-1@yapc-1.adamhayward.co.uk:35000?sni=YAPC-1.afshin.ir&obfs=salamander&obfs-password=Yet-Another-Public-Config-1&insecure=1#US-78
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2083?encryption=none&security=tls&sni=1757316286.speed.jpkcd.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.jpkcd.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-66
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2096?encryption=none&security=tls&sni=1757316286.speed.jpkca.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.jpkca.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-68
vless://cd7f3c2f-8d6d-4ad8-98eb-fb10e0f6da9e@samsungdigitalservice.ir:2087?encryption=none&security=tls&sni=interimrita.shividpolo.store&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=interimrita.shividpolo.store&path=%2Fdownloader%3Fed%3D2048#US-55
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:8443?encryption=none&security=tls&sni=1757316286.speed.ukpgke.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ukpgke.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-72
hysteria2://Yet-Another-Public-Config-1@yapc-1.adamhayward.co.uk:36400?sni=YAPC-1.afshin.ir&obfs=salamander&obfs-password=Yet-Another-Public-Config-1&insecure=1#US-63
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.ukpgkc.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ukpgkc.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-71
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.jpkcb.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.jpkcb.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-67
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2096?encryption=none&security=tls&sni=1757316286.speed.ukpgka.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ukpgka.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-73
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:8443?encryption=none&security=tls&sni=1757316286.speed.ukpgkb.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ukpgkb.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-79
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.ukpgkf.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ukpgkf.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-80
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.deacgka.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.deacgka.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-84
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2096?encryption=none&security=tls&sni=1757316286.speed.ukpgkd.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ukpgkd.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-70
vless://401374e6-df77-41fb-f638-dad8184f175b@102.177.189.251:443?encryption=none&security=tls&sni=pqh23v4.hiddendom.shop&type=grpc#ZA-133
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.ukpgki.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ukpgki.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-83
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.ukpgkj.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ukpgkj.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-89
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.ukpgkg.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ukpgkg.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-81
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.deacgkb.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.deacgkb.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-90
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.ukpgkk.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ukpgkk.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-82
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:8443?encryption=none&security=tls&sni=1757316286.speed.scavdiuvbiude.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.scavdiuvbiude.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-77
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2096?encryption=none&security=tls&sni=1757316286.speed.ydnxb.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ydnxb.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-94
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:8443?encryption=none&security=tls&sni=1757316286.speed.baxctdka.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.baxctdka.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-115
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.sgcojasdh.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.sgcojasdh.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-117
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.sgxjpd.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.sgxjpd.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-97
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:8443?encryption=none&security=tls&sni=1757316286.speed.sgcojasda.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.sgcojasda.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-114
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.baxctdkf.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.baxctdkf.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-111
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2096?encryption=none&security=tls&sni=1757316286.speed.ydnxa.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ydnxa.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-96
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:8443?encryption=none&security=tls&sni=1757316286.speed.ydnxd.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ydnxd.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-102
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.sgcojasdg.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.sgcojasdg.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-104
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2096?encryption=none&security=tls&sni=1757316286.speed.ydnxe.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ydnxe.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-106
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:8443?encryption=none&security=tls&sni=1757316286.speed.ydnxf.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ydnxf.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-95
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.sgxjpf.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.sgxjpf.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-109
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:8443?encryption=none&security=tls&sni=1757316286.speed.baxctdkc.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.baxctdkc.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-110
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.sgxjpc.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.sgxjpc.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-131
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.sgxjpb.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.sgxjpb.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-158
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.sgxjpe.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.sgxjpe.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-122
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.moerbena.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.moerbena.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-105
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:8443?encryption=none&security=tls&sni=1757316286.speed.sgcojasdf.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.sgcojasdf.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-91
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2096?encryption=none&security=tls&sni=1757316286.speed.baxctdkg.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.baxctdkg.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-107
hysteria2://fb3df6ad-28aa-4c3d-ac7e-8ae3b8279a67@tw2.jjzcloud.top:57338?sni=tw2.jjzcloud.top&insecure=1#US-148
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2096?encryption=none&security=tls&sni=1757316286.speed.ydnxc.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ydnxc.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-92
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2096?encryption=none&security=tls&sni=1757316286.speed.baxctdkb.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.baxctdkb.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-116
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2083?encryption=none&security=tls&sni=1757316286.speed.sgcojasdb.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.sgcojasdb.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-103
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.baxctdke.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.baxctdke.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-113
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:8443?encryption=none&security=tls&sni=1757316286.speed.baxctdkd.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.baxctdkd.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-112
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.sgcojasdc.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.sgcojasdc.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-100
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2083?encryption=none&security=tls&sni=1757316286.speed.sgcojasde.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.sgcojasde.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-101
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2096?encryption=none&security=tls&sni=1757316286.speed.sgxjpa.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.sgxjpa.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-93
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:8443?encryption=none&security=tls&sni=1757316286.speed.russala.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.russala.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-126
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.sgcojasdd.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.sgcojasdd.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-99
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:8443?encryption=none&security=tls&sni=1757316286.speed.deacgkc.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.deacgkc.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-125
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2096?encryption=none&security=tls&sni=1757316286.speed.ydhdlba.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ydhdlba.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-129
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.thbmga.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.thbmga.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-134
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2087?encryption=none&security=tls&sni=1757316286.speed.ydhdlbc.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ydhdlbc.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-120
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2096?encryption=none&security=tls&sni=1757316286.speed.ydhdlbb.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ydhdlbb.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-123
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:8443?encryption=none&security=tls&sni=1757316286.speed.ydhdlbd.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ydhdlbd.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-127
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2083?encryption=none&security=tls&sni=1757316286.speed.shatalba.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.shatalba.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-142
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2096?encryption=none&security=tls&sni=1757316286.speed.baxctdkj.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.baxctdkj.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-140
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.moerbenb.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.moerbenb.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-138
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.shatalbb.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.shatalbb.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-141
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2096?encryption=none&security=tls&sni=1757316286.speed.baxctdkk.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.baxctdkk.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-160
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:8443?encryption=none&security=tls&sni=1757316286.speed.ukpgkh.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.ukpgkh.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-145
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:8443?encryption=none&security=tls&sni=1757316286.speed.baxctdkh.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.baxctdkh.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-146
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1757316258.tencentapp.cn:2053?encryption=none&security=tls&sni=1757316286.speed.baxctdki.china.cctvalipay.cn&fp=chrome&type=ws&host=1757316286.speed.baxctdki.china.cctvalipay.cn&path=%2F%3Fed%3D2560#US-144
hysteria2://fb3df6ad-28aa-4c3d-ac7e-8ae3b8279a67@wkl.jjzcloud.top:57338?sni=wkl.jjzcloud.top&insecure=1#RU-143
trojan://slch2024@185.251.83.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#ES-7
trojan://slch2024@185.16.110.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#DE-10
trojan://slch2024@185.148.105.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#LT-11
trojan://slch2024@185.156.19.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#GB-12
trojan://slch2024@193.9.49.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#RU-14
trojan://slch2024@185.176.26.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#BG-18
trojan://slch2024@199.34.229.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#US-19
trojan://slch2024@185.176.24.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#LT-20
trojan://slch2024@194.36.55.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#GB-22
trojan://slch2024@195.13.45.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#RU-23
trojan://slch2024@195.13.44.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#RU-25
trojan://slch2024@188.244.122.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3#GB-27
trojan://slch2024@188.42.89.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#LU-30
trojan://slch2024@185.148.106.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#LT-37
trojan://slch2024@194.76.18.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#RU-38
trojan://slch2024@185.7.240.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3#FR-39
trojan://slch2024@195.26.229.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#GB-42
trojan://slch2024@188.164.248.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#NL-43
trojan://slch2024@185.221.160.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#RU-46
trojan://slch2024@199.68.156.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#US-48
trojan://slch2024@185.251.81.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#ES-49
trojan://slch2024@185.251.80.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#ES-51
trojan://slch2024@188.42.88.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#LU-57
trojan://slch2024@185.251.82.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#ES-58
trojan://slch2024@185.174.138.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#RU-59
trojan://slch2024@185.238.228.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#ES-85
trojan://slch2024@192.0.63.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#US-88
trojan://slch2024@185.59.218.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#RU-98
trojan://slch2024@185.148.107.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegramU0001F1E8U0001F1F3#LT-118
trojan://slch2024@192.200.160.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#US-119
trojan://slch2024@188.42.145.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#NL-121
trojan://slch2024@192.0.54.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#US-130
trojan://slch2024@212.183.88.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#AT-132
trojan://slch2024@199.34.230.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#US-147
trojan://slch2024@193.124.224.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram%F0%9F%87%A8%F0%9F%87%B3#GB-150
trojan://slch2024@185.18.250.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#ES-156
trojan://slch2024@185.148.104.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#LT-157
trojan://slch2024@216.24.57.195:2096?security=tls&sni=ocost-dy.wmlefl.cc&type=ws&host=ocost-dy.wmlefl.cc&path=%2FTelegram#US-161

`;

let urls = [];
let subConverter = "SUBAPI.cmliussss.net"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subConfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch(request, env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID;
		TG = env.TG || TG;
		subConverter = env.SUBAPI || subConverter;
		if (subConverter.includes("http://")) {
			subConverter = subConverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subConverter = subConverter.split("//")[1] || subConverter;
		}
		subConfig = env.SUBCONFIG || subConfig;
		FileName = env.SUBNAME || FileName;

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0);
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		guestToken = env.GUESTTOKEN || env.GUEST || guestToken;
		if (!guestToken) guestToken = await MD5MD5(mytoken);
		const 访客订阅 = guestToken;
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now()) / timestamp * total * 1099511627776) / 2);
		total = total * 1099511627776;
		let expire = Math.floor(timestamp / 1000);
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		if (!([mytoken, fakeToken, 访客订阅].includes(token) || url.pathname == ("/" + mytoken) || url.pathname.includes("/" + mytoken + "?"))) {
			if (TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico") await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			if (env.URL302) return Response.redirect(env.URL302, 302);
			else if (env.URL) return await proxyURL(env.URL, url);
			else return new Response(await nginx(), {
				status: 200,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			if (env.KV) {
				await 迁移地址列表(env, 'LINK.txt');
				if (userAgent.includes('mozilla') && !url.search) {
					await sendMessage(`#编辑订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
					return await KV(request, env, 'LINK.txt', 访客订阅);
				} else {
					MainData = await env.KV.get('LINK.txt') || MainData;
				}
			} else {
				MainData = env.LINK || MainData;
				if (env.LINKSUB) urls = await ADD(env.LINKSUB);
			}
			let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
			let 自建节点 = "";
			let 订阅链接 = "";
			for (let x of 重新汇总所有链接) {
				if (x.toLowerCase().startsWith('http')) {
					订阅链接 += x + '\n';
				} else {
					自建节点 += x + '\n';
				}
			}
			MainData = 自建节点;
			urls = await ADD(订阅链接);
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);

			let 订阅格式 = 'base64';
			if (!(userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase()))) {
				if (userAgent.includes('sing-box') || userAgent.includes('singbox') || url.searchParams.has('sb') || url.searchParams.has('singbox')) {
					订阅格式 = 'singbox';
				} else if (userAgent.includes('surge') || url.searchParams.has('surge')) {
					订阅格式 = 'surge';
				} else if (userAgent.includes('quantumult') || url.searchParams.has('quanx')) {
					订阅格式 = 'quanx';
				} else if (userAgent.includes('loon') || url.searchParams.has('loon')) {
					订阅格式 = 'loon';
				} else if (userAgent.includes('clash') || userAgent.includes('meta') || userAgent.includes('mihomo') || url.searchParams.has('clash')) {
					订阅格式 = 'clash';
				}
			}

			let subConverterUrl;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('b64') || url.searchParams.has('base64')) 订阅格式 = 'base64';
			else if (url.searchParams.has('clash')) 追加UA = 'clash';
			else if (url.searchParams.has('singbox')) 追加UA = 'singbox';
			else if (url.searchParams.has('surge')) 追加UA = 'surge';
			else if (url.searchParams.has('quanx')) 追加UA = 'Quantumult%20X';
			else if (url.searchParams.has('loon')) 追加UA = 'Loon';

			const 订阅链接数组 = [...new Set(urls)].filter(item => item?.trim?.()); // 去重
			if (订阅链接数组.length > 0) {
				const 请求订阅响应内容 = await getSUB(订阅链接数组, request, 追加UA, userAgentHeader);
				console.log(请求订阅响应内容);
				req_data += 请求订阅响应内容[0].join('\n');
				订阅转换URL += "|" + 请求订阅响应内容[1];
				if (订阅格式 == 'base64' && !userAgent.includes('subconverter') && 请求订阅响应内容[1].includes('://')) {
					subConverterUrl = `${subProtocol}://${subConverter}/sub?target=mixed&url=${encodeURIComponent(请求订阅响应内容[1])}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
					try {
						const subConverterResponse = await fetch(subConverterUrl);
						if (subConverterResponse.ok) {
							const subConverterContent = await subConverterResponse.text();
							req_data += '\n' + atob(subConverterContent);
						}
					} catch (error) {
						console.log('订阅转换请回base64失败，检查订阅转换后端是否正常运行');
					}
				}
			}

			if (env.WARP) 订阅转换URL += "|" + (await ADD(env.WARP)).join("|");
			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			//const text = String.fromCharCode.apply(null, encodedData);
			const utf8Decoder = new TextDecoder();
			const text = utf8Decoder.decode(encodedData);

			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);

			let base64Data;
			try {
				base64Data = btoa(result);
			} catch (e) {
				function encodeBase64(data) {
					const binary = new TextEncoder().encode(data);
					let base64 = '';
					const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

					for (let i = 0; i < binary.length; i += 3) {
						const byte1 = binary[i];
						const byte2 = binary[i + 1] || 0;
						const byte3 = binary[i + 2] || 0;

						base64 += chars[byte1 >> 2];
						base64 += chars[((byte1 & 3) << 4) | (byte2 >> 4)];
						base64 += chars[((byte2 & 15) << 2) | (byte3 >> 6)];
						base64 += chars[byte3 & 63];
					}

					const padding = 3 - (binary.length % 3 || 3);
					return base64.slice(0, base64.length - padding) + '=='.slice(0, padding);
				}

				base64Data = encodeBase64(result)
			}

			// 构建响应头对象
			const responseHeaders = {
				"content-type": "text/plain; charset=utf-8",
				"Profile-Update-Interval": `${SUBUpdateTime}`,
				"Profile-web-page-url": request.url.includes('?') ? request.url.split('?')[0] : request.url,
				//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
			};

			if (订阅格式 == 'base64' || token == fakeToken) {
				return new Response(base64Data, { headers: responseHeaders });
			} else if (订阅格式 == 'clash') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=surge&ver=4&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'quanx') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=quanx&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&udp=true`;
			} else if (订阅格式 == 'loon') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=loon&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false`;
			}
			//console.log(订阅转换URL);
			try {
				const subConverterResponse = await fetch(subConverterUrl);//订阅转换
				if (!subConverterResponse.ok) return new Response(base64Data, { headers: responseHeaders });
				let subConverterContent = await subConverterResponse.text();
				if (订阅格式 == 'clash') subConverterContent = await clashFix(subConverterContent);
				// 只有非浏览器订阅才会返回SUBNAME
				if (!userAgent.includes('mozilla')) responseHeaders["Content-Disposition"] = `attachment; filename*=utf-8''${encodeURIComponent(FileName)}`;
				return new Response(subConverterContent, { headers: responseHeaders });
			} catch (error) {
				return new Response(base64Data, { headers: responseHeaders });
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, '\n').replace(/\n+/g, '\n');	// 替换为换行
	//console.log(addtext);
	if (addtext.charAt(0) == '\n') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length - 1) == '\n') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split('\n');
	//console.log(add);
	return add;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text;
}

async function sendMessage(type, ip, add_data = "") {
	if (BotToken !== '' && ChatID !== '') {
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}

		let url = "https://api.telegram.org/bot" + BotToken + "/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();

	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	return secondHex.toLowerCase();
}

function clashFix(content) {
	if (content.includes('wireguard') && !content.includes('remote-dns-resolve')) {
		let lines;
		if (content.includes('\r\n')) {
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}

		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}

async function proxyURL(proxyURL, url) {
	const URLs = await ADD(proxyURL);
	const fullURL = URLs[Math.floor(Math.random() * URLs.length)];

	// 解析目标 URL
	let parsedURL = new URL(fullURL);
	console.log(parsedURL);
	// 提取并可能修改 URL 组件
	let URLProtocol = parsedURL.protocol.slice(0, -1) || 'https';
	let URLHostname = parsedURL.hostname;
	let URLPathname = parsedURL.pathname;
	let URLSearch = parsedURL.search;

	// 处理 pathname
	if (URLPathname.charAt(URLPathname.length - 1) == '/') {
		URLPathname = URLPathname.slice(0, -1);
	}
	URLPathname += url.pathname;

	// 构建新的 URL
	let newURL = `${URLProtocol}://${URLHostname}${URLPathname}${URLSearch}`;

	// 反向代理请求
	let response = await fetch(newURL);

	// 创建新的响应
	let newResponse = new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers
	});

	// 添加自定义头部，包含 URL 信息
	//newResponse.headers.set('X-Proxied-By', 'Cloudflare Worker');
	//newResponse.headers.set('X-Original-URL', fullURL);
	newResponse.headers.set('X-New-URL', newURL);

	return newResponse;
}

async function getSUB(api, request, 追加UA, userAgentHeader) {
	if (!api || api.length === 0) {
		return [];
	} else api = [...new Set(api)]; // 去重
	let newapi = "";
	let 订阅转换URLs = "";
	let 异常订阅 = "";
	const controller = new AbortController(); // 创建一个AbortController实例，用于取消请求
	const timeout = setTimeout(() => {
		controller.abort(); // 2秒后取消所有请求
	}, 2000);

	try {
		// 使用Promise.allSettled等待所有API请求完成，无论成功或失败
		const responses = await Promise.allSettled(api.map(apiUrl => getUrl(request, apiUrl, 追加UA, userAgentHeader).then(response => response.ok ? response.text() : Promise.reject(response))));

		// 遍历所有响应
		const modifiedResponses = responses.map((response, index) => {
			// 检查是否请求成功
			if (response.status === 'rejected') {
				const reason = response.reason;
				if (reason && reason.name === 'AbortError') {
					return {
						status: '超时',
						value: null,
						apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
					};
				}
				console.error(`请求失败: ${api[index]}, 错误信息: ${reason.status} ${reason.statusText}`);
				return {
					status: '请求失败',
					value: null,
					apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
				};
			}
			return {
				status: response.status,
				value: response.value,
				apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
			};
		});

		console.log(modifiedResponses); // 输出修改后的响应数组

		for (const response of modifiedResponses) {
			// 检查响应状态是否为'fulfilled'
			if (response.status === 'fulfilled') {
				const content = await response.value || 'null'; // 获取响应的内容
				if (content.includes('proxies:')) {
					//console.log('Clash订阅: ' + response.apiUrl);
					订阅转换URLs += "|" + response.apiUrl; // Clash 配置
				} else if (content.includes('outbounds"') && content.includes('inbounds"')) {
					//console.log('Singbox订阅: ' + response.apiUrl);
					订阅转换URLs += "|" + response.apiUrl; // Singbox 配置
				} else if (content.includes('://')) {
					//console.log('明文订阅: ' + response.apiUrl);
					newapi += content + '\n'; // 追加内容
				} else if (isValidBase64(content)) {
					//console.log('Base64订阅: ' + response.apiUrl);
					newapi += base64Decode(content) + '\n'; // 解码并追加内容
				} else {
					const 异常订阅LINK = `trojan://CMLiussss@127.0.0.1:8888?security=tls&allowInsecure=1&type=tcp&headerType=none#%E5%BC%82%E5%B8%B8%E8%AE%A2%E9%98%85%20${response.apiUrl.split('://')[1].split('/')[0]}`;
					console.log('异常订阅: ' + 异常订阅LINK);
					异常订阅 += `${异常订阅LINK}\n`;
				}
			}
		}
	} catch (error) {
		console.error(error); // 捕获并输出错误信息
	} finally {
		clearTimeout(timeout); // 清除定时器
	}

	const 订阅内容 = await ADD(newapi + 异常订阅); // 将处理后的内容转换为数组
	// 返回处理后的结果
	return [订阅内容, 订阅转换URLs];
}

async function getUrl(request, targetUrl, 追加UA, userAgentHeader) {
	// 设置自定义 User-Agent
	const newHeaders = new Headers(request.headers);
	newHeaders.set("User-Agent", `${atob('djJyYXlOLzYuNDU=')} cmliu/CF-Workers-SUB ${追加UA}(${userAgentHeader})`);

	// 构建新的请求对象
	const modifiedRequest = new Request(targetUrl, {
		method: request.method,
		headers: newHeaders,
		body: request.method === "GET" ? null : request.body,
		redirect: "follow",
		cf: {
			// 忽略SSL证书验证
			insecureSkipVerify: true,
			// 允许自签名证书
			allowUntrusted: true,
			// 禁用证书验证
			validateCertificate: false
		}
	});

	// 输出请求的详细信息
	console.log(`请求URL: ${targetUrl}`);
	console.log(`请求头: ${JSON.stringify([...newHeaders])}`);
	console.log(`请求方法: ${request.method}`);
	console.log(`请求体: ${request.method === "GET" ? null : request.body}`);

	// 发送请求并返回响应
	return fetch(modifiedRequest);
}

function isValidBase64(str) {
	// 先移除所有空白字符(空格、换行、回车等)
	const cleanStr = str.replace(/\s/g, '');
	const base64Regex = /^[A-Za-z0-9+/=]+$/;
	return base64Regex.test(cleanStr);
}

async function 迁移地址列表(env, txt = 'ADD.txt') {
	const 旧数据 = await env.KV.get(`/${txt}`);
	const 新数据 = await env.KV.get(txt);

	if (旧数据 && !新数据) {
		// 写入新位置
		await env.KV.put(txt, 旧数据);
		// 删除旧数据
		await env.KV.delete(`/${txt}`);
		return true;
	}
	return false;
}

async function KV(request, env, txt = 'ADD.txt', guest) {
	const url = new URL(request.url);
	try {
		// POST请求处理
		if (request.method === "POST") {
			if (!env.KV) return new Response("未绑定KV空间", { status: 400 });
			try {
				const content = await request.text();
				await env.KV.put(txt, content);
				return new Response("保存成功");
			} catch (error) {
				console.error('保存KV时发生错误:', error);
				return new Response("保存失败: " + error.message, { status: 500 });
			}
		}

		// GET请求部分
		let content = '';
		let hasKV = !!env.KV;

		if (hasKV) {
			try {
				content = await env.KV.get(txt) || '';
			} catch (error) {
				console.error('读取KV时发生错误:', error);
				content = '读取数据时发生错误: ' + error.message;
			}
		}

		const html = `
			<!DOCTYPE html>
			<html>
				<head>
					<title>${FileName} 订阅编辑</title>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<style>
						body {
							margin: 0;
							padding: 15px; /* 调整padding */
							box-sizing: border-box;
							font-size: 13px; /* 设置全局字体大小 */
						}
						.editor-container {
							width: 100%;
							max-width: 100%;
							margin: 0 auto;
						}
						.editor {
							width: 100%;
							height: 300px; /* 调整高度 */
							margin: 15px 0; /* 调整margin */
							padding: 10px; /* 调整padding */
							box-sizing: border-box;
							border: 1px solid #ccc;
							border-radius: 4px;
							font-size: 13px;
							line-height: 1.5;
							overflow-y: auto;
							resize: none;
						}
						.save-container {
							margin-top: 8px; /* 调整margin */
							display: flex;
							align-items: center;
							gap: 10px; /* 调整gap */
						}
						.save-btn, .back-btn {
							padding: 6px 15px; /* 调整padding */
							color: white;
							border: none;
							border-radius: 4px;
							cursor: pointer;
						}
						.save-btn {
							background: #4CAF50;
						}
						.save-btn:hover {
							background: #45a049;
						}
						.back-btn {
							background: #666;
						}
						.back-btn:hover {
							background: #555;
						}
						.save-status {
							color: #666;
						}
					</style>
					<script src="https://cdn.jsdelivr.net/npm/@keeex/qrcodejs-kx@1.0.2/qrcode.min.js"></script>
				</head>
				<body>
					################################################################<br>
					Subscribe / sub 订阅地址, 点击链接自动 <strong>复制订阅链接</strong> 并 <strong>生成订阅二维码</strong> <br>
					---------------------------------------------------------------<br>
					自适应订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?sub','qrcode_0')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}</a><br>
					<div id="qrcode_0" style="margin: 10px 10px 10px 10px;"></div>
					Base64订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?b64','qrcode_1')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?b64</a><br>
					<div id="qrcode_1" style="margin: 10px 10px 10px 10px;"></div>
					clash订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?clash','qrcode_2')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?clash</a><br>
					<div id="qrcode_2" style="margin: 10px 10px 10px 10px;"></div>
					singbox订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?sb','qrcode_3')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?sb</a><br>
					<div id="qrcode_3" style="margin: 10px 10px 10px 10px;"></div>
					surge订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?surge','qrcode_4')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?surge</a><br>
					<div id="qrcode_4" style="margin: 10px 10px 10px 10px;"></div>
					loon订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?loon','qrcode_5')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?loon</a><br>
					<div id="qrcode_5" style="margin: 10px 10px 10px 10px;"></div>
					&nbsp;&nbsp;<strong><a href="javascript:void(0);" id="noticeToggle" onclick="toggleNotice()">查看访客订阅∨</a></strong><br>
					<div id="noticeContent" class="notice-content" style="display: none;">
						---------------------------------------------------------------<br>
						访客订阅只能使用订阅功能，无法查看配置页！<br>
						GUEST（访客订阅TOKEN）: <strong>${guest}</strong><br>
						---------------------------------------------------------------<br>
						自适应订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}','guest_0')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}</a><br>
						<div id="guest_0" style="margin: 10px 10px 10px 10px;"></div>
						Base64订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&b64','guest_1')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&b64</a><br>
						<div id="guest_1" style="margin: 10px 10px 10px 10px;"></div>
						clash订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&clash','guest_2')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&clash</a><br>
						<div id="guest_2" style="margin: 10px 10px 10px 10px;"></div>
						singbox订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&sb','guest_3')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&sb</a><br>
						<div id="guest_3" style="margin: 10px 10px 10px 10px;"></div>
						surge订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&surge','guest_4')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&surge</a><br>
						<div id="guest_4" style="margin: 10px 10px 10px 10px;"></div>
						loon订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&loon','guest_5')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&loon</a><br>
						<div id="guest_5" style="margin: 10px 10px 10px 10px;"></div>
					</div>
					---------------------------------------------------------------<br>
					################################################################<br>
					订阅转换配置<br>
					---------------------------------------------------------------<br>
					SUBAPI（订阅转换后端）: <strong>${subProtocol}://${subConverter}</strong><br>
					SUBCONFIG（订阅转换配置文件）: <strong>${subConfig}</strong><br>
					---------------------------------------------------------------<br>
					################################################################<br>
					${FileName} 汇聚订阅编辑: 
					<div class="editor-container">
						${hasKV ? `
						<textarea class="editor" 
							placeholder="${decodeURIComponent(atob('TElOSyVFNyVBNCVCQSVFNCVCRSU4QiVFRiVCQyU4OCVFNCVCOCU4MCVFOCVBMSU4QyVFNCVCOCU4MCVFNCVCOCVBQSVFOCU4QSU4MiVFNyU4MiVCOSVFOSU5MyVCRSVFNiU4RSVBNSVFNSU4RCVCMyVFNSU4RiVBRiVFRiVCQyU4OSVFRiVCQyU5QQp2bGVzcyUzQSUyRiUyRjI0NmFhNzk1LTA2MzctNGY0Yy04ZjY0LTJjOGZiMjRjMWJhZCU0MDEyNy4wLjAuMSUzQTEyMzQlM0ZlbmNyeXB0aW9uJTNEbm9uZSUyNnNlY3VyaXR5JTNEdGxzJTI2c25pJTNEVEcuQ01MaXVzc3NzLmxvc2V5b3VyaXAuY29tJTI2YWxsb3dJbnNlY3VyZSUzRDElMjZ0eXBlJTNEd3MlMjZob3N0JTNEVEcuQ01MaXVzc3NzLmxvc2V5b3VyaXAuY29tJTI2cGF0aCUzRCUyNTJGJTI1M0ZlZCUyNTNEMjU2MCUyM0NGbmF0CnRyb2phbiUzQSUyRiUyRmFhNmRkZDJmLWQxY2YtNGE1Mi1iYTFiLTI2NDBjNDFhNzg1NiU0MDIxOC4xOTAuMjMwLjIwNyUzQTQxMjg4JTNGc2VjdXJpdHklM0R0bHMlMjZzbmklM0RoazEyLmJpbGliaWxpLmNvbSUyNmFsbG93SW5zZWN1cmUlM0QxJTI2dHlwZSUzRHRjcCUyNmhlYWRlclR5cGUlM0Rub25lJTIzSEsKc3MlM0ElMkYlMkZZMmhoWTJoaE1qQXRhV1YwWmkxd2IyeDVNVE13TlRveVJYUlFjVzQyU0ZscVZVNWpTRzlvVEdaVmNFWlJkMjVtYWtORFVUVnRhREZ0U21SRlRVTkNkV04xVjFvNVVERjFaR3RTUzBodVZuaDFielUxYXpGTFdIb3lSbTgyYW5KbmRERTRWelkyYjNCMGVURmxOR0p0TVdwNlprTm1RbUklMjUzRCU0MDg0LjE5LjMxLjYzJTNBNTA4NDElMjNERQoKCiVFOCVBRSVBMiVFOSU5OCU4NSVFOSU5MyVCRSVFNiU4RSVBNSVFNyVBNCVCQSVFNCVCRSU4QiVFRiVCQyU4OCVFNCVCOCU4MCVFOCVBMSU4QyVFNCVCOCU4MCVFNiU5RCVBMSVFOCVBRSVBMiVFOSU5OCU4NSVFOSU5MyVCRSVFNiU4RSVBNSVFNSU4RCVCMyVFNSU4RiVBRiVFRiVCQyU4OSVFRiVCQyU5QQpodHRwcyUzQSUyRiUyRnN1Yi54Zi5mcmVlLmhyJTJGYXV0bw=='))}"
							id="content">${content}</textarea>
						<div class="save-container">
							<button class="save-btn" onclick="saveContent(this)">保存</button>
							<span class="save-status" id="saveStatus"></span>
						</div>
						` : '<p>请绑定 <strong>变量名称</strong> 为 <strong>KV</strong> 的KV命名空间</p>'}
					</div>
					<br>
					################################################################<br>
					${decodeURIComponent(atob('dGVsZWdyYW0lMjAlRTQlQkElQTQlRTYlQjUlODElRTclQkUlQTQlMjAlRTYlOEElODAlRTYlOUMlQUYlRTUlQTQlQTclRTQlQkQlQUMlN0UlRTUlOUMlQTglRTclQkElQkYlRTUlOEYlOTElRTclODklOEMhJTNDYnIlM0UKJTNDYSUyMGhyZWYlM0QlMjdodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlMjclM0VodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlM0MlMkZhJTNFJTNDYnIlM0UKLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJTNDYnIlM0UKZ2l0aHViJTIwJUU5JUExJUI5JUU3JTlCJUFFJUU1JTlDJUIwJUU1JTlEJTgwJTIwU3RhciFTdGFyIVN0YXIhISElM0NiciUzRQolM0NhJTIwaHJlZiUzRCUyN2h0dHBzJTNBJTJGJTJGZ2l0aHViLmNvbSUyRmNtbGl1JTJGQ0YtV29ya2Vycy1TVUIlMjclM0VodHRwcyUzQSUyRiUyRmdpdGh1Yi5jb20lMkZjbWxpdSUyRkNGLVdvcmtlcnMtU1VCJTNDJTJGYSUzRSUzQ2JyJTNFCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSUzQ2JyJTNFCiUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMw=='))}
					<br><br>UA: <strong>${request.headers.get('User-Agent')}</strong>
					<script>
					function copyToClipboard(text, qrcode) {
						navigator.clipboard.writeText(text).then(() => {
							alert('已复制到剪贴板');
						}).catch(err => {
							console.error('复制失败:', err);
						});
						const qrcodeDiv = document.getElementById(qrcode);
						qrcodeDiv.innerHTML = '';
						new QRCode(qrcodeDiv, {
							text: text,
							width: 220, // 调整宽度
							height: 220, // 调整高度
							colorDark: "#000000", // 二维码颜色
							colorLight: "#ffffff", // 背景颜色
							correctLevel: QRCode.CorrectLevel.Q, // 设置纠错级别
							scale: 1 // 调整像素颗粒度
						});
					}
						
					if (document.querySelector('.editor')) {
						let timer;
						const textarea = document.getElementById('content');
						const originalContent = textarea.value;
		
						function goBack() {
							const currentUrl = window.location.href;
							const parentUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
							window.location.href = parentUrl;
						}
		
						function replaceFullwidthColon() {
							const text = textarea.value;
							textarea.value = text.replace(/：/g, ':');
						}
						
						function saveContent(button) {
							try {
								const updateButtonText = (step) => {
									button.textContent = \`保存中: \${step}\`;
								};
								// 检测是否为iOS设备
								const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
								
								// 仅在非iOS设备上执行replaceFullwidthColon
								if (!isIOS) {
									replaceFullwidthColon();
								}
								updateButtonText('开始保存');
								button.disabled = true;

								// 获取textarea内容和原始内容
								const textarea = document.getElementById('content');
								if (!textarea) {
									throw new Error('找不到文本编辑区域');
								}

								updateButtonText('获取内容');
								let newContent;
								let originalContent;
								try {
									newContent = textarea.value || '';
									originalContent = textarea.defaultValue || '';
								} catch (e) {
									console.error('获取内容错误:', e);
									throw new Error('无法获取编辑内容');
								}

								updateButtonText('准备状态更新函数');
								const updateStatus = (message, isError = false) => {
									const statusElem = document.getElementById('saveStatus');
									if (statusElem) {
										statusElem.textContent = message;
										statusElem.style.color = isError ? 'red' : '#666';
									}
								};

								updateButtonText('准备按钮重置函数');
								const resetButton = () => {
									button.textContent = '保存';
									button.disabled = false;
								};

								if (newContent !== originalContent) {
									updateButtonText('发送保存请求');
									fetch(window.location.href, {
										method: 'POST',
										body: newContent,
										headers: {
											'Content-Type': 'text/plain;charset=UTF-8'
										},
										cache: 'no-cache'
									})
									.then(response => {
										updateButtonText('检查响应状态');
										if (!response.ok) {
											throw new Error(\`HTTP error! status: \${response.status}\`);
										}
										updateButtonText('更新保存状态');
										const now = new Date().toLocaleString();
										document.title = \`编辑已保存 \${now}\`;
										updateStatus(\`已保存 \${now}\`);
									})
									.catch(error => {
										updateButtonText('处理错误');
										console.error('Save error:', error);
										updateStatus(\`保存失败: \${error.message}\`, true);
									})
									.finally(() => {
										resetButton();
									});
								} else {
									updateButtonText('检查内容变化');
									updateStatus('内容未变化');
									resetButton();
								}
							} catch (error) {
								console.error('保存过程出错:', error);
								button.textContent = '保存';
								button.disabled = false;
								const statusElem = document.getElementById('saveStatus');
								if (statusElem) {
									statusElem.textContent = \`错误: \${error.message}\`;
									statusElem.style.color = 'red';
								}
							}
						}
		
						textarea.addEventListener('blur', saveContent);
						textarea.addEventListener('input', () => {
							clearTimeout(timer);
							timer = setTimeout(saveContent, 5000);
						});
					}

					function toggleNotice() {
						const noticeContent = document.getElementById('noticeContent');
						const noticeToggle = document.getElementById('noticeToggle');
						if (noticeContent.style.display === 'none' || noticeContent.style.display === '') {
							noticeContent.style.display = 'block';
							noticeToggle.textContent = '隐藏访客订阅∧';
						} else {
							noticeContent.style.display = 'none';
							noticeToggle.textContent = '查看访客订阅∨';
						}
					}
			
					// 初始化 noticeContent 的 display 属性
					document.addEventListener('DOMContentLoaded', () => {
						document.getElementById('noticeContent').style.display = 'none';
					});
					</script>
				</body>
			</html>
		`;

		return new Response(html, {
			headers: { "Content-Type": "text/html;charset=utf-8" }
		});
	} catch (error) {
		console.error('处理请求时发生错误:', error);
		return new Response("服务器错误: " + error.message, {
			status: 500,
			headers: { "Content-Type": "text/plain;charset=utf-8" }
		});
	}
}



