----
background: #1E1F29
color: #61AFEF
category: Containers
date: 2021-12-17 14:00:00
description: Setup Podman as replacement of Docker on Windows 10 using WSL2
title: Podman using WSL2
---

## Install Podman


### Ubuntu

Recent releases podman can be installed using `apt`.
```bash
# Ubuntu 20.10 and newer
sudo apt-get -y update
sudo apt-get -y install podman
```

older releases of Ubuntu the Kubic project is an easy way

```bash
. /etc/os-release
echo "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/ /" | sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list
curl -L "https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/Release.key" | sudo apt-key add -
sudo apt-get update
sudo apt-get -y upgrade
sudo apt-get -y install podman
```

The configuration file containers.conf by default is located at:
```bash
/usr/share/containers/containers.confi
/etc/containers/containers.confi
$HOME/.config/containers/containers.conf)
```

Install podman-compose tool:
```bash
pip3 install podman-compose
```


## References:

https://podman.io/

https://docs.podman.io/

https://www.redhat.com/sysadmin/podman-windows-wsl2
