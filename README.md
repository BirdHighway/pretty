# CLI JSON Formatter

An extremely simple tool for pretty printing JSON in a shell


## Usage

``` sh
# after installation, you can pipe JSON:
echo '{"one": {"two": {"three": "nesting"} } }'  | pretty-json
```

Output:
```
{
  "one": {
    "two": {
      "three": "nesting"
    }
  }
}

```

## Installation: Mac/Linux

``` sh
# Note: requires node is installed
# clone this repo or copy the file "pretty-json" to your machine
git clone https://github.com/BirdHighway/pretty.git

# make the file executable
chmod u+x pretty-json

# copy the file "pretty-json" to a directory in your $PATH
# some directories will require this copy command be run with sudo
cp pretty-json ~/bin

# optional: rename the command to something shorter
mv ~/bin/pretty-json ~/bin/pj

# not sure which directories are in your $PATH?
chmod u+x show-my-path.sh
./show-my-path.sh

```