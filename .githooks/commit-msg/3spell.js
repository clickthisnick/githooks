#!/usr/bin/env node

const

    // Libraries
    util = require('./../util.js'),
    _ = require('lodash');

return util.bash('which aspell')
    .then((aspell) => {
        console.log(aspell);
        if (!_.isNil(aspell.error)) {
            console.log('Cannot check commit spelling unless you install aspell');
            console.log('To install use command: brew install aspell');
        }
    })
// // ASPELL=$(which aspell)
// if [ $? -ne 0 ]; then
//     echo "Aspell not installed - unable to check spelling" >&2
//     exit
// else
//     # Words found that are thought to be mistakes
//     misspelled_words=$($ASPELL --mode=email --add-email-quote='#' list < "$1" | sort -u)
//     echo ${misspelled_words}
//
//     # Words that we don't want to alert user are mistakes
//     ignored_words=()
//
//     tps=" ${misspelled_words[*]} "                     # stringify the array
//     echo ${tps}
//     for item in ${ignored_words[@]}; do
//       tps=${tps/ ${item} / }                # replace item
//     done
//     misspelled_words=( $tps )                          # replace the array
// fi
//
// if [ -n "$misspelled_words" ]; then
//     printf "\e[1;33m  Possible spelling errors found in commit message:\n\e[0m\e[0;31m%s\n\e[0m\e[1;33m  Use git commit --amend to change the message.\e[0m\n\n" "$misspelled_words" >&2
// fi
