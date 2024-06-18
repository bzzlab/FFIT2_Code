#!/bin/bash
#
LIB='../../bin/prep-lib.sh'
if [ ! -f $LIB ]; then      #??
  echo $LIB does not exist! #??
  exit 2                    #??
fi                          #??
source $LIB
#----------------------------------------
if test $# -lt 1; then
  printf "%s\n" \
    "Error: Provide at least 1 argument:" \
    "Prep number n" \
    "Exit script."
  exit 1
fi

CLT="client"
SRV="."
DEST="../02_Exercises"

function step0() {
  createTargetDir "${DEST}"
  createTargetDir "${DEST}/${CLT}"
  createTargetDir "${DEST}/${CLT}/scripts"
  cp -r "${SRV}/${CLT}/styles" "${DEST}/${SRV}/${CLT}"
  cp "${SRV}/package.json" "${DEST}/${SRV}"
  #cp "${SRV}/finalsolution.png" "${DEST}/${SRV}"
  cp "${SRV}/Tasks.md" "${DEST}/${SRV}"
}

function step1() {
  for file in index.html; do
    removeSolution ${CLT}/${file} "${DEST}/${CLT}/${file}"
  done
  for file in updateUI.js; do
    removeSolution ${CLT}/scripts/${file} "${DEST}/${CLT}/scripts/${file}"
  done
}
function step2() {
  for file in index.js; do
    removeSolution ${SRV}/${file} "${DEST}/${SRV}/${file}"
  done
}

case $1 in
0) step0 ;;
1) step1 ;;
2) step2 ;;
all)
  step0
  step1
  step2
  ;;
*)
  echo "Incorrect choice entered!"
  ;;
esac
