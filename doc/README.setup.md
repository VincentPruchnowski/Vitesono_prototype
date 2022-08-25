# vitesono admin

## new user

```
# on server
sudo adduser <USER>
sudo usermod -a -G vitesono <USER>
sudo vim /etc/ssh/sshd_config

```

## git repository

```
# git user
sudo adduser vsn
sudo groupadd vitesono
```

```
# as vsn
mkdir /home/vsn/git_d/vitesono.git
git init --bare --shared
```

```
sudo chown -R vsn:vitesono /home/vsn/git_d/vitesono.git
```
