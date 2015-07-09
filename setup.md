# nvm
```sh
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash
$ . ~/.nvm/nvm.sh
```

# nodejs
```sh
$ nvm install 0.10
$ nvm use 0.10
```

# bashrc
```sh
$ echo -e "export NVM_DIR=\"~/.nvm\"\n[ -s \"$NVM_DIR/nvm.sh\" ] && . \"$NVM_DIR/nvm.sh\"\nnvm use 0.10" >> ~/.bash_profile
```

# brew (OS X only)
```sh
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

# bower, gulp, grant
```sh
$ npm install -g bower
```

# express, mongodb
```sh
$ npm install --save express
$ npm install --save body-parser
$ npm install --save mongoose
```


